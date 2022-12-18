import { Portal } from '../Portal/Portal'
import cls from './Loader.module.scss'

export const Loader:React.FC = () => {

	return (
		<div className={cls.overlay}>
			<div className={cls.loaderContainer}>
				<div className={cls.Loader} />
			</div>
		</div>
	)
}