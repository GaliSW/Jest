const sum = require("./sum");
const reduce = require("./reduce");

describe("運算測試", () => {
    test("sum", () => {
        expect(sum(1, 1)).toBe(2);
    });

    test("reduce", () => {
        expect(reduce(1, 1)).toBe(0);
    });
});
