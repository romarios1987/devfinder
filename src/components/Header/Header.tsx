import Switcher from 'components/Switcher'
import styles from './Header.module.scss'

const Header = () => (
	<div className={styles.header}>
		<div className={styles.logo}>DevFinder</div>
		<Switcher />
	</div>
)

export default Header
