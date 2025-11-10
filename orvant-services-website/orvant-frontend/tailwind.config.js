/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			display: ['Playfair Display', 'Georgia', 'serif'],
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  		},
  		fontSize: {
  			'display-xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '600' }],
  			'display-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '600' }],
  			'display-md': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
  			'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
  			'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
  			'body-sm': ['14px', { lineHeight: '22px', fontWeight: '400' }],
  			'body-xs': ['12px', { lineHeight: '18px', fontWeight: '400', letterSpacing: '0.05em', textTransform: 'uppercase' }],
  		},
  		colors: {
  			navy: {
  				950: '#000A14',
  				900: '#001F3F',
  				800: '#002952',
  				700: '#003D66',
  				600: '#005080',
  				500: '#006699',
  				400: '#3385AD',
  				300: '#66A3C2',
  				200: '#99C2D6',
  				100: '#CCE0EB',
  				50: '#E6F0F5',
  			},
  			gold: {
  				600: '#B8941E',
  				500: '#D4AF37',
  				400: '#DCC05C',
  				300: '#E5D081',
  			},
  			neutral: {
  				950: '#0B1020',
  				900: '#111827',
  				800: '#1F2937',
  				700: '#374151',
  				600: '#4B5563',
  				500: '#6B7280',
  				400: '#9CA3AF',
  				300: '#D1D5DB',
  				200: '#E5E7EB',
  				100: '#F3F4F6',
  				50: '#F9FAFB',
  			},
  			accent: {
  				600: '#D4AF37',
  				500: '#DCC05C',
  				400: '#E5D081',
  				300: '#EDE0A6',
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
  			sm: '4px',
  			md: '8px',
  			lg: '12px',
  		},
  		boxShadow: {
  			xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  			sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  			elevation: '0 2px 8px rgba(0, 0, 0, 0.08)',
  		},
  		maxWidth: {
  			'container': '1440px',
  		},
  		keyframes: {
  			'fade-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(8px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'fade-up': 'fade-up 220ms cubic-bezier(0.22, 1, 0.36, 1)',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [import("tailwindcss-animate")],
}
