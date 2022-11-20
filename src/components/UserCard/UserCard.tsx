import UserInfo from 'components/UserInfo'
import UserStats from 'components/UserStats/UserStats'
import UserTitle from 'components/UserTitle'
import { LocalGithubUser } from 'types'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalGithubUser {}

const UserCard = (props: UserCardProps) => (
	<div className={styles.userCard}>
		<img src={props.avatar} alt={props.name} className={styles.avatar} />
		<UserTitle login={props.login} name={props.name} created={props.created} />
		<p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
			{props.bio || 'This profile has no bio'}
		</p>
		<UserStats
			repos={props.repos}
			followers={props.followers}
			following={props.following}
		/>
		<UserInfo
			blog={props.blog}
			company={props.company}
			location={props.location}
			twitter={props.twitter}
		/>
	</div>
)

export default UserCard
