import { useDispatch, useSelector } from 'react-redux'
import styles from './app.module.css'

export const App = () => {
	const dispatch = useDispatch()
	const cash = useSelector((state) => state.cash)
	console.log(cash)

	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash })
	}

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash })
	}

	return (
		<div className={styles.app}>
			<div>{cash}</div>
			<div className={styles.container}>
				<button
					className={styles.button}
					onClick={() => addCash(Number(prompt()))}
				>
					Пополнить счёт
				</button>
				<button
					className={styles.button}
					onClick={() => getCash(Number(prompt()))}
				>
					Снять со счёта
				</button>
			</div>
		</div>
	)
}
