import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { classNames } from 'shared'
import { StateSchema } from 'shared/config/store/StateSchema'
import { createReduxStore } from 'shared/config/store/store'
import cls from './StoreProvider.module.scss'

interface StoreProviderProps {
	children?: ReactNode
	initialState?: StateSchema
}

export const StoreProvider:React.FC<StoreProviderProps> = (props) => {
	const { children, initialState, ...otherProps } = props

	const store = createReduxStore(initialState)

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}