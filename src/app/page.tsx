"use client"
import React from 'react';
import Navbar from "../components/navbar";
import MainContent from "../components/main"; 
import Footer from "../components/footer";  

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Bar */}
      <Navbar />
      
      {/* 2. Middle Content Component */}
      <MainContent />
      
      {/* 3.  Footer */}
      <Footer />
    </div>
  );
}