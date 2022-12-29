import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { memo, useEffect } from 'react'
import { Profile } from '../../model/types/profile'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Container } from 'shared/ui/Container/Container'

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

	if(isLoading || data == undefined) {
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
		<Container className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Avatar size={AvatarSize.XL} className={cls.avatar} src={data.avatar} />
				<div className={cls.main}>
					<Text theme={TextTheme.SECONDARY} title={`${data?.first} ${data?.lastname}`}/>
					<div className={cls.info}>
						<Text theme={TextTheme.SECONDARY} text={`${data?.age}`}/>
						<Text theme={TextTheme.SECONDARY} text={data?.city}/>
					</div>
				</div>
			</div>
		</Container>
	)
})