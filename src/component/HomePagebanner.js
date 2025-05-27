"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function HomePagebanner() {
const router = useRouter();
  return (
    // 外层导航栏容器，白底，左右内边距，垂直居中，高度固定，阴影
    <nav className="w-full flex items-center justify-between bg-white px-8 h-16 shadow-sm">
      {/* 左侧LOGO区域 */}
      <div className="flex items-center gap-2" onClick={() => router.push("/home")}>
        {/* 占位LOGO图标（可替换为Image组件） */}
        <span className="inline-block w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">H</span>
        {/* LOGO文字 */}
        <span className="text-green-800 font-bold text-xl leading-tight">Hinge<br />Health</span>
      </div>

      {/* 中间菜单区域 */}
      <div className="flex gap-8">
        <a href="#" className="ffont-serif text-green-900 font-medium hover:text-green-700 transition">For Individuals</a>
        <a href="#" className="font-serif text-green-900 font-medium hover:text-green-700 transition">Benefit Leaders and Health Plans</a>
        <a href="#" className="font-serif text-green-900 font-medium hover:text-green-700 transition">Our Approach</a>
        <a href="#" className="font-serif text-green-900 font-medium hover:text-green-700 transition">Learning Center</a>
        <a href="#" className="font-serif text-green-900 font-medium hover:text-green-700 transition">About</a>
      </div>

      {/* 右侧按钮区域 */}
      <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-full transition">
        Enroll now
        {/* 右箭头svg */}
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  );
}