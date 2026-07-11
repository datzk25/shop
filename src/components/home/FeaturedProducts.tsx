"use client";

import React from 'react';
import Image from 'next/image';
import { mockProducts } from '@/data/mockData';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

export default function FeaturedProducts() {
  // Chỉ lấy các sản phẩm có tag isFeatured
  const featured = mockProducts.filter(p => p.isFeatured);

  return (
    <section className="py-16 relative bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-white sm:text-4xl text-center md:text-left">
              🔥 Siêu Phẩm <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">Nổi Bật Nhất</span>
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl text-center md:text-left">
              Sở hữu ngay các cực phẩm được người chơi săn lùng nhiều nhất tuần này.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 px-4 py-2 rounded-xl">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Được bầu chọn cao nhất</span>
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <div 
              key={p.id} 
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:shadow-fuchsia-500/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Product Cover image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  sizes="(max-w-7xl) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg text-xs font-extrabold text-white bg-red-500 shadow-md">
                  -{p.discount}% OFF
                </span>

                {/* Floating Tags */}
                {p.tags && p.tags.map((tag, i) => (
                  <span key={i} className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-white bg-slate-950/80 backdrop-blur-sm border border-white/10 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 tracking-wider">Mã: {p.code}</span>
                <h3 className="mt-2 text-lg font-black text-slate-800 dark:text-white line-clamp-2 leading-snug group-hover:text-violet-500 dark:group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h3>

                {/* Sales & Stock Stats */}
                <div className="flex items-center space-x-6 mt-4 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                  <div className="text-xs text-slate-400">
                    Lượt bán: <span className="font-extrabold text-slate-700 dark:text-slate-200">{p.sales}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Kho hàng: <span className="font-extrabold text-slate-700 dark:text-slate-200">{p.stock}</span>
                  </div>
                </div>

                {/* Pricing Area */}
                <div className="flex items-baseline justify-between mt-5">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 line-through">{p.oldPrice.toLocaleString()}đ</span>
                    <span className="text-xl font-black text-red-500 dark:text-red-400">{p.newPrice.toLocaleString()}đ</span>
                  </div>
                  <button className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="flex items-center justify-center space-x-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Chi Tiết</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-fuchsia-500/10 hover:-translate-y-0.5 transition-all duration-200">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Mua Ngay</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
