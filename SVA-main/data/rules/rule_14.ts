
import type { Rule } from '../../types.ts';

export const rule14: Rule = {
  id: 14,
  name: "Rule 14: Measurements, Time, and Money",
  formula: "Amount (Time, Distance, Money, Weight) ➜ (Treated as ONE Unit) ➜ Singular Verb",
  explanation: "Measurements involving Money, Time, Distance, and Weight are generally treated as a single unit or quantity, rather than individual items.\n\n• The Rule: Even if the noun appears plural (e.g., 'Ten dollars', 'Five miles'), the verb is Singular because it represents one total amount.\n\n• Example: 'Five dollars is a good price.' (Meaning: This amount of money is a good price).",
  examples: [
    {
      sentence: "Ten dollars is a high price to pay.",
      subject: "Ten dollars",
      verb: "is",
      reason: "The money is treated as a single sum."
    },
    {
      sentence: "Five years is the maximum sentence for that offense.",
      subject: "Five years",
      verb: "is",
      reason: "The time period is treated as a single unit."
    },
    {
      sentence: "1267 kilometres is too long for us to travel.",
      subject: "1267 kilometres",
      verb: "is",
      reason: "The distance is treated as a single unit."
    }
  ]
};
