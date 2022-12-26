import cls from './LuminousContainer.module.scss'
import { memo, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

interface LuminousContainerProps {
	className?: string
	children: ReactNode
	defaultGlow?: boolean
	skew?: boolean
	hover?: boolean
	background?: boolean
}

export const LuminousContainer:React.FC<LuminousContainerProps> = memo((props) => {
	const {
		className,
		children,
		defaultGlow,
		skew,
		hover,
		background
	} = props

	const mods: Mods = {
		[cls.skew]: skew,
		[cls.defaultGlow]: defaultGlow,
		[cls.hover]: hover,
		[cls.background]: background
	}
	return (
		<div className={classNames(cls.LuminousContainer, mods, [className])}>
			{children}
		</div>
	)
})