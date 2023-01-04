import { Country, Currency } from 'shared/const/common'

export interface Profile {
	id: string
	first: string
	lastname: string
	age: string
	currency: Currency
	country: Country
	city: string
	username: string
	avatar: string
}

export interface ProfileSchema {
	data?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}