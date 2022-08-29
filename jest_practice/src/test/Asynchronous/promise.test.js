const axios = require("axios");

const data = {
    IP: expect.any(String),
    Women: expect.anything(),
    Men: expect.anything(),
};

test("fetch data with json placeholder", () => {
    //網址
    return axios
        .get("https://funday.asia/school/api/TTS.asp?keyword=apple")
        .then((res) => {
            expect(res.data[0]).toBe(data[0]);
        });
});
