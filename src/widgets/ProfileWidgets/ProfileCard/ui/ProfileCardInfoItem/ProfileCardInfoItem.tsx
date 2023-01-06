import cls from './ProfileCardInfoItem.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ProfileInfoItemType } from '../../module/types/profileInfoItem'

interface ProfileCardInfoItemProps {
	className?: string
	data: ProfileInfoItemType
}

export const ProfileCardInfoItem:React.FC<ProfileCardInfoItemProps> = memo((props) => {
	const { className, data } = props

	return (
		<div className={classNames(cls.ProfileCardInfoItem, {}, [className])}>
			<data.Icon className={cls.iconInfo}/>
			<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={data.Text}/>
		</div>
	)
})