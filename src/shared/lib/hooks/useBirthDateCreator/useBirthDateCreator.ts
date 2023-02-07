import { useCallback, useMemo, useRef, useState } from 'react'
import { IOption } from 'shared/ui/Select/Select'

type useBirthDateCreatorReturn = [
	{days: IOption[], months: IOption[], years: IOption[]},
	(month: string, year: string) => void
]

export const useBirthDateCreator = (minAge = 14, maxAge = 100): useBirthDateCreatorReturn => {
	const today = useMemo(() => new Date(), [])
	const years = useMemo(() => (new Array(maxAge - minAge)).fill(today.getFullYear() - maxAge).map((item, index) => (
		{ label: (item + index).toString(), value: (item + index).toString() }
	)), [maxAge, minAge, today])

	const [days, setDays] = useState<IOption[]>((new Array(31)).fill(0).map((_, index) => (
		{ label: (1 + index).toString(), value: (1 + index).toString() }
	)))

	const months = useMemo(() => [
		{ label: 'Январь', value: '1' },
		{ label: 'Февраль', value: '2' },
		{ label: 'Март', value: '3' },
		{ label: 'Апрель', value: '4' },
		{ label: 'Май', value: '5' },
		{ label: 'Июнь', value: '6' },
		{ label: 'Июль', value: '7' },
		{ label: 'Август', value: '8' },
		{ label: 'Сентябрь', value: '9' },
		{ label: 'Октябрь', value: '10' },
		{ label: 'Ноябрь', value: '11' },
		{ label: 'Декабрь', value: '12' }
	], [])

	const getDays = useCallback((month = months[0].value, year = years[years.length - 1].value) => {
		const newDays = (new Array(new Date(+year, +month, 0).getDate())).fill(1).map((_, index) => (
			{ label: (index + 1).toString(), value: (index + 1).toString() }

		))
		if(newDays.length != days.length) {
			setDays(newDays)
		}
	}, [days.length, months, years])

	return [{ days: days, months: months, years: years }, getDays]
}