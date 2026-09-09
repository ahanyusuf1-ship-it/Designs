import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';

export const VenueMapSection: React.FC = () => {
  const venue = WEDDING_DATA.events[1]; // Ajwa convention centre

  return (
    <section className="w-full bg-[#F5EFEB]/60 rounded-3xl border border-[#4A1525]/15 p-5 flex flex-col items-center text-center shadow-sm">
      <span className="text-[11px] font-medium tracking-widest uppercase text-[#4A1525] mb-1">
        VENUE LOCATION
      </span>

      <h3 className="font-serif text-2xl text-[#2D2325] mb-1">
        {venue.venue}
      </h3>

      <p className="text-xs text-stone-600 mb-4">
        {venue.address}
      </p>

      {/* Contained Map Frame */}
      <div className="w-full h-48 rounded-xl overflow-hidden border border-stone-200 shadow-inner">
        <iframe
          title="Ajwa Convention Centre Map"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=Ajwa+convention+centre+Padaparamba+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </div>

      {/* Button: Keep in normal flow with positive top margin */}
      <div className="mt-4 flex justify-center">
        <a
          href={venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-full border border-[#4A1525] text-[#4A1525] text-[11px] font-medium tracking-widest uppercase hover:bg-[#4A1525] hover:text-white transition-colors"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};
