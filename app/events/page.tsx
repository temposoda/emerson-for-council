import React from "react";
import Script from "next/script";

export default async function Events() {
  return (
    <main className="flex flex-col items-stretch justify-stretch p-8 w-full h-full min-h-screen">
      <iframe
        src="https://embed.styledcalendar.com/#P4N0WWJE9J0dWA3hALr6"
        title="Styled Calendar"
        className="styled-calendar-container"
        style={{ width: "100%", minHeight: "100vh", border: "none" }}
        data-cy="calendar-embed-iframe"
      ></iframe>
      <Script
        id="styled-calendar"
        strategy="worker"
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
      ></Script>
    </main>
  );
}
