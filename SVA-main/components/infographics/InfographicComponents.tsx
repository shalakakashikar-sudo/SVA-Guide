import React from 'react';

// --- ICONS ---
export const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);
export const GroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);
export const HelpingHandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22V9"/>
    </svg>
);
export const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);
export const PlusIcon = () => <span className="text-2xl font-bold">+</span>;
export const MergeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8L22 12L18 16"/>
        <path d="M2 12H22"/>
        <path d="M11 2L7 6L11 10"/>
        <path d="M16 18L12 22L8 18"/>
        <path d="M2 6H7C9.20914 6 11 7.79086 11 10V22"/>
    </svg>
);
export const MagnifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);
export const ForkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
);
export const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
);
export const ParenthesesIcon = () => <span className="text-4xl font-bold opacity-50">( )</span>;
export const BackwardArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"/>
        <path d="M12 19l-7-7 7-7"/>
    </svg>
);
export const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
);
export const ContainerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="M12 2v4"/>
        <path d="M12 12l-4 4"/>
        <path d="M12 12l4-4"/>
    </svg>
);
export const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 2C16.9706 2 21 6.02944 21 11L21 11"/>
        <path d="M12 2L12 2C7.02944 2 3 6.02944 3 11L3 11"/>
        <path d="M12 22V11"/>
        <path d="M7 11H17"/>
        <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11"/>
    </svg>
);
export const PuzzleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M12 18v-4"/>
        <path d="M10 16h4"/>
    </svg>
);
export const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
    </svg>
);
export const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
);
export const ScissorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
);
export const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/>
    </svg>
);
export const CloudWishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <path d="M12 12l-2 3h4l-2 3"/>
    </svg>
);
export const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l4 4l-4 4"/>
        <path d="M20 7H4"/>
        <path d="M8 21l-4-4l4-4"/>
        <path d="M4 17H20"/>
    </svg>
);
export const ScatterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="5" r="2"/>
        <circle cx="12" cy="6" r="1.5"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="12" r="1.5"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="1.5"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="12" cy="18" r="1.5"/>
        <circle cx="19" cy="19" r="2"/>
    </svg>
);
export const HashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9"/>
        <line x1="4" y1="15" x2="20" y2="15"/>
        <line x1="10" y1="3" x2="8" y2="21"/>
        <line x1="16" y1="3" x2="14" y2="21"/>
    </svg>
);

// --- THEME MAPPING ---
const getColorFromClasses = (bgClass: string, borderClass: string) => {
  if (bgClass.includes('blue') || borderClass.includes('blue')) return 'blue';
  if (bgClass.includes('emerald') || borderClass.includes('emerald')) return 'emerald';
  if (bgClass.includes('amber') || borderClass.includes('amber')) return 'amber';
  if (bgClass.includes('rose') || borderClass.includes('rose')) return 'rose';
  if (bgClass.includes('slate') || borderClass.includes('slate')) return 'slate';
  if (bgClass.includes('violet') || borderClass.includes('violet')) return 'violet';
  return 'blue'; // default
};

const colorStyles: Record<string, { bg: string; text: string; border: string; light: string; iconBg: string; gradient: string; boxBorder: string }> = {
  blue: { 
    bg: 'bg-blue-500', 
    text: 'text-blue-700', 
    border: 'border-blue-500', 
    light: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    gradient: 'from-blue-500 to-cyan-500',
    boxBorder: 'border-blue-200'
  },
  emerald: { 
    bg: 'bg-emerald-500', 
    text: 'text-emerald-700', 
    border: 'border-emerald-500', 
    light: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    gradient: 'from-emerald-500 to-teal-500',
    boxBorder: 'border-emerald-200'
  },
  amber: { 
    bg: 'bg-amber-500', 
    text: 'text-amber-700', 
    border: 'border-amber-500', 
    light: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    gradient: 'from-amber-400 to-orange-500',
    boxBorder: 'border-amber-200'
  },
  rose: { 
    bg: 'bg-rose-500', 
    text: 'text-rose-700', 
    border: 'border-rose-500', 
    light: 'bg-rose-50',
    iconBg: 'bg-rose-100',
    gradient: 'from-rose-500 to-pink-500',
    boxBorder: 'border-rose-200'
  },
  slate: { 
    bg: 'bg-slate-600', 
    text: 'text-slate-700', 
    border: 'border-slate-500', 
    light: 'bg-slate-50',
    iconBg: 'bg-slate-200',
    gradient: 'from-slate-500 to-gray-600',
    boxBorder: 'border-slate-200'
  },
  violet: { 
    bg: 'bg-violet-500', 
    text: 'text-violet-700', 
    border: 'border-violet-500', 
    light: 'bg-violet-50',
    iconBg: 'bg-violet-100',
    gradient: 'from-violet-500 to-purple-600',
    boxBorder: 'border-violet-200'
  },
};

