import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';
import { FlowerCluster } from './FloralMotif';
import { WEDDING_DATA, type EventItem } from '../config/weddingData';

export const EventDetailsSection: React.FC = () => {
  const [downloadedEventId, setDownloadedEventId] = useState<string | null>(null);

  const getGoogleCalendarUrl = (event: EventItem) => {
    const { title, description, location, startTime, endTime } = event.calendarEvent;
    const baseUrl = "https://calendar.google.com/calendar/render";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      details: description,
      location: location,
      dates: `${startTime}/${endTime}`,
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const downloadIcsFile = (event: EventItem) => {
    const { title, description, location, startTime, endTime } = event.calendarEvent;
    const csContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ramees & Shameena Wedding//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `DTSTART:${startTime}`,
      `DTEND:${endTime}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([csContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.id}-invitation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedEventId(event.id);
    setTimeout(() => setDownloadedEventId(null), 3000);
  };

  return (
    <section className="py-12 px-4 bg-[#FBF7F0] flex flex-col items-center gap-8">
      {WEDDING_DATA.events.map((event: EventItem, index: number) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="w-full max-w-lg wireframe-card p-8 sm:p-10 text-center bg-white border border-[#E8DEC8] rounded-2xl shadow-sm flex flex-col items-center"
        >
          {/* Top Flower Cluster Motif */}
          <div className="mb-6">
            <FlowerCluster />
          </div>

          {/* Subtitle */}
          <span className="spaced-caps text-[#802336] font-semibold text-xs tracking-[0.25em] mb-4">
            {event.subtitle}
          </span>

          {/* Date */}
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D2325] font-normal mb-2">
            {event.date}
          </h3>

          {/* Time */}
          <p className="spaced-caps text-xs text-[#7A6F72] mb-6">
            {event.time}
          </p>

          {/* Gold Hairline Divider */}
          <div className="w-24 h-[1px] bg-[#C19A5B] opacity-60 mb-6" />

          {/* Venue Name */}
          <h4 className="font-sans text-xl font-medium text-[#2D2325] mb-1">
            {event.venue}
          </h4>

          {/* Location */}
          <p className="font-sans text-xs text-[#7A6F72] mb-6">
            {event.address}
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4 border-t border-[#E8DEC8]/60">
            <a
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#C19A5B] underline hover:text-[#802336] transition-colors"
            >
              Get directions
            </a>

            <span className="hidden sm:inline text-[#E8DEC8]">•</span>

            <div className="flex items-center gap-2">
              <a
                href={getGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#7A6F72] hover:text-[#4A1525]"
              >
                <CalendarPlus size={12} className="text-[#C19A5B]" />
                <span>+ Google Cal</span>
              </a>

              <button
                onClick={() => downloadIcsFile(event)}
                className="inline-flex items-center gap-1 text-[11px] text-[#7A6F72] hover:text-[#4A1525] ml-2"
              >
                {downloadedEventId === event.id ? (
                  <span className="text-emerald-700 font-semibold">✓ Saved .ics</span>
                ) : (
                  <span>+ iCal / Outlook</span>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
