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
  }
  interface Sound {
    voice: string
    message: string
  }
  export const config: Config
  export type Config = IConfig
}
