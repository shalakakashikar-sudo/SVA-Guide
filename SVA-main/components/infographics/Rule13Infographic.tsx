import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, PuzzleIcon, PlusIcon } from './InfographicComponents.tsx';

export const Rule13Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Gerunds as Subjects">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Single Gerund Subject" subtitle="(One activity)" icon={<PuzzleIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<><span className="font-bold">Swimming</span> <span className="font-bold text-blue-800">is</span> fun.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Two Gerunds with 'AND'" subtitle="(Two activities)" icon={<><PuzzleIcon /><PlusIcon /><PuzzleIcon /></>}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<><span className="font-bold">Reading and writing</span> <span className="font-bold text-emerald-800">are</span> skills.</>} />
        </InfoCard>
    </InfographicContainer>
);
