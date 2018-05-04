import wepy from 'wepy';
import MD5 from './MD5';
import Tips from './Tips';

// HTTP工具类
export default class http {
    /**
     * 通过参数获取lockkey，唯一值
     */
    static getLockey(string) {
        if (string) {
            //有option对象，把它变成字符串
            string = encodeURI(string);
            var md5 = MD5.hexMD5(string);
            return md5;
        }
    }

    static async request(method, url, data) {
        const lockKey = await this.getLockey(JSON.stringify(url));
        if (this[lockKey]) {
            //如果锁定请求的话，不再提交
            return;
        }
        //加请求锁
        this[lockKey] = true;
        const header = this.createAuthHeader();
        const param = {
            url: url,
            method: method,
            header: header,
            data: data
        };
        const res = await wepy.request(param);
        if (this.isSuccess(res)) {
            this[lockKey] = null;
                return res;
        } else {
            this[lockKey] = null;
            throw this.requestException(res);
        }
    }

    /**
     * 判断请求是否成功
     */
    static isSuccess(res) {
        const wxCode = res.statusCode;
        // 微信请求错误
        return !(wxCode && wxCode !== 200);
    }

    /**
     * 异常
     */
    static requestException(res) {
        const error = {};
        error.statusCode = res.statusCode;
        const wxData = res.data;
        const serverData = wxData.data;
        if (serverData) {
            error.serverCode = wxData.code;
            error.message = serverData.message;
            error.serverData = serverData;
        }
        return error;
    }
    /**
     * 构造权限头部
     */
    static createAuthHeader() {
        const header = {};
        header['content-type'] = 'application/x-www-form-urlencoded';
        return header;
    }

    static get(url, data) {
        return this.request('GET', url, data);
    }

    static put(url, data) {
        return this.request('PUT', url, data);
    }

    static post(url, data) {
        return this.request('POST', url, data);
    }

    static patch(url, data) {
        return this.request('PATCH', url, data);
    }

    static delete(url, data) {
        return this.request('DELETE', url, data);
    }
}
