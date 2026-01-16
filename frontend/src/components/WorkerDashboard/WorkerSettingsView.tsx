import React from "react";
import { Settings } from "lucide-react";

export const WorkerSettingsView: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 p-12 rounded-lg text-center">
      <Settings className="w-16 h-16 mx-auto text-gray-300 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
      <p className="text-gray-500 mt-2">
        Manage your account preferences, notifications, and security settings.
      </p>
      <span className="inline-block mt-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
        Coming Soon
      </span>
    </div>
  );
};
