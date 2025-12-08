
import type { Rule } from '../../types.ts';

export const rule21: Rule = {
  id: 21,
  name: "Rule 21: Nominal Clauses",
  formula: "Clause as Subject ➜ Singular Verb",
  explanation: "A nominal clause (noun clause) is a group of words that functions as the subject of a sentence. These clauses often begin with words like What, How, That, or Why.\n\nThe Rule: Since the entire clause represents a single idea, fact, or question, it is treated as a Singular Subject.\nExample: '[What you said] is true.' (The thing you said is true).",
  examples: [
    {
      sentence: "What you said is true.",
      subject: "What you said",
      verb: "is",
      reason: "The clause is a single concept (singular)."
    },
    {
      sentence: "How he escaped remains a mystery.",
      subject: "How he escaped",
      verb: "remains",
      reason: "The clause is the subject."
    },
    {
      sentence: "That he lied was obvious.",
      subject: "That he lied",
      verb: "was",
      reason: "The clause is the subject."
    }
  ]
};
