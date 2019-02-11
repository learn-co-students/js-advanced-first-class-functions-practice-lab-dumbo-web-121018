// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(driver){
    console.log(driver.name)
  })
}
function logDriversByHometown(array,location){
  array.forEach(function(driver){
    if(driver.hometown === location){
      console.log(driver.name)
    }
  })
}
function driversByRevenue(array){
  return array.slice().sort(function(driver1,driver2){
    return driver1.revenue - driver2.revenue
  })
}
function driversByName(array){
  return array.slice().sort(function(driver1,driver2){
    return driver1.name.localeCompare(driver2.name)
  })
}
function totalRevenue(array){
  return array.reduce(function(total, driver){
    return driver.revenue + total
  },0)
}
function averageRevenue(array){
  return totalRevenue(array)/array.length
}
