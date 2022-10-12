/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    ring: Ring
    sound: Sound
  }
  interface Ring {
    refreshToken: string
    locationIds: Array<string>
    cameraId: number
    cameraStatusPollingSeconds: number
    debug: boolean
  }
  interface Sound {
    mode: SoundType
    voice: string
    message: string
    recordingsDir: string
    recordingFile: string
  }
  enum SoundType {
    voice = "voice",
    recording = "recording"
  }
  export const config: Config
  export type Config = IConfig
}
