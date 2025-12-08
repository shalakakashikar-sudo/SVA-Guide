import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, ScissorsIcon } from './InfographicComponents.tsx';

export const Rule16Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Paired Items">
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="The Item Itself" subtitle="(scissors, trousers, glasses)" icon={<ScissorsIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>These scissors <span className="font-bold text-emerald-800">are</span> dull.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="With 'A Pair Of...'" subtitle="(The subject becomes 'pair')" icon={<><span className="font-bold text-sm">A pair of</span><ScissorsIcon /></>}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>A pair of scissors <span className="font-bold text-blue-800">is</span> missing.</>} />
        </InfoCard>
    </InfographicContainer>
);
