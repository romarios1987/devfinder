import { LocalGithubUser } from 'types'
import styles from './UserStats.module.scss'

export interface UserStatsProps
	extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

const UserStats = ({ repos, followers, following }: UserStatsProps) => (
	<div className={styles.userStats}>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Repos</div>
			<div className={styles.infoNumber}>{repos}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Followers</div>
			<div className={styles.infoNumber}>{followers}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Following</div>
			<div className={styles.infoNumber}>{following}</div>
		</div>
	</div>
)

export default UserStats
