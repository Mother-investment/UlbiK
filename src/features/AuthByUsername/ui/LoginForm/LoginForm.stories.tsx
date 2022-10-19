import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { LoginForm } from './LoginForm'

export default {
	title: 'features/LoginForm',
	component: LoginForm,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
	loginForm: { username: '123', password: 'asd' }
})]

export const withError = Template.bind({})
withError.args = {}
withError.decorators = [StoreDecorator({
	loginForm: { username: '123', password: 'asd', error: 'ERROR' }
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
	loginForm: { isLoading: true }
})]

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {}
PrimaryLight.decorators = [
	StoreDecorator({
		loginForm: { username: '123', password: 'asd' }
	}),
	ThemeDecorator(Theme.LIGHT)
]

export const withErrorLight = Template.bind({})
withErrorLight.args = {}
withErrorLight.decorators = [
	StoreDecorator({
		loginForm: { username: '123', password: 'asd', error: 'ERROR' }
	}),
	ThemeDecorator(Theme.LIGHT)
]

export const LoadingLight = Template.bind({})
LoadingLight.args = {}
LoadingLight.decorators = [
	StoreDecorator({
		loginForm: { isLoading: true }
	}),
	ThemeDecorator(Theme.LIGHT)
]