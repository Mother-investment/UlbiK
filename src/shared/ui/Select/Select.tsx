import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { forwardRef, memo, SelectHTMLAttributes } from 'react'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'>

type Option = {
	label: React.ReactNode
	value: string | number
  }

interface SelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: Option[]
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options } = props

	return (
		<select className={classNames(cls.Select, {}, [className])} ref={ref} {...register}>
			{options.map(({ label, value }) => (
				<option key={value} value={value}>{label}</option>
			))}
		</select>
	)
}))