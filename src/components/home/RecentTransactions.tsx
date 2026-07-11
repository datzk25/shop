"use client";

import React, { useEffect, useState } from 'react';
import { mockTransactions } from '@/data/mockData';
import { Transaction } from '@/types';
import { ArrowRightLeft, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function RecentTransactions() {
  const [txs, setTxs] = useState<Transaction[]>(mockTransactions);

  // Giả lập giao dịch thời gian thực nhảy số liên tục để tạo sự sống động
  useEffect(() => {
    const names = ['an***', 'binh***', 'nam***', 'ha***', 'ngoc***', 'tuan***', 'linh***'];
    const products = ['Acc Random 10k', 'Acc Liên Quân VIP', 'Tool Skin LOL', 'Random Steam VIP', 'Acc Valorant'];
    const amounts = [10000, 150000, 850000, 20000, 1890000];

    const interval = setInterval(() => {
      const newTx: Transaction = {
        id: `DH${Math.floor(100000 + Math.random() * 900000)}`,
        user: names[Math.floor(Math.random() * names.length)],
        product: products[Math.floor(Math.random() * products.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: 'Vừa xong',
        status: 'Thành công',
      };

      setTxs((prev) => [newTx, ...prev.slice(0, 4)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="transactions" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center space-x-2.5 mb-10">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800 dark:text-white">Lịch Sử Giao Dịch Gần Đây</h2>
            <p className="text-xs text-slate-400">Các hóa đơn được mua và xử lý tức thì trên hệ thống</p>
          </div>
        </div>

        {/* Web View Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                <th className="p-4">Khách hàng</th>
                <th className="p-4">Sản phẩm</th>
                <th className="p-4">Mã đơn</th>
                <th className="p-4">Số tiền</th>
                <th className="p-4">Thời gian</th>
                <th className="p-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {txs.map((tx, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-600 dark:text-slate-300">{tx.user}</td>
                  <td className="p-4 font-semibold text-slate-800 dark:text-white">{tx.product}</td>
                  <td className="p-4 text-xs font-semibold text-slate-400">{tx.id}</td>
                  <td className="p-4 font-extrabold text-emerald-500">{(tx.amount).toLocaleString()}đ</td>
                  <td className="p-4 text-xs text-slate-400">{tx.time}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{tx.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
