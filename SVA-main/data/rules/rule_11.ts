

import type { Rule } from '../../types.ts';

export const rule11: Rule = {
  id: 11,
  name: "Rule 11: Flexible Quantifiers",
  formula: "Quantifier + Plural Noun ➜ Plural | Quantifier + Uncountable ➜ Singular",
  explanation: "Certain quantifiers (words indicating amount) can be Singular or Plural depending on the noun they refer to. These include All, Some, Most, None, A lot, and fractions like Half.\n\n• The Rule: Look at the noun in the 'of' phrase:\n   1. Uncountable Noun: Use a Singular Verb (e.g., 'All of the water is gone').\n   2. Plural Countable Noun: Use a Plural Verb (e.g., 'All of the cookies are gone').",
  examples: [
    {
      sentence: "All of the cake is gone.",
      subject: "All",
      verb: "is",
      reason: "'Cake' is uncountable/singular, so 'All' is treated as singular."
    },
    {
      sentence: "All of the cookies are gone.",
      subject: "All",
      verb: "are",
      reason: "'Cookies' is plural, so 'All' is treated as plural."
    },
    {
      sentence: "Some of the water was spilled.",
      subject: "Some",
      verb: "was",
      reason: "'Water' is singular, requiring a singular verb."
    }
  ]
};