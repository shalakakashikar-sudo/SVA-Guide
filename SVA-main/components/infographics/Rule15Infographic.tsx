import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, BookIcon } from './InfographicComponents.tsx';

export const Rule15Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Tricky Singular Nouns">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Nouns Ending in '-s'" subtitle="news, physics, measles, mumps" icon={<BookIcon />}>
                <p className="text-sm text-blue-600 my-2">They look plural, but are treated as singular.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>The news <span className="font-bold text-blue-800">is</span> on at six.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
