export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl: string;
  calendarEvent: {
    title: string;
    description: string;
    location: string;
    startTime: string;
    endTime: string;
  };
}

export const WEDDING_DATA = {
  couple: {
    name1: "Ramees",
    name2: "Shameena",
    fullName1: "Ramees Sharshad",
    fullName2: "Shameena Jesni",
    initials: "R & S",
    hashtag: "#RAMEESWEDSSHAMEENA",
    weddingDate: "SATURDAY, 3 OCTOBER 2026",
    targetDateIso: "2026-10-03T10:30:00+05:30",
    coverTagline: "SWIPE TO OPEN",
    bismillahArabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    bismillahEnglish: "In the name of Allah, the Most Beneficent and Merciful",
    glimpseQuote: "Your presence will make our day special.",
    invitationSubtitle: "TOGETHER WITH THEIR FAMILIES",
    invitationRequest: "REQUEST THE HONOUR OF YOUR PRESENCE AT THEIR WEDDING CEREMONY",
    heroVenue: "Malappuram, Kerala",
  },
  quranVerses: [
    {
      id: "quran-25-74",
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      english: "“Our Lord, grant us from among our spouses and offspring comfort to our eyes.”",
      reference: "Q U R A N  2 5 : 7 4",
    },
    {
      id: "quran-30-21",
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      english: "“And among His signs is that He created for you mates that you may find tranquility, and placed love and mercy between you.”",
      reference: "Q U R A N  3 0 : 2 1",
    }
  ],
  events: [
    {
      id: "nikah",
      title: "NIKAH CEREMONY",
      subtitle: "NIKAH CEREMONY",
      date: "3 October 2026",
      time: "10:30 AM",
      venue: "Thavakkal convention centre",
      address: "Othukkungal, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Thavakkal+convention+centre+Othukkungal+Kerala",
      calendarEvent: {
        title: "Ramees & Shameena - Nikah Ceremony",
        description: "Join us for the solemnization of Nikah ceremony for Ramees & Shameena.",
        location: "Thavakkal convention centre, Othukkungal, Kerala",
        startTime: "20261003T103000Z",
        endTime: "20261003T133000Z",
      },
    },
    {
      id: "reception",
      title: "WEDDING RECEPTION",
      subtitle: "WEDDING RECEPTION",
      date: "3 October 2026",
      time: "4:00 PM onwards",
      venue: "Ajwa convention centre",
      address: "Padaparamba, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Ajwa+convention+centre+Padaparamba+Kerala",
      calendarEvent: {
        title: "Ramees & Shameena - Wedding Reception",
        description: "Join us for the Wedding Reception celebration for Ramees & Shameena.",
        location: "Ajwa convention centre, Padaparamba, Kerala",
        startTime: "20261003T160000Z",
        endTime: "20261003T200000Z",
      },
    },
  ] as EventItem[],
  audio: {
    title: "Acoustic Wedding Melody",
    fallbackAudioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-114467.mp3",
  },
  meta: {
    title: "Ramees & Shameena — Wedding Invitation",
    description: "Join us for the Nikah & Reception of Ramees Sharshad & Shameena Jesni on Saturday, 3 October 2026 in Malappuram, Kerala.",
    siteUrl: "https://ramees-weds-shameena.vercel.app",
    ogImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&h=630&q=80",
  }
};
