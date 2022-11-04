import { StateSchema } from 'app/providers/StoreProvider'
import { getUsername } from './getUsername'

describe('getUsername.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin'
			}
		}
		expect(getUsername(state as StateSchema)).toEqual('admin')
	})
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getUsername(state as StateSchema)).toEqual('')
	})
})