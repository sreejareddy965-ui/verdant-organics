import { Link } from 'react-router-dom'
import { faqs } from '../data.js'

const Draft = ({ children }) => <p><span className="draft">Draft</span> {children}</p>

export function About() {
  return (
    <div className="wrap section narrow">
      <h1 className="h1-dark">Thoughtful food. Everyday living.</h1>
      <Draft>Verdant is an Indian grocery brand being built around seasonal food and transparent sourcing. Our founder story, launch year and operating locations will be added after verification.</Draft>
      <h2>Our approach</h2>
      <Draft>We aim to make everyday grocery shopping simpler with clear pack sizes, ingredient information and practical storage guidance. Supplier standards and final product claims require approval.</Draft>
      <h2>Our people</h2>
      <Draft>Add the founder story and farmer partnerships here. Do not publish invented farm names, locations or certification claims.</Draft>
    </div>
  )
}

export function Standard() {
  return (
    <div className="wrap section narrow">
      <h1 className="h1-dark">Our standard</h1>
      <Draft>Sourcing, handling and quality standards will be published here once they are approved.</Draft>
    </div>
  )
}

export function Faq() {
  return (
    <div className="wrap section narrow">
      <h1 className="h1-dark">A little clarity, before you shop.</h1>
      {faqs.map(([q, a]) => <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>)}
      <h2>Delivery & freshness</h2>
      <Draft>Delivery areas, pincode coverage, time slots and freshness guarantees are not yet confirmed. Final pack contents and seasonal substitutions will be shown before checkout.</Draft>
      <h2>Returns, payments & subscriptions</h2>
      <Draft>Damaged-item reporting windows, refund timing, payment methods, COD eligibility and subscription pause/skip rules must be confirmed.</Draft>
    </div>
  )
}

export function Contact() {
  return (
    <div className="wrap section narrow">
      <h1 className="h1-dark">We’re here to help.</h1>
      <h2>Contact details</h2>
      <p>Email: [ADD REAL EMAIL] • Phone: [ADD PHONE] • Address: [ADD ADDRESS]</p>
      <h2>Support hours</h2>
      <Draft>Add working days, response-time commitments and a verified WhatsApp number before enabling contact links.</Draft>
      {/* TODO: send this to your form backend (Formspree, Netlify Forms, your own API…) */}
      <form className="contact" onSubmit={(e) => { e.preventDefault(); alert('Connect this form to your support inbox before launch.') }}>
        <input required placeholder="Your name" aria-label="Your name" />
        <input required type="email" placeholder="Email address" aria-label="Email address" />
        <textarea required rows="5" placeholder="Your message" aria-label="Your message" />
        <button className="btn" type="submit">Send message</button>
      </form>
    </div>
  )
}

export function Policy({ title, notFound }) {
  return (
    <div className="wrap section narrow">
      <h1 className="h1-dark">{title}</h1>
      {notFound
        ? <p>That page doesn’t exist. <Link className="text-link" to="/">Go to the homepage</Link></p>
        : <Draft>This policy is awaiting business approval and will be published here.</Draft>}
    </div>
  )
}
