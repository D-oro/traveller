const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = []
  this.journeys.forEach((journey) => {
    result.push(journey.startLocation)
  });
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = []
  this.journeys.forEach((journey) => {
    results.push(journey.endLocation)
  });
  return results
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => {
    return journey.transport === transport
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => {
    return journey.distance > minDistance
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
  return total
};


Traveller.prototype.getUniqueModeOfTransport = function(){ 
};


// Traveller.prototype.getUniqueModesOfTransport = function (){
//   return this.journeys.map(journey => {
//     return journey.transport;
//   });
// };


module.exports = Traveller;
