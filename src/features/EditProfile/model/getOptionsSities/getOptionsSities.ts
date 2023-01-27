import { createSelector } from '@reduxjs/toolkit'
import { getAddresses } from 'entities/Addresses'
import { useTranslation } from 'react-i18next'
import { regOnlyLowerLetters } from 'shared/const/regularExpressions'
import { IOption } from 'shared/ui/Select/Select'

export interface ICitiesInTheCountry {
	country: string,
	sities: IOption[]
}

export const getOptionsSities = createSelector(
	getAddresses,
	(addresses) => {
		if(addresses) {
			const { t } = useTranslation()
			const sities: ICitiesInTheCountry[] = addresses.map(address => (
				{
					country: address.country.replace(regOnlyLowerLetters, ''),
					sities: address.cities.map(sity =>(
						{
							label: t(sity),
							value: sity.replace(regOnlyLowerLetters, '')
						}
					))
				}
			))

			return sities
		}
	},
)