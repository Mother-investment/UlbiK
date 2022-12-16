import cls from './Loader.module.scss'
import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

export enum LoaderSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

export enum LoaderType {
	MAIN = 'main',
	LIST = 'list',
	WINDOW = 'window'
}

interface LoaderProps {
	type: LoaderType
	size?: LoaderSize
}

export const Loader:React.FC<LoaderProps> = memo((props) => {
	const { type, size = LoaderSize.L } = props

	const mods: Mods = {
		[cls.Loader]: type === LoaderType.MAIN
	}

	return (
		<div className={classNames('', mods, [])}>
			<div className={classNames(cls[type], {}, [cls[size]])}>
				<div className={cls.Loader} />
			</div>
		</div>
	)
})