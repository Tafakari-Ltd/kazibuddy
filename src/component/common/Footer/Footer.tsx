"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Twitter, Facebook, Youtube, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { fetchFeaturedJobs } from "@/Redux/Features/jobsSlice";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { featuredJobs, loading } = useSelector((state: RootState) => state.jobs);
  const [email, setEmail] = useState("");

  // Fetch featured jobs on mount
  useEffect(() => {
    dispatch(fetchFeaturedJobs());
  }, [dispatch]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
  
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  // Get top 5 jobs for the footer
  const trendingJobs = featuredJobs.slice(0, 5);

  return (
    <footer className="bg-gradient-to-br from-maroon via-purple-dark to-redish text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="text-2xl font-extrabold text-white">
            Kazi<span className="text-gray-800">Buddy</span>
          </Link>
          <p className="text-purple-100 text-sm mt-4 leading-relaxed">
            Connecting top talent with great employers. KaziBuddy is your
            trusted platform for finding your next career opportunity or the
            perfect candidate for your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-purple-100 text-sm">
            
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Trending Jobs (Dynamic) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Trending Jobs</h3>
          <ul className="space-y-2 text-purple-100 text-sm">
            {loading ? (
              <li className="animate-pulse">Loading jobs...</li>
            ) : trendingJobs.length > 0 ? (
              trendingJobs.map((job) => (
                <li key={job.id}>
                  <Link 
                    href={`/jobs/${job.id}`} 
                    className="hover:text-white transition-colors block truncate"
                    title={job.title}
                  >
                    {job.title}
                  </Link>
                </li>
              ))
            ) : (
              <li>No trending jobs available.</li>
            )}
          </ul>
        </div>

        {/* Follow Us & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4 mb-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          
          {/* <form onSubmit={handleSubscribe} className="flex bg-white rounded-md overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-4 py-2 w-full text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            <button 
              type="submit"
              className="bg-maroon hover:bg-redish text-white px-4 flex items-center justify-center transition-colors"
            >
              <Send size={18} />
            </button>
          </form> */}
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-purple-200 text-sm">
        © {new Date().getFullYear()} Tafakari Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;