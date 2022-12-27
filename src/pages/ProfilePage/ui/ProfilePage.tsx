import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import { fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { PageContainer } from 'shared/ui/PageContainer/PageContainer'

const redusers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
className?: string
}

const ProfilePage:React.FC<ProfilePageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation()
	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<PageContainer className={classNames(cls.ProfilePage, {}, [className])} marginTop>
				<ProfileCard data={data} isLoading={isLoading} error={error} />
			</PageContainer>
		</DynamicModuleLoader>
	)
}
export default ProfilePage