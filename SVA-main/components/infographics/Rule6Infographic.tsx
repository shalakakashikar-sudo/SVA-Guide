
import React from 'react';
import { InfographicContainer, InfoCard, Arrow, ForkIcon } from './InfographicComponents.tsx';

export const Rule6Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing the Proximity Rule">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-amber-100" borderColor="border-amber-300" title="The Proximity Rule" subtitle="OR / NOR / BUT ALSO" icon={<ForkIcon />}>
                <p className="text-sm text-amber-800 font-semibold mb-2">Verb agrees with the CLOSEST subject</p>
                <Arrow color="amber" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">The students or the <span className="font-bold text-amber-800">teacher</span> <span className="font-bold text-amber-800 underline">knows</span>.</p>
                    <p className="text-gray-600">The teacher or the <span className="font-bold text-amber-800">students</span> <span className="font-bold text-amber-800 underline">know</span>.</p>
                    <div className="border-t border-gray-200 my-1"></div>
                    <p className="text-gray-600">Not only the players but also the <span className="font-bold text-amber-800">coach</span> <span className="font-bold text-amber-800 underline">is</span> here.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);
