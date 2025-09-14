export default{
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            lato: ['Lato', 'sans-serif'],
        },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"], // active clair/sombre
    },
}