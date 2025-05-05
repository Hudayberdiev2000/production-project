import {screen} from "@testing-library/dom";
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("Sidebar must render", () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

})