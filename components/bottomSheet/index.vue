<script lang="ts" setup>
import { useMenuStore } from "~/modules/menu/menu.store";
import { MenuAction } from "~/modules/menu/menu.type";

const menu = useMenuStore();
const bottomSheet = ref<HTMLDivElement>();
</script>

<template>
    <ClientOnly>
        <div class="relative z-40">
            <div
                class="bottomOverlay"
                v-if="menu.active === MenuAction.open"
                @click="menu.close"
            ></div>
            <Transition>
                <div
                    class="bottomSheet"
                    ref="bottomSheet"
                    v-if="menu.active === MenuAction.open"
                >
                    <BottomSheetMenu class="flex-col !gap-0" />
                </div>
            </Transition>
        </div>
    </ClientOnly>
</template>

<style scoped lang="scss">
.bottomOverlay {
    @apply bg-blog-primary/10;
    @apply fixed top-0 left-0;
    @apply w-full h-full;
    @apply z-40;
}
.bottomSheet {
    @apply py-3;
    @apply z-40 w-full max-w-[400px] left-1/2 -translate-x-1/2;
    @apply fixed;
    @apply min-h-[300px];
    @apply bg-zinc-100;
    @apply rounded-t-3xl;
    @apply bottom-0;
    @apply border border-zinc-200;
    @apply shadow-[0px_-5px_20px_0px] shadow-blog-primary/10;
}
.v-enter-active,
.v-leave-active {
    @apply transition-all duration-300 ease-linear;
}

.v-enter-from,
.v-leave-to {
    @apply opacity-0 -bottom-[300px];
}
.v-enter-to,
.v-leave-from {
    @apply opacity-100 bottom-0;
}
</style>
