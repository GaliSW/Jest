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
