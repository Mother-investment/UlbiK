import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
	const { t } = useTranslation()

	return (
		<div>
			{t('Главная страница')}
		</div>
	)
}
export default MainPage