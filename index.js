// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const match = drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
  return match;
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  //   const sorted = drivers.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //   });
  //   return sorted;
  return drivers.slice().sort(function(firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce((total, driver) => {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
