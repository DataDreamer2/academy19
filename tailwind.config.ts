import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'mobile-xs': '320px',
			'mobile': '375px',
			'tablet': '768px',
			'desktop': '1024px',
			'widescreen': '1440px',
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			},
			keyframes: {
				// UI Component Animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Football-Themed Animations ⚽
				'kick-in': {
					'0%': { opacity: '0', transform: 'translate(-100px, 100px) rotate(-45deg) scale(0.5)' },
					'60%': { opacity: '1', transform: 'translate(10px, -10px) rotate(10deg) scale(1.05)' },
					'100%': { opacity: '1', transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'dribble': {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'25%': { opacity: '0.5', transform: 'translateX(-15px) translateY(-8px)' },
					'50%': { opacity: '0.75', transform: 'translateX(15px) translateY(8px)' },
					'75%': { opacity: '0.9', transform: 'translateX(-8px) translateY(-4px)' },
					'100%': { opacity: '1', transform: 'translateX(0) translateY(0)' }
				},
				'goal-celebration': {
					'0%': { opacity: '0', transform: 'scale(0.3) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
					'75%': { transform: 'scale(0.95) rotate(270deg)' },
					'100%': { opacity: '1', transform: 'scale(1) rotate(360deg)' }
				},
				'pass-through': {
					'0%': { opacity: '0', transform: 'translateX(-100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'bounce-ball': {
					'0%, 100%': { transform: 'translateY(0) scaleY(1)' },
					'10%': { transform: 'translateY(-30px) scaleY(1.05)' },
					'20%': { transform: 'translateY(0) scaleY(0.95)' },
					'30%': { transform: 'translateY(-15px) scaleY(1.02)' },
					'40%': { transform: 'translateY(0) scaleY(0.98)' },
					'50%': { transform: 'translateY(-8px) scaleY(1.01)' },
					'60%': { transform: 'translateY(0) scaleY(1)' }
				},
				'stadium-wave': {
					'0%': { transform: 'translateY(0) scaleY(1)' },
					'25%': { transform: 'translateY(-20px) scaleY(1.1)' },
					'50%': { transform: 'translateY(0) scaleY(1)' },
					'75%': { transform: 'translateY(-10px) scaleY(1.05)' },
					'100%': { transform: 'translateY(0) scaleY(1)' }
				},
				'whistle-start': {
					'0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
					'50%': { opacity: '1', transform: 'scale(1.05) translateY(-5px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
				},
				'penalty-tension': {
					'0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
					'25%': { transform: 'translateX(-3px) rotate(-1deg)' },
					'75%': { transform: 'translateX(3px) rotate(1deg)' }
				},
				'corner-kick': {
					'0%': { opacity: '0', transform: 'translate(100px, 100px) rotate(90deg) scale(0.5)' },
					'60%': { opacity: '1', transform: 'translate(-10px, -20px) rotate(-10deg) scale(1.05)' },
					'100%': { opacity: '1', transform: 'translate(0, 0) rotate(0deg) scale(1)' }
				},
				'sprint': {
					'0%': { opacity: '0', transform: 'translateX(-60px) scaleX(0.8)' },
					'60%': { opacity: '1', transform: 'translateX(5px) scaleX(1.05)' },
					'100%': { opacity: '1', transform: 'translateX(0) scaleX(1)' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				// UI Component Animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Football-Themed Animations ⚽
				'kick-in': 'kick-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'dribble': 'dribble 0.9s ease-out forwards',
				'goal-celebration': 'goal-celebration 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'pass-through': 'pass-through 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'bounce-ball': 'bounce-ball 2s ease-in-out infinite',
				'stadium-wave': 'stadium-wave 2.5s ease-in-out infinite',
				'whistle-start': 'whistle-start 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
				'penalty-tension': 'penalty-tension 0.5s ease-in-out infinite',
				'corner-kick': 'corner-kick 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'sprint': 'sprint 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'marquee': 'marquee 25s linear infinite'
			},
			boxShadow: {
				'2xs': 'var(--shadow-2xs)',
				xs: 'var(--shadow-xs)',
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
				'2xl': 'var(--shadow-2xl)'
			},
			fontFamily: {
				sans: ['Work Sans', 'sans-serif'],
				display: ['Barlow Condensed', 'sans-serif'],
				mono: ['Inconsolata', 'monospace'],
			}
		}
	},
	plugins: [animate],
} satisfies Config;
