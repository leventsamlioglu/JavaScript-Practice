// If the car is driving under the speed limit, we get this Ok
// For every 5 km above the speed limit, we should give the driver 1 point
// If points is greater than or equal to 12, license suspend.

checkSpeed(120);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }
}
