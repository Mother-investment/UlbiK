import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { ReactChild, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
	[name in StateSchemaKey]? : Reducer
}

export type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children: ReactChild
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader:React.FC<DynamicModuleLoaderProps> = (props) => {
	const { children, reducers, removeAfterUnmount } = props
	const dispatch = useDispatch()
	const store = useStore() as ReduxStoreWithManager

	useEffect(() =>{
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKey, reducer)
			dispatch({ type: `@INIT ${name} reducer` })
		})

		return () => {
			if(removeAfterUnmount){
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@DESTROY ${name} redicer` })
				})
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			{children}
		</>
	)
}