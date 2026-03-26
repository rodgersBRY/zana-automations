import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Heading,
  Preview,
  Link,
} from '@react-email/components'

type Props = {
  name: string
}

export default function AutoReply({ name }: Props) {
  const firstName = name?.split(' ')[0] ?? name

  return (
    <Html lang="en">
      <Head />
      <Preview>We got your message — we&apos;ll be in touch soon.</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>⚡ Zana Automations</Heading>
          </Section>

          {/* Body */}
          <Section style={card}>
            <Heading style={heading}>Hey {firstName}, we got your message.</Heading>
            <Text style={paragraph}>
              Thanks for reaching out. We&apos;ve received your enquiry and will get back to you within <strong style={strong}>24 hours</strong> — usually much sooner.
            </Text>
            <Text style={paragraph}>
              In the meantime, feel free to browse our work or learn more about how we help businesses like yours save time through automation.
            </Text>

            <Hr style={divider} />

            <Text style={ctaLabel}>Ready to move faster?</Text>
            <Text style={paragraph}>
              You can book a free 30-minute discovery call directly — no commitment, no jargon. Just a conversation about what&apos;s slowing you down and whether we can help.
            </Text>

            <Link href="https://zanaautomations.co.ke/contact" style={ctaButton}>
              Book a free call →
            </Link>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>Zana Automations · Nairobi, Kenya</Text>
            <Text style={footerText}>
              You&apos;re receiving this because you submitted a form at{' '}
              <Link href="https://zanaautomations.co.ke" style={footerLink}>
                zanaautomations.co.ke
              </Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

const body = {
  backgroundColor: '#0A0A0F',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  margin: 0,
  padding: '40px 0',
}

const container = {
  maxWidth: '560px',
  margin: '0 auto',
}

const header = {
  backgroundColor: '#111118',
  borderRadius: '16px 16px 0 0',
  padding: '32px 40px',
  borderBottom: '1px solid #1E1E2A',
}

const logo = {
  color: '#6C63FF',
  fontSize: '22px',
  fontWeight: '700',
  margin: 0,
  letterSpacing: '-0.3px',
}

const card = {
  backgroundColor: '#111118',
  padding: '40px 40px 32px',
}

const heading = {
  color: '#E8E8F0',
  fontSize: '22px',
  fontWeight: '700',
  margin: '0 0 20px',
  letterSpacing: '-0.3px',
}

const paragraph = {
  color: '#8888A0',
  fontSize: '15px',
  lineHeight: '1.75',
  margin: '0 0 16px',
}

const strong = {
  color: '#E8E8F0',
  fontWeight: '600',
}

const divider = {
  borderColor: '#1E1E2A',
  margin: '28px 0',
}

const ctaLabel = {
  color: '#00E5A0',
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '2px',
  fontWeight: '600',
  margin: '0 0 12px',
}

const ctaButton = {
  display: 'inline-block',
  backgroundColor: '#6C63FF',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: '500',
  textDecoration: 'none',
  padding: '12px 28px',
  borderRadius: '10px',
  marginTop: '8px',
}

const footer = {
  backgroundColor: '#0A0A0F',
  borderRadius: '0 0 16px 16px',
  border: '1px solid #1E1E2A',
  borderTop: 'none',
  padding: '20px 40px',
}

const footerText = {
  color: '#3A3A4A',
  fontSize: '12px',
  margin: '0 0 4px',
  textAlign: 'center' as const,
}

const footerLink = {
  color: '#3A3A4A',
  textDecoration: 'underline',
}
