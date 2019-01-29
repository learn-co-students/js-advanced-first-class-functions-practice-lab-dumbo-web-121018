// Code your solution in this file!

// driver = array of objec
const logDriverNames = function(drivers) {
  // debugger
  return drivers.forEach(driver => {
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, location) {
  // debugger
  // condition to match drivers hometown
  return drivers.forEach(driver => {
  if (driver.hometown === location) {
    // if passing  log name
    console.log(driver.name);
  }
  })
}

// drivers array of objects.
// returns new array .slice();
// sorted by their revenue lowest to highest

newRevenue = [];
const driversByRevenue = function(drivers) {
  // slice makes a copy of an array

  return drivers.slice().sort((a, b) => {
  return  a.revenue - b.revenue
  })

}

// receives an array of objects.
// returns a new array .slice()
// sorted by name attribute. A-z

const driversByName = function(driver) {
  // debugger
  return driver.slice().sort((a , b) => {
  return a.name.localeCompare(b.name)
  })
}
// driver an array of objects.
// a sum = reduce; Obtains one value.
const totalRevenue = function(driver) {
  // debugger
  // console.log(driver)
  return driver.reduce( (a , b) => {
    console.log("a", a.revenue)
    console.log("b", b.revenue)
  return a + b.revenue;
  }, 0)
}

// receives array of driver of objects
// returns average reduce

const averageRevenue = function(driver) {
  return driver.reduce(( a , b ) => {
  return a + b.revenue / driver.length;
  }, 0)
}
