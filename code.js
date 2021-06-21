const axios = require("axios");

const msgs = [
    "hello cau",
    "chao cau"
]

// ngày bắt đầu thực hiện gửi tin nhắn
const START_DATE = new Date("2021-06-19");
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function diffDate() {
    const now = new Date();
    const utc1 = Date.UTC(START_DATE.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
    const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const sendMessage = async () => {
    const i = diffDate();
    let url = "https://mighty-reaches-66596.herokuapp.com/api/send"
    const { data } = await axios.get(url, { params: { uid: "100011341945915", msg: msgs[0]} });
};

sendMessage();
