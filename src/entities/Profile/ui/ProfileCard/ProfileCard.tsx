import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { memo, useEffect } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { Profile } from '../../model/types/profile'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfileCardProps {
	className?: string
	data?: Profile | string
	error?: string
	isLoading?: boolean
}

export const ProfileCard:React.FC<ProfileCardProps> = memo((props) => {
	const { className } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const data = useSelector(getProfileData)
	const isLoading = useSelector(getProfileIsLoading)
	const error = useSelector(getProfileError)

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