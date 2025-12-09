

import type { Rule } from '../../types.ts';

export const rule2: Rule = {
  id: 2,
  name: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
  formula: "Subject ➜ Auxiliary Verb (matches number & person)",
  explanation: "Primary auxiliary verbs help form tenses, negatives, and questions. Unlike regular verbs, they change form significantly to match the subject.\n\n• To Be (am/is/are):\n   - Use 'am' for 'I'.\n   - Use 'is' for singular subjects (He, She, It).\n   - Use 'are' for plural subjects (We, They) and 'You'.\n\n• To Have (has/have):\n   - Use 'has' for singular subjects.\n   - Use 'have' for plural subjects, 'I', and 'You'.\n\n• To Do (does/do):\n   - Use 'does' for singular subjects.\n   - Use 'do' for plural subjects, 'I', and 'You'.",
  examples: [
    {
        sentence: "She is a talented musician.",
        subject: "She",
        verb: "is",
        reason: "'She' is a singular subject, requiring the singular auxiliary verb 'is'."
    },
    {
        sentence: "The dogs are barking loudly.",
        subject: "dogs",
        verb: "are",
        reason: "'dogs' is a plural subject, requiring the plural auxiliary verb 'are'."
    },
    {
        sentence: "Swetha has a pet dog.",
        subject: "Swetha",
        verb: "has",
        reason: "'Swetha' is a singular subject, so it requires the singular auxiliary verb 'has'."
    },
    {
        sentence: "I have a younger brother.",
        subject: "I",
        verb: "have",
        reason: "The first-person pronoun 'I' takes the auxiliary verb 'have'."
    },
    {
        sentence: "He does not understand the concept.",
        subject: "He",
        verb: "does",
        reason: "'He' is a singular, third-person pronoun, requiring the singular auxiliary 'does'."
    },
    {
        sentence: "They do not have the necessary equipment.",
        subject: "They",
        verb: "do",
        reason: "'They' is a plural subject, so it takes the plural auxiliary verb 'do'."
    },
    {
        sentence: "Rarely does he arrive late.",
        subject: "he",
        verb: "does",
        reason: "In this inverted sentence, the auxiliary 'does' agrees with the singular subject 'he'."
    }
  ]
};