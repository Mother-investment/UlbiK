import { useTranslation } from 'react-i18next'

type AboutPageProps = {}

const AboutPage: React.FC<AboutPageProps> = () => {
	const { t } = useTranslation()

	return <div>{t('О сайте')}
	</div>
}
export default AboutPage
