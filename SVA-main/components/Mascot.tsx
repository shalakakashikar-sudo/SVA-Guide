

// components/Mascot.tsx
import React, { useEffect, useRef, useState } from "react";

type Outcome = "correct" | "wrong" | null;

interface MascotProps {
  expression?: "happy" | "thinking" | "excited" | "sad" | "tickled";
  outcome?: Outcome;
  isCelebrating?: boolean;
}

const SVA_FACTS = [
  "Did you know? 'Everyone' is always singular!",
  "Watch out! Prepositional phrases don't change the subject.",
  "Tip: 'Here' and 'There' are never subjects.",
  "Fun Fact: 'Economics' ends in 's' but is singular!",
  "Collective nouns like 'Team' usually act as one unit.",
  "Remember: 'Either' and 'Neither' are singular alone.",
  "The verb 'to be' is the most irregular verb!",
  "Don't get tricked by the proximity rule with 'or'!",
  "If you can replace it with 'He/She/It', use an 's'!",
  "Gerunds (like 'Running') take singular verbs.",
  // New Facts
  "Use 'were' for wishes: 'I wish I were a bird'!",
  "Amounts of money/time usually take singular verbs.",
  "Titles of books are always singular, even if plural!",
  "'A number of' is plural, but 'The number of' is singular.",
  "Don't let 'along with' or 'as well as' fool you!",
  "Indefinite pronouns ending in -one are always singular.",
  "Fractions like 'half of' depend on the object.",
  "'Pants' and 'Scissors' are always plural nouns.",
  "In 'Neither/Nor', the verb agrees with the closer subject.",
  "'Mathematics' is singular, despite the 's'!",
  // Even More Facts
  "The word 'Police' is always plural: 'The police are here!'",
  "Start a sentence with 'Each'? The verb must be singular!",
  "'Bread and butter' is one meal, so it's singular.",
  "'The United States' is treated as a singular country.",
  "Generic 'He' or 'She' always takes an 's' on the verb.",
  "Relative pronouns (who/that) match the noun before them.",
  "Abstract nouns like 'Honesty' are always singular.",
  "Don't be confused by 'one of the...'! The subject is 'One'.",
  "Plural subjects (We/They) hate 's' on their verbs!",
  "The phrase 'Many a...' is actually singular!"
];

const Mascot: React.FC<MascotProps> = ({ expression = "happy", outcome = null, isCelebrating = false }) => {
  const [isTickled, setIsTickled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentExpression, setCurrentExpression] = useState(expression);
  const [isCrying, setIsCrying] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [tickleMessage, setTickleMessage] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);

  // audio refs
  const audio = useRef<{ correct?: HTMLAudioElement; wrong?: HTMLAudioElement; tickle?: HTMLAudioElement }>({});
  const unlocked = useRef(false);

  // preload but don't assume unlocked
  useEffect(() => {
    // Dynamically determine base path for assets to support GitHub Pages deployment
    // Use safe access for import.meta.env to prevent "Cannot read properties of undefined"
    const meta = import.meta as any;
    const baseUrl = (meta && meta.env && meta.env.BASE_URL) || "/";
    
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const soundBase = `${cleanBase}/sounds`;

    audio.current.correct = new Audio(`${soundBase}/correct.wav`);
    audio.current.wrong = new Audio(`${soundBase}/wrong.wav`);
    audio.current.tickle = new Audio(`${soundBase}/tickle.wav`);
    
    Object.values(audio.current).forEach((a) => {
      if (a) {
        (a as HTMLAudioElement).preload = "auto";
        (a as HTMLAudioElement).load();
      }
    });
  }, []);

  // attempt to unlock audio on a custom event (dispatched from app on first user gesture)
  useEffect(() => {
    const tryUnlock = () => {
      if (unlocked.current) return;
      unlocked.current = true;
      // attempt quick play/pause on each audio element to satisfy autoplay policy
      Object.values(audio.current).forEach((a) => {
        if (!a) return;
        const el = a as HTMLAudioElement;
        try {
          el.currentTime = 0;
          const p = el.play();
          if (p && typeof p.then === "function") {
            p.then(() => {
              el.pause();
              el.currentTime = 0;
              // keep loaded for future plays
            }).catch(() => {
              // ignore rejections
            });
          }
        } catch {
          // ignore
        }
      });
    };

    window.addEventListener("user-interaction", tryUnlock);
    // also listen to any direct pointerdown to be safe
    window.addEventListener("pointerdown", tryUnlock, { once: true });

    return () => {
      window.removeEventListener("user-interaction", tryUnlock);
      window.removeEventListener("pointerdown", tryUnlock as any);
    };
  }, []);

  // Blinking Logic
  useEffect(() => {
    let timeoutId: number;
    const blink = () => {
      // Only blink if not animating a specific emotion that overrides eyes
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150); // Close eyes for 150ms

      // Schedule next blink (random between 3s and 6s)
      const nextBlink = Math.random() * 3000 + 3000;
      timeoutId = window.setTimeout(blink, nextBlink);
    };

    // Start blinking loop
    timeoutId = window.setTimeout(blink, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Idle Prompt Logic: Encourage tickling
  useEffect(() => {
    const idleTimer = setInterval(() => {
      // Only show prompt if bubble isn't already showing and mascot isn't busy
      if (!showBubble && !isAnimating && !isTickled && !isCrying) {
         setTickleMessage("Tickle me for a grammar tip!");
         setShowBubble(true);
         
         if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
         bubbleTimeoutRef.current = window.setTimeout(() => {
            setShowBubble(false);
         }, 5000); // Show prompt for 5s
      }
    }, 15000); // Check every 15 seconds

    return () => clearInterval(idleTimer);
  }, [showBubble, isAnimating, isTickled, isCrying]);

  const play = (kind: "correct" | "wrong" | "tickle") => {
    const a = audio.current[kind];
    if (!a) return;
    try {
      a.currentTime = 0;
      const p = a.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {
      // swallow autoplay errors
    }
  };

  // CSS injection (same as before, celebration shortened to 600ms)
  useEffect(() => {
    if (document.getElementById("mascot-merged-styles")) return;
    const style = document.createElement("style");
    style.id = "mascot-merged-styles";
    style.innerHTML = `
      .mascot-merged { display:inline-block; cursor:pointer; will-change: transform; }
      /* CELEBRATE: faster 600ms spin + little dance — now snappy */
      .mascot-celebrate { animation: mascot-celebrate 600ms cubic-bezier(.22,.9,.35,1) both; transform-origin: center center; }
      @keyframes mascot-celebrate {
        0% { transform: translateY(0) rotate(0deg) scale(1); }
        30% { transform: translateY(-10px) rotate(160deg) scale(1.03); }
        60% { transform: translateY(-6px) rotate(300deg) scale(0.98); }
        100% { transform: translateY(0) rotate(360deg) scale(1); }
      }
      .mascot-tickle { animation: mascot-tickle 400ms ease-in-out both; transform-origin: center center; }
      @keyframes mascot-tickle {
        0%,100% { transform: rotate(0deg); }
        20% { transform: rotate(-8deg) translateX(-3px); }
        40% { transform: rotate(8deg) translateX(3px); }
        60% { transform: rotate(-5deg) translateX(-2px); }
        80% { transform: rotate(6deg) translateX(2px); }
      }
      .mascot-cry { animation: mascot-cry 1000ms ease-in-out both; transform-origin: center center; }
      @keyframes mascot-cry { 0% { transform: translateY(0);} 50% { transform: translateY(4px);} 100% { transform: translateY(0);} }
      .mascot-tear { animation: tear-fall 800ms linear forwards; transform-origin: center top; }
      @keyframes tear-fall { 0% { opacity: 1; transform: translateY(0) scaleY(1);} 100% { opacity: 0; transform: translateY(18px) scaleY(1.1);} }
      .mascot-blush { transition: r 0.18s ease-in-out; }
      .mascot-merged:focus, .mascot-merged:hover { transform: scale(1.03); transition: transform 140ms ease; }
      
      .mascot-bubble-in { animation: bubble-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      @keyframes bubble-pop-in { 0% { opacity:0; transform: scale(0.8) translateY(10px); } 100% { opacity:1; transform: scale(1) translateY(0); } }
      .mascot-bubble-out { animation: bubble-pop-out 0.3s ease-in forwards; }
      @keyframes bubble-pop-out { 0% { opacity:1; transform: scale(1); } 100% { opacity:0; transform: scale(0.9); } }
    `;
    document.head.appendChild(style);
  }, []);

  // Sync incoming expression prop to internal state when not animating/tickled
  useEffect(() => {
    if (isAnimating || isTickled) return;
    if (expression !== currentExpression) {
      setCurrentExpression(expression);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expression]);

  // Respond to outcome or isCelebrating from parent by triggering actions locally
  useEffect(() => {
    if (!outcome && !isCelebrating) return;
    if (isAnimating) return;
    if (outcome === "correct" || isCelebrating) {
      triggerCorrect();
    } else if (outcome === "wrong") {
      triggerWrong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outcome, isCelebrating]);

  const triggerCorrect = () => {
    setIsAnimating(true);
    setCurrentExpression("happy");
    const el = wrapperRef.current;
    if (el) {
      el.classList.remove("mascot-cry", "mascot-tickle");
      el.classList.add("mascot-celebrate");
    }
    play("correct");
    // match the new 600ms celebrate duration
    setTimeout(() => {
      if (el) el.classList.remove("mascot-celebrate");
      setIsAnimating(false);
    }, 600);
  };

  const triggerWrong = () => {
    setIsAnimating(true);
    setCurrentExpression("sad");
    setIsCrying(true);
    const el = wrapperRef.current;
    if (el) {
      el.classList.remove("mascot-celebrate", "mascot-tickle");
      el.classList.add("mascot-cry");
    }
    play("wrong");
    setTimeout(() => {
      setIsCrying(false);
      if (el) el.classList.remove("mascot-cry");
      setIsAnimating(false);
    }, 1000);
  };

  const handleTickle = () => {
    if (isTickled || isAnimating) return;
    setIsTickled(true);
    setCurrentExpression("tickled");
    
    // Pick random fact
    const randomFact = SVA_FACTS[Math.floor(Math.random() * SVA_FACTS.length)];
    setTickleMessage(randomFact);
    setShowBubble(true);
    
    // Clear any existing timeout from the idle prompter
    if (bubbleTimeoutRef.current) {
        clearTimeout(bubbleTimeoutRef.current);
    }

    const el = wrapperRef.current;
    if (el) {
      el.classList.remove("mascot-celebrate", "mascot-cry");
      el.classList.add("mascot-tickle");
    }
    play("tickle");

    setTimeout(() => {
      setIsTickled(false);
      setCurrentExpression(expression);
      if (el) el.classList.remove("mascot-tickle");
    }, 400);

    // Hide bubble after 7 seconds (longer duration for reading)
    bubbleTimeoutRef.current = window.setTimeout(() => {
        setShowBubble(false);
    }, 7000);
  };

  const blinkEyes = (
    <g>
        <path d="M 15 25 Q 18 27 21 25" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 29 25 Q 32 27 35 25" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );

  const expressions: Record<string, React.ReactNode> = {
    happy: (
      <>
        {isBlinking ? blinkEyes : (
            <>
                <ellipse cx="18" cy="24" rx="2.5" ry="4.5" fill="black" />
                <ellipse cx="32" cy="24" rx="2.5" ry="4.5" fill="black" />
                <circle cx="19" cy="22" r="1" fill="white" />
                <circle cx="33" cy="22" r="1" fill="white" />
            </>
        )}
        <path d="M 21 34 C 23 37, 27 37, 29 34" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </>
    ),
    thinking: (
      <>
        {isBlinking ? blinkEyes : (
            <>
            <ellipse cx="16" cy="24" rx="2.5" ry="4.5" fill="black" />
            <ellipse cx="30" cy="24" rx="2.5" ry="4.5" fill="black" />
            <circle cx="17" cy="22" r="1" fill="white" />
            <circle cx="31" cy="22" r="1" fill="white" />
            </>
        )}
        <path d="M 23 35 L 27 35" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 14 18 C 16 16, 19 16, 21 18" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </>
    ),
    excited: (
      <>
        {isBlinking ? blinkEyes : (
            <>
            <ellipse cx="18" cy="25" rx="3.5" ry="5.5" fill="black" />
            <ellipse cx="32" cy="25" rx="3.5" ry="5.5" fill="black" />
            <circle cx="19.5" cy="23" r="1.5" fill="white" />
            <circle cx="33.5" cy="23" r="1.5" fill="white" />
            </>
        )}
        <ellipse cx="25" cy="36" rx="4" ry="4" stroke="black" strokeWidth="1.5" fill="none" />
      </>
    ),
    tickled: (
      <>
        <path d="M 16 26 C 18 22, 22 22, 24 26" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 30 26 C 32 22, 36 22, 38 26" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 20 33 C 22 38, 28 38, 30 33" stroke="black" strokeWidth="1.5" fill="#FFFBFF" strokeLinecap="round" />
      </>
    ),
    sad: (
      <>
        {isBlinking ? blinkEyes : (
            <>
            <ellipse cx="18" cy="26" rx="2" ry="3" fill="black" />
            <ellipse cx="32" cy="26" rx="2" ry="3" fill="black" />
            </>
        )}
        <path d="M 21 36 C 23 33, 27 33, 29 36" stroke="black" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </>
    ),
  };

  const bodyPath = "M 46 28 C 46 40 38 48 25 48 C 12 48 4 40 4 28 C 4 16 12 5 25 5 C 38 5 46 16 46 28 Z";

  const tears = isCrying ? (
    <g>
      <path className="mascot-tear" d="M13 32 C14 34,16 34,16 36 C16 38,13 38,13 36 C13 34,12 33,13 32 Z" fill="#99ccff" opacity="0.95" />
      <path className="mascot-tear" d="M37 32 C38 34,40 34,40 36 C40 38,37 38,37 36 C37 34,36 33,37 32 Z" fill="#99ccff" opacity="0.95" style={{ animationDelay: "80ms" }} />
    </g>
  ) : null;

  return (
    <div className="relative inline-block group z-10">
        <div
        ref={wrapperRef}
        className="mascot-merged"
        onClick={handleTickle}
        title="Tickle me!"
        role="button"
        tabIndex={0}
        aria-label="mascot"
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleTickle();
            }
        }}
        >
        <svg width="112" height="112" viewBox="0 0 50 50" className="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
            <defs>
            <linearGradient id="mascotGradientMerged" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
            </linearGradient>
            <filter id="blushFilterMerged">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>
            </defs>

            <g>
            <path d={bodyPath} fill="url(#mascotGradientMerged)" />
            <path d="M 4,30 C 0,31 0,36 4,37" fill="url(#mascotGradientMerged)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <path d="M 46,30 C 50,31 50,36 46,37" fill="url(#mascotGradientMerged)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            </g>

            <path d={bodyPath} fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />

            <g className="transition-opacity duration-300" transform="translate(0,0)">
            <circle cx="13" cy="30" r={isTickled ? 5.5 : 4} className="mascot-blush" fill="#FFC0CB" opacity={isTickled ? "0.85" : "0.7"} filter="url(#blushFilterMerged)" />
            <circle cx="37" cy="30" r={isTickled ? 5.5 : 4} className="mascot-blush" fill="#FFC0CB" opacity={isTickled ? "0.85" : "0.7"} filter="url(#blushFilterMerged)" />

            {/* render expression based on internal currentExpression */}
            {expressions[currentExpression]}

            {tears}
            </g>
        </svg>
        </div>
        {/* Chat Bubble - Responsive positioning to avoid cutting off */}
        {showBubble && tickleMessage && (
            <div 
              className={`
                absolute 
                z-50 
                p-3 
                bg-white 
                rounded-xl 
                shadow-lg 
                border-2 
                border-violet-100 
                text-xs 
                font-bold 
                text-gray-900 
                transition-all 
                duration-300 
                pointer-events-none 
                w-40
                
                /* Mobile: Position below, centered */
                top-full left-1/2 -translate-x-1/2 mt-3

                /* Desktop: Position left of mascot */
                md:left-auto md:right-full md:translate-x-0 md:top-0 md:mr-3 md:mt-0

                ${showBubble ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              `}
            >
                 {/* Arrow Tail - Responsive */}
                 <div 
                   className={`
                     absolute w-3 h-3 bg-white border-violet-100
                     
                     /* Mobile: Point Up */
                     top-0 left-1/2 -translate-x-1/2 -mt-1.5 border-t-2 border-l-2 rotate-45

                     /* Desktop: Point Right */
                     md:top-6 md:right-0 md:left-auto md:-mr-1.5 md:mt-0 md:border-t-2 md:border-r-2 md:rotate-45
                   `}
                 ></div>
                 {tickleMessage}
            </div>
        )}
    </div>
  );
};

export default Mascot;
