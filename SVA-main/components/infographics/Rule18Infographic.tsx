import React from 'react';
import { InfographicContainer, InfoCard, Arrow, CloudWishIcon } from './InfographicComponents.tsx';

export const Rule18Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing the Subjunctive Mood">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Wishes / Hypotheticals" subtitle="(Contrary-to-fact situations)" icon={<CloudWishIcon />}>
                <p className="text-sm text-blue-600 my-2">Always use 'were' for past subjunctive, or the base verb for commands.</p>
                <Arrow color="blue" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">I wish my sister <span className="font-bold text-blue-800">were</span> here.</p>
                    <p className="text-gray-600">The doctor insists that she <span className="font-bold text-blue-800">rest</span>.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);
