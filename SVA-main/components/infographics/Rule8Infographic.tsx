
import React from 'react';
import { InfographicContainer } from './InfographicComponents.tsx';

export const Rule8Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Additive Phrases">
         <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-t-4 border-amber-500 p-8 text-center">
                <div className="mb-8">
                     <p className="font-bold text-xl md:text-2xl text-slate-800 font-poppins leading-relaxed">
                        The <span className="text-amber-600 border-b-2 border-amber-500">teacher</span>
                        <span className="text-gray-400 mx-2 px-2 bg-gray-100 rounded-lg decoration-clone relative group cursor-help">
                            , along with the students,
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Treat as Parentheses</span>
                        </span>
                         <span className="text-amber-600 border-b-2 border-amber-500">is</span> here.
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-2 md:space-x-8 my-6 text-gray-300">
                    <div className="text-center">
                        <div className="text-5xl mb-2">👤</div>
                        <div className="text-xs font-bold text-amber-600 uppercase">Subject</div>
                    </div>
                    
                    <div className="text-4xl font-light flex flex-col items-center">
                        <span>( ... )</span>
                        <span className="text-[10px] uppercase tracking-widest mt-1">Ignore</span>
                    </div>

                    <div className="text-center">
                        <div className="text-5xl mb-2">✅</div>
                        <div className="text-xs font-bold text-amber-600 uppercase">Verb</div>
                    </div>
                </div>
                
                <p className="text-slate-600 bg-amber-50 p-4 rounded-xl border border-amber-100 inline-block max-w-lg">
                    Additive phrases like <em>"along with"</em>, <em>"as well as"</em>, and <em>"including"</em> are parenthetical. 
                    The verb agrees <strong>only</strong> with the first subject.
                </p>
            </div>
        </div>
    </InfographicContainer>
);
