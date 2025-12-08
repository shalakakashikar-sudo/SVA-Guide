import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, ScatterIcon, HashIcon } from './InfographicComponents.tsx';

export const Rule20Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing 'A Number' vs 'The Number'">
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="'A number of...'" subtitle="(Means 'many')" icon={<ScatterIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>A number of people <span className="font-bold text-emerald-800">have</span> written.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="'The number of...'" subtitle="(Refers to a single figure)" icon={<HashIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>The number of applicants <span className="font-bold text-blue-800">is</span> limited.</>} />
        </InfoCard>
    </InfographicContainer>
);
