import { Country } from 'shared/const/common'

export interface Profile {
	id: number
	first: string
	lastname: string
	age: string
	country: Country
	city: string
	username: string
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}