import { forwardRef } from 'react'
import { InputHTMLAttributes, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
	className?: string
	value?: string
	onChange?: (value: string) => void
	onClick?: () => void
	type?: string
	readonly?: boolean
	register?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, value, onChange, onClick, type='text', readonly=false, register } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods: Mods = {
		[cls.readonly]: readonly
	}

	return (
		<input
			className={classNames(cls.Input, mods, [className])}
			ref={ref}
			type={type}
			value={value}
			onChange={onChangeHandler}
			readOnly={readonly}
			onClick={onClick}
			{...register}
		/>
	)
}))