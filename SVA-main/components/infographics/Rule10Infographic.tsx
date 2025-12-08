import React from 'react';
import { InfographicContainer, InfoCard, Arrow, VerbBox, ExampleBox, GroupIcon, BoxIcon } from './InfographicComponents.tsx';

export const Rule10Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Singular Indefinite Pronouns">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Pronouns like..." subtitle="Everyone, Nobody, Something, Each" icon={<><GroupIcon /><BoxIcon /></>}>
                <p className="text-sm text-blue-600 my-2">These pronouns group everyone/everything into one singular unit.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>Everyone <span className="font-bold text-blue-800">has</span> a book.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);
