import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

import styles from '../styles/Header.module.css'
import logoCoutoBrasaoTexto from '../public/images/logo-couto-brasao-texto.png'

export default function Header() {
    const [activeSubMenu, setActiveSubMenu] = useState('');

    const toggleSubMenu = (menuId) => {
      setActiveSubMenu(activeSubMenu === menuId ? '' : menuId);
    };
  
    return (
        <header className={styles.menuHeader}>
            <Image src={logoCoutoBrasaoTexto} alt='Logo Couto Brasão com Texto' className={styles.menuImage}/>
            <nav className={styles.menuNav}>
                <ul className={styles.menuLinkList}>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/oProfessor">O Professor</Link></li>
                    <li className={`${styles.menuSubList} ${activeSubMenu === 'studiorum' ? styles.active : ''}`} onClick={() => toggleSubMenu('studiorum')}>
                        <p>Studiorum <span className={styles.menuSubSeta}>▼</span></p>
                        <ul className={styles.menuSub}>
                            <li><Link href="/studiorum/educacao">Educação</Link></li>
                            <li><Link href="/studiorum/artesLiberais">Artes Liberais</Link></li>
                            <li><Link href="/studiorum/teologia">Teologia</Link></li>
                            <li><Link href="/studiorum/filosofia">Filosofia</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/mentoria">Mentoria</Link></li>
                    <li><Link href="/seminarios">Seminários</Link></li>
                    <li><Link href="/cursos">Cursos</Link></li>
                    <li><Link href="/artigos">Artigos</Link></li>
                </ul>
                <ul className={styles.menuDashboardList}>
                    <li>Área do Aluno</li>
                </ul>
            </nav>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}