export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon'

export function buttonStyles(variant: ButtonVariant, className: string) {
  const variants = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    text: 'min-h-11 rounded-sm body-copy font-medium text-(--color-accent) underline-offset-4 hover:underline',
    icon: 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-(--color-line-strong) bg-(--color-text) text-(--color-bg) transition hover:bg-(--color-accent)',
  }

  return `${variants[variant]} cursor-pointer disabled:cursor-default disabled:opacity-30 disabled:hover:transform-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) ${className}`
}
