import { config, SoundType } from 'node-config-ts'
import { PushNotificationAction } from 'ring-client-api'
import { log } from './src/log.js'
import { getCamera } from './src/ring-api.js'
import { playVoice, playRecording } from './src/sound.js'

const camera = await getCamera()
if (camera === undefined) throw new Error('Camera undefined')
log(`Using camera id: ${camera.id} name: ${camera.name}`)

camera.onNewNotification.subscribe(notification => {
  switch(notification.action) {
    case PushNotificationAction.Motion:
      log(`Motion detected: ${notification.subtype}`)
      if (notification.subtype !== 'human') break
      switch(config.sound.mode) {
        case SoundType.recording:
          playRecording(camera)
          break
        case SoundType.voice:
          playVoice()
          break
        default:
          log(`Unknown sound mode ${config.sound.mode}`)
          break
      }

      break
    case PushNotificationAction.Ding:
      log('Ding occurred')
      break
    default:
      log(`Unknown action: ${notification.action}`)
      break
  }
})