import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconPhone } from '@tabler/icons-react'
import Card from '@/components/ui/Card'
import CardGroup from '@/components/ui/CardGroup'
import ContactLink from '@/components/ui/ContactLink'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { siteConfig } from '@/config/site'

const contacts = [
  {
    label: 'GitHub',
    href: siteConfig.socials.github,
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.socials.linkedin,
    icon: IconBrandLinkedin,
  },
  {
    label: 'Instagram',
    href: siteConfig.socials.instagram,
    icon: IconBrandInstagram,
  },
]

export default function ContactSection() {
  return (
    <Section id="contact" className="pb-18">
      <SectionHeader title="Contact" />
      <Card as="div" variant="gradient">
        <div className="grid gap-5 px-4 py-5 md:gap-6 md:px-6 md:py-6 lg:px-8 lg:py-10">
          <p className="max-w-3xl body-copy text-(--color-soft)">
            Reach out for collaboration, freelance opportunities, or just a quick chat about
            backend systems, cloud, and AI engineering.
          </p>
          <CardGroup radius="medium" className="grid divide-y divide-(--color-line-strong)">
            <ContactLink
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
              icon={<span className="font-mono text-xs uppercase tracking-[0.18em] text-(--color-text)">@</span>}
            />
            <ContactLink
              label="Phone"
              value={siteConfig.phone}
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
              icon={<IconPhone className="h-5 w-5 text-(--color-text)" stroke={1.6} />}
            />
            {contacts.map(({ icon: Icon, ...contact }) => (
              <ContactLink
                key={contact.label}
                {...contact}
                value={contact.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                external
                icon={<Icon className="h-5 w-5 text-(--color-text)" stroke={1.6} />}
              />
            ))}
          </CardGroup>
        </div>
      </Card>
    </Section>
  )
}
