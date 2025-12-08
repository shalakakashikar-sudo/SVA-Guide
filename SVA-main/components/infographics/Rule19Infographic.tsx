import React from 'react';
import { InfographicContainer, InfoCard, Arrow, SwapIcon } from './InfographicComponents.tsx';

export const Rule19Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Formal Inversion">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-amber-100" borderColor="border-amber-300" title="Negative Adverb Start" subtitle="(Never, Seldom, Rarely...)" icon={<SwapIcon />}>
                <p className="text-sm text-amber-600 my-2">The subject and auxiliary verb swap places.</p>
                <Arrow color="amber" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">Normal: He <span className="font-bold">does</span> rarely arrive late.</p>
                    <p className="text-gray-600">Inverted: Rarely <span className="font-bold text-amber-800">does he</span> arrive late.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);
