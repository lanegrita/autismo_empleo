/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      screens: {
        xs: "400px"
      },
      colors: {
        azulDark1: "var(--color-azul-dark-1)",
        azulDark2: "var(--color-azul-dark-2)",
        azulAe: "var(--color-azul-ae)",
        azulLight1: "var(--color-azul-light-1)",
        azulLight2: "var(--color-azul-light-2)",
        azulLight3: "var(--color-azul-light-3)",
        azulLight4: "var(--color-azul-light-4)",
        negro: "var(--color-negro)",
        negroLight: "var(--color-negro-light)",
        negroAe: "var(--color-negro-ae)",
        gris: "var(--color-gris)",
        gris1: "var(--color-gris-1)",
        gris2: "var(--color-gris-2)",
        gris3: "var(--color-gris-3)",
        gris4: "var(--color-gris-4)",
        gris5: "var(--color-gris-5)",
        blanco: "var(--color-blanco)",
        primaryHover: "var(--color-hover-primary-btn)",
        secondaryHover: "var(--color-hover-secondary-btn)",
        error: "var(--color-error)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      gap: {
        1: "var(--spacer-1)",
        2: "var(--spacer-2)",
        3: "var(--spacer-3)",
        4: "var(--spacer-4)",
        5: "var(--spacer-5)",
        6: "var(--spacer-6)",
        7: "var(--spacer-7)",
        8: "var(--spacer-8)",
        9: "var(--spacer-9)",
        10: "var(--spacer-10)",
        11: "var(--spacer-11)",
        12: "var(--spacer-12)",
        13: "var(--spacer-13)",
        14: "var(--spacer-14)",
        15: "var(--spacer-15)",
        16: "var(--spacer-16)",
        17: "var(--spacer-17)",
        18: "var(--spacer-18)",
        19: "var(--spacer-19)",
        20: "var(--spacer-20)",
        21: "var(--spacer-21)",
        22: "var(--spacer-22)",
        23: "var(--spacer-23)",
        24: "var(--spacer-24)",
        25: "var(--spacer-25)",
        26: "var(--spacer-26)",
        27: "var(--spacer-27)",
        28: "var(--spacer-28)",
        29: "var(--spacer-29)",
        30: "var(--spacer-30)",
        31: "var(--spacer-31)",
        32: "var(--spacer-32)",
        33: "var(--spacer-33)",
        34: "var(--spacer-34)",
        35: "var(--spacer-35)",
        36: "var(--spacer-36)",
        37: "var(--spacer-37)",
        38: "var(--spacer-38)",
        39: "var(--spacer-39)",
        40: "var(--spacer-40)",
        41: "var(--spacer-41)",
        42: "var(--spacer-42)",
        43: "var(--spacer-43)",
        44: "var(--spacer-44)",
        45: "var(--spacer-45)",
        46: "var(--spacer-46)",
        47: "var(--spacer-47)",
        48: "var(--spacer-48)",
        49: "var(--spacer-49)",
        50: "var(--spacer-50)"
      },
      margin: {
        1: "var(--spacer-1)",
        2: "var(--spacer-2)",
        3: "var(--spacer-3)",
        4: "var(--spacer-4)",
        5: "var(--spacer-5)",
        6: "var(--spacer-6)",
        7: "var(--spacer-7)",
        8: "var(--spacer-8)",
        9: "var(--spacer-9)",
        10: "var(--spacer-10)",
        11: "var(--spacer-11)",
        12: "var(--spacer-12)",
        13: "var(--spacer-13)",
        14: "var(--spacer-14)",
        15: "var(--spacer-15)",
        16: "var(--spacer-16)",
        17: "var(--spacer-17)",
        18: "var(--spacer-18)",
        19: "var(--spacer-19)",
        20: "var(--spacer-20)",
        21: "var(--spacer-21)",
        22: "var(--spacer-22)",
        23: "var(--spacer-23)",
        24: "var(--spacer-24)",
        25: "var(--spacer-25)",
        26: "var(--spacer-26)",
        27: "var(--spacer-27)",
        28: "var(--spacer-28)",
        29: "var(--spacer-29)",
        30: "var(--spacer-30)",
        31: "var(--spacer-31)",
        32: "var(--spacer-32)",
        33: "var(--spacer-33)",
        34: "var(--spacer-34)",
        35: "var(--spacer-35)",
        36: "var(--spacer-36)",
        37: "var(--spacer-37)",
        38: "var(--spacer-38)",
        39: "var(--spacer-39)",
        40: "var(--spacer-40)",
        41: "var(--spacer-41)",
        42: "var(--spacer-42)",
        43: "var(--spacer-43)",
        44: "var(--spacer-44)",
        45: "var(--spacer-45)",
        46: "var(--spacer-46)",
        47: "var(--spacer-47)",
        48: "var(--spacer-48)",
        49: "var(--spacer-49)",
        50: "var(--spacer-50)"
      },
      padding: {
        1: "var(--spacer-1)",
        2: "var(--spacer-2)",
        3: "var(--spacer-3)",
        4: "var(--spacer-4)",
        5: "var(--spacer-5)",
        6: "var(--spacer-6)",
        7: "var(--spacer-7)",
        8: "var(--spacer-8)",
        9: "var(--spacer-9)",
        10: "var(--spacer-10)",
        11: "var(--spacer-11)",
        12: "var(--spacer-12)",
        13: "var(--spacer-13)",
        14: "var(--spacer-14)",
        15: "var(--spacer-15)",
        16: "var(--spacer-16)",
        17: "var(--spacer-17)",
        18: "var(--spacer-18)",
        19: "var(--spacer-19)",
        20: "var(--spacer-20)",
        21: "var(--spacer-21)",
        22: "var(--spacer-22)",
        23: "var(--spacer-23)",
        24: "var(--spacer-24)",
        25: "var(--spacer-25)",
        26: "var(--spacer-26)",
        27: "var(--spacer-27)",
        28: "var(--spacer-28)",
        29: "var(--spacer-29)",
        30: "var(--spacer-30)",
        31: "var(--spacer-31)",
        32: "var(--spacer-32)",
        33: "var(--spacer-33)",
        34: "var(--spacer-34)",
        35: "var(--spacer-35)",
        36: "var(--spacer-36)",
        37: "var(--spacer-37)",
        38: "var(--spacer-38)",
        39: "var(--spacer-39)",
        40: "var(--spacer-40)",
        41: "var(--spacer-41)",
        42: "var(--spacer-42)",
        43: "var(--spacer-43)",
        44: "var(--spacer-44)",
        45: "var(--spacer-45)",
        46: "var(--spacer-46)",
        47: "var(--spacer-47)",
        48: "var(--spacer-48)",
        49: "var(--spacer-49)",
        50: "var(--spacer-50)"
      },
      borderWidth: {
        3: "3px"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
