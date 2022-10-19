import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
			state.authData = action.payload
		},
		initAuthData: (state: UserSchema) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
			if(user) {
				state.authData = JSON.parse(user)
			}
		},
		logout: (state: UserSchema) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
			if(user) {
				state.authData = undefined
				localStorage.removeItem(USER_LOCALSTORAGE_KEY)
			}
		}
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice