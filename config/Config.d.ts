/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    ring: Ring
    sound: Sound
  }
  interface Sound {
    mode: string
    voice: string
    message: string
    recordingsDir: string
    recordingFile: string
    recordingMaxDuration: number
  }
  interface Ring {
    refreshToken: string
    locationIds: any[]
    cameraId: number
    cameraStatusPollingSeconds: number
    debug: boolean
  }
  export const config: Config
  export type Config = IConfig
}
