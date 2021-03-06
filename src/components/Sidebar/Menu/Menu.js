import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';
import Pdf from '../../../assets/documents/yutayanagisawacv.pdf'

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']}>
        <a
          href={Pdf}
          className={styles['menu__list-item-link']}
          target="_blank"
        >
          Download CV
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
