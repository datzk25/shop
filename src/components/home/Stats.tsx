"use client";

import React, { useEffect, useState } from 'react';
import { Users, FileCheck, Gift, Activity } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  target: number;
  suffix?: string;
  glowColor: string;
}

function StatCard({ icon: Icon, label, target, suffix = '', glowColor }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / (target / 50)));
    
    const timer = setInterval(() => {
      start += Math.ceil(target / 45);
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="relative group overflow-hidden rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Glow hover background */}
      <div className={`absolute -right-12 -bottom-12 w-32 h-32 rounded-full ${glowColor} opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="flex items-center space-x-4">
        <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 text-slate-800 dark:text-slate-200 group-hover:text-fuchsia-500 dark:group-hover:text-cyan-400 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</p>
          <p className="text-2xl sm:text-3xl font-black mt-1 text-slate-800 dark:text-white">
            {count.toLocaleString()}{suffix}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} label="Khách Hàng" target={42950} suffix="+" glowColor="bg-violet-600" />
          <StatCard icon={FileCheck} label="Đơn Hàng Thành Công" target={128400} suffix="+" glowColor="bg-fuchsia-600" />
          <StatCard icon={Gift} label="Sản Phẩm Đang Bán" target={1250} glowColor="bg-cyan-500" />
          <StatCard icon={Activity} label="Giao Dịch Gần Đây" target={95820} suffix="+" glowColor="bg-emerald-500" />
        </div>
      </div>
    </section>
  );
}
