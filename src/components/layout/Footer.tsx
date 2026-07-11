"use client";

import React from 'react';
import Link from 'next/link';
import { Gamepad2, Facebook, MessageSquare, ShieldCheck, Mail, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-cyan-500">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                ACCI STORE
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Shop game tự động uy tín cao cấp nhất hiện nay. Đảm bảo chất lượng dịch vụ, bảo mật an toàn 100% tài sản và thông tin cá nhân.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-widest">Hỗ trợ</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li><Link href="#products" className="hover:text-fuchsia-500">Sản Phẩm</Link></li>
              <li><Link href="#recharge" className="hover:text-fuchsia-500">Bảng Giá Nạp Thẻ</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-500">Chính Sách Bảo Hành</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-500">Cộng Tác Viên</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-widest">Chính sách</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li><Link href="#" className="hover:text-fuchsia-500">Điều Khoản Dịch Vụ</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-500">Chính Sách Hoàn Tiền</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-500">Liên Hệ Trực Tiếp</Link></li>
              <li><Link href="#" className="hover:text-fuchsia-500">Chăm Sóc Khách Hàng</Link></li>
            </ul>
          </div>

          {/* Social Connections */}
          <div>
            <h4 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase tracking-widest">Kết nối</h4>
            <div className="flex items-center space-x-3 mb-4">
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-sky-400 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-400 font-semibold">
              <p className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>hotro@accistore.com</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>1900 8198 (8h - 22h)</span>
              </p>
            </div>
          </div>

        </div>

        {/* License Copyright */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold text-slate-400">
          <p>© 2026 ACCI STORE. All rights reserved. Phát triển bởi ACCI-Dev Team.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-slate-200">Bảo mật</Link>
            <span>•</span>
            <Link href="#" className="hover:text-slate-200">Điều khoản sử dụng</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
