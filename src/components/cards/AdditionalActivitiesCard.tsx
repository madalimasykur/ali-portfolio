import BulletList from '@/components/ui/BulletList'
import Card from '@/components/ui/Card'
import { activityItems } from '@/data/profile'

export default function AdditionalActivitiesCard() {
  return (
    <Card>
      <BulletList items={activityItems} />
    </Card>
  )
}
