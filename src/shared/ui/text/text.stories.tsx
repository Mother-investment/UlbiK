import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'



export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title lorem ipsun',
	text: 'Text description'
}

export const Error = Template.bind({})
Error.args = {
	title: 'Title lorem ipsun',
	text: 'Text description',
	theme: TextTheme.ERROR
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
	title: 'Title lorem ipsun'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
	text: 'Text description'
}

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
	title: 'Title lorem ipsun',
	text: 'Text description'
}
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ErrorLight = Template.bind({})
ErrorLight.args = {
	title: 'Title lorem ipsun',
	text: 'Text description',
	theme: TextTheme.ERROR
}
ErrorLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OnlyTitleLight = Template.bind({})
OnlyTitleLight.args = {
	title: 'Title lorem ipsun'
}
OnlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OnlyTextLight = Template.bind({})
OnlyTextLight.args = {
	text: 'Text description'
}
OnlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)]