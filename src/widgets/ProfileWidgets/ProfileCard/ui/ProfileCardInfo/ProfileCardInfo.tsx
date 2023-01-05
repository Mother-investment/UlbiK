import { useTranslation } from 'react-i18next'
import cls from './ProfileCardInfo.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import BirthdayIcon from 'shared/assets/icons/birthdayIcon.svg'
import { getProfileInfoItems, Profile } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { ProfileCardInfoItem } from './../ProfileCardInfoItem/ProfileCardInfoItem'

interface ProfileCardInfoProps {
	className?: string
	data?: Profile
}

export const ProfileCardInfo:React.FC<ProfileCardInfoProps> = memo((props) => {
	const { className, data } = props
	const { t } = useTranslation()
	const profileInfoItemsList = useSelector(getProfileInfoItems)


	return (
		<div className={classNames(cls.ProfileCardInfo, {}, [className])}>
			<Text theme={TextTheme.SECONDARY} title={t('Дополнительная информация')}/>
			{profileInfoItemsList && profileInfoItemsList.map(item => <ProfileCardInfoItem key={item.Text} data={item} />)}
		</div>
	)
})