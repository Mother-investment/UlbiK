import { classNames, DynamicModuleLoader, ReducerList } from 'shared'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { profileReducer } from 'entities/Profile'

const redusers: ReducerList = {
	profile: profileReducer
}

interface ProfilePageProps {
className?: string
}

const ProfilePage:React.FC<ProfilePageProps> = (props) => {
	const { className, ...otherProps } = props
	const { t } = useTranslation()

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				{t('Профиль')}
			</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage