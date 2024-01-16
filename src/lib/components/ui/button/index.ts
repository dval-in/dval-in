import Root from './button.svelte';
import { tv, type VariantProps } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';

const buttonVariants = tv({
	base: 'inline-flex items-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group',
	variants: {
		variant: {
			default: 'justify-center bg-primary text-primary-foreground hover:bg-fill/20',
			destructive: 'justify-center bg-destructive text-destructive-foreground hover:bg-fill/20',
			outline: 'justify-center border border-input bg-background hover:bg-accent hover:bg-fill/20',
			secondary: 'justify-center bg-secondary text-secondary-foreground hover:bg-fill/20',
			ghost: 'justify-center hover:bg-accent hover:text-accent-foreground',
			link: 'justify-center text-primary underline-offset-4 hover:bg-fill/20',
			sidebar:
				'bg-sidebar justify-center ml-0 text-sidebarText lg:justify-start lg:ml-8 hover:text-white hover:bg-fill/20 w-full',
			activeSidebar:
				'bg-activeSidebar justify-center ml-0 text-sidebarText/110 lg:justify-start lg:ml-8 hover:text-white hover:bg-primary/90 w-full',
			headerSidebar:
				'justify-center bg-black/10 text-sidebarText/80 w-full lg:justify-start hover:text-white',
			navigatorClose: 'justify-center bg-transparent'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
