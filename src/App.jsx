import React from 'react';
import floralGraphic from './assets/floralArt.png';

function App() {
  const handleDownloadICS = () => {
    // Event details
    const eventName = "Yunika & Satya Farewell Party";
    const eventDescription = "Join our farewell party!";
    const location = "Moru Japanese, AEON Tanjung Barat";
    const startTime = new Date(2025, 9, 31, 19, 0, 0); 
    const endTime = new Date(2025, 9, 31, 21, 0, 0); 

    
    const formatICSDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    }

    // .ics file content
    const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "SUMMARY:" + eventName,
        "DESCRIPTION:" + eventDescription,
        "LOCATION:" + location,
        "DTSTART:" + formatICSDate(startTime),
        "DTEND:" + formatICSDate(endTime),
        "END:VEVENT",
        "END:VCALENDAR"
    ].join('\n');

    const link = document.createElement('a');
    link.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent);
    link.download = 'farewell-event.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // Main container
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f2] to-[#f1efe9] flex items-center justify-center p-4">

      {/* The Invitation Card */}
      <div className="w-full max-w-3xl bg-cream/90 border border-navy/20 rounded-2xl p-6 md:p-10 shadow-xl text-center text-slate backdrop-blur">

        {/* Header*/}
        <header className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm tracking-wide text-slate/70">
            <span className="px-3 py-1 rounded-full bg-white/70 border border-navy/10">📅 Oct 31, 2025</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border border-navy/10">🕖 7:00–9:00 PM</span>
          </div>

          {/* Floral Graphic */}
          <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 aspect-square rounded-full ring-2 ring-navy/20 bg-white p-2 shadow-md">
            <img
              src={floralGraphic}
              alt="Floral decoration"
              className="w-full h-full object-contain select-none"
              draggable={false}
              decoding="async"
              loading="eager"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="mt-2">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-navy leading-tight">
            Yunika & Satya Farewell Party!
          </h1>

          {/* Divider Line */}
          <hr className="mx-auto w-11/12 md:w-4/5 border-t border-slate/30 my-8" />

          {/* Invitation Text */}
          <div className="space-y-2">
            <p className="font-sans-cursive text-2xl italic text-slate/80">
              Invite you to share
            </p>
            <p className="text-lg md:text-xl font-semibold">
              one last memorable dinner on October 31st, 2025
            </p>
            <p className="text-slate/80 flex items-center justify-center gap-2 text-sm md:text-base">
              <span>📍</span>
              <a
                href="https://maps.app.goo.gl/n4fr63pJranVc8MM9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted hover:decoration-solid hover:text-navy"
                aria-label="Open location in Google Maps"
              >
                Moru Japanese, AEON Tanjung Barat
              </a>
            </p>
          </div>
        </main>

        {/* Action Button */}
        <footer className="mt-10 flex justify-center">
          <button
            onClick={handleDownloadICS}
            aria-label="Add event to your calendar"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-navy to-navy text-cream font-semibold py-3 px-7 md:px-8 rounded-full shadow-lg ring-1 ring-navy/30 hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-navy/30"
          >
            <span className="text-lg">📅</span>
            <span>Add to Calendar</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;