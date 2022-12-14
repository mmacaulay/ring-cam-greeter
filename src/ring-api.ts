import { config } from 'node-config-ts'
import { RingApi, RingCamera } from 'ring-client-api'
import { log } from './log.js'

export const _getApi = (): RingApi => {
  return new RingApi({
    refreshToken: config.ring.refreshToken,
    locationIds: config.ring.locationIds,
    cameraStatusPollingSeconds: config.ring.cameraStatusPollingSeconds,
    debug: config.ring.debug
  })
}

export const getCamera = async function(): Promise<RingCamera|undefined> {
  const ringApi = _getApi()

  const locations = await ringApi.getLocations()
  const camera = locations[0].cameras.find(c => c.id = config.ring.cameraId)
  log(`Using location id: ${locations[0].id}, camera id: ${camera?.id} name: ${camera?.name}`)
  return camera
}
