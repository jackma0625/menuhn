import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="home">
 <Navbar />
      {/* HERO SECTION */}
      <section className="hero">
      <div className="hero-blur"></div>

        <div className="hero-content">
        <div className="phone-mockup">

<img
  src="/images/sushi-preview.jpg"
  alt="Menu Preview"
/>

</div>
          <h1>
            Modern Restaurant
            <br />
            Menu Websites
          </h1>

          <p>
            Diseños modernos para restaurantes
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Templates
            </button>

            <button className="secondary-btn">
              WhatsApp
            </button>
          </div>
        </div>

      </section>

      {/* TEMPLATE SECTION */}

      <section className="templates">

        <div className="template-card">

          <img
            src="/images/chinese-preview.jpg"
            alt="Chinese Restaurant"
          />
          <div className="image-overlay"></div>
          <div className="live-badge">
  LIVE DEMO
</div>

          <div className="card-content">
            <h2>Chinese Restaurant</h2>

            <p>
              Traditional & modern style menu
            </p>

            <Link to="/chinese">

  <button>View Demo</button>

</Link>
          </div>

        </div>

        <div className="template-card">

          <img
            src="/images/cafeteria-preview.jpg"
            alt="Cafeteria"
          />
          <div className="image-overlay"></div>
          <div className="live-badge">
  LIVE DEMO
</div>

          <div className="card-content">
            <h2>Cafeteria Style</h2>

            <p>
              Clean and modern cafeteria menu
            </p>

            <Link to="/cafeteria">

  <button>View Demo</button>

</Link>
          </div>

        </div>

        <div className="template-card">

          <img
            src="/images/sushi-preview.jpg"
            alt="Sushi Restaurant"
          />
          <div className="image-overlay"></div>
          <div className="live-badge">
  LIVE DEMO
</div>

          <div className="card-content">
            <h2>Sushi Restaurant</h2>

            <p>
              Elegant Japanese style menu
            </p>

            <Link to="/sushi">

  <button>View Demo</button>

</Link>
          </div>

        </div>

      </section>

{/* FEATURES */}

<section className="features">

  <div className="feature-card">
    <h3>Mobile Optimized</h3>

    <p>
      Perfect experience for mobile customers
    </p>
  </div>

  <div className="feature-card">
    <h3>WhatsApp Orders</h3>

    <p>
      Easy ordering directly from WhatsApp
    </p>
  </div>

  <div className="feature-card">
    <h3>Modern Design</h3>

    <p>
      Professional and modern restaurant style
    </p>
  </div>

</section>
<a
  href="https://wa.me/50494340468"
  className="floating-whatsapp"
>
  WhatsApp
</a>
    </div>
  )
}