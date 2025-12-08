import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, PersonIcon, PlusIcon, MergeIcon } from './InfographicComponents.tsx';

export const Rule4Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Compound Subjects with 'AND'">
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Two Separate Items" subtitle="(Creates a plural subject)" icon={<><PersonIcon /><PlusIcon /><PersonIcon /></>}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>Mom and Dad <span className="font-bold text-emerald-800">work</span> late.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="One Single Unit" subtitle="(Treated as a singular subject)" icon={<MergeIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>Bread and butter <span className="font-bold text-blue-800">is</span> a staple.</>} />
        </InfoCard>
    </InfographicContainer>
);
