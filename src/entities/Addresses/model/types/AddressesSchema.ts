import { Status } from 'shared/const/common'

export interface Address {
	country: string,
	cities: string[]
}

export interface AddressesSchema {
	data: Address[]
	status: Status
	errorMessage: string | undefined
}