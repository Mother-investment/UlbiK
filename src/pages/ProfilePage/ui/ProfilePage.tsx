import { classNames } from 'shared'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {
className?: string
}

const ProfilePage:React.FC<ProfilePageProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.ProfilePage, {}, [className])}>
			{t('Профиль')}
		</div>
	)
}
export default ProfilePage