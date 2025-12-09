

import type { Rule } from '../../types.ts';

export const rule10: Rule = {
  id: 10,
  name: "Rule 10: Singular Indefinite Pronouns",
  formula: "Indefinite Pronoun (-one, -body, -thing) ➜ Singular Verb",
  explanation: "Indefinite pronouns that end in -one, -body, or -thing are grammatically Singular, even though they may seem to refer to a group.\n\n• List of Singular Pronouns:\n   - Everyone, Everybody, Everything\n   - Anyone, Anybody, Anything\n   - Someone, Somebody, Something\n   - No one, Nobody, Nothing\n\n• The Rule: Treat these pronouns as singular subjects. (e.g., 'Everyone has a dream').",
  examples: [
    {
      sentence: "Everyone is welcome.",
      subject: "Everyone",
      verb: "is",
      reason: "'Everyone' is a singular indefinite pronoun."
    },
    {
      sentence: "Something smells good.",
      subject: "Something",
      verb: "smells",
      reason: "'Something' is singular, so the verb has an '-s'."
    },
    {
      sentence: "Nobody knows the answer.",
      subject: "Nobody",
      verb: "knows",
      reason: "'Nobody' is always treated as singular."
    }
  ]
};