import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { memo, useEffect } from 'react'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar'
import { Container } from 'shared/ui/Container/Container'
import { LuminousContainer } from 'shared/ui/LuminousContainer/LuminousContainer'
import CityIcon from 'shared/assets/icons/cityIcon.svg'
import InfoIcon from 'shared/assets/icons/infoIcon.svg'
import { Loader } from 'shared/ui/Loader/Loader'
import { fetchProfileData, Profile } from 'entities/Profile'

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
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}><Loader /></div>
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
				<LuminousContainer border radius>
					<Avatar size={AvatarSize.XL} className={cls.avatar} src={data.avatar} radius />
				</LuminousContainer>
				<div className={cls.main}>
					<Text theme={TextTheme.SECONDARY} title={`${data?.first} ${data?.lastname}`}/>
					<div className={cls.info}>
						<div className={cls.itemInfo}>
							<CityIcon className={cls.iconInfo}/>
							<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={data?.city}/>
						</div>
						<div className={classNames(cls.learnMore, {}, [cls.itemInfo]) }>
							<InfoIcon className={cls.iconInfo}/>
							<Text className={cls.textInfo} theme={TextTheme.SECONDARY} text={t('Подробнее')}/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
})