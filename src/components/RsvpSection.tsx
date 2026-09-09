import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RsvpSection: React.FC = () => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [fullName, setFullName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <section id="rsvp-section" className="w-full rounded-3xl bg-[#F5EFEB]/60 border border-[#4A1525]/15 p-6 text-center shadow-sm mb-6">
      <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#4A1525] block mb-2">
        RSVP
      </span>

      <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2325] font-normal mb-6 leading-tight">
        Will you honour us with your presence?
      </h2>

      {submitted ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-6 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#FBF7F0] border border-[#C19A5B] text-[#4A1525] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="font-serif text-2xl font-normal text-[#2D2325] mb-2">
            Thank You, {fullName}!
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed mb-6">
            {attending === 'yes'
              ? `In Sha Allah! We look forward to welcoming you and your ${guestCount} guest(s).`
              : "Thank you for letting us know. Your prayers and blessings mean everything to us."}
          </p>
          <button
            onClick={() => { setSubmitted(false); setAttending(null); }}
            className="text-[10px] tracking-widest uppercase text-[#C19A5B] underline hover:text-[#4A1525]"
          >
            CHANGE RESPONSE
          </button>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {/* Dual Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <button
              type="button"
              onClick={() => setAttending('yes')}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                attending === 'yes'
                  ? 'border-[#4A1525] bg-[#4A1525] text-white shadow-md'
                  : 'border-[#E8DEC8] bg-[#FBF7F0] text-[#2D2325] hover:border-[#C19A5B]'
              }`}
            >
              <p className="font-arabic text-xl mb-1.5">إن شاء الله سأحضر</p>
              <span className="text-[10px] tracking-[0.15em] uppercase block opacity-90">
                IN SHA ALLAH, I WILL ATTEND
              </span>
            </button>

            <button
              type="button"
              onClick={() => setAttending('no')}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                attending === 'no'
                  ? 'border-[#4A1525] bg-[#4A1525] text-white shadow-md'
                  : 'border-[#E8DEC8] bg-[#FBF7F0] text-[#2D2325] hover:border-[#C19A5B]'
              }`}
            >
              <p className="font-arabic text-xl mb-1.5">أعتذر عن الحضور</p>
              <span className="text-[10px] tracking-[0.15em] uppercase block opacity-90">
                REGRETFULLY UNABLE TO ATTEND
              </span>
            </button>
          </div>

          {/* Dynamic Form Expands Downward Cleanly */}
          {attending !== null && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              onSubmit={handleSubmit}
              className="space-y-4 pt-4 border-t border-[#E8DEC8] text-left"
            >
              {error && (
                <p className="text-xs text-rose-700 bg-rose-50 p-2 rounded-lg text-center">
                  {error}
                </p>
              )}

              <div>
                <label className="text-[10px] tracking-widest uppercase text-stone-600 block mb-1">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DEC8] focus:border-[#4A1525] outline-none text-sm text-[#2D2325] bg-[#FBF7F0]"
                />
              </div>

              {attending === 'yes' && (
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-stone-600 block mb-1">
                    NUMBER OF GUESTS
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DEC8] focus:border-[#4A1525] outline-none text-sm text-[#2D2325] bg-[#FBF7F0]"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="text-[10px] tracking-widest uppercase text-stone-600 block mb-1">
                  MESSAGE / PRAYERS (OPTIONAL)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your wishes for the couple..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DEC8] focus:border-[#4A1525] outline-none text-sm text-[#2D2325] bg-[#FBF7F0]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#4A1525] text-[#C19A5B] hover:bg-[#802336] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Heart size={14} className="fill-[#C19A5B]" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold">
                  SUBMIT RSVP
                </span>
              </button>
            </motion.form>
          )}
        </div>
      )}
    </section>
  );
};
