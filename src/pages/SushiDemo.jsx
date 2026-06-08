import './SushiDemo.css'

export default function SushiDemo() {
  return (

    <div className="sushi-page">
        <nav className="sushi-navbar">

<div className="logo">
  Sushi Yamato
</div>

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
            Japanese Restaurant
          </p>

          <h1>
            Sushi Yamato
          </h1>

          <p className="description">
            Fresh sushi, ramen and Japanese bowls
          </p>

          <button>
            Order on WhatsApp
          </button>

        </div>

      </section>

      {/* MENU SECTION */}

      <section className="menu-section">

        <h2>Popular Menu</h2>

        <div className="menu-grid">

          <div className="menu-card">
            <img
              src="/images/sushi-preview.jpg"
              alt="Sushi"
            />

            <div className="menu-info">
              <h3>Salmon Roll</h3>

              <p>
                Fresh salmon with avocado
              </p>

              <span>$8.99</span>
            </div>
          </div>

          <div className="menu-card">
            <img
              src="/images/sushi-preview.jpg"
              alt="Sushi"
            />

            <div className="menu-info">
              <h3>Ramen Bowl</h3>

              <p>
                Japanese noodle soup
              </p>

              <span>$11.99</span>
            </div>
          </div>

          <div className="menu-card">
            <img
              src="/images/sushi-preview.jpg"
              alt="Sushi"
            />

            <div className="menu-info">
              <h3>Shrimp Tempura</h3>

              <p>
                Crispy japanese shrimp
              </p>

              <span>$9.99</span>
            </div>
          </div>

        </div>

      </section>

    </div>

  )
}