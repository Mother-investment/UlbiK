import cls from './LuminousContainer.module.scss'
import { memo, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

interface LuminousContainerProps {
	className?: string
	children: ReactNode
	defaultGlow?: boolean
	skew?: boolean
}

export const LuminousContainer:React.FC<LuminousContainerProps> = memo((props) => {
	const { className, children, defaultGlow, skew } = props

	const mods: Mods = {
		[cls.skew]: skew,
		[cls.defaultGlow]: defaultGlow
	}
	return (
		<div className={classNames(cls.LuminousContainer, mods, [className])}>
			{children}
		</div>
	)
})