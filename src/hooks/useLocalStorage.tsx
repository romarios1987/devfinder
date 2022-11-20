import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
	const [value, setValue] = useState<T>(() => {
		const localSotrageValue = localStorage.getItem(key)
		if (localSotrageValue != null) return JSON.parse(localSotrageValue)

		if (typeof initialValue === 'function') {
			return (initialValue as () => T)()
		} else {
			return initialValue
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}
export default useLocalStorage
