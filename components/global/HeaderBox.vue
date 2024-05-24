<script lang="ts" setup>
import { MENU } from "~/modules/menu/menu.store";
</script>

<template>
    <header class="header">
        <div class="header-box">
            <nav class="header-nav">
                <NuxtLink to="/" active-class="animate-gelatine">
                    <Logo
                        class="xl:w-[112px] xl:h-[42px] lg:w-[80px] lg:h-[30px] w-[112px] h-[42px]"
                        src="/logo.png"
                    />
                </NuxtLink>
                <div class="header-nav_menu">
                    <!-- Main Menu -->
                    <ul class="main-menu">
                        <li v-for="{ label, name } in MENU.HEADER">
                            <NuxtLink tag="a" :to="{ name }" active-class="active">{{
                                label
                            }}</NuxtLink>
                        </li>
                    </ul>

                    <!-- Sub-menu -->
                    <div class="grid grid-cols-2 gap-2 font-bold">
                        <NuxtLink
                            tag="button"
                            :to="{ name: 'login' }"
                            class="btn btn-ghost"
                        >
                            Login
                        </NuxtLink>
                        <NuxtLink
                            tag="button"
                            :to="{ name: 'register' }"
                            class="btn btn-primary"
                        >
                            Sign Up
                        </NuxtLink>
                    </div>
                </div>
                <MenuToggle />
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped src="~/assets/styles/header.scss"></style>
<style lang="scss" scoped src="~/assets/styles/button.scss"></style>
<style lang="scss" scoped src="~/assets/styles/menu.scss"></style>
