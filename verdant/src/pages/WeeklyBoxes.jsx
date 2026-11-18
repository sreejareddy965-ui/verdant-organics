import { Link } from 'react-router-dom'
import { useCart } from '../CartContext.jsx'

const sizes = [
  ['Small', 'A light seasonal mix for one or two.'],
  ['Medium', 'A balanced weekly mix for a small household.'],
  ['Family', 'A generous mix of produce and staples for a full table.'],
]

export default function WeeklyBoxes() {
  const { add } = useCart()
  return (
    <div className="wrap section">
      <h1 className="h1-dark">One box. A week of possibilities.</h1>
      <p className="lead dark">Bring a little rhythm to your weekly shop with a seasonal mix of fruit, vegetables and kitchen staples. Order once, or explore a recurring plan with the flexibility to pause or skip future deliveries.</p>
      <div className="why three">
        {sizes.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
      </div>
      <p className="muted small">Box sizes and recurring-plan pricing are being finalised. In the meantime, the Weekly Market Box is available as a one-time order.</p>
      <div className="row">
        <button className="btn" onClick={() => add('weekly-market-box')}>Add Weekly Market Box</button>
        <Link className="btn outline" to="/faq">Read the FAQ</Link>
      </div>
    </div>
  )
}
