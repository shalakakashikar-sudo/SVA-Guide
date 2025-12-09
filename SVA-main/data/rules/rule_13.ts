
import type { Rule } from '../../types.ts';

export const rule13: Rule = {
  id: 13,
  name: "Rule 13: Verbal Phrases and Gerunds",
  formula: "Gerund/Infinitive (as subject) ➜ Singular Verb",
  explanation: "When a verb form acts as the subject of a sentence, it is treated as a singular noun.\n\n• Gerunds: Verbs ending in -ing (e.g., 'Swimming').\n• Infinitives: Verbs preceded by to (e.g., 'To read').\n\n• The Rule: A single gerund or infinitive phrase takes a Singular Verb (e.g., 'Swimming is fun', 'To learn requires patience').\n\n• Note: If two verbal phrases are joined by 'and', the subject becomes plural.",
  examples: [
    {
      sentence: "Swimming is fun.",
      subject: "Swimming",
      verb: "is",
      reason: "The gerund 'Swimming' is a singular subject."
    },
    {
      sentence: "To err is human.",
      subject: "To err",
      verb: "is",
      reason: "The infinitive 'To err' is a singular subject."
    },
    {
      sentence: "Reading books expands your mind.",
      subject: "Reading books",
      verb: "expands",
      reason: "The subject is the act of 'Reading' (singular), not 'books'."
    }
  ]
};
