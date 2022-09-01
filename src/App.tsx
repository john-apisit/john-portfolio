import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './pages/Resume'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
