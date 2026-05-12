import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'

const contacts = [
  {
    label: 'GitHub',
    value: 'github.com/madalimasykur',
    href: 'https://github.com/madalimasykur',
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ali-masykur',
    href: 'https://www.linkedin.com/in/ali-masykur/',
    icon: IconBrandLinkedin,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/madalimsykr',
    href: 'https://www.instagram.com/madalimsykr/',
    icon: IconBrandInstagram,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-18">
      <div className="overflow-hidden rounded-4xl border border-(--color-line) bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
        <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-10">
          <div className="space-y-5">
            <p className="section-kicker">Contact</p>
            <h2 className="max-w-2xl text-4xl uppercase leading-none tracking-[-0.06em] text-(--color-text) md:text-6xl">
              Let&apos;s connect.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-(--color-soft)">
              Reach out for collaboration, freelance opportunities, or just a quick chat about
              backend systems, cloud, and AI engineering.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-(--color-line) bg-(--color-line)">
            <a
              href="mailto:alimasykur6050@gmail.com"
              className="flex items-center gap-4 bg-(--color-panel) px-5 py-4 transition hover:bg-[rgba(255,255,255,0.04)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-line) bg-[rgba(255,255,255,0.03)]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-(--color-text)">
                  @
                </span>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-(--color-muted)">
                  Email
                </p>
                <p className="text-sm text-(--color-soft)">alimasykur6050@gmail.com</p>
              </div>
            </a>

            {contacts.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-(--color-panel) px-5 py-4 transition hover:bg-[rgba(255,255,255,0.04)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--color-line) bg-[rgba(255,255,255,0.03)]">
                    <Icon className="h-5 w-5 text-(--color-text)" stroke={1.6} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-(--color-muted)">
                      {item.label}
                    </p>
                    <p className="text-sm text-(--color-soft)">{item.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
