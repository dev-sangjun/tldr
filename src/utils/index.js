export const getTwoDigitString = num => (num < 10 ? `0${num}` : String(num));
export const getDateString = date => {
  const month = getTwoDigitString(date.getMonth() + 1);
  const day = getTwoDigitString(date.getDate());
  return `${month}-${day}-${date.getFullYear()}`;
};
