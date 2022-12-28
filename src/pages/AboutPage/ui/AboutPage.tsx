import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Container } from 'shared/ui/Container/Container'
import cls from './AboutPage.module.scss'

type AboutPageProps = {}

const AboutPage: React.FC<AboutPageProps> = () => {
	const { t } = useTranslation()

	return (
		<Container className={classNames(cls.AboutPage, {}, [])}>
		</Container>
	)
}
export default AboutPage
