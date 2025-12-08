
import type { Rule } from '../../types.ts';

export const rule3: Rule = {
  id: 3,
  name: "Rule 3: Modal Auxiliary Verbs",
  formula: "Any Subject ➜ Modal (can, will...) + Base Verb",
  explanation: "Modal verbs are special auxiliary verbs that express ability, possibility, permission, or obligation. They are unique because they never change form; they do not add -s, -ed, or -ing, regardless of the subject.\n\nCommon Modal Verbs:\nCan, Could, May, Might, Will, Would, Shall, Should, Must.\n\nThe Rule: Always follow a modal verb with the base form of the main verb (e.g., 'He can go', not 'He can goes').",
  examples: [
    {
        sentence: "She must schedule an appointment.",
        subject: "She",
        verb: "must schedule",
        reason: "The modal verb 'must' does not change form. It is followed by the base verb 'schedule', agreeing with the singular subject 'She'."
    },
    {
        sentence: "We will see you tomorrow.",
        subject: "We",
        verb: "will see",
        reason: "The modal 'will' is invariable and is followed by the base verb 'see', even with the plural subject 'We'."
    },
    {
        sentence: "My friend might come.",
        subject: "My friend",
        verb: "might come",
        reason: "The modal verb 'might' stays the same regardless of the subject and is followed by the base verb 'come'."
    },
    {
        sentence: "You should come.",
        subject: "You",
        verb: "should come",
        reason: "Modal verbs like 'should' are invariable and are used with the base form of the main verb."
    },
    {
        sentence: "They can drive.",
        subject: "They",
        verb: "can drive",
        reason: "The modal 'can' does not change for the plural subject 'They' and is followed by the base verb 'drive'."
    },
    {
        sentence: "My daughters may watch television.",
        subject: "My daughters",
        verb: "may watch",
        reason: "The modal verb 'may' remains the same for the plural subject 'My daughters' and is followed by the base verb 'watch'."
    }
  ]
};
