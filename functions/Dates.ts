export function formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
    const [datePart, timePart] = formattedDate.split(', ');
  
    // Split date and time to format correctly
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');
  
    // Determine AM/PM
    // const period = parseInt(hour) >= 12 ? 'PM' : 'AM';
  
    // Convert hour to 12-hour format
    const formattedHour = (parseInt(hour) % 12) || 12;
  
    return `${day}/${month}/${year} ${formattedHour}:${minute}`;
  }