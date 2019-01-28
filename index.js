// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach(function(driver){console.log(driver.name);});
}

const logDriversByHometown = (drivers, location) => {
  hometownMatch = drivers.filter(function(driver) {return driver["hometown"] === location});
  return logDriverNames(hometownMatch);
}

const driversByRevenue = drivers => {
  return drivers.slice().sort(function (a,b) {
    return a["revenue"] - b["revenue"];
  });
}

const driversByName = drivers => {
  return drivers.slice().sort(function(a, b) {
    return a["name"].localeCompare(b["name"]);
  });
}

const callbackForTotal = (aggregate, element) => {
  return aggregate + element["revenue"];
}

const totalRevenue = drivers => {
  return drivers.reduce(callbackForTotal, 0);
}

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length;
}
