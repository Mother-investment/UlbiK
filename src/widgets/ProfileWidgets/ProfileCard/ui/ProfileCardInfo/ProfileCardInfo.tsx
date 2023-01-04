import { useTranslation } from 'react-i18next'
import cls from './ProfileCardInfo.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import BirthdayIcon from 'shared/assets/icons/birthdayIcon.svg'
import { Profile } from 'entities/Profile'

interface ProfileCardInfoProps {
	className?: string
	data?: Profile
}

export const ProfileCardInfo:React.FC<ProfileCardInfoProps> = memo((props) => {
	const { className, data } = props
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.ProfileCardInfo, {}, [className])}>
			<Text theme={TextTheme.SECONDARY} title={t('Дополнительная информация')}/>
			<div className={classNames(cls.itemInfo, {}, []) }>
				<BirthdayIcon className={cls.iconInfo}/>
				<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={data?.age}/>
			</div>
		</div>
	)
})