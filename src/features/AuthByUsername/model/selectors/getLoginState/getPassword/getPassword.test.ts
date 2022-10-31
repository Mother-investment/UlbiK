import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: '321'
			}
		}
		expect(getPassword(state as StateSchema)).toEqual('321')
	})
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getPassword(state as StateSchema)).toEqual('')
	})
})