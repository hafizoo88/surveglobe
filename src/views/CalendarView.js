import React, { useEffect, useState } from "react";

export default function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchCalendarEvents() {
      const mockEvents = [
        { summary: "Math Class", start: "2025-10-09T10:00", end: "2025-10-09T11:00" },
        { summary: "Science Quiz", start: "2025-10-10T14:00", end: "2025-10-10T15:00" }
      ];
      setEvents(mockEvents);
    }

    fetchCalendarEvents();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <strong>{event.summary}</strong><br />
              {new Date(event.start).toLocaleString()} – {new Date(event.end).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
