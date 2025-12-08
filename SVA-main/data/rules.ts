import type { RuleCategory, InitialQuizQuestions, QuizQuestion } from '../types.ts';
import { rule1 } from './rules/rule_1.ts';
import { rule2 } from './rules/rule_2.ts';
import { rule3 } from './rules/rule_3.ts';
import { rule4 } from './rules/rule_4.ts';
import { rule5 } from './rules/rule_5.ts';
import { rule6 } from './rules/rule_6.ts';
import { rule7 } from './rules/rule_7.ts';
import { rule8 } from './rules/rule_8.ts';
import { rule9 } from './rules/rule_9.ts';
import { rule10 } from './rules/rule_10.ts';
import { rule11 } from './rules/rule_11.ts';
import { rule12 } from './rules/rule_12.ts';
import { rule13 } from './rules/rule_13.ts';
import { rule14 } from './rules/rule_14.ts';
import { rule15 } from './rules/rule_15.ts';
import { rule16 } from './rules/rule_16.ts';
import { rule17 } from './rules/rule_17.ts';
import { rule18 } from './rules/rule_18.ts';
import { rule19 } from './rules/rule_19.ts';
import { rule20 } from './rules/rule_20.ts';
import { rule21 } from './rules/rule_21.ts';
import { rule22 } from './rules/rule_22.ts';

import { rule1Quiz } from './quizzes/rule_1_quiz.ts';
import { rule2Quiz } from './quizzes/rule_2_quiz.ts';
import { rule3Quiz } from './quizzes/rule_3_quiz.ts';
import { rule4Quiz } from './quizzes/rule_4_quiz.ts';
import { rule5Quiz } from './quizzes/rule_5_quiz.ts';
import { rule6Quiz } from './quizzes/rule_6_quiz.ts';
import { rule7Quiz } from './quizzes/rule_7_quiz.ts';
import { rule8Quiz } from './quizzes/rule_8_quiz.ts';
import { rule9Quiz } from './quizzes/rule_9_quiz.ts';
import { rule10Quiz } from './quizzes/rule_10_quiz.ts';
import { rule11Quiz } from './quizzes/rule_11_quiz.ts';
import { rule12Quiz } from './quizzes/rule_12_quiz.ts';
import { rule13Quiz } from './quizzes/rule_13_quiz.ts';
import { rule14Quiz } from './quizzes/rule_14_quiz.ts';
import { rule15Quiz } from './quizzes/rule_15_quiz.ts';
import { rule16Quiz } from './quizzes/rule_16_quiz.ts';
import { rule17Quiz } from './quizzes/rule_17_quiz.ts';
import { rule18Quiz } from './quizzes/rule_18_quiz.ts';
import { rule19Quiz } from './quizzes/rule_19_quiz.ts';
import { rule20Quiz } from './quizzes/rule_20_quiz.ts';
import { rule21Quiz } from './quizzes/rule_21_quiz.ts';
import { rule22Quiz } from './quizzes/rule_22_quiz.ts';

export const ruleQuizzes: Record<number, QuizQuestion[]> = {
  1: rule1Quiz,
  2: rule2Quiz,
  3: rule3Quiz,
  4: rule4Quiz,
  5: rule5Quiz,
  6: rule6Quiz,
  7: rule7Quiz,
  8: rule8Quiz,
  9: rule9Quiz,
  10: rule10Quiz,
  11: rule11Quiz,
  12: rule12Quiz,
  13: rule13Quiz,
  14: rule14Quiz,
  15: rule15Quiz,
  16: rule16Quiz,
  17: rule17Quiz,
  18: rule18Quiz,
  19: rule19Quiz,
  20: rule20Quiz,
  21: rule21Quiz,
  22: rule22Quiz,
};

