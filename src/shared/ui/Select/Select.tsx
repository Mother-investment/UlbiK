import { classNames } from 'shared/lib/classNames/classNames'
import ReactSelect from 'react-select'
import cls from './Select.module.scss'
import { forwardRef, memo, SelectHTMLAttributes } from 'react'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'>

interface IOption {
	label: string | number
	value: string | number
  }

interface SelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: IOption[]
	placeholder: string
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options, placeholder } = props

	return (
		<ReactSelect
			// {...register}
			className={classNames(cls.Select, {}, [className])}
			placeholder={placeholder}
			options={options}
		/>
	)
}))