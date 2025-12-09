

import type { Rule } from '../../types.ts';

export const rule19: Rule = {
  id: 19,
  name: "Rule 19: Formal Inversion",
  formula: "Negative Adverb + Aux + Subject ➜ Verb agrees with Subject",
  explanation: "When a sentence begins with a negative or restrictive adverb for emphasis, the subject and the auxiliary verb switch places (Inversion).\n\n• Common Negative Adverbs: Never, Rarely, Seldom, Hardly, Scarcely, Not only.\n\n• The Rule: Even though the order is flipped, the verb must still agree with the Subject that follows it.\n\n• Example: 'Rarely have I seen' (Agreeing with 'I').",
  examples: [
    {
      sentence: "Rarely have I seen such beauty.",
      subject: "I",
      verb: "have",
      reason: "Inverted structure: 'have' agrees with 'I'."
    },
    {
      sentence: "Never does he miss a class.",
      subject: "he",
      verb: "does",
      reason: "Inverted structure: 'does' agrees with 'he'."
    },
    {
      sentence: "Seldom do they complain.",
      subject: "they",
      verb: "do",
      reason: "Inverted structure: 'do' agrees with 'they'."
    }
  ]
};