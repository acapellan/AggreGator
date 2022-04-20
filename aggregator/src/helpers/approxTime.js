// takes a time in the past as a string, not as a Date object, and returns a
// friendlier, relative message indicating the approximate amount of time that
// has passed
export const approxTime = time => {
  const elapsedTime = Date.now() - new Date(time);
  
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  let postTimeMsg = 'over five years ago';

  // create friendlier date and time stamp
  if (elapsedTime < 5 * minute) {
    postTimeMsg = 'just now';
  } else if (elapsedTime < 15 * minute) {
    postTimeMsg = 'less than 15 minutes ago';
  } else if (elapsedTime < 60 * minute) {
    postTimeMsg = 'within the hour';
  } else if (elapsedTime < 120 * minute) {
    postTimeMsg = 'about two hours ago';
  } else if (elapsedTime < 12 * hour) {
    postTimeMsg = 'earlier today';
  } else if (elapsedTime < 24 * hour) {
    postTimeMsg = 'in the last 24 hours';
  } else if (elapsedTime < week) {
    postTimeMsg = 'earlier this week';
  } else if (elapsedTime < 2 * week) {
    postTimeMsg = 'in the last two weeks';
  } else if (elapsedTime < month) {
    postTimeMsg = 'in the last month';
  } else if (elapsedTime < 2 * month) {
    postTimeMsg = 'in the last two months';
  } else if (elapsedTime < 4 * month) {
    postTimeMsg = 'in the last four months';
  } else if (elapsedTime < 6 * month) {
    postTimeMsg = 'in the last six months';
  } else if (elapsedTime < 9 * month) {
    postTimeMsg = 'in the last nine months';
  } else if (elapsedTime < year) {
    postTimeMsg = 'in the last year';
  } else if (elapsedTime < 2 * year) {
    postTimeMsg = 'about two years ago';
  } else if (elapsedTime < 3 * year) {
    postTimeMsg = 'about three years ago';
  } else if (elapsedTime < 4 * year) {
    postTimeMsg = 'about four years ago';
  } else if (elapsedTime < 5 * year) {
    postTimeMsg = 'about five years ago';
  }

  return postTimeMsg;
};
