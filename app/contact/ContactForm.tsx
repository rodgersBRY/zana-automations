'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, CheckCircle } from 'lucide-react'

type FormData = {
  name: string
  business: string
  email: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        setServerError(json.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-brand-surface border border-brand-accent2/30 rounded-2xl p-10 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 bg-brand-accent2/20 border border-brand-accent2/30 rounded-2xl flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-brand-accent2" />
        </div>
        <h2 className="font-display font-bold text-2xl text-brand-text tracking-tight">Message sent</h2>
        <p className="font-body text-brand-subtle leading-relaxed max-w-sm">
          We'll get back to you within 24 hours — usually much sooner. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col gap-5"
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest">
          Your name <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Amara Osei"
          className={`bg-brand-bg border rounded-xl px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors duration-200 ${
            errors.name ? 'border-red-400/60' : 'border-brand-border hover:border-brand-muted focus:border-brand-accent'
          }`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', { required: 'Please enter your name.' })}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="font-body text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Business */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="business" className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest">
          Business name <span className="text-brand-muted">(optional)</span>
        </label>
        <input
          id="business"
          type="text"
          autoComplete="organization"
          placeholder="Savanna Logistics Ltd"
          className="bg-brand-bg border border-brand-border hover:border-brand-muted focus:border-brand-accent rounded-xl px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors duration-200"
          {...register('business')}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest">
          Email address <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="amara@savannalogistics.co.ke"
          className={`bg-brand-bg border rounded-xl px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors duration-200 ${
            errors.email ? 'border-red-400/60' : 'border-brand-border hover:border-brand-muted focus:border-brand-accent'
          }`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email', {
            required: 'Please enter your email address.',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
          })}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="font-body text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-xs font-medium text-brand-subtle uppercase tracking-widest">
          What do you need help with? <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us what's taking the most time in your business right now. Even a rough description is enough to get started."
          className={`bg-brand-bg border rounded-xl px-4 py-3 font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors duration-200 resize-none ${
            errors.message ? 'border-red-400/60' : 'border-brand-border hover:border-brand-muted focus:border-brand-accent'
          }`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message', { required: 'Please tell us a bit about what you need.' })}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="font-body text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="font-body text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-body font-medium px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        {isSubmitting ? 'Sending…' : 'Send message'}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="font-body text-xs text-brand-subtle text-center">
        We reply within 24 hours · No commitment required
      </p>
    </form>
  )
}
