// const logDriverNames = function (drivers) {
//   drivers.forEach(function(driver){console.log(driver.name);});
// };

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
      console.log(driver.name);
  });
}


function logDriversByHometown(drivers,location) {
  drivers.forEach(function(driver) {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  });
}


// const driversByRevenue = function(drivers) {
//   function(driver1,driver2) {
//     return driver1.revenue - driver2.revenue;
//   }
//
//   drivers.sort(driversByRevenue);
// }


const driversByRevenue = function(drivers) {

  return drivers.slice().sort(function(driver1,driver2) {
    return driver1.revenue - driver2.revenue;
  })
}

const driversByName = function (drivers) {

  return drivers.slice().sort(function(driver1,driver2) {
    return (driver1.name).localeCompare(driver2.name);
  })
}


// const comparator = function (driver1,driver2) {
//   return (driver1.name).localeCompare(driver2.name);
// };
//
// function driversByName(drivers) {
//   drivers.sort(comparator);
// };


function totalRevenue(drivers){
  let sum = 0
  drivers.forEach(function(driver){
    sum += driver.revenue
  });

  return sum;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
