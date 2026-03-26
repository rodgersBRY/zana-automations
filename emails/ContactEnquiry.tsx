import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Heading,
  Row,
  Column,
  Preview,
} from '@react-email/components'

type Props = {
  name: string
  business?: string
  email: string
  message: string
}

export default function ContactEnquiry({ name, business, email, message }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New enquiry from {name}{business ? ` — ${business}` : ''}</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>⚡ Zana Automations</Heading>
            <Text style={headerSub}>You have a new contact enquiry</Text>
          </Section>

          {/* Sender info */}
          <Section style={card}>
            <Row>
              <Column>
                <Text style={label}>From</Text>
                <Text style={senderName}>{name}</Text>
                {business && <Text style={senderBusiness}>{business}</Text>}
                <Text style={senderEmail}>{email}</Text>
              </Column>
            </Row>

            <Hr style={divider} />

            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          {/* CTA hint */}
          <Section style={replyHint}>
            <Text style={replyHintText}>
              Hit reply to respond directly to {name?.split(' ')[0] ?? name} — their email is set as the reply-to address.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Zana Automations · Nairobi, Kenya
            </Text>
            <Text style={footerText}>
              This email was sent from your contact form at zanaautomations.co.ke
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

// Styles
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
  margin: '0 0 6px',
  letterSpacing: '-0.3px',
}

const headerSub = {
  color: '#8888A0',
  fontSize: '14px',
  margin: 0,
}

const card = {
  backgroundColor: '#111118',
  padding: '32px 40px',
}

const label = {
  color: '#8888A0',
  fontSize: '10px',
  textTransform: 'uppercase' as const,
  letterSpacing: '2px',
  margin: '0 0 6px',
  fontWeight: '500',
}

const senderName = {
  color: '#E8E8F0',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 2px',
}

const senderBusiness = {
  color: '#8888A0',
  fontSize: '14px',
  margin: '0 0 4px',
}

const senderEmail = {
  color: '#6C63FF',
  fontSize: '14px',
  margin: 0,
}

const divider = {
  borderColor: '#1E1E2A',
  margin: '24px 0',
}

const messageText = {
  color: '#E8E8F0',
  fontSize: '15px',
  lineHeight: '1.75',
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
}

const replyHint = {
  backgroundColor: '#6C63FF18',
  border: '1px solid #6C63FF30',
  borderRadius: '0',
  padding: '16px 40px',
}

const replyHintText = {
  color: '#9D97FF',
  fontSize: '13px',
  margin: 0,
  lineHeight: '1.5',
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
