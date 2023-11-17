import { indicators } from './items.js'

export const options = {
  defaultPosition: 1,
  interval: 7000,
  indicators: {
    activeClasses: 'bg-white dark:bg-gray-800',
    inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    items: indicators,
  },
}
