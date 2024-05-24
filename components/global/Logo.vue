<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        src?: string;
    }>(),
    {
        src: "/logo.png",
    }
);
</script>

<template>
    <NuxtImg :src></NuxtImg>
</template>
