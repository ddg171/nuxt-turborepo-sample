import {defineConfig} from "vitest/config"
import{ resolve} from "path"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // @ts-ignore
  plugins:[vue()],
  test:{
    reporters:["verbose"],
    include:['__tests__/**/*.test.ts'],
    globals:true,
    environment:"jsdom",
  },
  resolve:{
    alias:{"@":resolve(__dirname)}
  }
})