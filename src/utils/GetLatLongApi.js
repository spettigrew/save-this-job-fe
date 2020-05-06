import axios from "axios";
let mapBoxToken =
  "pk.eyJ1Ijoicm1sZWUwMDAiLCJhIjoiY2szM21qZjZ1MHRkeDNtb2IyNnFvOHFuMiJ9.2WbYxj4f5zia415x9pIYdA";

export function getLatAndLong(location) {
  let coords;
  axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxToken}`
    )
    .then(res => {
      coords = res.data.features[0].center;
      console.log(coords);
    });
  return coords;
}
