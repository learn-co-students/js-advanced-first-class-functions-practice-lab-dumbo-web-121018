// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(driver => {console.log(driver.name)})
};

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(driver => {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  })
};

function driversByRevenue(drivers){
  const result = [...drivers];
  return result.sort((a,b) => {
    if (a.revenue < b.revenue) {
      return -1;
    };
    if (a.revenue > b.revenue) {
      return 1;
    };
    return 0;
  });
};

function driversByName(drivers) {
  const result = [...drivers];
  return result.sort((a,b) => {
    if (a.name < b.name){
      return -1;
    };
    if (a.name > b.name){
      return 1;
    };
    return 0;
  });
};

function totalRevenue(drivers) {
  return drivers.reduce((acc, driver) => {
    return acc + driver.revenue;
  }, 0);
};

function averageRevenue(drivers) {
  return (totalRevenue(drivers) / drivers.length);
}
