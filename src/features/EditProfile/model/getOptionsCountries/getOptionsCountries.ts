import { createSelector } from '@reduxjs/toolkit'
import { getAddresses } from 'entities/Addresses'
import { regOnlyLowerLetters } from 'shared/const/regularExpressions'
import { IOption } from 'shared/ui/Select/Select'

export const getOptionsCountries = createSelector(
	getAddresses,
	(addresses) => {
		const countries: IOption[] | undefined = addresses?.map(address => (
			{
				label: address.country,
				value: address.country.toLocaleLowerCase().replace(regOnlyLowerLetters, '')
			}
		))

		return countries
	}
)