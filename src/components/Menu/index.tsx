import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storedTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storedTheme;
  });

  const nextThemeIcon = theme === 'dark' ? <SunIcon /> : <MoonIcon />;

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para home'
        title='Ir para home'
      >
        <HouseIcon />
      </Link>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ir para histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Alterar para tema claro ou escuro'
        title='Alterar para tema claro ou escuro'
        onClick={handleThemeChange}
      >
        {nextThemeIcon}
      </a>
    </nav>
  );
}
