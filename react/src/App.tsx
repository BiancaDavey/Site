import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer } from './components'
import { Games, Projects, About, Details1, Details2 } from './pages'
import style from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="details-1" element={<Details1/>} />
            <Route path="details-2" element={<Details2/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
