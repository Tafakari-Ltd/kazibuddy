import React from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  CheckCircle2,
  Clock,
  Edit3,
  Globe,
  Download
} from "lucide-react";
import Image from "next/image";

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

interface WorkerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl?: string;
  bio?: string;
  title?: string;
  skills: string[];
  availability: "Available" | "Busy" | "Offline";
  rating: number;
  completedJobs: number;
  joinedDate: string;
  experience: Experience[];
  certifications: Certification[];
  isVerified: boolean;
}

interface WorkerProfileViewProps {
  worker: WorkerProfile;
  onEdit: () => void;
}

const WorkerProfileView: React.FC<WorkerProfileViewProps> = ({ worker, onEdit }) => {
  
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "Busy": return "bg-amber-100 text-amber-700 border-amber-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Card  */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Avatar Section */}
          <div className="flex-shrink-0 relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-red-500 via-red-600 to-rose-600 overflow-hidden relative">
              {worker.avatarUrl ? (
                <Image 
                  src={worker.avatarUrl} 
                  alt="Profile" 
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  {worker.firstName[0]}{worker.lastName[0]}
                </div>
              )}
            </div>
            {worker.isVerified && (
              <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full border-2 border-white shadow-sm" title="Verified Worker">
                <ShieldCheck size={12} />
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  {worker.firstName} {worker.lastName}
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getAvailabilityColor(worker.availability)}`}>
                    {worker.availability}
                  </span>
                </h1>
                <p className="text-gray-600 font-medium text-base mt-1">{worker.title || "Skilled Worker"}</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} />
                    {worker.location || "Nairobi, Kenya"}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} />
                    Joined {worker.joinedDate}
                  </div>
                </div>
              </div>

              <button 
                onClick={onEdit}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                <Edit3 size={15} />
                Edit Profile
              </button>
            </div>

            {/* Quick Stats in Header */}
            <div className="flex gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Star size={12} fill="currentColor" className="text-amber-500" />
                <span className="text-xs font-semibold text-gray-700">{worker.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-blue-500" />
                <span className="text-xs font-semibold text-gray-700">{worker.completedJobs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Contact & Skills */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 text-base flex items-center gap-2">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-gray-400 mt-1" />
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                  <p className="text-sm text-gray-800 font-medium truncate" title={worker.email}>{worker.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
                  <p className="text-sm text-gray-800 font-medium">{worker.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={16} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Portfolio</p>
                  <p className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">View Website</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4 text-base">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: About & History (Spans 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Bio Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3 text-base">About Me</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {worker.bio || "No bio added yet. Click 'Edit Profile' to add a description."}
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-800 text-base flex items-center gap-2">
                <Briefcase size={18} className="text-gray-400" />
                Experience
              </h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
              {worker.experience.length > 0 ? (
                worker.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                      <h4 className="font-bold text-gray-800 text-sm">{exp.title}</h4>
                      <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 w-fit">
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium text-xs mb-1">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                ))
              ) : (
                <div className="pl-8 text-gray-500 italic text-sm">No experience listed.</div>
              )}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-5 text-base flex items-center gap-2">
              <Award size={18} className="text-gray-400" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {worker.certifications.length > 0 ? (
                worker.certifications.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg border border-gray-100 bg-gray-50 flex items-start gap-3">
                    <div className="bg-white p-1.5 rounded shadow-sm text-gray-500">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{cert.name}</h4>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                      <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 italic text-sm">No certifications listed.</div>
              )}
            </div>

             {worker.certifications.length > 0 && (
               <button className="mt-5 w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors border border-dashed border-gray-200">
                 <Download size={15} />
                 Download CV / Documents
               </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkerProfileView;