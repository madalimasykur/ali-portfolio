import CardLabel from '@/components/ui/CardLabel'

type CardHeaderProps = {
  label?: string
  title: string
  subtitle?: string
}

export default function CardHeader({ label, title, subtitle }: CardHeaderProps) {
  return (
    <header className="space-y-4">
      {label ? <CardLabel>{label}</CardLabel> : null}
      <h3 className="card-title font-semibold tracking-[-0.03em] text-(--color-text)">
        {title}
      </h3>
      {subtitle ? <p className="card-subtitle text-(--color-soft)">{subtitle}</p> : null}
    </header>
  )
}
