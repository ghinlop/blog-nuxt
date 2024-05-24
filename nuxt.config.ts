// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "SUZU BLOG",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico",
                },
            ],
        },
        pageTransition: {
            name: "page",
            mode: "out-in", // default
        },
    },
    modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxt/image"],

    css: ["~/assets/styles/tailwind.scss", "~/assets/styles/icon.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    googleFonts: {
        families: {
            Poppins: [400, 500, 600, 800],
            Inter: [400, 500, 600],
        },
    },
});
