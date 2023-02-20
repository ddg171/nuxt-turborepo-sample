<template>
  <div>
    <NuxtWelcome />
    <ClientOnly>
      <div>
        <PracticeButton @click:app-button="shuffle">shuffle</PracticeButton>
        {{ msg }}
      </div>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { util } from '@practice/util'
const str = '一般社団法人福祉キャリアセンター'
const msg = ref<string>(str)

const shuffle = () => {
  const originalMsg = msg.value.toString()
  console.log(originalMsg)
  const charNum = originalMsg.length
  const duration = 500
  const startAt = new Date().getTime()
  msg.value = ''
  const timerId = setInterval(() => {
    const now = new Date().getTime()
    const diff = now - startAt

    if (diff >= duration) {
      msg.value = originalMsg
      clearInterval(timerId)
      return
    }
    const howManyChange = charNum - Math.floor((duration - diff) / (duration / charNum)) - 1
    msg.value = util.replaceRandomCharactor(originalMsg, howManyChange)
  }, 10)
}
</script>
