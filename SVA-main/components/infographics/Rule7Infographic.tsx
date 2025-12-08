
import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule7Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Intervening Phrases">
        <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-blue-500 p-8 text-center">
                <div className="inline-block bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                     <p className="font-bold text-lg md:text-2xl text-slate-800 font-poppins">
                        The <span className="text-blue-600">list</span> <span className="text-gray-400 font-normal opacity-60">of items</span> <span className="text-blue-600">is</span> on the table.
                    </p>
                </div>
               
                <div className="flex justify-center items-center my-6 relative h-24">
                    <div className="flex flex-col items-center z-10">
                         <span className="font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm mb-2">Subject</span>
                         <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <svg width="240" height="60" className="absolute top-6">
                        <path d="M 20 10 Q 120 -30 220 10" stroke="#3b82f6" fill="none" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                            </marker>
                        </defs>
                         <rect x="80" y="-20" width="80" height="24" rx="12" fill="white" />
                        <text x="120" y="-4" textAnchor="middle" className="text-xs font-bold fill-gray-400 uppercase tracking-wide">Ignore</text>
                    </svg>
                    
                     <div className="w-full"></div> {/* Spacer */}

                    <div className="flex flex-col items-center z-10 ml-48">
                        <span className="font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm mb-2">Verb</span>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl text-slate-600 text-sm md:text-base border border-slate-200 inline-block">
                    The verb must agree directly with the <span className="font-bold text-slate-800">main subject</span>, ignoring the prepositional phrase in the middle.
                </div>
            </div>
        </div>
    </InfographicContainer>
);
