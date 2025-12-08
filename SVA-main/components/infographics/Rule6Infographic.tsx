import React from 'react';
import { InfographicContainer, InfoCard, Arrow, ForkIcon } from './InfographicComponents.tsx';

export const Rule6Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing the Proximity Rule (OR / NOR)">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-amber-100" borderColor="border-amber-300" title="The Proximity Rule" subtitle="Verb agrees with the closest subject" icon={<ForkIcon />}>
                <Arrow color="amber" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">The students or the <span className="font-bold text-amber-800">teacher</span> <span className="font-bold text-amber-800 underline">knows</span>.</p>
                    <p className="text-gray-600">The teacher or the <span className="font-bold text-amber-800">students</span> <span className="font-bold text-amber-800 underline">know</span>.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);
