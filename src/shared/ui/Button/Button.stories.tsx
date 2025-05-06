import {Meta, StoryObj} from '@storybook/react';

import {Button, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
    title: "shared/Button",
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button"
    },
};

export const Clear: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.CLEAR
    },

};

export const Outline: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE
    },
};


export const OutlineDark: Story = {
    args: {
        children: "Button",
        theme: ButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};