import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		padding: '5rem',
  		center: true
  	},
  	extend: {
		
  		colors: {
			blue:{
			 '1':'#0b131e',
             '2':'#202b3b',
			 '3':'#686f7b',
			 '4':'#c4cad3',
			 '5':'#f0f1f1',
			 '6':'#dde0e4'
			},
  			maroon: {
  				'50': '#FBEAEA',
  				'100': '#f3c5c7',
  				'200': '#ea9fa2',
  				'300': '#e07a7d',
  				'400': '#d75458',
  				'500': '#cD2E33',
  				'600': '#A6252A',
  				'700': '#741c21',
  				'800': '#501419',
  				'900': '#2C0C10',
  				'950': '#20090C'
  			},
  			pink: {
  				'50': '#FFF0F8',
  				'100': '#FFD6EC',
  				'200': '#FFADDC',
  				'300': '#FF84CB',
  				'400': '#FF5BBA',
  				'500': '#F82BA9',
  				'600': '#D0198F',
  				'700': '#A41173',
  				'800': '#790a55',
  				'900': '#52043a',
  				'950': '#340021'
  			},
  			softpink: {
  				'50': '#FFF1F5',
  				'100': '#FFE0E7',
  				'200': '#FFC2D0',
  				'300': '#FFA3B9',
  				'400': '#FF85A2',
  				'500': '#FF668B',
  				'600': '#E65073',
  				'700': '#CC3A5B',
  				'800': '#B32443',
  				'900': '#99102C',
  				'950': '#590414'
  			},
		
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		sarabun: [
  			'var(--font-sarabun)'
  		]
  	}
  },
  plugins: [tailwindAnimate],
};
export default config;
