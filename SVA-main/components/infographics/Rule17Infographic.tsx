
import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule17Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Relative Pronouns">
        <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-rose-500 p-8 text-center relative overflow-hidden">
                
                {/* Background decorative arrow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
                     <svg width="300" height="100" viewBox="0 0 300 100">
                        <path d="M 250 50 L 50 50" stroke="currentColor" strokeWidth="20" className="text-rose-500" markerEnd="url(#bgArrow)" />
                     </svg>
                </div>

                <p className="font-bold text-xl md:text-3xl text-slate-800 font-poppins mb-8 relative z-10">
                    The <span className="text-rose-600 bg-rose-50 px-2 rounded">cat</span> that <span className="text-rose-600 bg-rose-50 px-2 rounded">jumps</span>...
                </p>
                
                <div className="flex justify-center items-center my-4 relative z-10">
                    <div className="flex flex-col items-center">
                         <div className="font-bold text-rose-700 text-sm uppercase tracking-wider mb-2">Antecedent</div>
                         <div className="w-4 h-4 bg-rose-500 rounded-full ring-4 ring-rose-100"></div>
                    </div>
                    
                    <div className="mx-4 relative w-48 md:w-64 h-16">
                         <svg width="100%" height="100%" viewBox="0 0 200 60" className="overflow-visible">
                            {/* Connector Line */}
                            <path d="M 10 30 C 60 5, 140 5, 190 30" stroke="#f43f5e" fill="none" strokeWidth="3" strokeLinecap="round" />
                            <path d="M 10 30 L 20 22 M 10 30 L 20 38" stroke="#f43f5e" fill="none" strokeWidth="3" strokeLinecap="round" />
                            
                            {/* Label Tag */}
                            <rect x="60" y="35" width="80" height="20" rx="10" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1" />
                            <text x="100" y="49" textAnchor="middle" className="text-[10px] font-bold fill-rose-600 uppercase">'that' refers to</text>
                        </svg>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="font-bold text-rose-700 text-sm uppercase tracking-wider mb-2">Verb</div>
                        <div className="w-4 h-4 bg-rose-500 rounded-full ring-4 ring-rose-100"></div>
                    </div>
                </div>
                
                <div className="mt-6 text-slate-600 relative z-10">
                    The verb inside the relative clause must agree with the <span className="font-bold text-rose-600">Antecedent</span> (the noun before the pronoun).
                </div>
            </div>
        </div>
    </InfographicContainer>
);
