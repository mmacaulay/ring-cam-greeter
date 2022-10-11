/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    ring: Ring
  }
  interface Ring {
    refreshToken: string
  }
  export const config: Config
  export type Config = IConfig
}
