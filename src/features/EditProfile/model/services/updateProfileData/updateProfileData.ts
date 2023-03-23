import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileData, Profile } from 'entities/Profile'
import { getUserId } from 'entities/User'
import { FormValues } from '../../types/EditProfileTypes'

export const updateProfileData = createAsyncThunk<Profile, FormValues, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (profileNewData, thunkAPI) => {
		const { rejectWithValue, getState, extra } = thunkAPI

		const userId = getUserId(getState())
		const profileData = getProfileData(getState())

		try {
			const response = await extra.api.put<Profile>(
				`/profile/${userId}`,
				{ ...profileData, ...profileNewData }
			)

			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			return rejectWithValue('Что-то пошло не так')
		}
	}
)