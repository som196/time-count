import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Normaltime from './components/Normaltime'
import Remainingtime from './components/Remainingtime'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Remainingtime />} />
      <Route path="/currenttime" element={<Normaltime />} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
)

export default App