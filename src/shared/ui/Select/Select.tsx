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
	const [selectedLabel, setSelectedLabel] = useState('')
	const [selectedSearchValue, setSelectedSearchValue] = useState('')
	const selectRef = useRef() as MutableRefObject<HTMLDivElement>
	const newOptions: IOption[] = options.filter(item => (item.label).toLowerCase().includes(selectedSearchValue.toLowerCase() as string))

	const onShowMenu = useCallback(() => setOpenMenu(true), [])
	const onCloseMenu = useCallback(() => {
		if(openMenu) {
			setOpenMenu(false)
			setSelectedLabel(options.find(option => option.value === selectedValue)?.label || '')
			setSelectedSearchValue('')
		}
	}, [openMenu, options, selectedValue])

	const onChangeInput = (v: string) => {
		setSelectedLabel(v)
		setSelectedSearchValue(v)
	}

	const selectValue = (v: string, l: string) => {
		setSelectedValue(v)
		onChange(v)
		setSelectedLabel(l)
		setOpenMenu(false)
		setSelectedSearchValue('')
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
			<Input className={classNames(cls.control, { [cls.controlActive]: openMenu }, [])} type='text' value={selectedLabel} onChange={onChangeInput} onClick={() => setOpenMenu(true)}/>
			<div className={classNames(cls.menu, mods, [])}>
				{newOptions.map(item => <div className={cls.option} key={item.value} onClick={() => selectValue(item.value, item.label)}>{item.label}</div>)}
			</div>
		</div>
	)
}))