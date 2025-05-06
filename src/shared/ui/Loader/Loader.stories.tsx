import {Meta, StoryObj} from '@storybook/react';

import {Loader} from './Loader'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Loader> = {
    title: "shared/Loader",
    component: Loader,
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Ligth: Story = {

};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

