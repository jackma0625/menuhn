import './ChineseDemo.css'

import {
  useState
} from 'react'

import { Link } from 'react-router-dom'

export default function ChineseDemo() {

  const [cartItems, setCartItems]
  = useState([])

  const [cartOpen, setCartOpen]
  = useState(false)

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

      setCartItems([
        ...cartItems,

        {
          ...item,
          quantity: 1
        }
      ])

    }

  }

  const totalItems = cartItems.reduce(

    (total, item) =>

      total + item.quantity,

    0

  )

  return (

    <div className="chinese-page">

      {/* NAVBAR */}

      <nav className="chinese-navbar">

        <Link
          to="/"
          className="logo"
        >
          ← Restaurante Hong Kong
        </Link>

      </nav>

      {/* HERO */}

      <section className="chinese-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="subtitle">
            COMIDA CHINA
          </p>

          <h1>
            Hong Kong Especial
          </h1>

          <p className="description">
            Arroz, chap suey y mixtos al estilo chino
          </p>

          <button>
            Ordenar por WhatsApp
          </button>

        </div>

      </section>

      {/* CATEGORY BAR */}

      <section className="category-section">

        <div className="category-scroll">

          <button className="active">
            Especial
          </button>

          <button>
            Entradas
          </button>

          <button>
            Arroz
          </button>

          <button>
            Pollo
          </button>

          <button>
            Res
          </button>

          <button>
            Mariscos
          </button>

        </div>

      </section>

      {/* SPECIAL SECTION */}

      <section className="special-section">

        <h2>
          Más Pedidos
        </h2>

        <div className="special-grid">

          {/* PERSONAL */}

          <div className="size-card">

            <div className="size-icon">
              🥡
            </div>

            <h3>Personal</h3>
            <p className="people-size">
  1 Persona
</p>

            <span>L. 110</span>

            <div className="option-buttons">

              <button
                onClick={() =>
                  addToCart({
                    name:
                      'Personal Arroz',
                    price:
                      'L. 110'
                  })
                }
              >
                Arroz
              </button>

              <button
                onClick={() =>
                  addToCart({
                    name:
                      'Personal Chap Suey',
                    price:
                      'L. 110'
                  })
                }
              >
                Chap Suey
              </button>

              <button
                onClick={() =>
                  addToCart({
                    name:
                      'Personal Mixto',
                    price:
                      'L. 110'
                  })
                }
              >
                Mixto
              </button>

            </div>

          </div>

          {/* MEDIO */}

          <div className="size-card">

            <div className="size-icon">
              🥡🥡
            </div>

            <h3>Medio</h3>

            <p className="people-size">
  2 Personas
</p>

            <span>L. 160</span>

            <div className="option-buttons">

              <button>
                Arroz
              </button>

              <button>
                Chap Suey
              </button>

              <button>
                Mixto
              </button>

            </div>

          </div>

          {/* NORMAL */}

          <div className="size-card">

            <div className="size-icon">
              🥡🥡🥡
            </div>

            <h3>Normal</h3>

            <p className="people-size">
  3-4 Personas
</p>

            <span>L. 220</span>

            <div className="option-buttons">

              <button>
                Arroz
              </button>

              <button>
                Chap Suey
              </button>

              <button>
                Mixto
              </button>

            </div>

          </div>

          {/* FAMILIAR */}

          <div className="size-card">

            <div className="size-icon">
              🥡🥡🥡🥡
            </div>

            <h3>Familiar</h3>

            <p className="people-size">
  5-6 Personas
</p>

            <span>L. 380</span>

            <div className="option-buttons">

              <button>
                Arroz
              </button>

              <button>
                Chap Suey
              </button>

              <button>
                Mixto
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING CART */}

      <div className="floating-cart">

        <span>
          🛒 {totalItems} Productos
        </span>

        <button
          onClick={() =>
            setCartOpen(true)
          }
        >
          Ver Pedido
        </button>

      </div>

    </div>

  )

}