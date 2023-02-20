import {defineConfig} from "vitest/config"
import{ resolve} from "path"
export default defineConfig({
  // @ts-ignore
  test:{
    reporters:["verbose"],
    include:['__tests__/**/*.test.ts'],
    globals:true,
  },
  resolve:{
    alias:{"@":resolve(__dirname)}
  }
})