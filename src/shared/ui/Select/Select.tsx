import { classNames } from 'shared/lib/classNames/classNames'
import Select, { GroupBase } from 'react-select'
import cls from './Select.module.scss'
import { forwardRef, memo, SelectHTMLAttributes } from 'react'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value'>

// type Option = {
// 	label: React.ReactNode
// 	value: string | number
// 	readonly: (string | number | GroupBase<string | number>)[]
//   }

interface MySelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: Option
}

export const MySelect:React.FC<MySelectProps> = memo(forwardRef<HTMLSelectElement, MySelectProps>((props, ref) => {
	const { className, register, options } = props

	return (
		<Select
			{...register}
			ref={ref}
			className={classNames(cls.Select, {}, [className])}
			options={options}
		/>
	)
}))