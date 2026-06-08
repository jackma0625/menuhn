import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'

import ChineseDemo from './pages/ChineseDemo'
import CafeteriaDemo from './pages/CafeteriaDemo'
import SushiDemo from './pages/SushiDemo'

function App() {
  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/chinese"
        element={<ChineseDemo />}
      />

      <Route
        path="/cafeteria"
        element={<CafeteriaDemo />}
      />

      <Route
        path="/sushi"
        element={<SushiDemo />}
      />

    </Routes>

  )
}

export default App