import wepy from 'wepy';
// 测试环境和生产环境，发布改成false
const IS_DEV_URL = false


export const BaseUrl =
    IS_DEV_URL === true
        ? 'https://tshttps.com'
        : 'https://https.com';
