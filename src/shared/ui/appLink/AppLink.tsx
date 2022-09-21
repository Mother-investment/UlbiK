import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
className?: string
theme?: AppLinkTheme
}

export const AppLink:React.FC<AppLinkProps> = (props) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</Link>
	)
}