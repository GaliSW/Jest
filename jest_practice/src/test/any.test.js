test("type check", () => {
    const number = 3;
    expect(number).toEqual(expect.any(Number));
});

test("something error", () => {
    const t = () => {
        throw new TypeError("UNKNOWN ERROR");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("UNKNOWN ERROR");
});

describe("Test Suite", () => {
    test("Test Case", () => {
        //Asseration
    });
    test("Test Case", () => {
        //Asseration
    });
});
document.getElementById.insertAdjacentHTML("beforeend");
