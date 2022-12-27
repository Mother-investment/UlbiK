import cls from './PageContainer.module.scss'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageContainerProps {
	className?: string
	children: ReactNode
	marginTop?: boolean
}

export const PageContainer:React.FC<PageContainerProps> = memo((props) => {
	const { className, children, marginTop } = props

	return (
		<div className={classNames(cls.PageContainer, { [cls.marginTop]: marginTop }, [className])}>
			{children}
		</div>
	)
})