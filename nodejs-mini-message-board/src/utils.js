function dateParser(date) {
  /* Returns a time/date formatted string
   * based on the age of the log entry.
   * > 24 hrs return the date
   * < 24 hrs > 1 hr return the number of hours
   * otherwise return the minutes since the log was entered
   */
  const currentTime = new Date();

  const difference = Math.floor((currentTime - date) / 1000);

  if (difference >= 86400) {
    // Return date since entry is older than a day
    const newDate = new Date(date);
    return newDate.toLocaleString();
  } else if (difference >= 3600) {
    // Return hours since log entry
    return `${Math.floor(difference / 3600)}h`;
  } else {
    // Reteurn Minutes since log entry
    return `${Math.floor(difference / 60)}m`;
  }
}

module.exports = { dateParser };
