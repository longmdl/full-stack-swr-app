import React from 'react';


const BG_PLACEHOLDER = 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/470922916_10212490803142779_6955096298772908957_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Twar5h6QidwQ7kNvwG99BCV&_nc_oc=Adn1McdavewIie6vJZSXYnIwyyiCdqht5XVYF1_Nml8oIrmNuHQ9d34FLVgLXkj-p4s&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=YdE5uYQZ2ytjUkXBo8W3Ug&oh=00_AfQiarV3YAFC5becPl6WAirPttLdjQ86FWf_eRxZEW7Ncw&oe=687E3BB1';

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