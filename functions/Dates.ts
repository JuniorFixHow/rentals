import { timeRemaining } from "@juniorfixhow/durationjs";

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

export const today = (date:Date)=>{
    // const today = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
        return minDateTime
}


export function getTimeDifferenceInHours(date1: Date, date2: Date): number {
    const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
    return differenceInHours;
}


export function getTimeDifferenceInDays(date1: Date, date2: Date): number {
    const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    return Math.ceil(differenceInDays); // Ceil the result
}

export function getTimeDifferenceInDaysV2(date1: Date, date2: Date): number {
    const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

    // Calculate the number of days based on the difference in hours
    const days = Math.floor(differenceInHours / 24); // Full days

    // Calculate the remaining hours after full days
    const remainingHours = differenceInHours % 24;

    // Determine the return value based on the remaining hours
    if (remainingHours <= 12) {
        return days + 1; // Less than or equal to 12 hours
    } else {
        return days + 2; // Greater than 12 hours
    }
}


export const formatTimeRemaining =(date:Date)=>{
    if(timeRemaining(date)?.includes('ending')){
        return 'Due now'
    }else{
        return `${timeRemaining(date)} remaining`
    }
}