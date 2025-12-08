
import type { Rule } from '../../types.ts';

export const rule8: Rule = {
  id: 8,
  name: "Rule 8: Additive/Parenthetical Phrases",
  formula: "S1, (along with/as well as S2), ... ➜ Verb agrees with S1",
  explanation: "Certain phrases appear to add more people or things to the subject, but grammatically, they do not change the number of the subject. These are called additive or parenthetical phrases.\n\nCommon Phrases: along with, as well as, together with, including, besides, accompanied by.\n\nThe Rule: Ignore these phrases. The verb agrees only with the first (main) subject.\nExample: 'The teacher, (along with the students), is going.'",
  examples: [
    {
      sentence: "The teacher, along with the students, is going to the museum.",
      subject: "The teacher",
      verb: "is",
      reason: "The verb 'is' agrees with 'The teacher'. The additive phrase is ignored."
    },
    {
      sentence: "My friends, as well as my brother, are coming.",
      subject: "My friends",
      verb: "are",
      reason: "The main subject 'My friends' is plural, so the verb 'are' is used."
    },
    {
      sentence: "The captain, together with the crew, was saved.",
      subject: "The captain",
      verb: "was",
      reason: "The singular subject 'The captain' requires the singular verb 'was'."
    }
  ]
};
