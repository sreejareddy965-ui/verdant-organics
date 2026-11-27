import { Link } from 'react-router-dom'
import { useCart } from '../CartContext.jsx'
import { inr, toneFor } from '../data.js'

export function Thumb({ p, className = '' }) {
  return (
    <div className={'thumb ' + className} style={{ background: `linear-gradient(145deg, ${toneFor(p.category)}, #f1ede0)` }}>
      {p.image && <img src={p.image} alt={p.name} loading="lazy" onError={(e) => e.currentTarget.remove()} />}
    </div>
  )
}

export default function ProductCard({ p, detailed = false }) {
  const { add } = useCart()
  return (
    <article className="card">
      <Link to={`/products/${p.slug}`} aria-label={p.name}><Thumb p={p} /></Link>
      <p className="cat">{p.category}</p>
      <h3><Link to={`/products/${p.slug}`}>{p.name}</Link></h3>
      <p className="muted">{p.size}</p>
      {detailed && <p className="muted small">{p.rating ? `${p.rating} / 5` : 'No reviews yet'}</p>}
      {detailed && <p className="small">{p.desc}</p>}
      <div className="card-foot">
        <strong>{inr(p.price)}</strong>
        <button className="btn sm" onClick={() => add(p.slug)}>Add</button>
      </div>
    </article>
  )
}
