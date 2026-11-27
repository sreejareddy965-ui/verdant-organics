import { Link } from 'react-router-dom'
import { HERO_IMG, categories, products, faqs } from '../data.js'
import ProductCard from '../components/ProductCard.jsx'
import Newsletter from '../components/Newsletter.jsx'

// Category images
import dairy from "../assets/images/Categories/Dairy-verdant.webp";
import grains from "../assets/images/Categories/Grains- verdant.webp";
import herbs from "../assets/images/Categories/Herbs-Verdant.webp";
import fruits from "../assets/images/Categories/image.png";
import vegetables from "../assets/images/Categories/Vegtables-Verdant.webp";

// Weekly box images
import weeklyVegetables from "../assets/weekly-box/Veggies.png";
import weeklyFruits from "../assets/weekly-box/Fruits.png";
import weeklyPantry from "../assets/weekly-box/Pantry.png";
import weeklyHerbs from "../assets/weekly-box/Herbs.png";
import weeklyBox from "../assets/weekly-box/Brand-verdant.png";


const categoryImages = {
  Fruits: fruits,
  Vegetables: vegetables,
  Grains: grains,
  Dairy: dairy,
  Herbs: herbs,
};

const steps = [
  ['Choose your basket', 'Pick individual favourites or start with a weekly box. Clear pack sizes help you order just what you need.'],
  ['We pack it fresh', 'Your groceries are selected and packed with care, with delicate items protected for the journey.'],
  ['Delivered to your door', 'Choose an available delivery window at checkout, then unpack, store and enjoy your groceries.'],
]
const why = [
  ['Seasonal sourcing', 'A changing selection of fruit, vegetables and kitchen staples that keeps everyday meals interesting.'],
  ['Careful handling', 'Delicate leaves, sturdy roots and chilled essentials are packed with their journey in mind.'],
  ['Low-waste delivery', 'Practical protection with fewer unnecessary layers. Reuse or recycle packaging wherever you can.'],
  ['Simple pricing', 'Clear pack sizes, prices in rupees and delivery charges shown before you pay. No guesswork.'],
]

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(20,40,26,.35), rgba(20,40,26,.72)), url(${HERO_IMG})` }}>
        <div className="wrap hero-copy">
          <p className="kicker light">Seasonal food. Everyday ease.</p>
          <h1>Fresh organic groceries. Delivered with care.</h1>
          <p className="lead">Organic groceries, seasonal produce and pantry favourites, carefully selected and delivered to your door.</p>
          <div className="row">
            <Link className="btn light" to="/shop">Shop Now</Link>
            <Link className="btn ghost" to="/weekly-boxes">View Weekly Boxes</Link>
          </div>
        </div>
      </section>

      <ul className="trust wrap">
        {['Seasonal produce', 'Carefully packed', 'Low-waste packaging', 'Easy returns for damaged items'].map((t) => <li key={t}>{t}</li>)}
      </ul>

      <section className="section wrap" id="categories">
        <p className="kicker">Shop by season</p>
        <h2>Good food starts with the season.</h2>
        <div className="cats">
  {categories.map((c) => (
    <Link
  key={c.name}
  to={`/shop?category=${c.name}`}
  className="cat-tile"
  style={{
    backgroundImage: `url(${categoryImages[c.name]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* <h3>{c.name}</h3>
  <span>{c.tag}</span> */}
</Link>
  ))}
</div>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Featured products</p>
            <h2>Fresh picks for your everyday basket.</h2>
          </div>
          <Link to="/shop" className="text-link">View all</Link>
        </div>
        <div className="grid">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>A better basket, in three simple steps.</h2>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

    <section className="section wrap split">
  <div>
    <h2>One box. A week of possibilities.</h2>

    <p>
      Bring a little rhythm to your weekly shop with a seasonal mix of fruit,
      vegetables and kitchen staples. Choose Small, Medium or Family. Order once,
      or explore a recurring plan with the flexibility to pause or skip future deliveries.
    </p>

    <Link className="btn" to="/weekly-boxes">
      Explore Weekly Boxes
    </Link>
  </div>

  <div className="weekly-box-grid">
    <img src={weeklyVegetables} alt="Fresh organic vegetables" />
    <img src={weeklyFruits} alt="Seasonal fruits" />
    <img src={weeklyPantry} alt="Organic pantry staples" />
    <img src={weeklyHerbs} alt="Fresh leafy herbs" />
    <img src={weeklyBox} alt="Verdant Organics weekly box" />
  </div>
</section>

      <section className="section wrap">
        <p className="kicker">Why choose us</p>
        <h2>Everyday care. A little less fuss.</h2>
        <div className="why">
          {why.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section wrap narrow">
        <h2>A few things you might be wondering.</h2>
        {faqs.map(([q, a]) => (
          <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>
        ))}
        <Link to="/faq" className="text-link">Read all FAQs</Link>
      </section>

      <section className="letter">
        <div className="wrap narrow center">
          <p className="kicker light">The Verdant letter</p>
          <h2>Get 10% off your first order.</h2>
          <Newsletter dark />
        </div>
      </section>
    </>
  )
}
