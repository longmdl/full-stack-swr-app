import React from 'react';


const BG_PLACEHOLDER = 'https://media.discordapp.net/attachments/764106989474283561/1375669866111045713/Screenshot_vrc_pt_2024_cadenza_spa_24-4-125-8-34-33.jpg?ex=687715e6&is=6875c466&hm=3e81b471e43798cb9015444fd166612821f046d9e4a3139b856f865a34c7c7bc&=&format=webp&width=1990&height=1088';

function LeagueHeader() {
    return (
        <div
            className="relative w-full aspect-w-21 aspect-h-9 bg-center bg-cover pb-8 pt-8 [font-stretch:expanded]"
            style={{
                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    rgba(0,0,0,0.80) 0%,
                    rgba(0,0,0,0) 60%
                  ),
                  url(${BG_PLACEHOLDER})
                `
            }}
        >

            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 px-4">

                <img
                    src="/sum_logo_1.png"
                    alt="SUM Logo"
                    className="
                    w-24 h-24
                    rounded-full
                    border-2 border-white
                    shadow-lg

                    object-cover object-center
                  "
                />

                <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
                    <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full">1022 Followers</span>
                    <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full">15 Events</span>
                    <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full">Beginner-friendly</span>
                    <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full">ASRF Partner</span>
                </div>

                <div className="flex items-center gap-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                        SUM Weekly Races
                    </h1>
                </div>

                <p className="text-lg font-light tracking-widest">
                    VIETNAM'S PREMIER SIM RACING LEAGUE
                </p>

                <a
                    href="https://discord.gg/Ds8yPuNAE9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-8 py-2 border-2 border-white rounded-full font-semibold transition-colors hover:bg-white hover:text-black"
                >
                    FOLLOW COMMUNITY
                </a>
            </div>
        </div>
    );
}

export default LeagueHeader;