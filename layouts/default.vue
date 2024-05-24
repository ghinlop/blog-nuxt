<script lang="ts" setup></script>

<template>
    <div class="flex flex-col min-h-dvh relative z-10">
        <HeaderBox />
        <main class="flex-grow">
            <slot />
        </main>
        <FooterBox />

        <BottomSheet />
    </div>
</template>

<style scoped></style>
