import {Meta, StoryObj} from '@storybook/react';

import MainPage from './main-page'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
    title: "pages/MainPage",
    component: MainPage,
};
export default meta;

type Story = StoryObj<typeof MainPage>;

export const Ligth: Story = {

};

export const Dark: Story = {
    decorators: ThemeDecorator(Theme.DARK)
};

