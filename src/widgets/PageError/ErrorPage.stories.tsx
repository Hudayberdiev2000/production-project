import {Meta, StoryObj} from '@storybook/react';

import {PageError} from './PageError'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof PageError> = {
    title: "widget/PageError",
    component: PageError,
};
export default meta;

type Story = StoryObj<typeof PageError>;

export const Ligth: Story = {

};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

