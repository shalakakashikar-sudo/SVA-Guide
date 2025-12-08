import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, PersonIcon, GroupIcon } from './InfographicComponents.tsx';

export const Rule2Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Auxiliary Verbs">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Singular Subject" subtitle="(She, He, It)" icon={<PersonIcon />}>
            <Arrow color="blue" />
            <VerbBox text="is / has / does" color="blue" />
            <ExampleBox color="blue" text={<>She <span className="font-bold text-blue-800">is</span> talented.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Plural / I / You" subtitle="(They, We, I, You)" icon={<GroupIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="are / have / do" color="emerald" />
            <ExampleBox color="emerald" text={<>They <span className="font-bold text-emerald-800">are</span> barking.</>} />
        </InfoCard>
    </InfographicContainer>
);
