import cls from './PageContainer.module.scss'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageContainerProps {
	className?: string
	children: ReactNode
}

export const PageContainer:React.FC<PageContainerProps> = memo((props) => {
	const { className, children } = props

	return (
		<div className={classNames(cls.PageContainer, {}, [className])}>
			{children}
		</div>
	)
})