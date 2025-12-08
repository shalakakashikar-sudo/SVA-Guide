import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, ClockIcon } from './InfographicComponents.tsx';

export const Rule14Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Measurements as Units">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Measurements as a Single Unit" subtitle="Money, Time, Distance, Weight" icon={<ClockIcon />}>
                <p className="text-sm text-blue-600 my-2">These are treated as one total amount.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>Ten dollars <span className="font-bold text-blue-800">is</span> a high price.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
