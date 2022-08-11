class userDB {
    constructor() {
        this.userData = [
            { id: 1, name: "Gary" },
            { id: 2, name: "Lucas" },
        ];
    }
    //新增資料
    insertTestData(data) {
        this.userData.push(data);
    }

    //刪除資料
    deleteTestData(id) {
        let findIndex = this.userData.findIndex((user) => {
            return user.id === id;
        });
        if (findIndex !== -1) this.userData.splice(findIndex, 1);
    }

    //查詢資料
    getUser(id) {
        let target = this.userData.find((user) => {
            return user.id === id;
        });
        return target;
    }
}

module.exports = userDB;
