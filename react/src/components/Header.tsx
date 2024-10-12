import { Link, useNavigate, useLocation } from 'react-router-dom'
import style from './Header.module.css'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const getButtons = () => {
    if (location.pathname === '/') {
      return (
        <div className={style['header-items']}>
          <button className={style['item-current']} onClick={() => navigate('/')}>Games</button>
          <button className={style.item} onClick={() => navigate('projects')}>Projects</button>
          <button className={style.item} onClick={() => navigate('about')}>About</button>
      </div>
      )
    }
    if (location.pathname === '/projects') {
      return (
        <div className={style['header-items']}>
          <button className={style.item} onClick={() => navigate('/')}>Games</button>
          <button className={style['item-current']} onClick={() => navigate('projects')}>Projects</button>
          <button className={style.item} onClick={() => navigate('about')}>About</button>
      </div>
      )
    }
    if (location.pathname === '/about') {
      return (
        <div className={style['header-items']}>
          <button className={style.item} onClick={() => navigate('/')}>Games</button>
          <button className={style.item} onClick={() => navigate('projects')}>Projects</button>
          <button className={style['item-current']} onClick={() => navigate('about')}>About</button>
        </div>
      )
    }
  }

  const getTitle = () => {
    if (location.pathname === '/') {
      return (
        <>
        Games
        </>
      )
    }
    if (location.pathname === '/details-1') {
      return (
        <>
        Games
        </>
      )
    }
    if (location.pathname === '/projects') {
      return (
        <>
        Projects
        </>
      )
    }
    if (location.pathname === '/details-2') {
      return (
        <>
        Projects
        </>
      )
    }
    if (location.pathname === '/about') {
      return (
        <>
        About
        </>
      )
    }
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
      <Link className={style.title} to="/">{getTitle()}</Link>
        <div className = {style['header-items']}>{getButtons()}</div>
      </div>
    </header>
  )
}
