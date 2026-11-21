import Card from '@/components/ui/Card'
import CardLabel from '@/components/ui/CardLabel'
import { languageItems } from '@/data/profile'

export default function LanguagesCard() {
  return (
    <Card id="languages" aria-labelledby="languages-heading" className="scroll-mt-20">
      <CardLabel as="h3" id="languages-heading" className="mb-5">Languages</CardLabel>
      <dl className="space-y-4 body-copy text-(--color-soft)">
        {languageItems.map((language) => (
          <div key={language.name} className="flex flex-wrap justify-between gap-3">
            <dt>{language.name}</dt>
            <dd>{language.proficiency}</dd>
          </div>
        ))}
      </dl>
    </Card>
  )
}
