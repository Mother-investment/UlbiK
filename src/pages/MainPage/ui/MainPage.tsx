import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
	const { t } = useTranslation()
	return (
		<div className={cls.MainPage}>
			<div className={cls.container}></div>
		</div>
	)
}
export default MainPage