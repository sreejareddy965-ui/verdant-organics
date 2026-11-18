export const HERO_IMG = 'https://framerusercontent.com/images/FDMlNxnCayn4NUoeERx4M6IilPQ.jpg?width=2400&height=1600'
export const FREE_DELIVERY_MIN = 699

export const categories = [
  { name: 'Fruits', tag: 'Sun-ripened picks', tone: '#e9b44c' },
  { name: 'Vegetables', tag: 'Daily greens', tone: '#8fb27a' },
  { name: 'Grains', tag: 'Pantry foundations', tone: '#d3b27a' },
  { name: 'Dairy', tag: 'Fresh and cultured', tone: '#e2dcc8' },
  { name: 'Herbs', tag: 'Fragrant finishing', tone: '#6f9a68' },
]

export const products = [
  { slug: 'avocado-harvest-box', name: 'Avocado Harvest Box', category: 'Fruits', size: '1.25 kg box', price: 649, rating: 0,
    desc: 'Hand-selected avocado, tomatoes, greens, and seasonal staples.',
    image: 'https://framerusercontent.com/images/mLc6jgV96AFBECfVqsOG2YsIvI.jpg?width=900&height=900',
    inside: 'DRAFT — 2 avocados (approximately 400 g), tomatoes 500 g, salad greens 250 g, lemons 100 g.',
    storage: 'DRAFT — Keep greens refrigerated; ripen avocados at room temperature, then refrigerate.', shelf: 'DRAFT — 2–4 days after delivery' },
  { slug: 'garden-bowl-bundle', name: 'Garden Bowl Bundle', category: 'Vegetables', size: '2 kg bundle', price: 520, rating: 0,
    desc: 'A crisp mix of daily vegetables for salads, sautés, and soups.' },
  { slug: 'wildflower-herb-mix', name: 'Wildflower Herb Mix', category: 'Herbs', size: '100 g pack', price: 280, rating: 0,
    desc: 'Fragrant herbs and edible florals grown without synthetic sprays.' },
  { slug: 'morning-grain-milk', name: 'Morning Grain & Milk', category: 'Grains', size: '500 g grains + 500 ml milk', price: 390, rating: 0,
    desc: 'Organic grains paired with fresh dairy for slow, nourishing mornings.' },
  { slug: 'heirloom-garlic-set', name: 'Heirloom Garlic Set', category: 'Vegetables', size: '500 g', price: 240, rating: 0,
    desc: 'Aromatic garlic bulbs cured naturally for deep, clean flavor.' },
  { slug: 'citrus-immunity-pack', name: 'Citrus Immunity Pack', category: 'Fruits', size: '1.5 kg pack', price: 460, rating: 0,
    desc: 'Bright seasonal citrus selected for juice, zest, and snacking.' },
  { slug: 'weekly-market-box', name: 'Weekly Market Box', category: 'Mixed', size: '4 kg weekly box', price: 899, rating: 0,
    desc: 'A chef-curated weekly mix of produce, pantry staples, and herbs.' },
  { slug: 'fresh-fruit-medley', name: 'Fresh Fruit Medley', category: 'Fruits', size: '500 g prepared pack', price: 350, rating: 0,
    desc: 'Naturally sweet sliced fruits for breakfasts, bowls, and desserts.' },
]

export const toneFor = (cat) => (categories.find((c) => c.name === cat)?.tone ?? '#a7b99a')
export const inr = (n) => '₹' + n.toLocaleString('en-IN')

export const faqs = [
  ['When will my order arrive?', 'Available delivery dates or estimated windows are shown at checkout. Timing depends on your area and the items in your basket. Unpack promptly when your groceries arrive, especially chilled items.'],
  ['How do I get free delivery?', 'Orders above ₹699 after discounts qualify for free delivery. Orders of ₹699 or less have a delivery charge shown at checkout. Your basket shows how much more you need to qualify.'],
  ['What if something arrives damaged or incorrect?', 'Use the Contact form within 24 hours of delivery. Include your order number, a description and a clear photo of the affected item and packaging. We will review it and arrange an appropriate replacement or refund.'],
  ['Can I pause or skip a subscription?', 'For an active recurring plan, pause or skip future deliveries before the change deadline shown with your plan. A box already being packed may not be changeable. One-time boxes do not renew automatically.'],
]
