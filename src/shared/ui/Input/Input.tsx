import { InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
	className?: string
	value?: string
	onChange?: (value: string) => void
	type?: string
}

export const Input:React.FC<InputProps> = memo((props) => {
	const { className, value, onChange, type='text', ...otherProps } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<input className={classNames(cls.Input, {}, [className])} type={type} value={value} onChange={onChangeHandler} />
	)
})