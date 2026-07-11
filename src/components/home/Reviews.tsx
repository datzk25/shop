"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { mockReviews } from '@/data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? mockReviews.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === mockReviews.length - 1 ? 0 : prev + 1));

  const current = mockReviews[index];

  return (
    <section className="py-16 relative bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        <Quote className="w-12 h-12 text-violet-500/30 mx-auto mb-6" />

        <div className="min-h-[160px] flex flex-col justify-center">
          <p className="text-base sm:text-lg font-medium italic text-slate-600 dark:text-slate-300 leading-relaxed">
            "{current.content}"
          </p>
          
          <div className="flex items-center justify-center space-x-1 mt-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
            <Image src={current.avatar} alt={current.name} fill sizes="48px" className="object-cover" />
          </div>
          <div className="text-left">
            <p className="font-extrabold text-sm text-slate-800 dark:text-white">{current.name}</p>
            <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">{current.role}</p>
          </div>
        </div>

        {/* Next/Prev Navigation Buttons */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          <button 
            onClick={prev}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={next}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
