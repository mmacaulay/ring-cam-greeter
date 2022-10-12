import { PushNotificationAction } from 'ring-client-api'
import { getCamera } from './ring-cam.js'
import { playSound } from './play-sound.js'

const camera = await getCamera()
if (camera === undefined) throw new Error('Camera undefined')
console.log(`Using camera id: ${camera.id} name: ${camera.name}`)

camera.onNewNotification.subscribe(notification => {
    console.log(notification)
    switch(notification.action) {
        case PushNotificationAction.Motion:
            console.log('Motion detected')
            if (notification.subtype === 'human') {
                playSound()
            }
            break
        case PushNotificationAction.Ding:
            console.log('Ding occurred')
            break
        default:
            console.log(`Unknown action: ${notification.action}`)
            break
    }
})