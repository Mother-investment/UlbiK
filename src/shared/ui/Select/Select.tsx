import cls from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { forwardRef, memo, MutableRefObject, SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { Input } from '../Input/Input'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

export interface IOption {
	value: string
	label: string
	isDisabled?: boolean;
  }

interface SelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: IOption[]
	placeholder?: string
	value?: string
	onChange: (v: string) => void
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options, placeholder, value, onChange } = props
	const [openMenu, setOpenMenu] = useState(false)
	const [selectedValue, setSelectedValue] = useState(value || '')
	const selectRef = useRef() as MutableRefObject<HTMLDivElement>
	const newOptions: IOption[] = options.filter(item => (item.label).toLowerCase().includes(selectedValue as string))

	const onShowMenu = useCallback(() => setOpenMenu(true), [])
	const onCloseMenu = useCallback(() => {
		setOpenMenu(false)
		setSelectedValue(options.find(option => option.value === value)?.label || '')
	}, [options, value])

	const onChangeInput = (v: string) => {
		setSelectedValue(v)
	}

	const selectValue = (v: string) => {
		onCloseMenu()
		setSelectedValue(options.find(option => option.value === v)?.label || '')
	}

	useEffect(() => {
		const handler = ({ target }: MouseEvent) => {
			if(selectRef.current && !selectRef.current?.contains(target as Node)) {
				onCloseMenu()
			}
		}

		document.addEventListener('mouseup', handler)
		return () => {
			document.removeEventListener('mouseup', handler)
		}
	}, [onCloseMenu, onShowMenu])

	const mods: Mods = {
		[cls.menuActive]: openMenu
	}

	return (
		<div className={classNames(cls.Select, {}, [className])} ref={selectRef}>
			<Input className={classNames(cls.control, { [cls.controlActive]: openMenu }, [])} type='text' value={selectedValue} onChange={onChangeInput} onClick={() => setOpenMenu(true)}/>
			<div className={classNames(cls.menu, mods, [])}>
				{newOptions.map(item => <div className={cls.option} key={item.value} onClick={() => selectValue(item.value)}>{item.label}</div>)}
			</div>
		</div>
	)
}))