import React from 'react';
import { InfographicContainer, InfoCard, Arrow, LinkIcon } from './InfographicComponents.tsx';

export const Rule22Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Agreement of Person">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-slate-100" borderColor="border-slate-300" title="Matching the Antecedent's Person" subtitle="The verb matches who the pronoun refers to." icon={<LinkIcon />}>
                <Arrow color="slate" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">It is <span className="font-bold">I</span> who <span className="font-bold text-slate-800">am</span> responsible.</p>
                    <p className="text-gray-600">It is <span className="font-bold">you</span> who <span className="font-bold text-slate-800">are</span> mistaken.</p>
                    <p className="text-gray-600">It is <span className="font-bold">he</span> who <span className="font-bold text-slate-800">is</span> responsible.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);
