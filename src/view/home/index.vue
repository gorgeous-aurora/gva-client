
<template>
  <div class="box text-red-900">
    {{userStore.userInfo}}
    asdasd
  </div>
</template>

<script setup>
import {useUserStore} from "@/pinia/modules/user.js"
import {captcha} from "@/api/user.js"
const userStore = useUserStore()
captcha({})
</script>


<style scoped  lang="scss">


</style>
