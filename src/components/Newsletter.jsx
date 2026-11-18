import { useState } from 'react'

export default function Newsletter({ dark = false }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  // TODO: connect to your email provider (Mailchimp, Klaviyo, Buttondown…)
  const submit = (e) => { e.preventDefault(); setDone(true) }
  if (done) return <p className={dark ? 'on-dark' : ''}>Thanks — check your inbox for your 10% code.</p>
  return (
    <form className="news" onSubmit={submit}>
      <input type="email" required placeholder="Email address" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn light" type="submit">Subscribe</button>
    </form>
  )
}
