var gMap = require("googlemaps");
var GoogleMapsAPI = require('../node_modules/googlemaps/lib/index');
var distance = require('../node_modules/googlemaps/lib/distance');

var gmAPI;


//var gMapAPI = new GoogleMapsAPI(publicConfig);

  function getRoutePoints(req, res) {

    //var gmAPI = new GoogleMapsAPI(publicConfig);

    var publicConfig = {
      key: 'AIzaSyBTUTpeAhZpktVPYvYvZPMSRQIphU1BMHE',
      stagger_time:       1000, // for elevationPath
      encode_polylines:   false,
      secure:             true, // use https
    };

    var distanceMatrixParams = {
      origins: "Greenwich, Greater London, UK",
      destinations: "Stockholm County, Sweden",
      //origins: req.origins,
      //destinations: req.destinations,
      travelMode: 'google.maps.TravelMode.WALKING',

    };

    gmAPI = new GoogleMapsAPI( publicConfig);

    gmAPI.distance(distanceMatrixParams, function(err, result) {
      if(err) {
        console.error(err);
      }
      console.log("PLEASE");

      console.log(result);
    });

/*
    var requestHandler = function(err, result) {
      if(err) {
        console.error(err);
      }
      console.log("PLEASE");

      console.log(result[0].value);
    };
*/


/*
    distanceMatrixParams.config = {
      key: 'AIzaSyBTUTpeAhZpktVPYvYvZPMSRQIphU1BMHE',
      google_client_id: 'AIzaSyBTUTpeAhZpktVPYvYvZPMSRQIphU1BMHE',
      stagger_time:       1000, // for elevationPath
      encode_polylines:   false,
      secure:             true, // use https
    };
*/

/*
    gMapAPI.origins = req.origin;
    gMapAPI.destinations = req.destinations;
    gMapAPI.travelMode = 'google.maps.TravelMode.WALKING';
*/
    //gMapAPI.map(publicConfig)
    /*
    gMapAPI.distance(distanceMatrixParams, function(err, result) {
      console.log(result);
    });

    console.log(res);
    */
  }


var self = {
  getRoutePoints: getRoutePoints,
}

module.exports = self;
