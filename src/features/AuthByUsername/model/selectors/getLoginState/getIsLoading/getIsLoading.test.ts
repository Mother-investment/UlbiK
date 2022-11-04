import { StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true
			}
		}
		expect(getIsLoading(state as StateSchema)).toEqual(true)
	})
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getIsLoading(state as StateSchema)).toEqual(false)
	})
})