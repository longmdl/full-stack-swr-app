import React from 'react';


const BG_PLACEHOLDER = 'https://media.discordapp.net/attachments/764106989474283561/1380816123645136966/Screenshot_vrc_pt_2023_pageau_98_sx_lemans_7-5-125-14-38-3.jpg?ex=6876b0fa&is=68755f7a&hm=ce3517f7ea03b00e7909aba5edf296fb0eedb39c84e87d86a889a9feb1ff405a&=&format=webp&width=1932&height=1086';

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