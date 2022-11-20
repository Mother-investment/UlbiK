import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = () => {
	const { t } = useTranslation()
	return (
		<div className={cls.MainPage}>
			<LuminousContainer backgroundPage defaultGlow>

			</LuminousContainer>
		</div>
	)
}
export default MainPage