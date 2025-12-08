
import type { Rule } from '../../types.ts';

export const rule9: Rule = {
  id: 9,
  name: "Rule 9: Inverted Sentences (There/Here)",
  formula: "There/Here + Verb ... ➜ Verb agrees with Real Subject",
  explanation: "In sentences beginning with 'Here' or 'There', the subject is placed after the verb. 'Here' and 'There' are adverbs of place and are never the subject.\n\nThe Rule: Look ahead after the verb to find the true subject, then make the verb agree with it.\n*   'There is a cat.' (Singular subject 'cat')\n*   'There are two cats.' (Plural subject 'cats')",
  examples: [
    {
      sentence: "There is a cat in the garden.",
      subject: "a cat",
      verb: "is",
      reason: "The true subject 'a cat' is singular, so the verb is 'is'."
    },
    {
      sentence: "There are many reasons for this.",
      subject: "many reasons",
      verb: "are",
      reason: "The true subject 'many reasons' is plural, so the verb is 'are'."
    },
    {
      sentence: "Here come the buses.",
      subject: "the buses",
      verb: "come",
      reason: "The subject 'the buses' is plural, so the verb is 'come'."
    }
  ]
};
