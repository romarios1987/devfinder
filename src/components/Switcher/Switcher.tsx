import { useEffect } from 'react'
import styles from './Switcher.module.scss'
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg'
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg'
import useLocalStorage from 'hooks/useLocalStorage'

const Switcher = () => {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	)

	const themeText = theme === 'dark' ? 'Light' : 'Dark'
	const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<div
			className={styles.switcher}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<span>{themeText}</span>
			<ThemeIcon className={styles.icon} />
		</div>
	)
}

export default Switcher
