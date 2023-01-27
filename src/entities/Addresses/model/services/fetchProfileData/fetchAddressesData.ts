import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Address } from '../../types/AddressesSchema'

export const fetchAddressesData = createAsyncThunk<Address[], void, ThunkConfig<string>>(
	'addresses/fetchAddressesData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<Address[]>('/addresses')

			return response.data
		} catch (error) {
			return rejectWithValue('ошибка')
		}
	}
)