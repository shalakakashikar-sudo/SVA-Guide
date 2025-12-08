
import type { Rule } from '../../types.ts';

export const rule12: Rule = {
  id: 12,
  name: "Rule 12: Collective Nouns",
  formula: "Collective Noun (as unit) ➜ Singular | (as individuals) ➜ Plural",
  explanation: "Collective nouns are words that represent a group of people or things (e.g., Team, Family, Committee, Jury, Staff, Audience).\n\nThe Rule:\n1. Acting as a Unit: If the group performs an action together as one entity, use a Singular Verb (e.g., 'The team is winning').\n2. Acting Individually: If the members of the group act separately or disagree, use a Plural Verb (e.g., 'The team are arguing about their uniforms').",
  examples: [
    {
      sentence: "The team is winning the game.",
      subject: "The team",
      verb: "is",
      reason: "The team is acting as a single unit."
    },
    {
      sentence: "The committee are arguing among themselves.",
      subject: "The committee",
      verb: "are",
      reason: "The members are acting as individuals (arguing), so the verb is plural."
    },
    {
      sentence: "My family has a reunion every year.",
      subject: "My family",
      verb: "has",
      reason: "The family acts as one unit."
    }
  ]
};
