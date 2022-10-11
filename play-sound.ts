import { exec } from 'child_process'

export const whoGoesThere = () => {
  exec('say "Who goes there?"')
}