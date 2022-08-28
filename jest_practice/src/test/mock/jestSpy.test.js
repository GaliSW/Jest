// 將 checkDiscount 放到一個 module 中
const productModule = {
    checkDiscount: (name) => {
        console.log(name);
        if (name === "milk") {
            return true;
        }
        return false;
    },
};

const calculateThePrice = (goods, checkDiscount) => {
    let totalPrice = 0;
    goods.forEach((item) => {
        let price = Number(item.price) * Number(item.count);
        if (checkDiscount(item.name)) {
            price *= 0.5;
        }
        totalPrice += price;
    });
    return totalPrice;
};

describe("Test calculate the price", () => {
    const shoppingCart = [
        { name: "milk", price: 39, count: 2 },
        { name: "apple", price: 25, count: 3 },
    ];

    // 以 objectName 及 methodName 創建 spy 替身
    const spyCheckDiscount = jest.spyOn(productModule, "checkDiscount");

    test("Test can return expect price", () => {
        // 將 spy 送入測試
        expect(calculateThePrice(shoppingCart, spyCheckDiscount)).toBe(114);
    });
});
