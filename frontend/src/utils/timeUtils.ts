export const convertSecondsToMin = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60); // Get the whole minutes
  const remainingSeconds = seconds % 60; // Get the remaining seconds

  // Format as "minutes:seconds"
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// Converts seconds to minutes and rounds down to the nearest minute ex: 70s => 1 min
export const convertSecondsToMinRounded = (
  seconds: number | null | undefined,
): string => {
  if (!seconds) return "0 min"; // fallback for null or undefined

  const minutes = Math.floor(seconds / 60);

  return `${minutes} min`;
};

// Converts seconds to a "XXHXX" format showing hours and minutes.
export const convertSecondsToHoursMin = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600); // Get hours (3600 seconds in 1 hour)
  const minutes = Math.floor((seconds % 3600) / 60); // Get remaining minutes after hours are removed

  // Format as "XXHXX"
  return `${hours}H${minutes < 10 ? "0" : ""}${minutes}`;
};
