import { createSelector } from '@reduxjs/toolkit'
import { getAddresses } from 'entities/Addresses'
import { useTranslation } from 'react-i18next'
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
			const { t } = useTranslation()
			const сities: IСitiesInTheCountry[] = addresses.map(address => (
				{
					country: address.country.replace(regOnlyLowerLetters, ''),
					сities: address.cities.map(сity =>(
						{
							label: t(сity),
							value: сity.replace(regOnlyLowerLetters, '')
						}
					))
				}
			))

			return сities
		}
	}
)