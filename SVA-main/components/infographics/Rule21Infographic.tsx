import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, BoxIcon } from './InfographicComponents.tsx';

export const Rule21Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Nominal Clauses as Subjects">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Clause as a Single Subject" subtitle="(what, how, whatever...)" icon={<BoxIcon />}>
                <p className="text-sm text-blue-600 my-2">The entire clause is treated as one abstract idea.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>[<span className="font-bold">What you said</span>] <span className="font-bold text-blue-800">was</span> interesting.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
