import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext.jsx'
import { FREE_DELIVERY_MIN, inr } from '../data.js'
import Newsletter from './Newsletter.jsx'

const nav = [
  ['/shop', 'Shop'],
  ['#categories', 'Categories'],
  ['/weekly-boxes', 'Weekly Boxes'],
  ['/about', 'About'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

// "Categories" is an in-page section on the home page, so go home first if needed.
function useGoCategories() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (e) => {
    e.preventDefault()
    const scroll = () => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
    if (pathname === '/') scroll()
    else { navigate('/'); setTimeout(scroll, 100) }
  }
}

function Header() {
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)
  const goCategories = useGoCategories()
  return (
    <header className="header">
      <div className="wrap header-row">
        <Link to="/" className="logo" onClick={() => setMenu(false)}>Verdant</Link>
        <nav className={'nav' + (menu ? ' open' : '')}>
          {nav.map(([to, label]) =>
            to === '#categories' ? (
              <a key={label} href="#categories" onClick={(e) => { goCategories(e); setMenu(false) }}>{label}</a>
            ) : (
              <NavLink key={label} to={to} onClick={() => setMenu(false)}>{label}</NavLink>
            )
          )}
        </nav>
        <button className="cart-btn" onClick={() => setOpen(true)} aria-label={`Open basket, ${count} items`}>
          Basket <span className="badge">{count}</span>
        </button>
        <button className="burger" onClick={() => setMenu((m) => !m)} aria-label="Toggle menu" aria-expanded={menu}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function CartDrawer() {
  const { open, setOpen, lines, setQty, subtotal } = useCart()
  if (!open) return null
  const remaining = FREE_DELIVERY_MIN - subtotal
  return (
    <div className="drawer-scrim" onClick={() => setOpen(false)}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Your basket">
        <div className="drawer-head">
          <h2>Your basket</h2>
          <button className="link-btn" onClick={() => setOpen(false)}>Close</button>
        </div>
        {lines.length === 0 ? (
          <p className="muted">Your basket is empty. <Link className="text-link" to="/shop" onClick={() => setOpen(false)}>Browse the shop</Link></p>
        ) : (
          <>
            <ul className="cart-lines">
              {lines.map(({ product, qty }) => (
                <li key={product.slug}>
                  <div><strong>{product.name}</strong><span className="muted small"> {product.size}</span></div>
                  <div className="qty">
                    <button onClick={() => setQty(product.slug, qty - 1)} aria-label={`Decrease ${product.name}`}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(product.slug, qty + 1)} aria-label={`Increase ${product.name}`}>+</button>
                  </div>
                  <span>{inr(product.price * qty)}</span>
                </li>
              ))}
            </ul>
            <p className="muted small">
              {remaining > 0 ? `Add ${inr(remaining)} more for free delivery.` : 'You qualify for free delivery.'}
            </p>
            <div className="subtotal"><span>Subtotal</span><strong>{inr(subtotal)}</strong></div>
            <button className="btn" disabled>Checkout opens once store is connected</button>
          </>
        )}
      </aside>
    </div>
  )
}

function Footer() {
  const goCategories = useGoCategories()
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="logo">Verdant</p>
          <p className="on-dark">Seasonal groceries, freshly packed for everyday living.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/shop">Shop All</Link>
          <a href="#categories" onClick={goCategories}>Categories</a>
          <Link to="/weekly-boxes">Weekly Boxes</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/our-standard">Our Standard</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Policies</h4>
          <Link to="/shipping-delivery">Shipping & Delivery</Link>
          <Link to="/returns-refunds">Returns & Refunds</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className="footer-news">
          <h4>Get 10% off your first order</h4>
          <Newsletter dark />
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 Verdant. All rights reserved.</span>
        <span>UPI · Cards · Net banking</span>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <div className="announce"><Link to="/shipping-delivery">Fresh harvest delivered in 24–48 hrs</Link></div>
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </>
  )
}