export const initialQuizQuestions: InitialQuizQuestions = {
  easy: [
    {
      question: "She ___ to school every day.",
      options: ["walk", "walks", "walking", "walked"],
      correct: 1,
      rule: "Rule 1: The General Rule",
      difficulty: "easy",
      explanation: "The subject 'She' is a third-person singular pronoun, which requires the verb to have an '-s' ending in the present tense. Therefore, 'walks' is the correct verb."
    },
    {
      question: "He ___ finished his homework.",
      options: ["have", "has", "is", "be"],
      correct: 1,
      rule: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
      difficulty: "easy",
      explanation: "The subject 'He' is singular, so it requires the singular auxiliary verb 'has' to form the present perfect tense. 'Have' is used for plural subjects."
    },
    {
      question: "They ___ arrive on time for the show.",
      options: ["musts", "must", "haves to", "shoulds"],
      correct: 1,
      rule: "Rule 3: Modal Auxiliary Verbs",
      difficulty: "easy",
      explanation: "Modal verbs like 'must', 'can', or 'should' do not change their form based on the subject. They are always followed by the base form of the main verb."
    },
    {
      question: "There ___ three cookies left in the jar.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      rule: "Rule 9: Inverted Sentences (There/Here)",
      difficulty: "easy",
      explanation: "In sentences beginning with 'There', the verb agrees with the true subject that follows it. The subject is 'three cookies' (plural), so the plural verb 'are' is correct."
    },
    {
      question: "My cat ___ on the windowsill.",
      options: ["sit", "sits", "are sitting", "have sit"],
      correct: 1,
      rule: "Rule 1: The General Rule",
      difficulty: "easy",
      explanation: "The subject 'My cat' is a third-person singular noun, so the verb needs an '-s' ending in the present tense. 'sits' is correct."
    },
    {
      question: "We ___ happy to see you.",
      options: ["is", "are", "am", "be"],
      correct: 1,
      rule: "Rule 2: Primary Auxiliary Verbs (Be, Have, Do)",
      difficulty: "easy",
      explanation: "The subject 'We' is plural, so it requires the plural auxiliary verb 'are'."
    },
    {
      question: "Here ___ the bus!",
      options: ["come", "comes", "is coming", "are coming"],
      correct: 1,
      rule: "Rule 9: Inverted Sentences (There/Here)",
      difficulty: "easy",
      explanation: "In sentences starting with 'Here', the verb agrees with the true subject that follows it. The subject 'the bus' is singular, so the verb is 'comes'."
    },
    {
      question: "Every child ___ a gift.",
      options: ["get", "gets", "are getting", "have got"],
      correct: 1,
      rule: "Rule 5: Distributive Markers (Each/Every)",
      difficulty: "easy",
      explanation: "The word 'Every' makes the subject ('child') singular, so it requires the singular verb 'gets'."
    },
    {
      question: "I ___ go now.",
      options: ["must", "musts", "have", "has"],
      correct: 0,
      rule: "Rule 3: Modal Auxiliary Verbs",
      difficulty: "easy",
      explanation: "Modal verbs like 'must' do not change their form. They are always followed by the base form of the main verb."
    }
  ],
  medium: [
    {
      question: "The list of items ___ on the table.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 7: Intervening Phrases",
      difficulty: "medium",
      explanation: "The true subject is 'list' (singular), not 'items'. The intervening phrase 'of items' should be ignored. Therefore, the singular verb 'is' is correct."
    },
    {
      question: "Peanut butter and jelly ___ my favorite sandwich.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 4: Compound Subjects Joined by AND",
      difficulty: "medium",
      explanation: "'Peanut butter and jelly' is treated as a single conceptual unit (one type of sandwich). When two subjects form a single idea, a singular verb ('is') is used."
    },
    {
      question: "Each of the players ___ a unique skill.",
      options: ["have", "has", "are having", "is have"],
      correct: 1,
      rule: "Rule 5: Distributive Markers (Each/Every)",
      difficulty: "medium",
      explanation: "The word 'Each' is always singular. The verb must agree with 'Each', not with 'players'. Therefore, the singular verb 'has' is correct."
    },
    {
      question: "Neither the manager nor the employees ___ happy with the decision.",
      options: ["is", "was", "are", "be"],
      correct: 2,
      rule: "Rule 6: Correlative Conjunctions - Proximity Rule (OR/NOR)",
      difficulty: "medium",
      explanation: "According to the proximity rule, when subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. 'Employees' is plural and closest to the verb, so 'are' is correct."
    },
    {
      question: "The CEO, as well as his assistants, ___ attending the conference.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 8: Additive/Parenthetical Phrases",
      difficulty: "medium",
      explanation: "The phrase 'as well as his assistants' is an additive phrase and should be ignored. The verb agrees with the main subject, 'The CEO' (singular), so 'is' is correct."
    },
    {
      question: "Everybody ___ to be loved.",
      options: ["want", "wants", "are wanting", "is want"],
      correct: 1,
      rule: "Rule 10: Singular Indefinite Pronouns",
      difficulty: "medium",
      explanation: "Indefinite pronouns ending in '-body' like 'Everybody' are always singular. Therefore, the verb requires an '-s' ending, making 'wants' correct."
    },
    {
      question: "Some of the water ___ contaminated.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 11: Flexible Quantifiers",
      difficulty: "medium",
      explanation: "For quantifiers like 'some', the verb agrees with the noun that follows. 'Water' is an uncountable noun, which is treated as singular. Thus, 'is' is the correct verb."
    },
    {
      question: "The committee ___ on the new budget proposal tomorrow.",
      options: ["vote", "votes", "are voting", "have voted"],
      correct: 1,
      rule: "Rule 12: Collective Nouns",
      difficulty: "medium",
      explanation: "The collective noun 'committee' is acting as a single, unified group to cast one vote. When acting as a unit, it takes a singular verb, so 'votes' is correct."
    },
    {
      question: "Running and jumping ___ great forms of exercise.",
      options: ["is", "are", "was", "be"],
      correct: 1,
      rule: "Rule 13: Verbal Phrases and Gerunds as Subjects",
      difficulty: "medium",
      explanation: "Two distinct gerunds, 'Running' and 'jumping', are joined by 'and', forming a plural subject. Therefore, the plural verb 'are' is needed."
    },
    {
      question: "Fifty dollars ___ too much for a t-shirt.",
      options: ["is", "are", "were", "be"],
      correct: 0,
      rule: "Rule 14: Measurements, Time, and Money as Units",
      difficulty: "medium",
      explanation: "The amount 'Fifty dollars' is treated as a single sum of money, a singular unit. Therefore, it takes the singular verb 'is'."
    },
    {
      question: "A pair of scissors ___ on the table.",
      options: ["was", "were", "are", "be"],
      correct: 0,
      rule: "Rule 16: Paired Items",
      difficulty: "medium",
      explanation: "The true subject of the sentence is the singular noun 'pair', not 'scissors'. Therefore, the singular verb 'was' is correct."
    },
    {
      question: "All of the cake ___ been eaten.",
      options: ["has", "have", "is", "are"],
      correct: 0,
      rule: "Rule 11: Flexible Quantifiers",
      difficulty: "medium",
      explanation: "The verb agrees with the noun that follows the quantifier. 'Cake' is an uncountable (singular) noun, so the singular verb 'has' is correct."
    },
    {
      question: "The team ___ practicing hard for the game.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 12: Collective Nouns",
      difficulty: "medium",
      explanation: "The collective noun 'team' is acting as a single unit, so it requires the singular verb 'is'."
    }
  ],
  hard: [
    {
      question: "The number of applicants ___ strictly limited.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 20: The Number vs A Number",
      difficulty: "hard",
      explanation: "The phrase 'The number of' refers to a single figure and is always treated as a singular subject. It requires the singular verb 'is'."
    },
    {
      question: "The news from the front ___ encouraging.",
      options: ["are", "is", "were", "be"],
      correct: 1,
      rule: "Rule 15: Nouns Plural in Form but Singular in Meaning",
      difficulty: "hard",
      explanation: "The noun 'news', despite ending in '-s', is always singular. Therefore, it requires the singular verb 'is'."
    },
    {
      question: "He is one of those people who ___ always on time.",
      options: ["is", "are", "be", "was"],
      correct: 1,
      rule: "Rule 17: Relative Pronouns and Antecedents",
      difficulty: "hard",
      explanation: "The relative pronoun 'who' refers to its antecedent, 'people' (plural), not 'one'. Therefore, the verb must be plural, making 'are' the correct choice."
    },
    {
      question: "I wish my boss ___ more understanding.",
      options: ["was", "is", "were", "be"],
      correct: 2,
      rule: "Rule 18: The Subjunctive Mood",
      difficulty: "hard",
      explanation: "This sentence expresses a wish, which is a contrary-to-fact condition. In the subjunctive mood, 'were' is used for all subjects, including singular ones like 'my boss'."
    },
    {
      question: "Seldom ___ we see such a magnificent display of talent.",
      options: ["do", "does", "is", "are"],
      correct: 0,
      rule: "Rule 19: Formal Inversion with Negative Adverbs",
      difficulty: "hard",
      explanation: "When a sentence begins with a negative adverb like 'Seldom', the auxiliary verb comes before the subject. The auxiliary must agree with the subject 'we' (plural), so 'do' is correct."
    },
    {
      question: "What they want ___ a fair chance to compete.",
      options: ["is", "are", "be", "were"],
      correct: 0,
      rule: "Rule 21: Nominal Relative Clauses",
      difficulty: "hard",
      explanation: "The entire noun clause 'What they want' acts as a single, abstract subject. It refers to one idea and is treated as singular, requiring the singular verb 'is'."
    },
    {
      question: "It is I who ___ responsible for this project.",
      options: ["is", "are", "am", "be"],
      correct: 2,
      rule: "Rule 22: Agreement of Person",
      difficulty: "hard",
      explanation: "The verb must agree in person with its antecedent. The relative pronoun 'who' refers to 'I' (first-person singular), so the correct verb is 'am'."
    },
    {
      question: "A number of people ___ complained about the noise.",
      options: ["has", "have", "is", "are"],
      correct: 1,
      rule: "Rule 20: A Number vs The Number",
      difficulty: "hard",
      explanation: "The phrase 'A number of' means 'many' and is always treated as a plural subject, requiring the plural verb 'have'."
    },
    {
      question: "The politician, along with the reporters, ___ expected shortly.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 8: Additive/Parenthetical Phrases",
      difficulty: "hard",
      explanation: "The additive phrase 'along with the reporters' should be ignored. The verb agrees with the main subject, 'The politician' (singular), so 'is' is correct."
    },
    {
      question: "If he ___ here, he would know what to do.",
      options: ["was", "were", "is", "be"],
      correct: 1,
      rule: "Rule 18: The Subjunctive Mood",
      difficulty: "hard",
      explanation: "For hypothetical or contrary-to-fact conditions expressed with 'if', the subjunctive mood is used. 'Were' is the correct form for all subjects."
    },
    {
      question: "What you decide to do ___ entirely up to you.",
      options: ["is", "are", "was", "were"],
      correct: 0,
      rule: "Rule 21: Nominal Relative Clauses",
      difficulty: "hard",
      explanation: "The entire noun clause 'What you decide to do' functions as a single, abstract idea and is therefore treated as a singular subject, requiring the verb 'is'."
    },
    {
      question: "Physics, despite its complex theories, ___ a fascinating subject.",
      options: ["remain", "remains", "are remaining", "have remained"],
      correct: 1,
      rule: "Rule 15: Nouns Plural in Form but Singular in Meaning",
      difficulty: "hard",
      explanation: "Nouns for academic subjects like 'Physics' are singular, even though they end in -s. The intervening phrase does not change this. Thus, the singular verb 'remains' is correct."
    }
  ]
};

export const ruleCategories: RuleCategory[] = [
    {
      title: "I. Core Principles and Foundational Rules",
      borderColor: "border-blue-400",
      icon: "📚",
      rules: [
        rule1,
        rule2,
        rule3
      ]
    },
    {
      title: "II. Compound Subjects and Conjunctions",
      borderColor: "border-emerald-400",
      icon: "🔗",
      rules: [
        rule4,
        rule5,
        rule6
      ]
    },
    {
      title: "III. Proximity Traps and Inverted Structures",
      borderColor: "border-amber-400",
      icon: "⚠️",
      rules: [
        rule7,
        rule8,
        rule9
      ]
    },
    {
      title: "IV. Tricky Pronouns and Nouns",
      borderColor: "border-violet-400",
      icon: "🎭",
      rules: [
        rule10,
        rule11,
        rule12,
        rule13,
        rule14,
        rule15,
        rule16
      ]
    },
    {
      title: "V. Advanced and Special Cases",
      borderColor: "border-rose-400",
      icon: "🎓",
      rules: [
        rule17,
        rule18,
        rule19,
        rule20,
        rule21,
        rule22
      ]
    }
  ];