export const converter = function (number) {
  if (number >= 1000000) {
    return `${Math.floor(number / 1000000)}M`;
  }

  if (number >= 1000) {
    return `${Math.floor(number / 1000)}K`;
  }

  return number;
};

export const date = function (date) {
  const currentDate = new Date();
  const givenDate = new Date(date);

  const timeDifference = currentDate - givenDate;

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysAgo === 0
    ? "Today"
    : `${daysAgo} ${daysAgo === 1 ? "day ago" : "days ago"} `;
};
