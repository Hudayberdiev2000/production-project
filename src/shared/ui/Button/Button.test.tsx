import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {render} from "@testing-library/react";
import {screen} from "@testing-library/dom";

describe("Button", () => {
    test("Button must render", () => {
        render(<Button >TEST</Button>)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })

    test("Button must render", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText("TEST")).toHaveClass("clear")
        screen.debug()
    })
})