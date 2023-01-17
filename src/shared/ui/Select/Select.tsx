import { classNames } from 'shared/lib/classNames/classNames'
import ReactSelect from 'react-select'
import cls from './Select.module.scss'
import { forwardRef, memo, SelectHTMLAttributes } from 'react'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'>

export interface IOption {
	label: string | number
	value: string | number
  }

interface SelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: IOption[]
	placeholder?: string
	value: unknown
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options, placeholder, value } = props

	return (
		<ReactSelect
			classNamePrefix={cls.Select}
			className={classNames(cls.selectContainer, {}, [className])}
			placeholder={placeholder}
			options={options}
			value={value}
		/>
	)
}))