"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Compass, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const badges = [
    { icon: Zap, label: 'Giao tự động 1s', color: 'text-amber-500 bg-amber-500/10' },
    { icon: ShieldCheck, label: 'Thanh toán an toàn', color: 'text-emerald-500 bg-emerald-500/10' },
    { icon: Sparkles, label: 'Hỗ trợ khách hàng 24/7', color: 'text-cyan-500 bg-cyan-500/10' },
  ];

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cột thông tin chữ */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/20"
            >
              <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Shop Game Premium Tự Động Hóa</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Shop Game Uy Tín <br />
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                Giao Hàng Tự Động
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hệ thống cung cấp Acc Game VIP, Acc Random nhận quà, Tool bổ trợ hiệu năng hàng đầu Việt Nam. Độ bảo mật tối ưu cùng trải nghiệm hoàn hảo.
            </motion.p>

            {/* Các Nút Kêu Gọi Hành Động (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="#products" 
                className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:opacity-95 text-white font-bold text-base shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Mua Ngay</span>
              </a>
              <a 
                href="#categories" 
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold text-base transition-all duration-300 hover:-translate-y-1"
              >
                <Compass className="w-5 h-5 text-fuchsia-500" />
                <span>Khám phá danh mục</span>
              </a>
            </motion.div>

            {/* Badges Cam kết */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-lg mx-auto lg:mx-0"
            >
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
                    <div className={`p-1.5 rounded-lg ${b.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{b.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Cột Hình ảnh Đồ họa Gaming Premium */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 dark:border-slate-800/80 shadow-violet-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 z-10 mix-blend-color-dodge" />
              <Image 
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600" 
                alt="Gaming Illustration" 
                fill
                priority
                sizes="(max-w-7xl) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 z-20 flex flex-col justify-end">
                <span className="text-xs font-bold text-cyan-400">🔥 Đang diễn ra</span>
                <h3 className="text-white font-black text-xl">Sự kiện Giảm giá sập sàn tới 50% tất cả các dịch vụ</h3>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
