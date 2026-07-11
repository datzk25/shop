"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewProducts from '@/components/home/NewProducts';
import TopRecharge from '@/components/home/TopRecharge';
import RecentTransactions from '@/components/home/RecentTransactions';
import TrustFeatures from '@/components/home/TrustFeatures';
import Reviews from '@/components/home/Reviews';

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 1. Hero Banner */}
      <Hero />
      
      {/* 2. Stats Section */}
      <Stats />
      
      {/* 3. Categories List */}
      <Categories />
      
      {/* 4. Featured Items */}
      <FeaturedProducts />
      
      {/* 5. New Products Grid + Search/Filter Panel */}
      <NewProducts />
      
      {/* 6. Top Rechargers Panel */}
      <TopRecharge />
      
      {/* 7. Live Transaction Feeds */}
      <RecentTransactions />
      
      {/* 8. Trust Credentials */}
      <TrustFeatures />
      
      {/* 9. Reviews Panel Slider */}
      <Reviews />
    </div>
  );
}
