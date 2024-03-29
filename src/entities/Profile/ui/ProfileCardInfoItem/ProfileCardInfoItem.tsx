import cls from './ProfileCardInfoItem.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ProfileInfoItemType } from '../../model/types/profile'

interface ProfileCardInfoItemProps {
	className?: string
	data: ProfileInfoItemType
}

export const ProfileCardInfoItem:React.FC<ProfileCardInfoItemProps> = memo((props) => {
	const { className, data } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.ProfileCardInfoItem, {}, [className])}>
			<data.Icon className={cls.iconInfo}/>
			<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={t(data.Text)}/>
		</div>
	)
})