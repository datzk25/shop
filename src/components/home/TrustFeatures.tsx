"use client";

import React from 'react';
import { ShieldAlert, RefreshCw, BadgePercent, Headphones } from 'lucide-react';

export default function TrustFeatures() {
  const steps = [
    { icon: RefreshCw, title: 'Hệ Thống Tự Động', desc: 'Mọi giao dịch nạp thẻ, mua acc game đều được hệ thống kiểm duyệt và bàn giao trong 1 giây.' },
    { icon: ShieldAlert, title: 'Bảo Mật 100%', desc: 'Thông tin cá nhân cùng dữ liệu giao dịch mã hóa tối cao, đảm bảo tuyệt mật cho người dùng.' },
    { icon: BadgePercent, title: 'Chiết Khấu Cao', desc: 'Tỷ lệ nạp thẻ tối ưu nhất thị trường, cam kết không phụ thu phí ẩn, nhiều quà tặng ngẫu nhiên.' },
    { icon: Headphones, title: 'Hỗ Trợ Nhanh', desc: 'Đội ngũ tư vấn kỹ thuật trực chat live hoạt động liên tục 24/7 giải đáp nhanh chóng thắc mắc.' },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-md shadow-fuchsia-600/10 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-base font-black text-slate-800 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
