const obj = {
    position: {
        x: 0,
        y: 0,
    },
};

describe("巢狀物件", () => {
    test("toMatchObject contain all", () => {
        expect(obj).toMatchObject({
            position: {
                x: expect.any(Number),
                y: expect.any(Number),
            },
        });
    });

    test("toMatchObject contain partially", () => {
        expect(obj).toMatchObject({
            position: {
                x: expect.any(Number),
            },
        });
    });

    test("toEqual(expecy.objectContaining()) contain all", () => {
        expect(obj).toEqual(
            expect.objectContaining({
                position: {
                    x: expect.any(Number),
                    y: expect.any(Number),
                },
            })
        );
    });

    test("toEqual(expecy.objectContaining()) contain partially", () => {
        expect(obj).toEqual(
            expect.objectContaining({
                position: {
                    x: expect.any(Number),
                },
            })
        );
    });

    test("toEqual(expecy.objectContaining()) 物件屬性內又定義 objectContaining", () => {
        expect(obj).toEqual(
            expect.objectContaining({
                position: expect.objectContaining({
                    x: expect.any(Number),
                }),
            })
        );
    });
});

test("沒有Gary", () => {
    expect("color = Gray ").not.toMatch(/Gary/);
});

test("有Gary", () => {
    expect("My name is Gary").toMatch(/Gary/);
});
const mamber = ["Gary", "Nina", "Leo", "Andy", "Alex"];

test("是否有Gary", () => {
    expect(member).toContain("Gary");

    //使用new Set() 過濾重複元素
    expect(new Set(member)).toContain("Gary");
});

const members = [
    { name: "Gary", email: "xxx@gmail.com" },
    { name: "Yang", email: "zzz@gmail.com" },
];

//完全比對
expect(members).toContainEqual({ name: "Gary", email: "xxx@gmail.com" });

//部分比對
expect(members).toContainEqual(expect.objectContaining({ name: "Gary" }));
