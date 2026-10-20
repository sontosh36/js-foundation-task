// qustion one
function describeValue(value) {
  const type = typeof value;
  let result;
  if (value) {
    result = "truthy";
  } else {
    result = "falsy";
  }

  return `${type} | ${result}`;
}
// question two
function getDayType(day) {
  const caseShift = day.toLowerCase();
  let result = "";
  switch (caseShift) {
    case "friday":
    case "saturday":
      result = "Weekend";
      break;
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      result = "Working Day";
      break;
    default:
      result = "Invaild Day";
      break;
  }
  return result;
}
// question three
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}
// question four
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }
  fare += waitingMinutes * 2;
  if (isNight) {
    fare *= 1.2;
  }
  return fare;
}
// question five
function getChaseVerdict(target, scored, ballLeft) {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballLeft <= 0) {
    return "Lost";
  }
  const requiredRate = (runsNeeded / ballLeft) * 6;
  let verdict;
  if (requiredRate <= 6) {
    verdict = "Confortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  return `Need ${runsNeeded} runs in ${ballLeft} balls | ${verdict}`;
}
