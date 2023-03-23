import cls from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { forwardRef, memo, MutableRefObject, SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { Input } from '../Input/Input'
import ArrowIcon from 'shared/assets/icons/arrowForSelectIcon.svg'
import { useTranslation } from 'react-i18next'

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
	isDisabled?: boolean
	value?: string
	searchOff?: boolean
	onChange: (v: string) => void
}

export const Select:React.FC<SelectProps> = memo(forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { className, register, options, placeholder, value, searchOff, onChange, isDisabled } = props
	const { t } = useTranslation()
	const [openMenu, setOpenMenu] = useState(false)
	const [selectedValue, setSelectedValue] = useState(value || '')
	const [selectedLabel, setSelectedLabel] = useState('')
	const [selectedSearchValue, setSelectedSearchValue] = useState('')

	const selectRef = useRef() as MutableRefObject<HTMLDivElement>

	const newOptions: IOption[] = options.filter(item => (t(item.label)).toLowerCase().includes(t(selectedSearchValue).toLowerCase() as string))

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
		if(value === undefined) {
			setSelectedLabel('')
		}
	}, [value])

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
		<div className={classNames(cls.Select, { [cls.selectActive]: openMenu, [cls.selectDisabled]: isDisabled }, [className])} ref={selectRef}>
			<div className={cls.control}>
				<Input
					className={cls.input}
					type='text'
					value={t(selectedLabel)}
					searchOffForSelect={searchOff}
					onChange={onChangeInput}
					readonly={isDisabled}
					placeholder={placeholder}
					onClick={ !isDisabled ? (searchOff ? onToggleMenu : onShowMenu) : undefined}
				/>
				<div className={cls.arrowContainer} onClick={!isDisabled ? onToggleMenu : undefined}>
					<ArrowIcon className={classNames(cls.arrow, { [cls.arrowActive]: openMenu }, [])}/>
				</div>
			</div>
			<div className={classNames(cls.menu, { [cls.menuActive]: openMenu }, [])}>
				<div className={cls.menuContainer}>
					{newOptions.map(item =>
						<div className={cls.option} key={item.value} onClick={() => selectValue(item.value, item.label)}>
							{t(item.label)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}))