import {classNames} from "./classNames"

describe("classNames", () => {
    test("test", ()=>{
        expect(classNames("someClass")).toBe("someClass")
    })

    test("with additional classes", ()=>{
        const expected = "someClass class1 class2"
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected)
    })

    test("with mods", () => {
        const expected = "someClass hovered add1 add2"
        expect(classNames("someClass",
            {hovered: true, scrollable: false},
            ["add1",  "add2"]))
            .toBe(expected)
    })
})