import React from 'react';

function EventDetails() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <img src="/sum_logo_1.png" alt="SUM Logo" className="w-12 h-13" />
        <div>
          <div className="text-lg font-semibold text-gray-800">Saigon United Motorsports (SUM)</div>
          <div className="text-sm text-gray-500">SUM Weekly Race - Tuần 13, 2025</div>
        </div>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-semibold mr-2 dark:bg-red-900 dark:text-red-100">Online Race</span>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold dark:bg-blue-900 dark:text-blue-100">Assetto Corsa</span>
      </div>
      <div className="mb-4 text-gray-700">
        <p><strong>Thời gian:</strong> 20:00 ngày 03/07/2025</p>
        <p><strong>Server:</strong> Saigon United Motorsport - SWR</p>
        <p><strong>Password:</strong> <span className="font-mono bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-100">sum123</span></p>
        <p><strong>Link Content Manager:</strong> <a href="https://acstuff.club/s/q:race/online/join?ip=113.172.4.86&httpPort=8081" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Tham gia ngay</a></p>
      </div>
      <div className="mb-4 text-gray-700">
        <p className="font-semibold mb-2">Link tải mod:</p>
        <ul className="list-disc pl-6">
          <li>GT3: <a href="https://drive.google.com/file/d/1yOSegvfRX56RgY_S2XNqW1W7vLPM2y5H/view?usp=sharing" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Download</a></li>
          <li>Zandvoort: <a href="https://drive.google.com/file/d/1nuUchTSTkbm6-UHHkfLZ4AR1IiUbb0zx/view?usp=sharing" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Download</a></li>
          <li>Formula 2: <a href="https://drive.google.com/file/d/1ibXgttZ5hio7v-bWez3JLokBXtddhP4x/view?usp=sharing" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Download</a></li>
          <li>Spa: <a href="https://drive.google.com/file/d/1bC2p1G9ULOv35OkEA-v9SnS9YbdA3Exm/view?usp=sharing" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Download</a></li>
        </ul>
      </div>
      <div className="text-sm text-gray-500 mt-2">Mọi thắc mắc vui lòng liên hệ admin SUM để được hỗ trợ.</div>
    </section>
  );
}

export default EventDetails; 