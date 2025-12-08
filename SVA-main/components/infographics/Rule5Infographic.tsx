import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, MagnifyIcon } from './InfographicComponents.tsx';

export const Rule5Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing 'Each' and 'Every'">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Each / Every" subtitle="(Focuses on individuals in a group)" icon={<MagnifyIcon />}>
                <p className="text-sm text-blue-600 my-2">These words make any subject singular.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>Each student <span className="font-bold text-blue-800">has</span> a locker.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
