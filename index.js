// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach( driver => console.log(driver.name));
}

const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach( driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}


const driversByRevenue = drivers => {
  return drivers.slice().sort( (one , two) => {
    return one.revenue - two.revenue;
  })
}

const driversByName = driver => {
  return driver.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = drivers => {
  return drivers.reduce( (total, driver) => {
    return driver.revenue + total;
  }, 0);
}

const averageRevenue = driver => {
  return totalRevenue(driver) / driver.length;
}
