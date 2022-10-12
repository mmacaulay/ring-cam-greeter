import { exec } from 'child_process'
import { config } from 'node-config-ts'
import { RingCamera } from 'ring-client-api'
import * as path from 'path'
import { log } from './log.js'

export const playVoice = () => {
  const voice = config.sound.voice
  const message = config.sound.message
  log(`Playing voice message with voice: ${voice}`)
  exec(`say -v ${voice} ${message}`)
}

export const playRecording = async (camera: RingCamera) => {
  const call = await camera.startLiveCall()

  log(`Call started, activating return audio on ${camera.name}`)
  const file = path.join(path.resolve(config.sound.recordingsDir), config.sound.recordingFile)
  log(`Playing file: ${file}`)
  await Promise.all([
    call.transcodeReturnAudio({
      input: [file]
    }),

    call.activateCameraSpeaker(),
  ])

  setTimeout(() => {
    call.stop()
  }, config.sound.recordingMaxDuration)
}
