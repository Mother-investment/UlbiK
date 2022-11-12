import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
	const { t } = useTranslation()
	return (
		<div className={cls.body}>
			321
			<div className={cls.header}></div>
			<div className={cls.container}></div>
			<div className={cls.footer}></div>
		</div>
	)
}
export default MainPage