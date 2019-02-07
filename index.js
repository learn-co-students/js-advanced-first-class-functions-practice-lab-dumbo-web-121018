// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  })
}

function logDriversByHometown (drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort((driver1, driver2) => {
    return driver1.revenue - driver2.revenue
  })
}

function driversByName (drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort((driver1, driver2) => {
    return driver1.name.localeCompare(driver2.name)
  })
}

function totalRevenue (drivers) {
  return drivers.reduce((total, driver) => {
    return total + driver.revenue
  }, 0)
}

function averageRevenue (drivers) {
  const totalRev = totalRevenue(drivers)
  return totalRev / drivers.length
}
