import { Link, useParams } from 'react-router-dom'
import { products, inr } from '../data.js'
import { useCart } from '../CartContext.jsx'
import { Thumb } from '../components/ProductCard.jsx'

export default function Product() {
  const { slug } = useParams()
  const { add } = useCart()
  const p = products.find((x) => x.slug === slug)
  if (!p) return <div className="wrap section"><h1 className="h1-dark">Product not found</h1><Link className="text-link" to="/shop">Back to shop</Link></div>

  return (
    <div className="wrap section">
      <p className="crumb"><Link to="/shop">Verdant / Shop</Link></p>
      <div className="pdp">
        <Thumb p={p} className="pdp-img" />
        <div>
          <p className="cat">{p.category}</p>
          <h1 className="h1-dark">{p.name}</h1>
          <p className="muted">{p.size}</p>
          <p className="price">{inr(p.price)}</p>
          <p>{p.desc}</p>
          <p className="muted small">Draft product specification: pack weights, contents, storage guidance and supplier details require approval before sale.</p>
          <div className="row">
            <button className="btn" onClick={() => add(p.slug)}>Add to cart</button>
            <button className="btn outline" onClick={() => add(p.slug)}>Buy now</button>
          </div>
        </div>
      </div>
      <div className="pdp-info">
        <section><h2>What’s inside</h2><p>{p.inside || 'DRAFT — Contents to be confirmed.'}</p></section>
        <section><h2>Freshness & storage</h2><p>{p.storage || 'DRAFT — Storage guidance to be confirmed.'}</p>{p.shelf && <p>{p.shelf}</p>}</section>
        <section><h2>Sourcing & certification</h2><p>Farm and location awaiting supplier verification</p><p>Certification details awaiting verification</p>
          <p className="muted small">Nutrition values and allergen statements awaiting supplier labels. Do not use this draft as medical or dietary advice.</p></section>
      </div>
    </div>
  )
}
