import { exec } from 'child_process'
import { config } from 'node-config-ts'

export const playSound = () => {
  const voice = config.sound.voice
  const message = config.sound.message
  exec(`say -v ${voice} ${message}`)
}