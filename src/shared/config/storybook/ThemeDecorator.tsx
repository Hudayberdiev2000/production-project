import 'app/styles/index.scss';
import { Decorator, StoryContext, StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => {
    const decorator = (Story: StoryFn, context: StoryContext) => (
        <div className={`app ${theme}`}>
            {Story(context.args, context)}
        </div>
    );

    decorator.displayName = `StyleDecorator(${theme})`;
    return decorator;
};