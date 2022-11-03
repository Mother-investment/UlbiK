import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { ReactChild, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]? : Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children: ReactChild
	reducers: ReducerList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader:React.FC<DynamicModuleLoaderProps> = (props) => {
	const { children, reducers, removeAfterUnmount } = props
	const dispatch = useDispatch()
	const store = useStore() as ReduxStoreWithManager

	useEffect(() =>{
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer)
			dispatch({ type: `@INIT ${name} reducer` })
		})

		return () => {
			if(removeAfterUnmount){
				Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
					store.reducerManager.remove(name)
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