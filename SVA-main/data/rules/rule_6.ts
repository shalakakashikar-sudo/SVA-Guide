

import type { Rule } from '../../types.ts';

export const rule6: Rule = {
  id: 6,
  name: "Rule 6: Correlative Conjunctions - Proximity Rule",
  formula: "S1 • or / nor / but also • S2 ➜ Verb agrees with S2 (Nearest)",
  explanation: "When compound subjects are joined by specific conjunctions, the verb agrees with the subject that is **closest** to it (the nearest subject).\n\n• Applies to:\n   - Or / Nor\n   - Either... Or\n   - Neither... Nor\n   - Not only... But also\n\n• The Rule:\n   - Closest Subject Singular ➜ Use a Singular Verb.\n   - Closest Subject Plural ➜ Use a Plural Verb.",
  examples: [
    {
      sentence: "Neither the students nor the teacher is ready.",
      subject: "the teacher",
      verb: "is",
      reason: "The verb 'is' agrees with the closest subject, 'the teacher' (singular)."
    },
    {
      sentence: "Neither the teacher nor the students are ready.",
      subject: "the students",
      verb: "are",
      reason: "The verb 'are' agrees with the closest subject, 'the students' (plural)."
    },
    {
      sentence: "Not only the players but also the coach is excited.",
      subject: "the coach",
      verb: "is",
      reason: "The verb agrees with 'the coach' because it is closer than 'the players'."
    },
    {
      sentence: "Either the cat or the dogs have eaten the food.",
      subject: "the dogs",
      verb: "have",
      reason: "The verb 'have' agrees with the plural subject 'the dogs', which is closer."
    }
  ]
};