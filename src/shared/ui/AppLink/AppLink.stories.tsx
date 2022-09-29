import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/'
	}
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
	theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Text',
	theme: AppLinkTheme.SECONDARY
}

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
	children: 'Text',
	theme: AppLinkTheme.PRIMARY
}
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryLight = Template.bind({})
SecondaryLight.args = {
	children: 'Text',
	theme: AppLinkTheme.SECONDARY
}
SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]
