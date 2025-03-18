"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Youtube, Music, User, Check, ExternalLink, Code, Terminal } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function NeonPortfolio() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("nazclaw")
      .then(() => {
        setCopied(true)
        toast({
          title: "Copied to clipboard!",
          description: "Username 'nazclaw' copied to clipboard",
        })

        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
        toast({
          title: "Failed to copy",
          description: "Please try again",
          variant: "destructive",
        })
      })
  }

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#030014]"
    >
      {/* Subtle background grain */}
      <div 
        className="fixed inset-0 opacity-30 z-0 pointer-events-none noise-bg"
      ></div>
      
      {/* Glowing orb effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[200px] z-0 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[200px] z-0 animate-pulse-slow"></div>

      <div
        className="w-full max-w-md rounded-3xl relative overflow-hidden p-10 flex flex-col items-center justify-center gap-6 z-10"
        style={{
          background: 'rgba(8, 8, 15, 0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: `
            inset 0 2px 2px rgba(255, 255, 255, 0.05),
            0 0 60px rgba(0, 0, 0, 0.3)
          `,
          border: '1px solid rgba(255, 255, 255, 0.07)',
        }}
      >
        {/* Subtle inner border glow */}
        <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none"></div>
        
        
        <div className="relative mt-4">
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-md opacity-50 animate-pulse-slow"></div>
          <img src="/avatar.webp" alt="Avatar" className="relative w-24 h-24 rounded-full border border-white/20 backdrop-blur-sm" />
        </div>
        
        {/* Name with animated cursor */}
        <h1 className="text-white text-4xl font-mono tracking-wide relative font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          nazclaw
          <span className="absolute ml-1 animate-pulse text-fuchsia-400">_</span>
        </h1>

        {/* Title */}
        <div className="relative">
          <p className="text-gray-300 text-sm font-mono mb-2 relative inline-block tracking-wider">
            Developer
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-blue-500 animate-expand rounded-full"></span>
          </p>
        </div>

        {/* Social Icons with improved hover effects */}
        <div className="flex gap-8 my-4">
          <a
            href="https://www.youtube.com/@nazclaw_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-fuchsia-400 transition-colors relative group"
          >
            <Youtube size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a
            href="https://open.spotify.com/user/9dqfz3c3w5jxa5hay6b2ue5u6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-fuchsia-400 transition-colors relative group"
          >
            <Music size={22} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <div className="relative group">
            <button
              onClick={copyToClipboard}
              className="text-white/80 hover:text-fuchsia-400 transition-colors"
              aria-label="Copy Discord username"
            >
              {copied ? <Check size={22} className="text-green-400 animate-bounce-subtle" /> : <User size={22} className="group-hover:scale-110 transition-transform" />}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            <div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 backdrop-blur-md px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20"
              style={{ 
                background: 'rgba(15, 15, 25, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: "6px" 
              }}
            >
              Click to copy Discord name
            </div>
          </div>
        </div>

        {/* Stats with improved glowing effects */}
        <div className="grid grid-cols-3 w-full gap-3 mb-8 mt-3">
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg py-3 hover:bg-white/5 transition-all border border-white/5 group hover:border-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(236,64,255,0.15)]">
            <span className="text-fuchsia-400 font-mono text-2xl font-bold group-hover:text-white transition-colors">5</span>
            <span className="text-gray-400 text-xs font-mono mt-1 tracking-wide">Projects</span>
          </div>
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg py-3 hover:bg-white/5 transition-all border border-white/5 group hover:border-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(236,64,255,0.15)]">
            <span className="text-fuchsia-400 font-mono text-2xl font-bold group-hover:text-white transition-colors">10+</span>
            <span className="text-gray-400 text-xs font-mono mt-1 tracking-wide">Experience</span>
            <Link
              href="/experience"
              className="mt-1 flex items-center gap-1 text-[10px] text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              <span>View all</span>
              <ExternalLink size={10} />
            </Link>
          </div>
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg py-3 hover:bg-white/5 transition-all border border-white/5 group hover:border-fuchsia-500/20 hover:shadow-[0_0_15px_rgba(236,64,255,0.15)]">
            <span className="text-fuchsia-400 font-mono text-2xl font-bold group-hover:text-white transition-colors">150+</span>
            <span className="text-gray-400 text-xs font-mono mt-1 tracking-wide">Commits</span>
          </div>
        </div>

        {/* Skills with enhanced styling */}
        <div className="flex flex-wrap justify-center gap-3 max-w-sm">
          {['HTML', 'Python', 'Data-Breaches', 'Graphics', 'Cybersecurity', 'Ethical Hacking', 'Community-Manager'].map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 bg-black/30 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-white/70 hover:text-fuchsia-400 hover:border-fuchsia-400/40 transition-all flex items-center gap-1.5 hover:shadow-[0_0_10px_rgba(236,64,255,0.3)]"
            >
              <Code size={10} />
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Add global styles for animations */}
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
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .noise-bg {
          opacity: 0.15;
        }
      `}</style>
    </div>
  )
}