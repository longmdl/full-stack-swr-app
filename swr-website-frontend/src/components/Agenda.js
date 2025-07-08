import React from 'react';

function Agenda() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Lịch Trình Sự Kiện</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex items-center gap-4">
          <img src="https://media.discordapp.net/attachments/764106989474283561/1388927720364441804/Screenshot_rss_gtm_bayer_v8_zandvoort2023_29-5-125-23-58-20.jpg?ex=6865663d&is=686414bd&hm=8669ae1e70c4f81da2f4de1e0fd7aa65aac91d6802be9913b8029afb5fa8c246&=&format=webp&width=1425&height=802" alt="GT3 @ Zandvoort" className="w-17 h-16 object-cover rounded" />
          <div>
            <div className="font-semibold text-red-700 mb-1">Race 1: GT3 @ Zandvoort</div>
            <div className="text-gray-700">Format: Practice 20p / Quali 15p / Race 20p</div>
          </div>
        </li>
        <li className="py-4 flex items-center gap-4">
          <img src="https://media.discordapp.net/attachments/764106989474283561/1388927720901316760/Screenshot_rss_formula_rss_2_v6_2024_spa_29-5-125-23-42-51.jpg?ex=6865663d&is=686414bd&hm=a6d169b5cd04c80002e4270703b3f3cdbc5d4712ed8a3206cf430b3c1783d914&=&format=webp&width=1425&height=802" alt="Formula 2 @ Spa Francorchamps" className="w-17 h-16 object-cover rounded" />
          <div>
            <div className="font-semibold text-blue-700 mb-1">Race 2: Formula 2 @ Spa Francorchamps</div>
            <div className="text-gray-700">Format: Practice 20p / Quali 15p / Race 20p</div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Agenda; 