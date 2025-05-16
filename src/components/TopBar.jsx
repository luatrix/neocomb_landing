// Topbar.jsx
import React from 'react';

export default function Topbar() {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="logo" className="h-6" />
      </div>
      <div className="flex items-center gap-6 text-sm font-semibold">
        <a href="#" className="hover:text-[#10B981]">Create</a>
        <a href="#" className="hover:text-[#10B981]">My Gallery</a>
        <a href="#" className="hover:text-[#10B981]">Community</a>
        <div className="flex items-center gap-2">
          <img src="/assets/emerald.png" className="h-8" />
          <span>50</span>
          <button className="ml-2 px-3 py-1 text-sm rounded-full bg-[#10B981] text-white hover:bg-[#059669]">Buy More</button>
        </div>
        <div className="w-8 h-8 bg-[#10B981] rounded-full" />
      </div>
    </div>
  );
}
