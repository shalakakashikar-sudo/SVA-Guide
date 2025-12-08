import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, PersonIcon, GroupIcon } from './InfographicComponents.tsx';

export const Rule1Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing The General Rule">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Singular Subject" subtitle="(He, She, It, The cat)" icon={<PersonIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Verb + s/es" color="blue" />
            <ExampleBox color="blue" text={<>The cat <span className="font-bold text-blue-800">runs</span>.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Plural / I / You" subtitle="(They, We, I, You, The cats)" icon={<GroupIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Base Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>The cats <span className="font-bold text-emerald-800">run</span>.</>} />
        </InfoCard>
    </InfographicContainer>
);
