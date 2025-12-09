
import type { Rule } from '../../types.ts';

export const rule20: Rule = {
  id: 20,
  name: "Rule 20: A Number vs The Number",
  formula: "'A number' ➜ Plural | 'The number' ➜ Singular",
  explanation: "The article ('A' or 'The') before the word 'number' determines whether the verb is singular or plural.\n\n• 'A number of...': This is an idiom that means 'many' or 'several'. Since it refers to a group of multiple items, it takes a Plural Verb.\n\n• 'The number of...': This refers to the specific arithmetical figure or total count. Since there is only one total, it is treated as a single unit and takes a Singular Verb.",
  examples: [
    {
      sentence: "A number of students are absent.",
      subject: "A number",
      verb: "are",
      reason: "'A number' means many (plural)."
    },
    {
      sentence: "The number of students is decreasing.",
      subject: "The number",
      verb: "is",
      reason: "'The number' refers to the count itself (singular)."
    }
  ]
};
