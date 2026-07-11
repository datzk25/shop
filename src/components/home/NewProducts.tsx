"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { mockProducts, mockCategories } from '@/data/mockData';
import { Search, SlidersHorizontal, ArrowUpDown, ChevronDown, ShoppingCart } from 'lucide-react';

export default function NewProducts() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.code.toLowerCase().includes(search.toLowerCase());
      const matchCat = selectedCat === 'all' || product.category === selectedCat;
      return matchSearch && matchCat;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.newPrice - b.newPrice;
      if (sortBy === 'price-desc') return b.newPrice - a.newPrice;
      if (sortBy === 'sales-desc') return b.sales - a.sales;
      return 0; // default
    });
  }, [search, selectedCat, sortBy]);

  return (
    <section id="products" className="py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white">
            Danh Sách <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Sản Phẩm Mới</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2">Dùng bộ lọc bên dưới để tìm sản phẩm mong muốn nhanh chóng</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md mb-8">
          
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Nhập tên sản phẩm hoặc mã..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400"
            />
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button 
              onClick={() => setSelectedCat('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${selectedCat === 'all' ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-transparent' : 'bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800/80'}`}
            >
              Tất cả
            </button>
            {mockCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.slug)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${selectedCat === cat.slug ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-transparent' : 'bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800/80'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Menu */}
          <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="sales-desc">Mua nhiều nhất</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <p className="text-xs text-slate-400 mb-6">Đã tìm thấy <strong>{filteredProducts.length}</strong> sản phẩm phù hợp.</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div 
              key={p.id} 
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all"
            >
              <div className="relative h-44 bg-slate-100 dark:bg-slate-950">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  sizes="(max-w-7xl) 25vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-slate-400">Mã: {p.code}</span>
                <h3 className="mt-1.5 text-sm font-bold text-slate-800 dark:text-white line-clamp-2 h-10 leading-snug">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-slate-400">Còn: {p.stock}</span>
                  <span className="text-xs text-slate-400">Đã bán: {p.sales}</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 line-through">{(p.oldPrice).toLocaleString()}đ</span>
                    <span className="text-base font-black text-rose-500">{(p.newPrice).toLocaleString()}đ</span>
                  </div>
                  <button className="p-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/20">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Xem Thêm Button */}
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all">
              Tải thêm sản phẩm
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
