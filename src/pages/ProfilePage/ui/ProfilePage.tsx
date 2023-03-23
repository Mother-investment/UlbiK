import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { getProfileData, getProfileError, getProfileIsLoading, profileReducer } from 'entities/Profile'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { ProfileCard } from 'widgets/ProfileWidgets/ProfileCard'
import { addressesReducer } from 'entities/Addresses'
import { useParams } from 'react-router-dom'

const redusers: ReducersList = {
	profile: profileReducer,
	addresses: addressesReducer
}

interface ProfilePageProps {
className?: string
}

const ProfilePage:React.FC<ProfilePageProps> = () => {

	const { id } = useParams<{ id: string }>()

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [])}>
				<ProfileCard id={id}/>
			</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage