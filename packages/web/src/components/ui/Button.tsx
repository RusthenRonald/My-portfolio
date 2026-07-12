import {type ButtonHTMLAttributes} from 'react'

type Variant = 'primary' | 'ghost' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}

export default function Button({
    variant = 'primary',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]'

    const variants: Record<Variant, string> = {
        primary: 'px-6 py-3 bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_var(--color-accent)]',
        ghost: 'px-6 py-3 border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5',
        icon: 'w-9 h-9 border border-[var(--color-line)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
    }

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}