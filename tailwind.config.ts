import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "centered-child": {
        display: "grid",
        placeItems: "center",
      },
      container: {
        center: true,
        padding: "0 30px",
        maxWidth: "1366px",
      },
      colors: {
        "primary-dark": "#AF151F",
        "primary-light": "#BE1622",
        grey: "#bbbabf",
      },
      boxShadow: {
        navbar: "0 3px 26px #0000001A",
        sideBar: "0 0 20px #0000001A",
        video: "inset 0 0 66px #00000042",
        card: "0 0 30px #0000001A",
        mainButton: "0 4px 20px #AF151F4D",
        ghostedButton: "0 4px 20px #AF151F1A",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".centered-child": {
          display: "grid",
          placeItems: "center",
        },
      });
    },
  ],
};
export default config;
