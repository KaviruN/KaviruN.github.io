async function getExactCurrentWeek() {
  const response = await fetch('https://github-contributions-api.jogruber.de/v4/KaviruN?y=last');
  const data = await response.json();
  const contributions = data.contributions;

  // 1. Find Monday's date for the current week
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sun, 1 = Mon, ...
  const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; 
  
  const mondayDate = new Date(today);
  mondayDate.setDate(today.getDate() + distanceToMonday);

  // 2. Build a solid 7-day array structure starting from that Monday
  const completeWeek = [];
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(mondayDate);
    nextDay.setDate(mondayDate.getDate() + i);
    const dateString = nextDay.toISOString().split('T')[0];

    // Check if the API has data for this day
    const apiMatch = contributions.find((item: any) => item.date === dateString);

    if (apiMatch) {
      // Use real data if it exists
      completeWeek.push(apiMatch);
    } else {
      // Generate a placeholder day if it doesn't exist yet (future days)
      completeWeek.push({
        date: dateString,
        count: 0,
        level: 0
      });
    }
  }

  return completeWeek;

}
