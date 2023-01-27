import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAddressesData } from '../services/fetchProfileData/fetchAddressesData'
import { AddressesSchema } from '../types/AddressesSchema'
import { Address } from './../types/AddressesSchema'

const initialState: AddressesSchema = {
	data: [],
	status: 'init',
	errorMessage: undefined
}

export const addressesSlice = createSlice({
	name: 'addresses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAddressesData.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchAddressesData.fulfilled, (state, action: PayloadAction<Address[]>) => {
				state.status = 'success'
				state.data = action.payload
			})
			.addCase(fetchAddressesData.rejected, (state, action) => {
				state.status = 'error'
				state.errorMessage = action.payload
			})
	}
})

export const { actions: addressesActions } = addressesSlice
export const { reducer: addressesReducer } = addressesSlice