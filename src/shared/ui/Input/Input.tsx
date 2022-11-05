import { InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared'
import { Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
	className?: string
	value?: string
	onChange?: (value: string) => void
	type?: string
	readonly?: boolean
}

export const Input:React.FC<InputProps> = memo((props) => {
	const { className, value, onChange, type='text', readonly=false } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods: Mods = {
		[cls.readonly]: readonly
	}

	return (
		<input className={classNames(cls.Input, mods, [className])} type={type} value={value} onChange={onChangeHandler} readOnly={readonly} />
	)
})