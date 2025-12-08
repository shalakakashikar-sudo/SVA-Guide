
import type { Rule } from '../../types.ts';

export const rule22: Rule = {
  id: 22,
  name: "Rule 22: Agreement of Person",
  formula: "It is I who... ➜ am | It is You who... ➜ are | It is He who... ➜ is",
  explanation: "In sentences beginning with 'It is [Pronoun] who...', the relative pronoun 'who' acts as the subject of the following verb. The verb must agree in person (1st, 2nd, or 3rd) with the pronoun that 'who' refers to.\n\nThe Rule:\n*   'It is I who am...' (Matches 'I am')\n*   'It is You who are...' (Matches 'You are')\n*   'It is He who is...' (Matches 'He is')",
  examples: [
    {
        sentence: "It is I who am responsible.",
        subject: "who",
        verb: "am",
        reason: "The verb 'am' agrees in person with its antecedent, 'I' (first-person singular)."
    },
    {
        sentence: "I who am your friend should stand by you.",
        subject: "who",
        verb: "am",
        reason: "The verb in the relative clause, 'am', agrees with the antecedent 'I'."
    },
    {
        sentence: "It is you who are making the difference.",
        subject: "who",
        verb: "are",
        reason: "The verb 'are' agrees with the second-person antecedent 'you'."
    },
    {
        sentence: "It is they who are to blame.",
        subject: "who",
        verb: "are",
        reason: "The verb 'are' agrees with the plural antecedent 'they'."
    },
    {
        sentence: "It is you who need to finish the work.",
        subject: "who",
        verb: "need",
        reason: "The verb 'need' agrees with the antecedent 'you', which takes the base form of the verb."
    },
    {
        sentence: "It is he who is responsible.",
        subject: "who",
        verb: "is",
        reason: "The verb 'is' agrees with the third-person singular antecedent 'he'."
    }
  ]
};
