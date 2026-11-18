import { createContext, useContext, useMemo, useState } from 'react'
import { products } from './data.js'

const CartCtx = createContext(null)
export const useCart = () => useContext(CartCtx)

export function CartProvider({ children }) {
  const [items, setItems] = useState({}) // { slug: qty }
  const [open, setOpen] = useState(false)

  const add = (slug) => { setItems((c) => ({ ...c, [slug]: (c[slug] || 0) + 1 })); setOpen(true) }
  const setQty = (slug, qty) => setItems((c) => {
    const next = { ...c }
    if (qty <= 0) delete next[slug]; else next[slug] = qty
    return next
  })

  const value = useMemo(() => {
    const lines = Object.entries(items).map(([slug, qty]) => ({ product: products.find((p) => p.slug === slug), qty }))
    return {
      lines, open, setOpen, add, setQty,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
    }
  }, [items, open])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}
