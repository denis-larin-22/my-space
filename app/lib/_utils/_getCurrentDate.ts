export function _getCurrentDate(): string {
    const currentDate = new Date();
    const months: Array<string> = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `${day} ${month} ${year}`;
}