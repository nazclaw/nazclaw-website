"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Terminal } from "lucide-react"

export default function ExperiencePage() {

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-[#030014]"
    >

      {/* Subtle background grain */}
      <div 
        className="fixed inset-0 opacity-30 z-0 pointer-events-none noise-bg"
      ></div>
      

      {/* Glowing orb effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-b from-fuchsia-600/30 to-purple-600/5 rounded-full blur-[120px] z-0 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-t from-blue-600/30 to-indigo-600/5 rounded-full blur-[120px] z-0 animate-pulse-slow"></div>


      <div className="flex flex-col items-center w-full max-w-4xl z-10">
        <div className="w-full">
          {/* Main Experience Card */}
          <div
            className="w-full rounded-3xl relative overflow-hidden p-8 card-container"
            style={{
              background: 'rgba(8, 8, 15, 0.65)',
              backdropFilter: 'blur(24px)',
              boxShadow: `
                0 20px 50px rgba(0, 0, 0, 0.5),
                0 5px 15px rgba(0, 0, 0, 0.1),
                inset 0 1px 1px rgba(255, 255, 255, 0.1)
              `,
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Border highlight glow */}
            <div 
              className="absolute inset-0 opacity-50 rounded-3xl z-0 card-highlight"
              style={{
                background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
              }}
            ></div>

            
            <div className="flex flex-col items-center mb-6 mt-4">
              <h1 className="text-2xl font-bold text-white text-center font-mono w-full bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Experience
              </h1>
            </div>

            <div className="space-y-4">
              {/* Owner Roles */}
              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-yellow-300 font-semibold mr-2 font-mono">Owner</span>
                  <span className="text-gray-400 font-mono">- Stan Umysłu 2023/08/14 - current</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">400+</span>
              </div>

              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-yellow-300 font-semibold mr-2 font-mono">Owner</span>
                  <span className="text-gray-400 font-mono">- Gold Star 2023/04/10 - current</span>
                  <span className="text-red-500 ml-2 font-mono">Closed</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">800+</span>
              </div>

              {/* Developer Roles */}
              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-purple-500 font-semibold mr-2 font-mono">Developer</span>
                  <span className="text-gray-400 font-mono">- Mysia Nora 2022/12/09 - 2023/07/20</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">3800+</span>
              </div>

              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-purple-500 font-semibold mr-2 font-mono">Developer</span>
                  <span className="text-gray-400 font-mono">- Owieczkomania 2022/10/01 - 2023/05/10</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">3000+</span>
              </div>

              {/* Administrator Role */}
              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-red-500 font-semibold mr-2 font-mono">Administrator</span>
                  <span className="text-gray-400 font-mono">- Freemc 2021/01/14 - 2022/04/30</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">15000+</span>
              </div>

              {/* Moderator Roles */}
              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-blue-400 font-semibold mr-2 font-mono">Moderator</span>
                  <span className="text-gray-400 font-mono">- Social Media Polska 2022/12/23 - 2023/05/10</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">10000+</span>
              </div>

              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-blue-400 font-semibold mr-2 font-mono">Moderator</span>
                  <span className="text-gray-400 font-mono">- Minecraft Polska 2015/06/15 - 2017/11/18</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">500 000+</span>
              </div>

              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-blue-400 font-semibold mr-2 font-mono">Moderator</span>
                  <span className="text-gray-400 font-mono">- Paradise 2022/12/30 - 2023/09/05</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">5000+</span>
              </div>

              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-blue-400 font-semibold mr-2 font-mono">Moderator</span>
                  <span className="text-gray-400 font-mono">- Blokowa.pl 2023/06/29 - current</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">20000+</span>
              </div>

              {/* Support Roles */}
              <div className="flex flex-wrap justify-between items-center glass-card rounded-xl p-3 hover:translate-y-[-2px] transition-all duration-300">
                <div>
                  <span className="text-green-500 font-semibold mr-2 font-mono">Support</span>
                  <span className="text-gray-400 font-mono">- Aktyn 2023/03/22 - 2023/07/20</span>
                </div>
                <span className="text-fuchsia-400 font-semibold font-mono">3000+</span>
              </div>

              <div className="text-center text-gray-400 mt-6 font-mono">And more...</div>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <Link
          href="/"
          className="social-icon-container relative group mt-6"
        >
          <div className="social-icon bg-black/40 rounded-full p-2.5 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:border-fuchsia-500/50 group-hover:bg-black/60 flex items-center gap-2 px-4">
            <ArrowLeft size={18} className="text-white/80 group-hover:text-fuchsia-400 transition-colors duration-300" />
            <span className="text-white/80 group-hover:text-fuchsia-400 transition-colors duration-300 text-sm font-mono">Return to Profile</span>
          </div>
        </Link>
      </div>

      {/* Add global styles for animations and effects */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes codeRain {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .glass-card {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(0, 0, 0, 0.3);
          border-color: rgba(236, 72, 153, 0.3);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.15);
        }
        
        /* Track mouse position for card highlight */
        .card-container {
          --x: 50%;
          --y: 50%;
        }
        
        /* Custom cursor effect */
        a:hover ~ div:first-child,
        button:hover ~ div:first-child {
          width: 24px;
          height: 24px;
          background: rgba(236, 72, 153, 0.4);
        }
      `}</style>

 
    </div>
  )
}