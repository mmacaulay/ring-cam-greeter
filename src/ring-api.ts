import { config } from 'node-config-ts'
import { RingApi, RingCamera } from 'ring-client-api'
import { log } from './log'

export const getCamera = async function(): Promise<RingCamera|undefined> {
  const ringApi = new RingApi({
    refreshToken: config.ring.refreshToken,
    locationIds: config.ring.locationIds,
    cameraStatusPollingSeconds: config.ring.cameraStatusPollingSeconds,
    debug: config.ring.debug
  })

  const locations = await ringApi.getLocations()
  const location = locations[0].cameras.find(c => c.id = config.ring.cameraId)
  log(`Using location ${location?.id}`)
  return locations[0].cameras.find(c => c.id = config.ring.cameraId)
}
