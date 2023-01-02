import cls from './Loader.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

export enum LoaderSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface LoaderProps {
	size?: LoaderSize
	container?: boolean
	overlay?: boolean
}

export const Loader:React.FC<LoaderProps> = (props) => {
	const { size = LoaderSize.M, container, overlay } = props

	return (
		<div className={classNames(cls.overlay, { [cls.background]: overlay }, [])}>
			<div className={classNames(cls.loaderContainer, { [cls.container]: container }, [cls[size]])}>
				<div className={cls.Loader} ><div></div><div></div><div></div><div></div></div>
			</div>
		</div>
	)
}