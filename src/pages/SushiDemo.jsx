import './SushiDemo.css'
import {
  useEffect,
  useState
} from 'react'
import { Link } from 'react-router-dom'

export default function SushiDemo() {

  const [activeCategory, setActiveCategory]
  = useState('sushi')

  const [cartOpen, setCartOpen]
  = useState(false)

  const [cartItems, setCartItems]
  = useState([])

  const [addedItem, setAddedItem]
  = useState('')

  const [cartBounce, setCartBounce]
  = useState(false)

  const totalPrice = cartItems.reduce(

    (total, item) =>
  
      total +
      (
        parseFloat(
          item.price.replace('L.', '')
        ) * item.quantity
      ),
  
    0
  
  )

  const totalItems = cartItems.reduce(

    (total, item) =>
  
      total + item.quantity,
  
    0
  
  )

  const whatsappMessage = `

Hola, quiero hacer un pedido:

${cartItems.map(item =>
`${item.quantity}x ${item.name}
${item.price}
`).join('')}
Total: L. ${totalPrice.toLocaleString()}

`

  const addToCart = (item) => {

    const existingItem =
      cartItems.find(
        cartItem =>
          cartItem.name === item.name
      )
  
    if (existingItem) {
  
      const updatedCart =
        cartItems.map(cartItem =>
  
          cartItem.name === item.name
  
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1
              }
  
            : cartItem
  
        )
  
      setCartItems(updatedCart)
  
    } else {
  
      setCartItems(prev => [
  
        ...prev,
  
        item
  
      ])
  
    }
  
    setAddedItem(item.name)

    setCartBounce(true)

setTimeout(() => {

  setCartBounce(false)

}, 300)

setTimeout(() => {

  setAddedItem('')

}, 1000)
  
  }

  const increaseQuantity = (name) => {

    const updatedCart =
      cartItems.map(item =>
  
        item.name === name
  
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
  
          : item
  
      )
  
    setCartItems(updatedCart)
  
  }

  const decreaseQuantity = (name) => {

    const updatedCart =
      cartItems
        .map(item =>
  
          item.name === name
  
            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }
  
            : item
  
        )
  
        .filter(item =>
          item.quantity > 0
        )
  
    setCartItems(updatedCart)
  
  }

