import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: { counter },
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}