

import type { Rule } from '../../types.ts';

export const rule17: Rule = {
  id: 17,
  name: "Rule 17: Relative Pronouns and Antecedents",
  formula: "Antecedent + who/that ➜ Verb agrees with Antecedent",
  explanation: "Relative pronouns like Who, Which, and That connect a descriptive clause to a noun. These pronouns do not have a number of their own; instead, they adopt the number of the noun immediately before them, known as the Antecedent.\n\n• If the Antecedent is Singular: The verb in the relative clause is Singular (e.g., 'The student who studies...').\n\n• If the Antecedent is Plural: The verb in the relative clause is Plural (e.g., 'The students who study...').",
  examples: [
    {
      sentence: "He is the one who helps me.",
      subject: "who",
      verb: "helps",
      reason: "'Who' refers to 'one' (singular)."
    },
    {
      sentence: "We are the people who help you.",
      subject: "who",
      verb: "help",
      reason: "'Who' refers to 'people' (plural)."
    },
    {
      sentence: "It is I who am sorry.",
      subject: "who",
      verb: "am",
      reason: "'Who' refers to 'I'."
    }
  ]
};