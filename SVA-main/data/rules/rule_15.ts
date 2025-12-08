
import type { Rule } from '../../types.ts';

export const rule15: Rule = {
  id: 15,
  name: "Rule 15: Nouns Plural in Form but Singular in Meaning",
  formula: "Noun (Academic Subjects, Diseases, News) ➜ Singular Verb",
  explanation: "Certain nouns end in the letter 's' but refer to a single thing, field of study, or concept. These nouns are grammatically Singular.\n\nCommon Examples:\n1. Academic Subjects: Mathematics, Physics, Economics, Civics, Linguistics, Statistics.\n2. Diseases: Measles, Mumps, Diabetes.\n3. Others: News, Billiards, Gymnastics, Politics.\n\nExample: 'The news is surprising.'",
  examples: [
    {
      sentence: "The news is on at six.",
      subject: "The news",
      verb: "is",
      reason: "'News' is always singular."
    },
    {
      sentence: "Mathematics is my favorite subject.",
      subject: "Mathematics",
      verb: "is",
      reason: "Academic subjects ending in -s are singular."
    },
    {
      sentence: "Measles is a contagious disease.",
      subject: "Measles",
      verb: "is",
      reason: "Diseases ending in -s are often treated as singular."
    }
  ]
};
