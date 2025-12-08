import React from 'react';
import { InfographicContainer, InfoCard, Arrow, ExampleBox, BackwardArrowIcon } from './InfographicComponents.tsx';

export const Rule9Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Inverted Sentences">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-slate-100" borderColor="border-slate-300" title="There / Here" subtitle="These words are never the subject." icon={<BackwardArrowIcon />}>
                <Arrow color="slate" />
                <p className="text-slate-600 my-2">The verb agrees with the <span className="font-bold">true subject</span> that follows it.</p>
                <ExampleBox color="slate" text={<>There <span className="font-bold text-slate-800 underline">are</span> three <span className="font-bold text-slate-800">cookies</span>.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
