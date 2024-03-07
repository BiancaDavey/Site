import style from './Footer.module.css'
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <header className={style.footer}>
            <div className={style.container}>
                <div className={style['footer-items']}>
                    <a className={style.item} href="https://github.com/BiancaDavey" target="_blank" rel="noreferrer">
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </header>
    )
}