import { _getApi } from "./src/ring-api.js";

const api = _getApi()
const locations = await api.getLocations()
locations.forEach((location, i) => {
  console.debug(`location ${i}`, location)
})