"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation"; 

import DesktopNav from "../DesktopNav/DesktopNav";
import MobileNav from "../MobileNav/MobileNav";
import SearchModal from "@/component/SearchModal/SearchModal"; 

import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { setQuery, setSearchVisibility, clearQuery } from "@/Redux/Features/SearchSlice";
import { fetchJobs, clearJobs } from "@/Redux/Features/jobsSlice";
import { logout, loadSession } from "@/Redux/Features/authSlice";

import api from "@/lib/axios";
import { toast } from "sonner";

const Navbar: React.FC = () => {
  // Helper to derive initials from full name or username
  const getInitials = (name?: string, username?: string) => {
    const source = (name || username || "").trim();
    if (!source) return "KB";
    const parts = source.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    if (parts[0].length >= 2) return parts[0].slice(0, 2).toUpperCase();
    return parts[0][0].toUpperCase();
  };

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname(); 
  
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { query } = useSelector((state: RootState) => state.search);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const authState = useSelector((state: RootState) => state.auth);
  const isAuthenticated = authState.isAuthenticated;
  const user = authState.user;

  const isAdmin =
    user?.is_staff ||
    user?.is_superuser ||
    user?.role === "admin" ||
    user?.user_type === "admin";

  const isEmployer = user?.user_type === "employer";

  useEffect(() => {
    dispatch(loadSession());
    dispatch(clearQuery());
    dispatch(setSearchVisibility(false));
    dispatch(clearJobs());
  }, [dispatch]);

  // Reset image error when user changes
  useEffect(() => {
    setImgError(false);
  }, [user]);

  const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await api.post("accounts/logout/", {});
      toast.success("You have been logged out successfully 👋");
    } catch (error: any) {
      console.error("Logout API error:", error);
      toast.error("Logout failed, clearing session locally ⚠️");
    } finally {
      dispatch(logout());
      router.push("/auth/login");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    dispatch(setQuery(val));

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (val.trim().length > 0) {
        debounceTimerRef.current = setTimeout(() => {
            dispatch(fetchJobs({ search_query: val, limit: 5 }));
            dispatch(setSearchVisibility(true));
        }, 500);
    } else {
        dispatch(setSearchVisibility(false));
        dispatch(clearJobs());
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
        router.push(`/jobs?q=${encodeURIComponent(query)}`);
        dispatch(setSearchVisibility(false));
    }
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-30">
      <div className="mx-auto h-[55px] px-4 md:px-6 flex items-center justify-between relative container">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Circular logo */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.jpeg"
              alt="KaziBuddy"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
            
          </div>
          

          {/* Brand name: larger on homepage, slightly smaller on other pages */}
          <span
            className={`hidden sm:inline-block ml-2 ${
              pathname === "/" ? "text-2xl font-extrabold text-maroon" : "text-lg font-bold text-maroon"
            }`}
          >
            Kazi<span className="text-gray-800">Buddy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <DesktopNav />
        </nav>

        {/* Search Input - Condition: Only show if NOT on homepage */}
        {pathname !== "/" && (
            <div className="hidden lg:block w-64 relative">
              <form id="navbar-search-form" onSubmit={handleSearchSubmit} className="relative z-50">
                 <input
                    type="text"
                    placeholder="Search job"
                    value={query}
                    onChange={handleSearchChange}
                    onFocus={() => { if(query.trim()) dispatch(setSearchVisibility(true)) }}
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-redish pr-8"
                />
                {query && (
                    <button 
                        type="button"
                        onClick={() => { dispatch(clearQuery()); dispatch(clearJobs()); dispatch(setSearchVisibility(false)); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
              </form>
              
              <div className="absolute w-[140%] -left-[20%] top-full pt-2"> 
                 <SearchModal />
              </div>
            </div>
        )}

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3 ml-4">
          {isAuthenticated && (
            <Link href="/messages">
              <button className="apply-button">Messages</button>
            </Link>
          )}

          {/* Post Job Button: Only visible if Authenticated AND (Employer OR Admin) */}
          {isAuthenticated && (isEmployer || isAdmin) && (
            <Link href="/employer?postjob=1">
              <button className="bg-[#800000] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#600000] transition-colors whitespace-nowrap">
                Post Job
              </button>
            </Link>
          )}

          {isAuthenticated ? (
            <button className="apply-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/auth/signup">
                <button className="apply-button">Sign Up</button>
              </Link>
              <Link href="/auth/login">
                <button className="apply-button">Login</button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 ml-4">
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md text-purple-800 hover:text-redish focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {isAuthenticated && (
            <div className="relative">
              {/*  Clean, borderless button consistent with other navbars */}
              <button
                onClick={toggleProfileMenu}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
              >
                {(() => {
                  const avatarUrl = user?.profile_photo_url || user?.profile_photo || user?.avatar || null;
                  
                  if (avatarUrl && !imgError) {
                    return (
                      <img
                        src={avatarUrl}
                        alt={user?.full_name || user?.username || "Profile"}
                        className="w-8 h-8 rounded-full object-cover border border-gray-200"
                        onError={() => setImgError(true)}
                      />
                    );
                  }

                  return (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold text-xs border border-gray-200">
                      {getInitials(user?.full_name, user?.username)}
                    </div>
                  );
                })()}
                
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-[64px] w-44 bg-white border border-gray-200 rounded-md shadow-md z-50"
                  >
                    <ul className="flex flex-col text-sm text-gray-700">
                       {(() => {
                        const items = [
                          { label: "Profile", href: "/profile" },
                          { label: "Messages", href: "/messages" },
                          { label: "Account Settings", href: "/account-settings" },
                          { label: "Worker Dashboard", href: "/worker" },
                          { label: "Employer", href: "/employer" },
                        ];
                        if (isAdmin) items.push({ label: "Admin Panel", href: "/admin" });
                        return items;
                      })().map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} onClick={() => setIsProfileOpen(false)} className="block px-4 py-2 hover:bg-redish hover:text-white">
                            {label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-redish hover:text-white">Logout</button>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;