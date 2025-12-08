import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, ContainerIcon } from './InfographicComponents.tsx';

export const Rule11Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Flexible Quantifiers">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="With Uncountable Nouns" subtitle="(e.g., water, pie, sugar)" icon={<ContainerIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>Some of the pie <span className="font-bold text-blue-800">has</span> been eaten.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="With Plural Nouns" subtitle="(e.g., cookies, students)" icon={<ContainerIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>All of the cookies <span className="font-bold text-emerald-800">are</span> gone.</>} />
        </InfoCard>
    </InfographicContainer>
);
