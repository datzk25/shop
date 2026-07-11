"use client";

import React, { useState, useEffect } from 'react';
import '@/app/globals.css'; // Đảm bảo bạn đã config font & tailwind cơ bản
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  // Đồng bộ theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <html lang="vi">
      <head>
        <title>ACCI STORE - Shop Game Uy Tín Uy Lực Cao Cấp</title>
        <meta name="description" content="Shop Game Tự Động, Nạp Thẻ, Tool Game & File Game Premium Uy Tín Số 1" />
      </head>
      <body className="min-h-screen transition-colors duration-300 font-sans relative bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden">
        {/* Glow Effects cho Phong cách Gaming Premium (Chỉ hiện đẹp nhất ở Dark Mode) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/10 dark:bg-fuchsia-600/15 blur-[130px] pointer-events-none z-0" />
        
        {/* Lớp lưới nền (Grid Overlay) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
