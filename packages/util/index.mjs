import * as myModule from './utils/index.ts'
// (実際には ./lib/myModule/index.js を読む)

// それをそのまま、このモジュールからexport
export const util = { ...myModule }
