<script lang="ts" setup>
import { useMenuStore } from "~/modules/menu/menu.store";
import { MenuAction } from "~/modules/menu/menu.type";
const store = useMenuStore();
</script>

<template>
    <button class="lg:hidden" @click="store.toggle">
        <span class="material-symbols-outlined !text-4xl">{{
            store.active == MenuAction.open ? "close" : "menu"
        }}</span>
    </button>
</template>

<style scoped></style>
