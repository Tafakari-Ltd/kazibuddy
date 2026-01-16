"use client";
import React from "react";
import { CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";

interface PendingUser {
  id?: string;
  user_id?: string;
  uuid?: string;
  username: string;
  email: string;
  full_name: string;
  phone_number: string;
  user_type: string;
  profile_photo_url?: string;
  created_at: string;
  email_verified?: boolean;
  is_verified?: boolean;
}

interface PendingUsersTableProps {
  users: PendingUser[];
  onApprove: (user: PendingUser) => void;
  loading: boolean;
  approvingId: string | null;
}

const getPendingUserId = (user: PendingUser): string | undefined => {
  return user.id || user.user_id || user.uuid;
};

// Helper to detect likely Google users based on photo URL pattern
const isGoogleUser = (photoUrl?: string) => {
  return photoUrl?.includes("googleusercontent.com");
};

const PendingUsersTable: React.FC<PendingUsersTableProps> = ({ users, onApprove, loading, approvingId }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              const userId = getPendingUserId(user);
              const rowId = userId ?? `${user.email}-${idx}`;
              const isEmailVerified = user.email_verified || user.is_verified;
              
              // Check if this is a Google user
              const isGoogle = isGoogleUser(user.profile_photo_url);

             
              const canApprove = isEmailVerified || isGoogle;

              return (
                <tr key={rowId} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex items-center gap-3">
                      {user.profile_photo_url ? (
                        <div className="relative">
                          <img src={user.profile_photo_url} alt={user.full_name} className="w-8 h-8 rounded-full object-cover" />
                          {/* Small Google indicator */}
                          {isGoogle && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm" title="Signed up with Google">
                               <svg className="w-3 h-3" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                          {user.full_name.charAt(0)}
                        </div>
                      )}
                      <span className="font-medium">{user.full_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex flex-col">
                      <span>{user.email}</span>
                      {isEmailVerified ? (
                        <span className="text-xs text-green-600 flex items-center gap-1 mt-1"><CheckCircle className="w-3 h-3" /> Verified</span>
                      ) : (
                         isGoogle ? (
                            <span className="text-xs text-blue-600 flex items-center gap-1 mt-1"><ShieldCheck className="w-3 h-3" /> Google Account</span>
                         ) : (
                            <span className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" /> Not Verified</span>
                         )
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.phone_number}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.user_type === "employer" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                      {user.user_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{new Date(user.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => onApprove(user)}
                     
                      disabled={loading || approvingId === userId || !canApprove}
                      
                      title={canApprove ? "Approve User" : "User must verify email first"}
                      
                      className={`inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-md transition ${
                        !canApprove || loading || approvingId === userId
                          ? "bg-gray-400 cursor-not-allowed" 
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {approvingId === userId ? "⏳ Approving..." : "Approve"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingUsersTable;