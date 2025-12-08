import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, ShieldIcon } from './InfographicComponents.tsx';

export const Rule3Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Modal Verbs">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-slate-100" borderColor="border-slate-300" title="Any Subject" subtitle="(Singular or Plural)" icon={<ShieldIcon />}>
                <p className="text-sm text-slate-600 my-2">The modal verb is like a shield. It never changes.</p>
                <Arrow color="slate" />
                <VerbBox text="Modal + Base Verb" color="slate" />
                <ExampleBox color="slate" text={<>She <span className="font-bold text-slate-800">must go</span>. / They <span className="font-bold text-slate-800">must go</span>.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