// --- BASE INFOGRAPHIC COMPONENTS ---

export const InfographicContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="my-10">
      <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-2 border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
              <div className="bg-white px-6 py-2 rounded-full shadow-md border border-gray-100">
                <span className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 tracking-wide font-poppins uppercase">
                    {title}
                </span>
              </div>
          </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {children}
      </div>
    </div>
);

export const InfoCard: React.FC<{ bgColor: string; borderColor: string; title: string; subtitle: string; icon: React.ReactNode; children: React.ReactNode }> = ({ bgColor, borderColor, title, subtitle, icon, children }) => {
    const colorKey = getColorFromClasses(bgColor, borderColor);
    const theme = colorStyles[colorKey] || colorStyles.blue;

    return (
        <div className={`group relative flex flex-col h-full bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden border-t-[6px] ${theme.border} hover:-translate-y-1`}>
             {/* Decorative top pattern */}
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full opacity-[0.08] bg-gradient-to-br ${theme.gradient}`}></div>
            
            <div className="p-8 flex-1 flex flex-col items-center">
                <div className={`mb-5 p-4 rounded-full ${theme.iconBg} ${theme.text} shadow-sm group-hover:scale-110 transition-transform duration-500 ring-4 ring-white`}>
                    {icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 font-poppins text-center mb-1">{title}</h4>
                <p className="text-sm text-gray-500 font-semibold text-center mb-8 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">{subtitle}</p>
                <div className="w-full flex-1 flex flex-col items-center space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Arrow = ({ color = 'blue' }) => {
   const colorMap: Record<string, string> = {
       blue: 'text-blue-400',
       emerald: 'text-emerald-400',
       amber: 'text-amber-400',
       slate: 'text-slate-400',
       rose: 'text-rose-400',
       violet: 'text-violet-400'
   };
   const textColor = colorMap[color] || 'text-gray-400';

   return (
    <div className={`my-4 ${textColor} animate-bounce`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
    </div>
   );
};

export const VerbBox: React.FC<{ text: string; color: string }> = ({ text, color }) => {
    const colorKey = getColorFromClasses(color, '');
    const theme = colorStyles[colorKey] || colorStyles.blue;
    
    return (
        <div className={`w-full bg-gradient-to-br ${theme.light} to-white p-5 rounded-xl border ${theme.boxBorder} shadow-sm text-center relative overflow-hidden group hover:shadow-md transition-all duration-300`}>
             {/* Background stripe for style */}
            <div className={`absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b ${theme.gradient}`}></div>
            <span className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-[0.2em] mb-1.5">REQUIRES</span>
            <p className={`font-mono text-lg md:text-xl font-black ${theme.text}`}>{text}</p>
        </div>
    );
};

export const ExampleBox: React.FC<{ text: React.ReactNode; color: string }> = ({ text, color }) => {
    const colorKey = getColorFromClasses(color, '');
    const theme = colorStyles[colorKey] || colorStyles.blue;

    return (
        <div className="mt-6 w-full bg-gray-50 p-5 rounded-xl border border-gray-100 relative group hover:bg-white hover:shadow-md transition-all duration-300">
            <div className={`absolute top-4 left-0 w-1 h-8 rounded-r bg-gradient-to-b ${theme.gradient}`}></div>
            <p className="text-xs font-bold text-gray-400 uppercase mb-1 ml-3 tracking-wide">Example</p>
            <p className="text-gray-700 font-medium text-lg leading-relaxed ml-3">{text}</p>
        </div>
    );
};