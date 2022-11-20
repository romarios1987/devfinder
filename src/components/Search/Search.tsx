import React, { useRef } from 'react'
import styles from './Search.module.scss'
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import Button from 'components/Button'

interface SearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
	const searchRef = useRef<HTMLInputElement | null>(null)

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		const text = searchRef.current?.value || ''

		if (text) {
			onSubmit(text)
			if (searchRef.current) searchRef.current.value = ''
		}
	}

	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SearchIcon />
				</label>
				<input
					type='text'
					className={styles.textField}
					ref={searchRef}
					id='search'
					name='username'
					placeholder='Search Github username...'
				/>
				{hasError && <div className={styles.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	)
}

export default Search
