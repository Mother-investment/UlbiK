import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
	const dispatch = useAppDispatch()

	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard data={data} isLoading={isLoading} error={error} />
			</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage