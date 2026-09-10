import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { CardSlide } from './components/CardSlide';
import { HeroInvitationCard } from './components/HeroInvitationCard';
import CelebrationsCard from './components/CelebrationsCard';
import { QuranVerseCard } from './components/QuranVerseCard';
import CountdownCard from './components/CountdownCard';
import VenuesLocationCard from './components/VenuesLocationCard';
import { WEDDING_DATA } from './config/weddingData';
import { Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScrollFadeSection } from './components/ScrollFadeSection';
import { StaggerGroup, StaggerItem } from './components/StaggerGroup';
import { PetalDrizzle } from './components/PetalDrizzle';

export function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const autoScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // RSVP Form States
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [fullName, setFullName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  const scrollToNextCard = () => {
    if (!mainRef.current) return;
    const cardHeight = mainRef.current.clientHeight || window.innerHeight;
    const nextIndex = Math.min(currentCardIndex + 1, 6);
    mainRef.current.scrollTo({
      top: nextIndex * cardHeight,
      behavior: 'smooth',
    });
  };

  // Auto-scroll after 3.5s of inactivity on each card starting from Bismillah
  useEffect(() => {
    if (!isIntroComplete || !mainRef.current) return;

    const container = mainRef.current;

    const startAutoScrollTimer = () => {
      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);

      autoScrollTimerRef.current = setTimeout(() => {
        if (!container) return;
        const cardHeight = container.clientHeight || window.innerHeight;
        const activeIdx = Math.round(container.scrollTop / cardHeight);

        if (activeIdx < 6) {
          container.scrollTo({
            top: (activeIdx + 1) * cardHeight,
            behavior: 'smooth',
          });
        }
      }, 3500); // 3.5s auto-scroll delay
    };

    const handleScroll = () => {
      const cardHeight = container.clientHeight || window.innerHeight;
      const activeIdx = Math.round(container.scrollTop / cardHeight);
      setCurrentCardIndex(activeIdx);
      startAutoScrollTimer();
    };

    const handleUserInteraction = () => {
      startAutoScrollTimer();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('mousedown', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', handleUserInteraction, { passive: true });

    startAutoScrollTimer();

    return () => {
      if (autoScrollTimerRef.current) clearTimeout(autoScrollTimerRef.current);
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('mousedown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isIntroComplete]);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }
    setError('');
    setSubmitted(true);
    if (attending === 'yes') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C19A5B', '#4A1525', '#802336', '#FBF7F0'],
      });
    }
  };

  const verse2 = WEDDING_DATA.quranVerses[1];

  return (
    <div className="h-[100vh] h-[100dvh] w-full bg-[#F5EFEB] selection:bg-[#4A1525] selection:text-white">
      {/* Background Petal Drizzle Effect on Main App Deck */}
      {isIntroComplete && <PetalDrizzle count={18} className="opacity-75" />}

      {/* Floating Scroll Down Arrow Button (Shown starting from Bismillah until Countdown) */}
      <AnimatePresence>
        {isIntroComplete && currentCardIndex < 6 && (
          <motion.button
            key="scroll-down-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToNextCard}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 cursor-pointer select-none group"
            aria-label="Scroll to next page"
          >
            <span className="text-[9px] font-sans font-medium tracking-[0.25em] uppercase text-[#7A2436]/80 group-hover:text-[#7A2436] transition-colors">
              SCROLL DOWN
            </span>
            <div className="w-8 h-8 rounded-full bg-[#FAF5ED]/90 backdrop-blur-md shadow-md border border-[#B8935A]/40 flex items-center justify-center text-[#7A2436] group-hover:bg-[#7A2436] group-hover:text-amber-100 transition-all duration-300 animate-bounce">
              <ChevronDown size={18} strokeWidth={2.2} />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 1. Envelope Intro Overlay (Plays once, dissolves out, and unmounts) */}
      <AnimatePresence>
        {!isIntroComplete && (
          <EnvelopeIntro key="envelope-intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* 2. Main Scroll-Snap Deck (Mounted once intro finishes) */}
      {isIntroComplete && (
        <main ref={mainRef} className="relative h-[100vh] h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth selection:bg-[#5c1c28] selection:text-white">
          
          {/* CARD 03: QURAN VERSE 1 */}
          <ScrollFadeSection containerRef={mainRef}>
            <QuranVerseCard id="card-verse-1" />
          </ScrollFadeSection>

          {/* CARD 04: HERO INVITATION CARD */}
          <ScrollFadeSection containerRef={mainRef} id="card-hero">
            <HeroInvitationCard />
          </ScrollFadeSection>

          {/* CARD 05: THE CELEBRATIONS (NIKAH & RECEPTION) */}
          <ScrollFadeSection containerRef={mainRef}>
            <CelebrationsCard />
          </ScrollFadeSection>

          {/* CARD 07: QURAN VERSE 2 */}
          <ScrollFadeSection containerRef={mainRef}>
            <QuranVerseCard
              id="card-verse-2"
              headerLabel="Blessing"
              arabicLines={[
                'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا',
                'لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
              ]}
              english={verse2.english}
              reference={verse2.reference}
            />
          </ScrollFadeSection>

          {/* CARD 08: VENUES & LOCATIONS */}
          <ScrollFadeSection containerRef={mainRef}>
            <VenuesLocationCard />
          </ScrollFadeSection>

          {/* CARD 10: RSVP */}
          <ScrollFadeSection containerRef={mainRef}>
            <CardSlide id="card-rsvp">
              <StaggerGroup className="w-full flex flex-col items-center justify-between h-full">
                <StaggerItem>
                  <div className="relative z-20 flex flex-col items-center mt-2">
                    <span className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-[#A78A58]">
                      Confirmation
                    </span>
                  </div>
                </StaggerItem>

                <StaggerItem className="w-full flex flex-col items-center">
                  <div className="relative z-20 my-auto flex flex-col items-center w-full px-2">
                    <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#A78A58] block mb-1">
                      RSVP
                    </span>
                    <h2 className="font-serif italic text-2xl sm:text-3xl text-[#5c1c28] mb-6 leading-snug">
                      Will you honour us with your presence?
                    </h2>

                    {submitted ? (
                      <div className="text-center py-2 max-w-[280px]">
                        <div className="w-12 h-12 rounded-full bg-[#FAF5ED] shadow-sm text-[#5c1c28] flex items-center justify-center mx-auto mb-3">
                          <Heart size={20} className="fill-[#5c1c28]" />
                        </div>
                        <h4 className="font-serif italic text-2xl font-normal text-[#5c1c28] mb-1">
                          Thank You, {fullName}!
                        </h4>
                        <p className="text-xs text-[#73685F] mb-4">
                          {attending === 'yes'
                            ? `In Sha Allah! We look forward to welcoming you (${guestCount} guest).`
                            : "Thank you for letting us know. Your prayers mean the world to us."}
                        </p>
                        <button
                          onClick={() => { setSubmitted(false); setAttending(null); }}
                          className="text-[10px] tracking-widest uppercase text-[#A78A58] underline font-medium"
                        >
                          Change Response
                        </button>
                      </div>
                    ) : attending !== null ? (
                      <form onSubmit={handleRsvpSubmit} className="space-y-3 w-full max-w-[280px]">
                        {error && <p className="text-[10px] text-rose-700 text-center">{error}</p>}
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Full Name"
                          className="w-full px-3.5 py-2 rounded-xl text-xs outline-none bg-[#FAF5ED] text-[#2E2824] shadow-xs"
                        />
                        {attending === 'yes' && (
                          <select
                            value={guestCount}
                            onChange={(e) => setGuestCount(Number(e.target.value))}
                            className="w-full px-3.5 py-2 rounded-xl text-xs outline-none bg-[#FAF5ED] text-[#2E2824] shadow-xs"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                          </select>
                        )}
                        <textarea
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Wishes / Message"
                          className="w-full px-3.5 py-2 rounded-xl text-xs outline-none bg-[#FAF5ED] text-[#2E2824] shadow-xs"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setAttending(null)}
                            className="w-1/3 py-2 rounded-xl bg-[#FAF5ED] text-[#73685F] text-[11px] uppercase font-medium hover:bg-stone-200"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="w-2/3 py-2 rounded-xl bg-[#5c1c28] text-amber-100 text-[11px] font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#3b1219] transition-colors"
                          >
                            Submit RSVP
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex flex-col gap-3.5 w-full max-w-[280px]">
                        <button
                          onClick={() => setAttending('yes')}
                          className="py-3 px-4 rounded-xl bg-[#FAF5ED] shadow-xs hover:bg-[#5c1c28] hover:text-white transition-colors duration-300 text-center group"
                        >
                          <p dir="rtl" lang="ar" className="text-base font-serif mb-0.5 group-hover:text-amber-100">
                            إن شاء الله سأحضر
                          </p>
                          <p className="text-[10px] font-sans tracking-[0.18em] uppercase font-medium text-[#73685F] group-hover:text-white">
                            In Sha Allah, I Will Attend
                          </p>
                        </button>

                        <button
                          onClick={() => setAttending('no')}
                          className="py-3 px-4 rounded-xl bg-[#FAF5ED] shadow-xs hover:bg-[#5c1c28] hover:text-white transition-colors duration-300 text-center group"
                        >
                          <p dir="rtl" lang="ar" className="text-base font-serif mb-0.5 group-hover:text-amber-100">
                            أعتذر عن الحضور
                          </p>
                          <p className="text-[10px] font-sans tracking-[0.18em] uppercase font-medium text-[#73685F] group-hover:text-white">
                            Regretfully Unable to Attend
                          </p>
                        </button>
                      </div>
                    )}
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative z-20 mb-2">
                    <p className="text-[11px] font-sans tracking-widest text-[#73685F]/80">
                      #RAMEESWEDSSHAMEENA
                    </p>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </CardSlide>
          </ScrollFadeSection>

          {/* CARD 10: COUNTDOWN TIMER */}
          <ScrollFadeSection containerRef={mainRef} id="card-countdown">
            <CountdownCard />
          </ScrollFadeSection>
        </main>
      )}
    </div>
  );
}

export default App;
