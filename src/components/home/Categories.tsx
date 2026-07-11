"use client";

import React from 'react';
import Image from 'next/image';
import { mockCategories } from '@/data/mockData';
import * as Icons from 'lucide-react';

export default function Categories() {
  return (
    <section id="categories" className="py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề mục */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Danh Mục <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Dịch Vụ Nổi Bật</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl">
            Lựa chọn loại sản phẩm bạn cần tìm kiếm, hệ thống cam kết nguồn hàng chất lượng nhất.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((cat) => {
            // Dynamic render Lucide Icon
            const IconComponent = (Icons as any)[cat.icon] || Icons.Gamepad2;

            return (
              <div 
                key={cat.id} 
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image background with blur filter */}
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-all z-10" />
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    sizes="(max-w-7xl) 33vw, 400px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Icon badge floating on top-left */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white z-20">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-800 dark:text-white">{cat.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                      Kho hàng: <strong className="text-slate-600 dark:text-slate-300">{cat.count} sản phẩm</strong>
                    </span>
                    <button className="flex items-center space-x-1 px-4 py-2 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white transition-all duration-300">
                      <span>Xem ngay</span>
                      <Icons.ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
