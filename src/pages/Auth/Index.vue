<script lang="ts" setup>
import { ref } from 'vue';
defineOptions({
  name: 'get-started-page',
  inheritAttrs: false,
})

// const getStartedImage ref('@/')

import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => router.replace({ name: 'auth' }), 4000)


</script>

<template>
    <div class="flex flex-center">
        <img alt="image-start" class="hero-image" src="@/assets/logo-white.png" />
    </div>
</template>

<style scoped>
.flex-center {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #D71921;
}
.hero-image {
    width: 50%;
}
</style>