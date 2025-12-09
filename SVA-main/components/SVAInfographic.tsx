
import React, { useState, useRef, useLayoutEffect, useMemo, useEffect } from 'react';
import type { Rule, QuizQuestion, Difficulty } from '../types.ts';
import { ruleCategories, initialQuizQuestions, ruleQuizzes } from '../data/rules.ts';
import { StarIcon, CheckCircleIcon, XCircleIcon, AwardIcon, ChevronLeftIcon, ChevronRightIcon, BookIcon } from './icons.tsx';
import Mascot from './Mascot.tsx';
import { InfoMap } from './infographics/index.ts';
import BeforeYouBegin from './BeforeYouBegin.tsx';

// --- Utility for Randomization ---
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// --- Utility for Asset Paths ---
const getAssetPath = (path: string) => {
  // Check if we are in a Vite environment
  const meta = import.meta as any;
  const baseUrl = (meta && meta.env && meta.env.BASE_URL) || "/";
  // Remove trailing slash if present to avoid double slashes
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

// --- Utility for Stratified Sampling (Balanced Randomization) ---
const getStratifiedQuestions = (allQuestions: QuizQuestion[], count: number): QuizQuestion[] => {
  // Group questions by rule to ensure balanced representation
  const groups: Record<string, QuizQuestion[]> = {};
  allQuestions.forEach(q => {
    const key = q.rule || 'General';
    if (!groups[key]) groups[key] = [];
    groups[key].push(q);
  });

  const ruleKeys = Object.keys(groups);
  const selected: QuizQuestion[] = [];

  // Shuffle questions within each group first
  ruleKeys.forEach(key => {
    groups[key] = shuffleArray(groups[key]);
  });

  // Round-robin selection from each group
  let activeKeys = [...ruleKeys];
  // Shuffle the order of rules we pick from so Rule 1 isn't always first
  activeKeys = shuffleArray(activeKeys);

  while (selected.length < count && activeKeys.length > 0) {
      const nextActiveKeys: string[] = [];
      
      for (const key of activeKeys) {
          if (selected.length >= count) break;
          
          const group = groups[key];
          if (group.length > 0) {
              selected.push(group.pop()!);
              if (group.length > 0) nextActiveKeys.push(key);
          }
      }
      activeKeys = nextActiveKeys;
  }
  
  return shuffleArray(selected); // Final shuffle so questions aren't grouped by rule in the quiz
};

const FormulaDisplay: React.FC<{ formula: string; baseTextSize?: string }> = ({
  formula,
  baseTextSize = 'text-xs',
}) => {
  const formulaParts = formula.split(' | ');

  const renderPart = (part: string) => {
    const segments = part.split('➜');
    if (segments.length === 2) {
      return (
        <>
          <span className="text-slate-700">{segments[0].trim()}</span>
          <span className="font-bold text-violet-600 mx-2">➜</span>
          <span className="text-slate-900 font-bold">{segments[1].trim()}</span>
        </>
      );
    }
    return <span className="text-slate-800 font-semibold">{part}</span>;
  };

  return (
    <div className={`font-mono ${baseTextSize} leading-relaxed`}>
      {formulaParts.map((part, index) => (
        <div key={index}>
          {renderPart(part)}
        </div>
      ))}
    </div>
  );
};

const SVAInfographic: React.FC = () => {
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [viewingBasics, setViewingBasics] = useState(false);
  
  // Quiz State
  const [quizMode, setQuizMode] = useState(false);
  const [showConfig, setShowConfig] = useState(false); // New: Show question count selection
  const [showSummary, setShowSummary] = useState(false); // New: Show final score
  const [showReview, setShowReview] = useState(false); // New: Review all questions
  const [pendingQuestions, setPendingQuestions] = useState<QuizQuestion[]>([]); // Questions available for the selected difficulty
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]); // Track user answers for review
  const [celebrateMascot, setCelebrateMascot] = useState(false);

  // NEW: outcome state for mascot ("correct" | "wrong" | null)
  const [outcome, setOutcome] = useState<"correct" | "wrong" | null>(null);

  // Audio Refs
  const audioRef = useRef<{ correct: HTMLAudioElement | null; wrong: HTMLAudioElement | null }>({ correct: null, wrong: null });

  // SCROLL MANAGEMENT
  const scrollPos = useRef(0);

  // Initialize Audio
  useEffect(() => {
      audioRef.current.correct = new Audio(getAssetPath('sounds/correct.wav'));
      audioRef.current.wrong = new Audio(getAssetPath('sounds/wrong.wav'));
      
      // Preload
      if (audioRef.current.correct) audioRef.current.correct.load();
      if (audioRef.current.wrong) audioRef.current.wrong.load();
  }, []);

  // Flatten all rules for navigation
  const allRules = useMemo(() => ruleCategories.flatMap(c => c.rules), []);

  // Handle scroll restoration and resetting
  useLayoutEffect(() => {
    // Check if we are on the main menu view
    const isMainPage = selectedRule === null && !viewingBasics && !quizMode && !showConfig && !showSummary && !showReview;

    if (isMainPage) {
        // Restore scroll position when returning to main menu
        window.scrollTo(0, scrollPos.current);
    } else {
        // Reset scroll to top when navigating to a new page/view
        window.scrollTo(0, 0);
    }
  }, [selectedRule, viewingBasics, quizMode, showConfig, showSummary, showReview]);

  const handleRuleSelect = (rule: Rule | null) => {
    if (rule) {
        // Save scroll position before leaving main menu
        scrollPos.current = window.scrollY;
    }
    setSelectedRule(rule);
    setActiveExample(null);
    // Reset quiz states when changing rules
    setQuizMode(false);
    setShowConfig(false);
    setShowSummary(false);
    setShowReview(false);
    setOutcome(null);
  };

  const handleRuleNavigation = (direction: 'prev' | 'next') => {
    if (!selectedRule) return;
    const currentIndex = allRules.findIndex(r => r.id === selectedRule.id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < allRules.length) {
        setSelectedRule(allRules[newIndex]);
        setActiveExample(null);
        // Reset quiz state in case they were looking at a quiz for the rule
        setQuizMode(false);
        setShowConfig(false);
        setShowSummary(false);
        setOutcome(null);
    }
  };

  // Helper to gather questions from all rules for Mastery Mode
  const getMasteryQuestions = (difficulty: Difficulty): QuizQuestion[] => {
    const pool: QuizQuestion[] = [];
    
    Object.entries(ruleQuizzes).forEach(([idStr, questions]) => {
        // Safety Check: Ensure questions is a valid array
        if (!questions || !Array.isArray(questions)) return;

        const ruleId = parseInt(idStr);
        // Find rule name for the 'rule' property
        let ruleName = `Rule ${ruleId}`;
        for (const cat of ruleCategories) {
            const found = cat.rules.find(r => r.id === ruleId);
            if (found) {
                ruleName = found.name;
                break;
            }
        }

        const filtered = questions.filter(q => q.difficulty === difficulty).map(q => ({
            ...q,
            rule: ruleName // Inject rule name so we know where it came from
        }));
        
        pool.push(...filtered);
    });
    
    return pool;
  };

  // Step 1: User selects difficulty -> Open Config
  const initiateQuizConfig = (questions: QuizQuestion[]) => {
    if (!questions || questions.length === 0) return;
    
    // If we are on the main menu, save scroll position before entering quiz setup
    if (selectedRule === null && !viewingBasics) {
        scrollPos.current = window.scrollY;
    }

    setPendingQuestions(questions);
    setShowConfig(true);
    // Reset other states
    setQuizMode(false);
    setShowSummary(false);
    setShowReview(false);
    setOutcome(null);
  };

  // Step 2: User selects question count -> Start Quiz
  const startQuiz = (count: number) => {
    let selected: QuizQuestion[];

    if (selectedRule === null) {
        // Mastery Mode: Use Stratified Sampling to balance across rules
        selected = getStratifiedQuestions(pendingQuestions, count);
    } else {
        // Single Rule Mode: Simple Random Shuffle
        const shuffled = shuffleArray<QuizQuestion>(pendingQuestions);
        selected = shuffled.slice(0, Math.min(count, shuffled.length));
    }
    
    setActiveQuizQuestions(selected);
    setQuizMode(true);
    setShowConfig(false);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setUserAnswers([]); // Reset user answers
    setCelebrateMascot(false);
    setOutcome(null); // reset outcome
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);

    // Save answer for review
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);
    
    const currentQ = activeQuizQuestions[currentQuestion];
    if (!currentQ) return;

    if (index === currentQ.correct) {
      setScore(score + 1);
      setCelebrateMascot(true);
      setOutcome("correct");

      // Play Sound
      if (audioRef.current.correct) {
          audioRef.current.correct.currentTime = 0;
          audioRef.current.correct.play().catch(() => {}); // catch autoplay errors
      }

      // clear celebration + outcome after 1s
      setTimeout(() => {
        setCelebrateMascot(false);
        setOutcome(null);
      }, 1000);
    } else {
      // wrong answer: set outcome to wrong briefly
      setOutcome("wrong");
      
      // Play Sound
      if (audioRef.current.wrong) {
          audioRef.current.wrong.currentTime = 0;
          audioRef.current.wrong.play().catch(() => {});
      }

      setTimeout(() => {
        setOutcome(null);
      }, 1000);
    }
  };

  const handleNext = () => {
    const totalQuestions = activeQuizQuestions.length;
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setCelebrateMascot(false);
      setOutcome(null);
    } else {
      // Finish Quiz -> Show Summary
      setQuizMode(false);
      setShowSummary(true);
    }
  };

  const exitQuiz = () => {
    setQuizMode(false);
    setShowConfig(false);
    setShowSummary(false);
    setShowReview(false);
    setOutcome(null);
  };

  // Keyboard Navigation for Quiz
  useEffect(() => {
    if (!quizMode || answered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const index = parseInt(key) - 1;
      
      if (index >= 0 && index < 4 && activeQuizQuestions[currentQuestion]?.options[index]) {
        handleAnswer(index);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizMode, answered, currentQuestion, activeQuizQuestions]);

  // Handle Enter key for "Next Question"
  useEffect(() => {
    if (!quizMode || !answered) return;

    const handleEnter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleNext();
        }
    };

    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [quizMode, answered, currentQuestion]);

  // --- VIEW: QUIZ CONFIGURATION ---
  if (showConfig) {
    const availableCount = pendingQuestions.length;
    const options = [5, 10, 20, 30, 40, 50];

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50/90 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-slide-in border-2 border-violet-100 relative">
          <button 
            onClick={exitQuiz} 
            className="absolute top-4 left-4 p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-colors"
            title="Go Back"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <div className="flex justify-center mb-6">
            {/* changed to happy so it matches main page */}
            <Mascot expression="happy" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 font-poppins">Quiz Setup</h2>
          <p className="text-center text-gray-600 mb-6">
            How many questions would you like to attempt?
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {options.map((opt) => {
              const isAvailable = availableCount >= opt;
              
              return (
                <button
                  key={opt}
                  onClick={() => startQuiz(opt)}
                  disabled={!isAvailable && opt !== options.find(o => o > availableCount)} // Enable exact matches or the next tier up (which will be clamped)
                  className={`py-3 rounded-xl font-bold transition-all duration-200 border-2 ${
                    isAvailable 
                      ? 'bg-white border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-400 hover:-translate-y-1 shadow-sm' 
                      : opt < availableCount + 10 ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  {opt} Questions
                </button>
              )
            })}
             {/* Only show 'All' if the available count isn't exactly one of the options AND isn't excessively large (e.g. > 60) */}
             {!options.includes(availableCount) && availableCount <= 60 && (
                <button
                    onClick={() => startQuiz(availableCount)}
                    className="col-span-2 py-3 rounded-xl font-bold transition-all duration-200 border-2 bg-gradient-to-r from-violet-500 to-purple-500 border-transparent text-white hover:shadow-lg hover:-translate-y-1"
                  >
                    All {availableCount} Questions
              </button>
             )}
          </div>

          <button
            onClick={exitQuiz}
            className="w-full py-3 text-gray-500 font-semibold hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ SUMMARY ---
  if (showSummary) {
    const total = activeQuizQuestions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    let message = "Good effort!";
    let expression: 'happy' | 'excited' | 'thinking' = 'thinking';
    
    if (percentage === 100) {
      message = "Perfection! You're a grammar master! 🏆";
      expression = 'excited';
    } else if (percentage >= 80) {
      message = "Amazing job! Keep it up! 🌟";
      expression = 'happy';
    } else if (percentage >= 60) {
      message = "Good work! You're getting there. 👍";
      expression = 'happy';
    } else {
      message = "Keep practicing! You'll improve. 💪";
      expression = 'thinking';
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50/90 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full animate-slide-in border-2 border-violet-100 text-center">
          <div className="flex justify-center mb-6 transform scale-125">
            <Mascot expression={expression} isCelebrating={percentage >= 80} />
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 font-poppins">Quiz Complete!</h2>
          <p className="text-gray-600 mb-8">{message}</p>

          <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
            <div className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Your Score</div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-poppins">
                {score} / {total}
            </div>
            <div className={`mt-2 font-bold ${percentage >= 80 ? 'text-green-500' : percentage >= 60 ? 'text-amber-500' : 'text-red-400'}`}>
                {percentage}% Accuracy
            </div>
          </div>

          <div className="space-y-3">
            <button
                onClick={() => { setShowSummary(false); setShowReview(true); }}
                className="w-full py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
                Review Questions
            </button>
            <button
                onClick={() => initiateQuizConfig(pendingQuestions)} // Retry with same pool
                className="w-full py-3 bg-violet-100 text-violet-700 rounded-xl font-bold hover:bg-violet-200 transition-colors"
            >
                Try Again
            </button>
            <button
                onClick={exitQuiz}
                className="w-full py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-900 transition-colors shadow-lg"
            >
                Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: QUIZ REVIEW ---
  if (showReview) {
      return (
        <div className="min-h-screen p-4 md:p-8 bg-slate-50/95 backdrop-blur-sm overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-6 pb-20">
                 <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-violet-100 sticky top-4 z-20">
                     <h2 className="text-2xl font-bold text-gray-800 font-poppins">Quiz Review</h2>
                     <button
                        onClick={() => { setShowReview(false); setShowSummary(true); }}
                        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 font-bold transition-colors"
                     >
                        Close
                     </button>
                 </div>
                 
                 {activeQuizQuestions.map((q, qIndex) => {
                     const userAnswer = userAnswers[qIndex];
                     const isCorrect = userAnswer === q.correct;
                     const isSkipped = userAnswer === undefined || userAnswer === null;

                     return (
                         <div key={qIndex} className={`bg-white rounded-xl p-6 shadow-md border-l-8 ${isCorrect ? 'border-l-green-500' : isSkipped ? 'border-l-gray-400' : 'border-l-red-500'}`}>
                             <div className="flex justify-between items-start mb-4">
                                 <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Question {qIndex + 1}</span>
                                 <span className={`text-sm font-bold ${isCorrect ? 'text-green-600' : isSkipped ? 'text-gray-500' : 'text-red-500'}`}>
                                     {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                                 </span>
                             </div>
                             <h3 className="text-lg font-bold text-gray-900 mb-4">{q.question}</h3>
                             <div className="space-y-2 mb-4">
                                 {q.options.map((opt, optIndex) => {
                                     let itemClass = "p-3 rounded-lg border ";
                                     if (optIndex === q.correct) {
                                         itemClass += "bg-green-50 border-green-500 text-green-800 font-semibold";
                                     } else if (optIndex === userAnswer) {
                                          itemClass += "bg-red-50 border-red-500 text-red-800 font-semibold";
                                     } else {
                                          itemClass += "bg-white border-gray-200 text-gray-500";
                                     }
                                     return (
                                         <div key={optIndex} className={itemClass}>
                                             {opt}
                                             {optIndex === q.correct && <span className="float-right">✅</span>}
                                             {optIndex === userAnswer && optIndex !== q.correct && <span className="float-right">❌</span>}
                                         </div>
                                     )
                                 })}
                             </div>
                             <div className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
                                 <strong>Explanation:</strong> {q.explanation}
                             </div>
                         </div>
                     );
                 })}
                 
                 <div className="flex justify-center pt-6">
                    <button
                        onClick={() => { setShowReview(false); setShowSummary(true); }}
                        className="px-8 py-3 bg-gray-800 text-white rounded-xl font-bold shadow-lg hover:bg-gray-900 transition-colors"
                    >
                        Back to Summary
                    </button>
                 </div>
            </div>
        </div>
      );
  }

  // --- VIEW: ACTIVE QUIZ ---
  if (quizMode) {
    const questions = activeQuizQuestions;
    const question = questions[currentQuestion];
    
    if (!question) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="mb-4">No questions available.</p>
                <button onClick={exitQuiz} className="px-4 py-2 bg-gray-200 rounded-lg">Go Back</button>
            </div>
        )
    }
    const isCorrect = selectedAnswer === question.correct;
    const mascotExpression = !answered ? 'thinking' : isCorrect ? 'happy' : 'excited';
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen p-2 md:p-4 bg-slate-50/50 flex flex-col">
        <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={exitQuiz}
               className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-gray-500 hover:text-violet-600 hover:bg-violet-50"
               title="Exit Quiz"
            >
              <ChevronLeftIcon size={24}/>
            </button>
            {/* PASS outcome + legacy isCelebrating */}
            <Mascot expression={mascotExpression} isCelebrating={isCorrect && celebrateMascot} outcome={outcome} />
            <div className="text-right">
              <div className="text-sm text-gray-600">Question {currentQuestion + 1}/{questions.length}</div>
              <div className="text-lg font-bold text-violet-600 font-poppins">Score: {score}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex-1 flex flex-col overflow-hidden">
             <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 shrink-0">
                <div 
                    className="bg-gradient-to-r from-violet-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="overflow-y-auto flex-1 pr-2">
                <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-semibold mb-2">
                    {question.difficulty.toUpperCase()}
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-poppins">{question.question}</h2>
                </div>

                <div className="space-y-2 mb-3">
                {question.options.map((option, index) => (
                    <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                    className={`w-full p-3 text-left rounded-xl shadow-sm transition-all duration-200 ${
                        answered
                        ? index === question.correct
                            ? 'bg-green-100 border-2 border-green-500 text-green-900 font-bold'
                            : index === selectedAnswer
                            ? 'bg-red-100 border-2 border-red-500 text-red-900'
                            : 'bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-white border border-gray-200 hover:border-violet-400 hover:bg-violet-50 hover:shadow-md text-gray-800'
                    }`}
                    >
                    <div className="flex items-center justify-between">
                        <span className="font-medium">
                            <span className="inline-block w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-center text-xs leading-6 mr-3 font-bold group-hover:bg-violet-100 group-hover:text-violet-600">
                                {index + 1}
                            </span>
                            {option}
                        </span>
                        {answered && index === question.correct && (
                        <CheckCircleIcon className="text-green-600" size={24} />
                        )}
                        {answered && index === selectedAnswer && index !== question.correct && (
                        <XCircleIcon className="text-red-600" size={24} />
                        )}
                    </div>
                    </button>
                ))}
                </div>

                {answered && (
                <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className="font-bold mb-1 font-poppins">
                    {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{question.explanation}</p>
                    {question.rule && (
                    <div className="text-sm text-gray-700">
                        <strong>Rule Applied:</strong> {question.rule}
                    </div>
                    )}
                </div>
                )}
            </div>

            {answered && (
              <button
                onClick={handleNext}
                className="w-full py-3 mt-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:shadow-lg font-bold transition-shadow duration-300 shrink-0"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'View Results'} <span className="text-xs font-normal opacity-80 ml-1">(Enter)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  // --- VIEW: BEFORE YOU BEGIN ---
  if (viewingBasics) {
    return <BeforeYouBegin onBack={() => setViewingBasics(false)} />;
  }

  // --- VIEW: MAIN MENU / RULE SELECTION ---
  if (selectedRule === null) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Mascot expression="happy" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 font-poppins">
              Subject-Verb Agreement Master Guide
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2">
              Your Complete Reference for Perfect Grammar
            </p>
            <p className="text-sm text-gray-600 italic">
              Created by Ms. Shalaka Kashikar
            </p>
          </div>

          {/* Mastery Challenge Card */}
          <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-t-4 border-violet-400">
            <div className="flex items-center gap-3 mb-4">
              <AwardIcon className="text-amber-500" size={32} />
              <h3 className="text-2xl font-bold text-gray-800 font-poppins">Mastery Challenge!</h3>
            </div>
            <p className="text-gray-600 mb-4">Ready to test your overall knowledge? Choose a difficulty level to start a quiz with questions from all rules.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => initiateQuizConfig(getMasteryQuestions('easy'))}
                className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:-translate-y-0.5 transform"
              >
                Easy 😊
              </button>
              <button
                onClick={() => initiateQuizConfig(getMasteryQuestions('medium'))}
                className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:-translate-y-0.5 transform"
              >
                Medium 🤔
              </button>
              <button
                onClick={() => initiateQuizConfig(getMasteryQuestions('hard'))}
                className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white hover:-translate-y-0.5 transform"
              >
                Hard 🔥
              </button>
            </div>
          </div>

          {/* Before You Begin Card */}
          <div className="mb-12">
             <button 
                onClick={() => {
                  scrollPos.current = window.scrollY;
                  setViewingBasics(true);
                }}
                className="w-full group bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-left flex items-center justify-between"
             >
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                        <BookIcon className="text-white" size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white font-poppins mb-1">Before You Begin: The Basics</h3>
                        <p className="text-violet-100">Master the core concepts and auxiliary verbs first.</p>
                    </div>
                </div>
                <ChevronRightIcon className="text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={32} />
             </button>
          </div>

          {ruleCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <div className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 ${category.borderColor}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.rules.map((rule) => (
                    <button
                      key={rule.id}
                      onClick={() => handleRuleSelect(rule)}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left border-2 border-transparent hover:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {rule.id}
                          </div>
                          <h3 className="font-bold text-lg text-gray-800 font-poppins">{rule.name}</h3>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-200">
                        <FormulaDisplay formula={rule.formula} />
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed mt-2">{rule.explanation}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="flex justify-center mb-4">
              <Mascot expression="happy" />
            </div>
            <p className="text-gray-600 text-lg">
              Master these 22 comprehensive rules and ace your grammar! 🎯
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Crafted with ❤️ by Ms. Shalaka Kashikar
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // --- VIEW: RULE DETAILS ---
  const RuleInfographicComponent = InfoMap[selectedRule.id];
  const ruleQuizQuestions = ruleQuizzes[selectedRule.id];
  const ruleIndex = allRules.findIndex(r => r.id === selectedRule.id);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto animate-slide-in">
        <button
          onClick={() => handleRuleSelect(null)}
          className="mb-6 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all font-bold text-violet-600 flex items-center gap-2 group"
        >
          <ChevronLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to All Rules</span>
        </button>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg flex-shrink-0">
                {selectedRule.id}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins">{selectedRule.name}</h2>
              </div>
            </div>
            <Mascot expression="happy" />
          </div>

          <div className="bg-gradient-to-r from-violet-50 to-rose-50 rounded-xl p-6 mb-6 shadow-inner border border-violet-100">
            <h3 className="text-sm font-bold text-violet-800 mb-3 tracking-wider font-poppins">FORMULA</h3>
            <FormulaDisplay formula={selectedRule.formula} baseTextSize="text-lg md:text-xl" />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Explanation</h3>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                 {selectedRule.explanation}
            </div>
          </div>

          {RuleInfographicComponent && <RuleInfographicComponent />}

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Examples</h3>
            <div className="space-y-3">
              {selectedRule.examples.map((example, index) => {
                  const isInteractive = typeof example === 'object' && 'sentence' in example;
                  
                  if (isInteractive) {
                      const { sentence, subject, verb, reason } = example;
                      const parts = sentence.split(new RegExp(`(${subject}|${verb})`, 'g')).filter(Boolean);
                      const isActive = activeExample === index;

                      return (
                          <div key={index}>
                              <button
                                  onClick={() => setActiveExample(isActive ? null : index)}
                                  className="w-full text-left flex items-start justify-between gap-3 p-4 bg-emerald-5 rounded-lg border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors cursor-pointer"
                                  aria-expanded={isActive}
                                  aria-controls={`explanation-${index}`}
                              >
                                  <div className="flex items-start gap-3">
                                      <StarIcon className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                                      <p className="text-gray-800 font-medium">
                                          {parts.map((part, i) => {
                                              if (part === subject) {
                                                  return <span key={i} className="font-bold text-blue-600 bg-blue-100 px-1 rounded">{part}</span>;
                                              }
                                              if (part === verb) {
                                                  return <span key={i} className="font-bold text-violet-600 bg-violet-100 px-1 rounded">{part}</span>;
                                              }
                                              return <span key={i}>{part}</span>;
                                          })}
                                      </p>
                                  </div>
                                  <ChevronRightIcon className={`w-5 h-5 text-emerald-600 flex-shrink-0 mt-1 transform transition-transform duration-200 ${isActive ? 'rotate-90' : ''}`} />
                              </button>
                              {isActive && (
                                  <div id={`explanation-${index}`} className="mt-2 p-4 bg-slate-100 rounded-b-lg border-x-2 border-b-2 border-slate-200">
                                      <p className="text-gray-700">{reason}</p>
                                  </div>
                              )}
                          </div>
                      );
                  }
                  
                  return (
                      <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                          <StarIcon className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                          <p className="text-gray-800 font-medium">{example as string}</p>
                      </div>
                  );
              })}
            </div>
          </div>
          
          {ruleQuizQuestions && ruleQuizQuestions.length > 0 && (
            <div className="mt-8 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <AwardIcon className="text-amber-600" size={24} />
                <h3 className="text-xl font-bold text-amber-800 font-poppins">Test Your Knowledge!</h3>
              </div>
              <p className="text-amber-700 mb-4">Check your understanding of <span className="font-bold">{selectedRule.name}</span> by choosing a difficulty level.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => initiateQuizConfig(ruleQuizQuestions.filter(q => q.difficulty === 'easy'))}
                  className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:-translate-y-0.5 transform disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:hover:text-gray-400 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
                  disabled={!ruleQuizQuestions.some(q => q.difficulty === 'easy')}
                >
                  Easy 😊
                </button>
                <button
                  onClick={() => initiateQuizConfig(ruleQuizQuestions.filter(q => q.difficulty === 'medium'))}
                  className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:-translate-y-0.5 transform disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:hover:text-gray-400 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
                  disabled={!ruleQuizQuestions.some(q => q.difficulty === 'medium')}
                >
                  Medium 🤔
                </button>
                <button
                  onClick={() => initiateQuizConfig(ruleQuizQuestions.filter(q => q.difficulty === 'hard'))}
                  className="flex-1 py-3 rounded-lg font-bold shadow-md transition-all duration-300 border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white hover:-translate-y-0.5 transform disabled:border-gray-300 disabled:text-gray-400 disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:hover:text-gray-400 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
                  disabled={!ruleQuizQuestions.some(q => q.difficulty === 'hard')}
                >
                  Hard 🔥
                </button>
              </div>
            </div>
          )}
          
          {/* Rule Navigation */}
          <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
            {ruleIndex > 0 ? (
                <button 
                    onClick={() => handleRuleNavigation('prev')}
                    className="flex items-center gap-2 text-gray-500 hover:text-violet-600 font-bold transition-colors px-3 py-2 rounded-lg hover:bg-violet-50"
                >
                    <ChevronLeftIcon />
                    <span>Previous Rule</span>
                </button>
            ) : <div></div>}
            
            {ruleIndex < allRules.length - 1 ? (
                <button 
                    onClick={() => handleRuleNavigation('next')}
                    className="flex items-center gap-2 text-gray-500 hover:text-violet-600 font-bold transition-colors px-3 py-2 rounded-lg hover:bg-violet-50"
                >
                    <span>Next Rule</span>
                    <ChevronRightIcon />
                </button>
            ) : <div></div>}
          </div>
        </div>

        <div className="text-center mt-8 text-gray-700">
          <p className="text-sm">Created by Ms. Shalaka Kashikar</p>
        </div>
      </div>
    </div>
  );
};

export default SVAInfographic;
