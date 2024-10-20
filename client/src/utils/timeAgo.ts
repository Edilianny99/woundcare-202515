export function timeAgo(date: Date | string): string {
  const now = new Date();
  date = new Date(date);
  const secondsAgo = Math.round((now.getTime() - date.getTime()) / 1000);
  const minutesAgo = Math.round(secondsAgo / 60);
  const hoursAgo = Math.round(minutesAgo / 60);
  const daysAgo = Math.round(hoursAgo / 24);

  if (daysAgo > 0) {
    return `Hace ${daysAgo} día${daysAgo > 1 ? "s" : ""}`;
  } else if (hoursAgo > 0) {
    return `Hace ${hoursAgo} hora${hoursAgo > 1 ? "s" : ""}`;
  } else if (minutesAgo > 0) {
    return `Hace ${minutesAgo} minuto${minutesAgo > 1 ? "s" : ""}`;
  } else {
    return `Hace ${secondsAgo} segundo${secondsAgo > 1 ? "s" : ""}`;
  }
}
