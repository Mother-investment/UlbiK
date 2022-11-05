import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { ProfileSchema } from '../types/profile'
import { Profile } from '../types/profile'

const initialState: ProfileSchema = {
	data: undefined,
	readonly: true,
	isLoading: false,
	error: undefined
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice