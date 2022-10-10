import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'


export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1 data-testid='value-title'>{counterValue}</h1>
			<Button data-testid='increment-btn' onClick={increment}>+1</Button>
			<Button data-testid='decrement-btn' onClick={decrement}>-1</Button>
		</div>
	)
}