const axios = require("axios");

const data = {
    IP: expect.any(String),
    Women: expect.anything(),
    Men: expect.anything(),
};

test("fetch data with json placeholder", async () => {
    expect.assertions(1); //至少執行一次
    try {
        const res = await axios.get(
            "https://funday.asia/school/api/TTS.asp?keyword=apple"
        );
        expect(res.data[0]).toBe(data[0]);
    } catch (e) {
        expect(e).toMatch("error");
    }
});

function fetch() {
    return new Promise((resolve, reject) => {
        resolve("success");
    });
}
function fetchError() {
    return new Promise((resolve, reject) => {
        reject("error");
    });
}

test("the fetch success", async () => {
    console.log(fetch());
    await expect(fetch()).resolves.toBe("success");
});

test("the fetch fails with an reject error", async () => {
    await expect(fetchError()).rejects.toBe("error");
});
