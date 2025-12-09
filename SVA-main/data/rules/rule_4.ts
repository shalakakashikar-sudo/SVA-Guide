
import type { Rule } from '../../types.ts';

export const rule4: Rule = {
  id: 4,
  name: "Rule 4: Compound Subjects Joined by AND",
  formula: "S1 + AND + S2 ➜ Plural Verb | Single Unit Concept ➜ Singular Verb",
  explanation: "When two or more subjects are connected by 'and', they usually form a plural subject because they refer to more than one thing.\n\n• General Rule: Use a Plural Verb (e.g., 'Mom and Dad work late').\n\n• Exception (Single Unit): If the two nouns combined represent a single idea, person, or dish, treat the subject as Singular.\n\n• Common Single Units: 'Bread and butter', 'Fish and chips', 'The owner and manager' (referring to one person).",
  examples: [
    {
        sentence: "My mom and dad work late.",
        subject: "My mom and dad",
        verb: "work",
        reason: "Two distinct subjects ('mom' and 'dad') joined by 'and' form a plural subject, requiring the plural verb 'work'."
    },
    {
        sentence: "Time and effort are needed to succeed.",
        subject: "Time and effort",
        verb: "are",
        reason: "'Time' and 'effort' are two separate concepts joined by 'and', making the subject plural and requiring the verb 'are'."
    },
    {
        sentence: "The owner and manager is speaking.",
        subject: "The owner and manager",
        verb: "is",
        reason: "Since 'the owner and manager' refers to a single person holding both roles, the subject is singular and takes the verb 'is'."
    },
    {
        sentence: "The owner and the manager are speaking.",
        subject: "The owner and the manager",
        verb: "are",
        reason: "The repetition of 'the' before 'manager' signals that 'the owner' and 'the manager' are two different people. This creates a plural subject, which requires the plural verb 'are'."
    },
    {
        sentence: "Bread and butter is a staple.",
        subject: "Bread and butter",
        verb: "is",
        reason: "'Bread and butter' is treated as a single conceptual unit or dish, so it takes the singular verb 'is'."
    },
    {
        sentence: "Macaroni and cheese is a popular comfort food.",
        subject: "Macaroni and cheese",
        verb: "is",
        reason: "Like 'fish and chips', 'macaroni and cheese' refers to a single dish, making it a singular subject."
    },
    {
        sentence: "Fish and chips is popular in England.",
        subject: "Fish and chips",
        verb: "is",
        reason: "'Fish and chips' is a single dish, a singular concept, requiring the singular verb 'is'."
    }
  ]
};
