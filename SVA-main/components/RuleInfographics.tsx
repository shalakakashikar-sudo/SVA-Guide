import React from 'react';

// --- ICONS ---
const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);
const GroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);
const HelpingHandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22V9"/>
    </svg>
);
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);
const PlusIcon = () => <span className="text-3xl font-bold text-gray-500">+</span>;
const MergeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8L22 12L18 16"/>
        <path d="M2 12H22"/>
        <path d="M11 2L7 6L11 10"/>
        <path d="M16 18L12 22L8 18"/>
        <path d="M2 6H7C9.20914 6 11 7.79086 11 10V22"/>
    </svg>
);
const MagnifyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);
const ForkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
    </svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
);
const ParenthesesIcon = () => <span className="text-4xl font-bold text-gray-400">( )</span>;
const BackwardArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"/>
        <path d="M12 19l-7-7 7-7"/>
    </svg>
);
const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
);
const ContainerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="M12 2v4"/>
        <path d="M12 12l-4 4"/>
        <path d="M12 12l4-4"/>
    </svg>
);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 2C16.9706 2 21 6.02944 21 11L21 11"/>
        <path d="M12 2L12 2C7.02944 2 3 6.02944 3 11L3 11"/>
        <path d="M12 22V11"/>
        <path d="M7 11H17"/>
        <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11"/>
    </svg>
);
const PuzzleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M12 18v-4"/>
        <path d="M10 16h4"/>
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
    </svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
);
const ScissorsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/>
    </svg>
);
const CloudWishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <path d="M12 12l-2 3h4l-2 3"/>
    </svg>
);
const SwapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l4 4l-4 4"/>
        <path d="M20 7H4"/>
        <path d="M8 21l-4-4l4-4"/>
        <path d="M4 17H20"/>
    </svg>
);
const ScatterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="5" r="2"/>
        <circle cx="12" cy="6" r="1.5"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="12" r="1.5"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="1.5"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="12" cy="18" r="1.5"/>
        <circle cx="19" cy="19" r="2"/>
    </svg>
);
const HashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9"/>
        <line x1="4" y1="15" x2="20" y2="15"/>
        <line x1="10" y1="3" x2="8" y2="21"/>
        <line x1="16" y1="3" x2="14" y2="21"/>
    </svg>
);

// --- BASE INFOGRAPHIC LAYOUT ---
const InfographicContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="my-8 p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center font-poppins">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
        {children}
      </div>
    </div>
);
const InfoCard: React.FC<{ bgColor: string; borderColor: string; title: string; subtitle: string; icon: React.ReactNode; children: React.ReactNode }> = ({ bgColor, borderColor, title, subtitle, icon, children }) => (
    <div className={`${bgColor} p-4 rounded-xl border-2 ${borderColor} text-center`}>
        <div className="flex justify-center mb-2">{icon}</div>
        <h4 className={`font-bold text-lg text-${borderColor.split('-')[1]}-800 font-poppins`}>{title}</h4>
        <p className={`text-sm text-${borderColor.split('-')[1]}-700`}>{subtitle}</p>
        {children}
    </div>
);
const Arrow = ({ color = 'blue' }) => <div className={`text-4xl my-3 text-${color}-400`}>↓</div>;
const VerbBox: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <div className="bg-white p-3 rounded-lg shadow-inner">
        <p className={`font-mono font-bold text-${color}-900`}>{text}</p>
    </div>
);
const ExampleBox: React.FC<{ text: React.ReactNode; color: string }> = ({ text, color }) => (
    <div className={`mt-4 bg-white p-3 rounded-lg border-l-4 border-${color}-500 text-left shadow-sm`}>
        <p className="font-semibold text-gray-700">Example:</p>
        <p className="text-gray-600">{text}</p>
    </div>
);


// --- RULE INFOGRAPHICS ---

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

export const Rule5Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing 'Each' and 'Every'">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Each / Every" subtitle="(Focuses on individuals in a group)" icon={<MagnifyIcon />}>
                <p className="text-sm text-blue-600 my-2">These words make any subject singular.</p>
                <Arrow color="blue" />
                <VerbBox text="Singular Verb" color="blue" />
                <ExampleBox color="blue" text={<>Each student <span className="font-bold text-blue-800">has</span> a locker.</>} />
            </InfoCard>
        </div>
    </InfographicContainer>
);

export const Rule6Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing the Proximity Rule (OR / NOR)">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-amber-100" borderColor="border-amber-300" title="The Proximity Rule" subtitle="Verb agrees with the closest subject" icon={<ForkIcon />}>
                <Arrow color="amber" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">The students or the <span className="font-bold text-amber-800">teacher</span> <span className="font-bold text-amber-800 underline">knows</span>.</p>
                    <p className="text-gray-600">The teacher or the <span className="font-bold text-amber-800">students</span> <span className="font-bold text-amber-800 underline">know</span>.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);

export const Rule7Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Intervening Phrases">
        <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">list</span> <span className="text-gray-400">of items</span> <span className="text-blue-600">is</span> on the table.</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Subject</span>
                <svg width="200" height="50" className="mx-4">
                    <path d="M 10 25 Q 100 -15 190 25" stroke="#3b82f6" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="100" y="15" textAnchor="middle" fill="#9ca3af">ignore this</text>
                </svg>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">The verb must agree with the main subject, ignoring the phrase in the middle.</p>
        </div>
    </InfographicContainer>
);

