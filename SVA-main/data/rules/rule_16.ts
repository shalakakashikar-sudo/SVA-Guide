

import type { Rule } from '../../types.ts';

export const rule16: Rule = {
  id: 16,
  name: "Rule 16: Paired Items",
  formula: "Paired Noun ➜ Plural | 'A pair of' ➜ Singular",
  explanation: "Tools and clothing that consist of two inseparable parts are considered Plural in English. Examples include Scissors, Trousers, Glasses, Jeans, Shorts, and Binoculars.\n\n• The Item itself: Use a Plural Verb (e.g., 'My glasses are broken').\n\n• With 'A Pair': If the noun is preceded by 'A pair of', the subject becomes the singular word 'Pair'. Use a Singular Verb (e.g., 'A pair of glasses is broken').",
  examples: [
    {
      sentence: "My glasses are broken.",
      subject: "My glasses",
      verb: "are",
      reason: "'Glasses' is a plural noun."
    },
    {
      sentence: "A pair of glasses is on the table.",
      subject: "A pair",
      verb: "is",
      reason: "'Pair' is a singular noun."
    },
    {
      sentence: "These scissors are sharp.",
      subject: "These scissors",
      verb: "are",
      reason: "'Scissors' is a plural noun."
    }
  ]
};