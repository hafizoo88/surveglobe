export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("en-PK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
