"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { adminCreateUser, clearAuthState } from "@/Redux/Features/authSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/component/Authentication/ProtectedRoute";
import { UserPlus, Users, Briefcase, Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface IFormData {
  profile_photo?: File;
  username: string;
  phone_number: string;
  email: string;
  full_name: string;
  password: string;
  confirm_password: string;
  user_type: "worker" | "employer";
  company_name?: string;
  skip_verification: boolean;
}

const AddUserPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<IFormData>({
    profile_photo: undefined,
    username: "",
    phone_number: "",
    email: "",
    full_name: "",
    password: "",
    confirm_password: "",
    user_type: "worker",
    company_name: "",
    skip_verification: true,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        setFormData({ ...formData, profile_photo: files[0] });
        setPreviewUrl(URL.createObjectURL(files[0]));
      }
    } else if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: "" });
    }
  };

  const validatePassword = (password: string) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return pattern.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Validation
    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must be at least 6 characters and include lowercase, uppercase, number, and special character."
      );
      return;
    }

    // Email is optional for manual registration
    if (!formData.email) {
      formData.email = `${formData.username}@noemail.local`;
    }

    try {
      const resultAction = await dispatch(
        adminCreateUser({
          ...formData,
        })
      );

      if (adminCreateUser.fulfilled.match(resultAction)) {
        toast.success(`User ${formData.full_name} created successfully!`);
        
        // Reset form
        setFormData({
          profile_photo: undefined,
          username: "",
          phone_number: "",
          email: "",
          full_name: "",
          password: "",
          confirm_password: "",
          user_type: "worker",
          company_name: "",
          skip_verification: true,
        });
        setPreviewUrl(null);
        
        // Optionally redirect to users list
        setTimeout(() => {
          router.push(
            formData.user_type === "worker"
              ? "/admin/workers/all"
              : "/admin/employers/all"
          );
        }, 1500);
      } else if (adminCreateUser.rejected.match(resultAction)) {
        const errorPayload = resultAction.payload;

        if (
          errorPayload &&
          typeof errorPayload === "string" &&
          errorPayload.includes("fieldErrors")
        ) {
          try {
            const parsedError = JSON.parse(errorPayload);
            if (parsedError?.fieldErrors) {
              const errors: Record<string, string> = {};
              Object.entries(parsedError.fieldErrors).forEach(
                ([field, messages]: [string, any]) => {
                  if (Array.isArray(messages) && messages.length > 0) {
                    errors[field] = messages[0];
                  } else if (typeof messages === "string") {
                    errors[field] = messages;
                  }
                }
              );

              if (Object.keys(errors).length > 0) {
                setFieldErrors(errors);
                toast.error(
                  `Please fix ${Object.keys(errors).length} error${Object.keys(errors).length > 1 ? "s" : ""} in the form`
                );
                return;
              }
            }
          } catch (e) {
            console.error("Error parsing field errors:", e);
          }
        }

        toast.error(
          typeof errorPayload === "string"
            ? errorPayload
            : "Failed to create user"
        );
      }
    } catch (error: any) {
      console.error("User creation error:", error);
      toast.error(error?.message || "An unexpected error occurred");
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <UserPlus className="h-8 w-8 text-maroon" />
              Add New User
            </h1>
            <p className="text-gray-600 mt-2">
              Manually register users who cannot sign up themselves (e.g., those
              without phones or email access)
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  User Type *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, user_type: "worker" })
                    }
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.user_type === "worker"
                        ? "border-maroon bg-maroon/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Users className="h-6 w-6 mx-auto mb-2 text-maroon" />
                    <div className="font-semibold text-gray-900">Worker</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Job seeker/employee
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, user_type: "employer" })
                    }
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.user_type === "employer"
                        ? "border-maroon bg-maroon/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Briefcase className="h-6 w-6 mx-auto mb-2 text-maroon" />
                    <div className="font-semibold text-gray-900">Employer</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Company/recruiter
                    </div>
                  </button>
                </div>
              </div>

              {/* Profile Photo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Photo (Optional)
                </label>
                <div className="flex items-center gap-4">
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
                    />
                  )}
                  <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors">
                    <Upload className="h-4 w-4" />
                    <span className="text-sm font-medium">Upload Photo</span>
                    <input
                      type="file"
                      name="profile_photo"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                      fieldErrors.full_name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {fieldErrors.full_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.full_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Username *
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                      fieldErrors.username ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="johndoe"
                  />
                  {fieldErrors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.username}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                      fieldErrors.phone_number
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="+254712345678"
                  />
                  {fieldErrors.phone_number && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.phone_number}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                      fieldErrors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Leave blank if user has no email
                  </p>
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {formData.user_type === "employer" && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                        fieldErrors.company_name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="ABC Company Ltd"
                    />
                    {fieldErrors.company_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {fieldErrors.company_name}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent ${
                      fieldErrors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="••••••••"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Min. 6 chars with uppercase, lowercase, number & special char
                  </p>
                  {fieldErrors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Skip Verification Checkbox */}
              <div className="flex items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <input
                  type="checkbox"
                  name="skip_verification"
                  id="skip_verification"
                  checked={formData.skip_verification}
                  onChange={handleChange}
                  className="h-4 w-4 text-maroon focus:ring-maroon"
                />
                <label
                  htmlFor="skip_verification"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  <span className="font-semibold">Skip email verification</span>{" "}
                  - User can login immediately without verifying email
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-maroon hover:bg-redish disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
                >
                  {loading ? "Creating User..." : "Create User"}
                </button>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Note:</span> This feature is
              designed for users who cannot register themselves due to lack of
              phone or email access. The admin creates their account and can
              provide them with login credentials.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddUserPage;
