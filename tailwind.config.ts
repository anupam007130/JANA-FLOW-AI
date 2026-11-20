import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink:"#0B1020", panel:"#111A2E", card:"#151F35", cyan:"#35D6F4", violet:"#826CFF" }, boxShadow: { glow:"0 0 50px rgba(53,214,244,.12)" } } }, plugins: [] };
export default config;