import cls from './Container.module.scss'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ContainerProps {
	className?: string
	children: ReactNode
}

export const Container:React.FC<ContainerProps> = memo((props) => {
	const { className, children } = props

	return (
		<div className={classNames(cls.Container, {}, [className])}>
			{children}
		</div>
	)
})