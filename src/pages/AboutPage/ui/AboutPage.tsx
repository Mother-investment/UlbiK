import { useTranslation } from 'react-i18next'

type AboutPageProps = {}

const AboutPage: React.FC<AboutPageProps> = () => {
    const {t} = useTranslation('about')

    return <div>{t('О сайте')}</div>
}
export default AboutPage
