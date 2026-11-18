import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import WeeklyBoxes from './pages/WeeklyBoxes.jsx'
import { About, Standard, Faq, Contact, Policy } from './pages/Info.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/weekly-boxes" element={<WeeklyBoxes />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-standard" element={<Standard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-delivery" element={<Policy title="Shipping & Delivery" />} />
        <Route path="/returns-refunds" element={<Policy title="Returns & Refunds" />} />
        <Route path="/privacy" element={<Policy title="Privacy Policy" />} />
        <Route path="/terms" element={<Policy title="Terms & Conditions" />} />
        <Route path="*" element={<Policy title="Page not found" notFound />} />
      </Routes>
    </Layout>
  )
}