export const Rule8Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Additive Phrases">
         <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">teacher</span><span className="text-gray-400">, along with the students,</span> <span className="text-blue-600">is</span> here.</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Subject</span>
                <span className="text-4xl text-gray-400 mx-4">( ... )</span>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">Additive phrases are parenthetical. The verb agrees with the first subject only.</p>
        </div>
    </InfographicContainer>
);

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

export const Rule11Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Flexible Quantifiers">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="With Uncountable Nouns" subtitle="(e.g., water, pie, sugar)" icon={<ContainerIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>Some of the pie <span className="font-bold text-blue-800">has</span> been eaten.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="With Plural Nouns" subtitle="(e.g., cookies, students)" icon={<ContainerIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>All of the cookies <span className="font-bold text-emerald-800">are</span> gone.</>} />
        </InfoCard>
    </InfographicContainer>
);

export const Rule12Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Collective Nouns">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Acting as One Unit" subtitle="(e.g., team, committee, family)" icon={<TrophyIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>The team <span className="font-bold text-blue-800">is</span> winning.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Acting as Individuals" subtitle="(e.g., arguing, debating)" icon={<GroupIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>The faculty <span className="font-bold text-emerald-800">are</span> debating.</>} />
        </InfoCard>
    </InfographicContainer>
);

export const Rule13Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Gerunds as Subjects">
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Single Gerund Subject" subtitle="(One activity)" icon={<PuzzleIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<><span className="font-bold">Swimming</span> <span className="font-bold text-blue-800">is</span> fun.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="Two Gerunds with 'AND'" subtitle="(Two activities)" icon={<><PuzzleIcon /><PlusIcon /><PuzzleIcon /></>}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<><span className="font-bold">Reading and writing</span> <span className="font-bold text-emerald-800">are</span> skills.</>} />
        </InfoCard>
    </InfographicContainer>
);

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

export const Rule16Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Paired Items">
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="The Item Itself" subtitle="(scissors, trousers, glasses)" icon={<ScissorsIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>These scissors <span className="font-bold text-emerald-800">are</span> dull.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="With 'A Pair Of...'" subtitle="(The subject becomes 'pair')" icon={<><span className="font-bold text-sm">A pair of</span><ScissorsIcon /></>}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>A pair of scissors <span className="font-bold text-blue-800">is</span> missing.</>} />
        </InfoCard>
    </InfographicContainer>
);

export const Rule17Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Relative Pronouns">
        <div className="md:col-span-2 text-center">
            <p className="font-bold text-lg text-slate-800 font-poppins">The <span className="text-blue-600">cat</span> that <span className="text-blue-600">jumps</span>...</p>
            <div className="flex justify-center items-center my-4">
                <span className="font-bold text-blue-600">Antecedent</span>
                <svg width="200" height="50" className="mx-4">
                    <path d="M 10 25 C 50 5, 150 5, 190 25" stroke="#3b82f6" fill="none" strokeWidth="2" />
                    <text x="100" y="18" textAnchor="middle" fill="#64748b">'that' refers to 'cat'</text>
                    <path d="M 190 25 L 180 20 M 190 25 L 180 30" stroke="#3b82f6" fill="none" strokeWidth="2" />
                </svg>
                <span className="font-bold text-blue-600">Verb</span>
            </div>
            <p className="text-slate-600">The verb agrees with the antecedent that the relative pronoun refers to.</p>
        </div>
    </InfographicContainer>
);

export const Rule18Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing the Subjunctive Mood">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="Wishes / Hypotheticals" subtitle="(Contrary-to-fact situations)" icon={<CloudWishIcon />}>
                <p className="text-sm text-blue-600 my-2">Always use 'were' for past subjunctive, or the base verb for commands.</p>
                <Arrow color="blue" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">I wish my sister <span className="font-bold text-blue-800">were</span> here.</p>
                    <p className="text-gray-600">The doctor insists that she <span className="font-bold text-blue-800">rest</span>.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);

export const Rule19Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing Formal Inversion">
        <div className="md:col-span-2">
            <InfoCard bgColor="bg-amber-100" borderColor="border-amber-300" title="Negative Adverb Start" subtitle="(Never, Seldom, Rarely...)" icon={<SwapIcon />}>
                <p className="text-sm text-amber-600 my-2">The subject and auxiliary verb swap places.</p>
                <Arrow color="amber" />
                <div className="bg-white p-3 rounded-lg shadow-inner text-left space-y-2">
                    <p className="text-gray-600">Normal: He <span className="font-bold">does</span> rarely arrive late.</p>
                    <p className="text-gray-600">Inverted: Rarely <span className="font-bold text-amber-800">does he</span> arrive late.</p>
                </div>
            </InfoCard>
        </div>
    </InfographicContainer>
);

export const Rule20Infographic: React.FC = () => (
    <InfographicContainer title="Visualizing 'A Number' vs 'The Number'">
        <InfoCard bgColor="bg-emerald-100" borderColor="border-emerald-200" title="'A number of...'" subtitle="(Means 'many')" icon={<ScatterIcon />}>
            <Arrow color="emerald" />
            <VerbBox text="Plural Verb" color="emerald" />
            <ExampleBox color="emerald" text={<>A number of people <span className="font-bold text-emerald-800">have</span> written.</>} />
        </InfoCard>
        <InfoCard bgColor="bg-blue-100" borderColor="border-blue-200" title="'The number of...'" subtitle="(Refers to a single figure)" icon={<HashIcon />}>
            <Arrow color="blue" />
            <VerbBox text="Singular Verb" color="blue" />
            <ExampleBox color="blue" text={<>The number of applicants <span className="font-bold text-blue-800">is</span> limited.</>} />
        </InfoCard>
    </InfographicContainer>
);

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
