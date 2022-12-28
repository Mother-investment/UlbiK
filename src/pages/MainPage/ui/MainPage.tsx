import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Container } from 'shared/ui/Container/Container'
import cls from './MainPage.module.scss'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = (props) => {
	const { t } = useTranslation()
	return (
		<Container className={classNames(cls.MainPage, {}, [])}>
		</Container>
	)
}
export default MainPage