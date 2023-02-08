import { useTranslation } from 'react-i18next'
import cls from './ProfileCardInfo.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { ProfileCardInfoItem } from '../ProfileCardInfoItem/ProfileCardInfoItem'
import { getProfileInfoItems } from '../../model/selectors/getProfileInfoItems/getProfileInfoItems'

interface ProfileCardInfoProps {
	className?: string
}

export const ProfileCardInfo:React.FC<ProfileCardInfoProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()
	const profileInfoItemsList = useSelector(getProfileInfoItems)


	return (
		<div className={classNames(cls.ProfileCardInfo, {}, [className])}>
			<Text theme={TextTheme.SECONDARY} title={t('Дополнительная информация')}/>
			{profileInfoItemsList && profileInfoItemsList.map(item => <ProfileCardInfoItem key={item.Text} data={item} />)}
		</div>
	)
})