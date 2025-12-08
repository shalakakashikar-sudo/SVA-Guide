import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, TrophyIcon, GroupIcon } from './InfographicComponents.tsx';

export const Rule12Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Collective Nouns">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Acting as One Unit" subtitle="(e.g., team, committee, family)" icon={<TrophyIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>The team <span className="font-bold text-blue-800">is</span> winning.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Acting as Individuals" subtitle="(e.g., arguing, debating)" icon={<GroupIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>The faculty <span className="font-bold text-emerald-800">are</span> debating.</>} />
        </InfoCard>
    </InfographicContainer>
);
