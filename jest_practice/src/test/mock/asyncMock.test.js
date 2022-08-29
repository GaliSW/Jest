// import axios 模組
const axios = require("axios");

// 使用 jest.mock 自動模擬整個 axios 模組
jest.mock("axios");

// 使用模擬後的 axios方法
it("mock async", async () => {
    const users = [{ name: "Gary" }];

    // 模擬後的 axios 方法可以使用 mockResolvedValue 這個方法
    // 產生一個會回傳 Promise 的函式
    console.log("1");
    const fetchMock = axios.get.mockResolvedValue(users);
    console.log("2");
    const response = await fetchMock(); // 記得要執行 fetchMock() 才會有值
    console.log(response);
    console.log("3");
    expect(response).toEqual(users);
});
