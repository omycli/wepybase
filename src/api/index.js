import wepy from 'wepy';
import base from './base';

import testIndex from '../mocks/index';
export default class api extends base {
    // test
    static async getIndex() {
        const url = `${this.baseUrl}/index`;
        if (wepy.$instance.globalData.IS_DEV) {
            //测试环境,模拟请求效果
            await setTimeout(() => {
                this.ajaxdata = testIndex;
            });
        } else {
            //正式环境
            // 如果是post请求：this.ajaxdata = await this.post(url, data);其中参数data={a:a}
            this.ajaxdata = await this.get(url);
        }
        let indexData = this.ajaxdata;
        return new Promise((resolve, reject) => {
            resolve(indexData);
        });
    }

    static async payMoney() {
        let code = wepy.$instance.globalData.code;
        if (code) {
            const url = `${this.baseUrl}/test/get_pay`;
            let ajaxData = {
                code: code
            };
            let payData = await this.get(url, ajaxData);
            return new Promise((resolve, reject) => {
                resolve(payData);
            });
        }
    }

    static async getUserInfo() {
        return new Promise((resolve, reject) => {
            wepy
                .getUserInfo()
                .then(res => {
                    const data = {
                        nickName: res.userInfo.nickName,
                        avatarUrl: res.userInfo.avatarUrl,
                        city: res.userInfo.city,
                        country: res.userInfo.country,
                        gender: res.userInfo.gender,
                        province: res.userInfo.province,
                        language: res.userInfo.language,
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        signature: res.signature
                    };
                    resolve(data);
                })
                .catch(reject);
        });
    }
}