useEffect(() => {

  const handleScroll = () => {

    const ramenSection =
      document.getElementById('ramen')

    if (!ramenSection) return

    const ramenTop =
      ramenSection.offsetTop

    if (window.scrollY >= ramenTop - 200) {

      setActiveCategory('ramen')

    } else {

      setActiveCategory('sushi')

    }

  }

  

  window.addEventListener(
    'scroll',
    handleScroll
  )

  return () => {

    window.removeEventListener(
      'scroll',
      handleScroll
    )

  }

}, [])

  return (

    <div className="sushi-page">
        <nav className="sushi-navbar">

        <Link
  to="/"
  className="logo"
>
  ← Sushi Yamato
</Link>

<div className="nav-links">
  <a href="#">Menu</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>

</nav>

      {/* HERO */}

      <section className="sushi-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="subtitle">
          COMIDA JAPONESA
          </p>

          <h1>
            Sushi Yamato
          </h1>

          <p className="description">
          Sushi fresco, ramen y bowls japoneses
          </p>

          <button>
          Ordenar por WhatsApp
          </button>

        </div>

      </section>

{/* CATEGORY BAR */}

<section className="category-section">

  <div className="category-scroll">

  <a href="#sushi">

  <button
  className={
    activeCategory === 'sushi'
      ? 'active'
      : ''
  }
>
  Sushi
</button>

</a>

<a href="#ramen">

<button
  className={
    activeCategory === 'ramen'
      ? 'active'
      : ''
  }
>
  Ramen
</button>

</a>



  </div>

</section>

      {/* MENU SECTION */}

      <section className="menu-section">

        <h2>Menú Popular</h2>

        <div
  className="menu-category"
  id="sushi"
>

  <h3>Rollos Especiales</h3>

  <div className="menu-grid">

    <div className="menu-card">

      <img
        src="/images/sushi-preview.jpg"
        alt="Sushi"
      />

      <div className="menu-info">

        <div className="menu-top">
          <h4>Dragon Roll</h4>

          <span>L. 329</span>
        </div>

        <p>
          Shrimp tempura, avocado and eel sauce
        </p>
        <button
  className="order-btn"

  onClick={() =>
    addToCart({
      name: 'Dragon Roll',
      price: 'L. 329',
      quantity: 1
    })
  }
>
{
  addedItem === 'Dragon Roll'

    ? 'Agregado ✓'

    : 'Ordenar'

}
</button>

      </div>

    </div>

    <div className="menu-card">

      <img
        src="/images/sushi-preview.jpg"
        alt="Sushi"
      />

      <div className="menu-info">

        <div className="menu-top">
          <h4>Philadelphia Roll</h4>

          <span>L. 329</span>
        </div>

        <p>
          Salmon, cream cheese and avocado
        </p>
        <button
  className="order-btn"

  onClick={() =>
    addToCart({
      name: 'Philadelphia Roll',
      price: 'L. 329',
      quantity: 1
    })
  }
>
{
  addedItem === 'Philadelphia Roll'

    ? 'Agregado ✓'

    : 'Ordenar'

}
</button>

      </div>

    </div>

  </div>

</div>

<div
  className="menu-category"
  id="ramen"
>

  <h3>Ramen</h3>

  <div className="menu-grid">

    <div className="menu-card">

      <img
        src="/images/sushi-preview.jpg"
        alt="Ramen"
      />

      <div className="menu-info">

        <div className="menu-top">
          <h4>Tonkotsu Ramen</h4>

          <span>L. 329</span>
        </div>

        <p>
          Rich pork broth with chashu pork
        </p>
        <button
  className="order-btn"

  onClick={() =>
    addToCart({
      name: 'Tonkotsu Ramen',
      price: 'L. 329',
      quantity: 1
    })
  }
>
{
  addedItem === 'Tonkotsu Ramen'

    ? 'Agregado ✓'

    : 'Ordenar'

}
</button>

      </div>

    </div>

    <div className="menu-card">

      <img
        src="/images/sushi-preview.jpg"
        alt="Ramen"
      />

      <div className="menu-info">

        <div className="menu-top">
          <h4>Spicy Miso Ramen</h4>

          <span>L. 329</span>
        </div>

        <p>
          Spicy broth with corn and egg
        </p>
        <button
  className="order-btn"

  onClick={() =>
    addToCart({
      name: 'Spicy Miso Ramen',
      price: 'L. 329',
      quantity: 1
    })
  }
>
{
  addedItem === 'Spicy Miso Ramen'

    ? 'Agregado ✓'

    : 'Ordenar'

}
</button>

      </div>

    </div>

  </div>

</div>

      </section>

      <div
  className={
    cartBounce
      ? 'floating-cart bounce'
      : 'floating-cart'
  }
>

<span>
🛒 {totalItems} Items
</span>

<button
  onClick={() =>
    setCartOpen(true)
  }
>
Ver Pedido
</button>

</div>

{
  cartOpen && (

    <div
      className="cart-overlay"

      onClick={() =>
        setCartOpen(false)
      }
    ></div>

  )
}

<div
  className={
    cartOpen
      ? 'cart-drawer open'
      : 'cart-drawer'
  }
>

  <div className="cart-header">

    <h3>Tu Pedido</h3>

    <button
      onClick={() =>
        setCartOpen(false)
      }
    >
      ✕
    </button>

  </div>

  <div className="cart-items">

  {

    cartItems.length === 0

      ? (

        <div className="empty-cart">

          <div className="empty-icon">
            🛒
          </div>

          <h4>
          Tu pedido está vacío
          </h4>

          <p>
          Agrega productos para comenzar tu pedido
          </p>

        </div>

      )

      : (

        cartItems.map((item, index) => (

          <div
            className="cart-item"
            key={index}
          >

            <div className="cart-item-top">

              <div>

                <h4>{item.name}</h4>

                <p>
                  {item.price} × {item.quantity}
                </p>

              </div>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(item.name)
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.name)
                  }
                >
                  +
                </button>

              </div>

            </div>

          </div>

        ))

      )

  }

</div>

<div className="cart-footer">

<div className="cart-total">

  <span>Total</span>

  <strong>
  L. {totalPrice.toLocaleString()}
  </strong>

</div>

<a
  href={`https://wa.me/50494340468?text=${encodeURIComponent(whatsappMessage)}`}

  target="_blank"
>

  <button>
  Enviar por WhatsApp
  </button>

</a>

</div>

</div>

    </div>

  )
}