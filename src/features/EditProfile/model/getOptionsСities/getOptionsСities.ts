import { createSelector } from '@reduxjs/toolkit'
import { getAddresses } from 'entities/Addresses'
import { regOnlyLowerLetters } from 'shared/const/regularExpressions'
import { IOption } from 'shared/ui/Select/Select'

export interface IСitiesInTheCountry {
	country: string,
	сities: IOption[]
}

export const getOptionsСities = createSelector(
	getAddresses,
	(addresses) => {
		if(addresses) {
			const сities: IСitiesInTheCountry[] = addresses.map(address => (
				{
					country: address.country.toLocaleLowerCase().replace(regOnlyLowerLetters, ''),
					сities: address.cities.map(сity =>(
						{
							label: сity,
							value: сity.toLocaleLowerCase().replace(regOnlyLowerLetters, '')
						}
					))
				}
			))

			return сities
		}
	}
)