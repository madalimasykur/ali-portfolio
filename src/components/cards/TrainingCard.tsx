import Card from '@/components/ui/Card'
import CardHeader from '@/components/ui/CardHeader'
import type { TrainingItem } from '@/data/profile'

type TrainingCardProps = {
  training: TrainingItem
}

export default function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Card variant="flat">
      <CardHeader label="Training" title={training.title} subtitle={training.provider} />
      <p className="mt-5 body-copy text-(--color-soft)">{training.summary}</p>
    </Card>
  )
}
