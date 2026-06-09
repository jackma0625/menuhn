
import './ChineseDemo.css'
import { chineseMenu } from '../data/chineseMenu'

export default function ChineseDemo() {

  return (

    <div className="sushi-page">

      <section className="chinese-hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <p className="subtitle">
            AUTHENTIC CHINESE FOOD
          </p>

          <h1>
            Chinese Restaurant
          </h1>

          <p className="description">
            Fried Rice • Chow Mein • Combos
          </p>

        </div>

      </section>

      <section className="menu-section">

        <h2>
          Popular Menu
        </h2>

        <div className="menu-grid">

          {

            chineseMenu.map(item => (

              <div
                className="menu-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="menu-info">

                  <div className="menu-top">

                    <h4>
                      {item.name}
                    </h4>

                    <span>
                      L. {item.price}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                  <button className="order-btn">
                    Ordenar
                  </button>

                </div>

              </div>

            ))

          }

        </div>

      </section>

    </div>

  )

}
