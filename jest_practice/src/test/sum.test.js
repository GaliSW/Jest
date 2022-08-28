function sum(a, b) {
    return a + b;
}

test("加法測試", () => {
    expect(sum(1, 2)).toBe(3);
});
