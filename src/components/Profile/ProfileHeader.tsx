"use client";
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react"; // Optional: Adds a nice camera icon on hover

interface ProfileHeaderProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  profileImage: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resume: File | null;
  onResumeUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Helper to derive initials (Defined outside component to avoid re-creation)
const getInitials = (sourceName: string) => {
  const source = (sourceName || "").trim();
  if (!source) return "KB"; // Default to "KB" (KaziBuddy) if no name
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  if (parts[0].length >= 2) return parts[0].slice(0, 2).toUpperCase();
  return parts[0][0].toUpperCase();
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  setName,
  email,
  phoneNumber,
  setPhoneNumber,
  profileImage,
  onImageUpload,
  resume,
  onResumeUpload,
}) => {
  const [imgError, setImgError] = useState(false);

  // Reset error state if the profile image URL changes
  useEffect(() => {
    setImgError(false);
  }, [profileImage]);

  
  const shouldShowImage = profileImage && !imgError;

  return (
    <div className="mb-8">
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="profile-image" className="cursor-pointer relative group">
          {shouldShowImage ? (
            <img
              src={profileImage!}
              alt="Profile"
              onError={() => setImgError(true)} // Fallback to initials if image fails
              className="w-28 h-28 object-cover rounded-full border-4 border-purple-900 group-hover:opacity-90 transition-opacity shadow-md"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900 rounded-full text-white text-3xl font-bold border-4 border-white shadow-md tracking-wider">
              {getInitials(name)}
            </div>
          )}
          
          {/* Overlay for "Change" or Camera Icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white">
            <Camera className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Change</span>
          </div>
        </label>
        
        <input
          id="profile-image"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>

      <div className="grid gap-4 max-w-lg mx-auto w-full">
        <div>
          <label className="text-sm font-medium text-purple-900">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 outline-none focus:ring-2 focus:ring-purple-600 transition-shadow"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-purple-900">Email</label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 outline-none bg-gray-100 cursor-not-allowed text-gray-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-purple-900">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1 outline-none focus:ring-2 focus:ring-purple-600 transition-shadow"
            placeholder="+254..."
          />
        </div>
        <div>
          <label className="text-sm font-medium text-purple-900">
            Resume <span className="text-xs text-gray-500 ml-2">(Local upload only)</span>
          </label>
          <div className="mt-1">
            <label className="flex cursor-pointer items-center justify-between w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <span className="truncate text-sm">
                {resume ? resume.name : "Select .pdf or .docx file..."}
              </span>
              <span className="ml-2 text-purple-600 text-sm font-medium">Browse</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={onResumeUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;