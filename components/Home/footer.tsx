"use client";
import React from 'react';
import { ArrowUp, Twitter, Instagram, Linkedin, LucideGlobe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-orange-500 to-red-600 text-black "
      style={{ fontFamily: 'Zendots, monospace' }} // Apply Zendots font
    >
      {/* Main Footer Content */}
      <div className="relative z-10 px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Logo and Organizing Body */}
          <div className="flex items-start space-x-4 md:ml-24">
            <div>
              <h2 className="text-xl font-bold">TECH MASTERS</h2>
              <h3 className="text-lg font-semibold">INDIA</h3>
            </div>
          </div>
          {/* Stay Connected */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-3xl font-bold">Stay Connected</h2>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div>
            <p className="text-sm">@2025 CodeForBharat, all rights reserved.</p>
          </div>
          {/* Scroll to Top Button */}
          <div className="flex items-center justify-center">
            <button className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300" aria-label="Scroll to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <ArrowUp className="w-6 h-6 text-black" />
            </button>
          </div>
          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/TechMastersorg" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Twitter">
                <Twitter className="w-8 h-8 text-black fill-current" />
              </a>
              <a href="https://www.instagram.com/techmasters.india/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                <Instagram className="w-8 h-8 text-black" />
              </a>
              <a href="https://www.linkedin.com/company/techmasters-community/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                <Linkedin className="w-8 h-8 text-black fill-current" />
              </a>
              <a href="https://www.techmastersindia.tech/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Website">
                <LucideGlobe className="w-8 h-8 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
