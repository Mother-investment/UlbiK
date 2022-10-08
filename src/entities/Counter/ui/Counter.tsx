import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared'
import { counterActions } from '../model/slice/counterSlice'
import { StateSchema } from 'shared/config/store/StateSchema';

interface CounterProps {
}

export const Counter:React.FC<CounterProps> = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector((state: StateSchema) => state.counter.value)

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1>{counterValue}</h1>
			<Button onClick={increment}>+1</Button>
			<Button onClick={decrement}>-1</Button>
		</div>
	)
}