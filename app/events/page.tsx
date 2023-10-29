import React from "react";

export default async function Events() {
  return (
    <main className="flex flex-col items-stretch justify-stretch p-8 w-full h-full min-h-screen">
      <iframe
        className="hidden md:visible md:block"
        src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%2324ffc8&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showCalendars=0&showTz=0&mode=MONTH&showTabs=0&showDate=0&showNav=0&src=Y19lNWU4ZWMxZDIyYzM3ZWJmYzEwNzliMjI1ZmY4ODk3YjUwNGExNDQ2NWQ4YWY5MWIyYjM2OTY4Y2U4OWUxNTdlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23C0CA33"
        style={{ borderWidth: 0, flexGrow: 1, border: "none" }}
        width={"100%"}
        height={"100%"}
        frameBorder={0}
        scrolling="no"
      />
      <iframe
        className="visible md:invisible md:hidden"
        src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%2324ffc8&ctz=America%2FLos_Angeles&showPrint=0&showTitle=0&showCalendars=0&showTz=0&mode=AGENDA&showTabs=0&showDate=0&showNav=0&src=Y19lNWU4ZWMxZDIyYzM3ZWJmYzEwNzliMjI1ZmY4ODk3YjUwNGExNDQ2NWQ4YWY5MWIyYjM2OTY4Y2U4OWUxNTdlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23C0CA33"
        style={{ borderWidth: 0, flexGrow: 1, border: "none" }}
        width={"100%"}
        height={"100%"}
        frameBorder={0}
        scrolling="no"
      />
    </main>
  );
}
