import { useTranslation } from 'react-i18next'
import { Button, classNames, Text } from 'shared'
import cls from './ProfileCard.module.scss'
import { memo } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Profile } from '../../model/types/profile'
import { TextAling, TextTheme } from 'shared/ui/text/Text'

interface ProfileCardProps {
	className?: string
	data?: Profile | string
	error?: string
	isLoading?: boolean
}

export const ProfileCard:React.FC<ProfileCardProps> = memo((props) => {
	const { className, data, error, isLoading } = props
	const { t } = useTranslation()

	if(isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>{t('Загрузка')}</div>
		)
	}

	if(error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профилья')}
					text={t('Попробуйте обновить страницу')}
					aling={TextAling.CENTER}
				/>
			</div>
		)
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
			</div>
		</div>
	)
})