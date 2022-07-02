function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

export const currentDay = () => date.getDate();

export const daysInCurrentMonth = () => {
  const days = getDaysInMonth(currentYear, currentMonth);
  const daysInArray = [];
  for (let i = 1; i <= days; i++) {
    daysInArray.push(i);
  }
  return daysInArray;
};

export const allMonths = () => {
  return [
    { number: 1, month: "Jan" },
    { number: 2, month: "Feb" },
    { number: 3, month: "Mar" },
    { number: 4, month: "Apr" },
    { number: 5, month: "May" },
    { number: 6, month: "Jun" },
    { number: 7, month: "Jul" },
    { number: 8, month: "Aug" },
    { number: 9, month: "Sep" },
    { number: 10, month: "Oct" },
    { number: 11, month: "Nov" },
    { number: 12, month: "Dec" },
  ];
};

export const getCurrentMonth = () => {
  const months = allMonths();
  const month = months.find(element => element.number === currentMonth)
  return month;
}


export const getCurrentYear = () => {
  return currentYear;
}
export const getYears = () => {
  const years = [];
  for (let i = 1900; i <= currentYear - 16; i++) {
    years.push(i);
  }
  return years;
}