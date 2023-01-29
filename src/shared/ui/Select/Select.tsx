import cls from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { forwardRef, memo, MutableRefObject, SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { Input } from '../Input/Input'
import ArrowIcon from 'shared/assets/icons/arrowForSelectIcon.svg'

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

export interface IOption {
	value: string
	label: string
	isDisabled?: boolean
  }

interface SelectProps extends HTMLSelectProps{
	className?: string
	register?: React.SelectHTMLAttributes<HTMLSelectElement>
	options: IOption[]
	placeholder?: string
	value?: string
	searchOff?: boolean
	onChange: (v: string) => void
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options, placeholder, value, searchOff, onChange } = props

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
	const onToggleMenu = useCallback(() => {
		if(openMenu) {
			onCloseMenu()
		}else {
			onShowMenu()
		}
	}, [onCloseMenu, onShowMenu, openMenu])

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

	return (
		<div className={classNames(cls.Select, { [cls.selectActive]: openMenu }, [className])} ref={selectRef}>
			<div className={cls.control}>
				<Input
					className={cls.input}
					type='text'
					value={selectedLabel}
					searchOffForSelect={searchOff}
					onChange={onChangeInput}
					onClick={ searchOff ? onToggleMenu : onShowMenu}
				/>
				<div className={cls.arrowContainer} onClick={onToggleMenu}>
					<ArrowIcon className={classNames(cls.arrow, { [cls.arrowActive]: openMenu }, [])}/>
				</div>
			</div>
			<div className={classNames(cls.menu, { [cls.menuActive]: openMenu }, [])}>
				{newOptions.map(item => <div className={cls.option} key={item.value} onClick={() => selectValue(item.value, item.label)}>{item.label}</div>)}
			</div>
		</div>
	)
}))