import React from 'react';

function Registration() {
  return (
    <section className="bg-indigo-50 rounded-lg shadow p-6 mb-8 text-center">
      <h2 className="text-2xl font-bold text-indigo-800 mb-2">Registration</h2>
      <p className="mb-4 text-gray-700">Tham gia cộng đồng Discord để đăng ký đua và nhận thông tin mới nhất về những sự kiện của SUM sắp tới!</p>
      <a
        href="https://discord.gg/8ztWRkkMf8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-2 px-8 rounded-full shadow-lg transition-all duration-300 animate-pulse"
      >
        Tham gia Discord
      </a>
    </section>
  );
}

export default Registration; 