"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Wallet, LogIn, ChevronRight, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const userBalance = "1,250,000";

  const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Danh mục', href: '#categories' },
    { name: 'Nạp tiền', href: '#recharge' },
    { name: 'Đơn hàng', href: '#transactions' },
    { name: 'Liên hệ', href: '#footer' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 dark:bg-slate-950/50 border-b border-slate-200/50 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo với Gradient Rainbow tuyệt đẹp */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-500 shadow-md shadow-fuchsia-500/20 group-hover:scale-110 transition-transform duration-300">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              ACCI <span className="text-slate-800 dark:text-slate-200">STORE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fuchsia-500 dark:hover:text-cyan-400 transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Số dư của tôi */}
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              <Wallet className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Số dư:</span>
              <span className="text-sm font-bold text-emerald-500">{userBalance}đ</span>
            </div>

            {/* Toggle Theme */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-violet-600" />}
            </button>

            {/* Login Button */}
            <button className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/35 hover:-translate-y-0.5 transition-all duration-300">
              <LogIn className="w-4 h-4" />
              <span>Đăng nhập</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-violet-600" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  <span className="font-medium text-sm">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900">
                  <span className="text-xs text-slate-500">Số dư hiện tại</span>
                  <span className="text-sm font-bold text-emerald-500">{userBalance}đ</span>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm">
                  <LogIn className="w-4 h-4" />
                  <span>Đăng nhập hệ thống</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
