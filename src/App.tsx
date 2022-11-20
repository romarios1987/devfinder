import Container from 'components/Container'
import Header from 'components/Header'
import Search from 'components/Search'

function App() {
	const fetchUser = (username: string) => {
		console.log(username)
	}
	return (
		<Container>
			<Header />
			<Search hasError onSubmit={fetchUser} />
		</Container>
	)
}

export default App
