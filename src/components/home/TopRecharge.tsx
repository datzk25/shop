"use client";

import React from 'react';
import Image from 'next/image';
import { mockTopUsers } from '@/data/mockData';
import { Trophy, Medal, Crown } from 'lucide-react';

export default function TopRecharge() {
  return (
    <section id="recharge" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white">
            🏆 Vinh Danh <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Top Phú Hộ</span>
          </h2>
          <p className="text-xs text-slate-400 mt-2">Bảng vinh danh 5 khách hàng nạp tích lũy lớn nhất tháng này</p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md overflow-hidden">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {mockTopUsers.map((user, index) => {
              const isTop1 = index === 0;
              const isTop2 = index === 1;
              const isTop3 = index === 2;

              return (
                <div 
                  key={user.id} 
                  className={`flex items-center justify-between p-5 transition-colors ${isTop1 ? 'bg-amber-500/5' : isTop2 ? 'bg-slate-500/5' : isTop3 ? 'bg-amber-600/5' : ''}`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Badge Ranks */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-950 font-black text-sm">
                      {isTop1 ? (
                        <Crown className="w-5 h-5 text-amber-500" />
                      ) : isTop2 ? (
                        <Medal className="w-5 h-5 text-slate-400" />
                      ) : isTop3 ? (
                        <Medal className="w-5 h-5 text-amber-700" />
                      ) : (
                        <span className="text-slate-400">#{user.rank}</span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800">
                      <Image src={user.avatar} alt={user.name} fill sizes="48px" className="object-cover" />
                    </div>

                    <div>
                      <p className="font-bold text-sm text-slate-800 dark:text-white">{user.name}</p>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase">ID: {user.id}</p>
                    </div>
                  </div>

                  {/* Số Tiền Nạp */}
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-amber-500">{(user.amount).toLocaleString()}đ</p>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Tích lũy</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
