import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Shop() {
  const [params] = useSearchParams()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState(params.get('category') || '')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [rating, setRating] = useState('')
  const [sort, setSort] = useState('featured')

  const list = useMemo(() => {
    let r = products.filter((p) =>
      (!q || (p.name + p.desc).toLowerCase().includes(q.toLowerCase())) &&
      (!cat || p.category.toLowerCase().includes(cat.toLowerCase())) &&
      (!min || p.price >= +min) && (!max || p.price <= +max) &&
      (!rating || p.rating >= +rating))
    if (sort === 'low') r = [...r].sort((a, b) => a.price - b.price)
    if (sort === 'high') r = [...r].sort((a, b) => b.price - a.price)
    if (sort === 'top') r = [...r].sort((a, b) => b.rating - a.rating)
    return r
  }, [q, cat, min, max, rating, sort])

  return (
    <div className="wrap section">
      <p className="kicker">The Verdant Market</p>
      <h1 className="h1-dark">Seasonal provisions for everyday living.</h1>
      <p className="lead dark">Find fruit, vegetables, grains, dairy, and herbs sourced with care.</p>

      <div className="filters">
        <input placeholder="Search products" aria-label="Search products" value={q} onChange={(e) => setQ(e.target.value)} />
        <input placeholder="Category (e.g. Fruits)" aria-label="Category" value={cat} onChange={(e) => setCat(e.target.value)} />
        <input type="number" min="0" placeholder="Minimum price (₹)" aria-label="Minimum price" value={min} onChange={(e) => setMin(e.target.value)} />
        <input type="number" min="0" placeholder="Maximum price (₹)" aria-label="Maximum price" value={max} onChange={(e) => setMax(e.target.value)} />
        <input type="number" min="0" max="5" step="0.5" placeholder="Minimum rating (0–5)" aria-label="Minimum rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <select aria-label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price low-high</option>
          <option value="high">Price high-low</option>
          <option value="top">Top rated</option>
        </select>
      </div>

      {list.length ? (
        <div className="grid">{list.map((p) => <ProductCard key={p.slug} p={p} detailed />)}</div>
      ) : (
        <p className="muted">No products match these filters. Clear a filter to see more.</p>
      )}
    </div>
  )
}
