import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const redusers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
className?: string
}

const ProfilePage:React.FC<ProfilePageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage