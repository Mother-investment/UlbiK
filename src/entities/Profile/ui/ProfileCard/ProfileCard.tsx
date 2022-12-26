import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { memo, useEffect } from 'react'
import { Profile } from '../../model/types/profile'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfileCardProps {
	className?: string
	data?: Profile
	isLoading?: boolean
	error?: string
}

export const ProfileCard:React.FC<ProfileCardProps> = memo((props) => {
	const { className, data, isLoading, error } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	if(isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>{t('Загрузка')}</div>
		)
	}

	if(error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ATTN}
					aling={TextAling.CENTER}
					title={t('Произошла ошибка при загрузке профилья')}
					text={t('Попробуйте обновить страницу')}
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