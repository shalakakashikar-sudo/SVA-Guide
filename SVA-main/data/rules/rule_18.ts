
import type { Rule } from '../../types.ts';

export const rule18: Rule = {
  id: 18,
  name: "Rule 18: The Subjunctive Mood",
  formula: "If / I wish + Subject ➜ were",
  explanation: "The Subjunctive Mood is used to express wishes, hypothetical situations, or conditions that are contrary to fact. In these specific cases, standard subject-verb agreement rules change.\n\nThe Rule: For the verb 'to be', always use 'Were' for ALL subjects (I, You, He, She, It, We, They). Do not use 'was' in these hypothetical structures.\n\nExample: 'If I were you...' (I am not you) or 'I wish he were here.'",
  examples: [
    {
      sentence: "If I were you, I would accept.",
      subject: "I",
      verb: "were",
      reason: "Hypothetical situation requires subjunctive."
    },
    {
      sentence: "I wish he were here.",
      subject: "he",
      verb: "were",
      reason: "Wish statement requires subjunctive."
    },
    {
      sentence: "She acts as if she were the boss.",
      subject: "she",
      verb: "were",
      reason: "Contrary-to-fact condition."
    }
  ]
};
