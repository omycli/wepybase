import wepy from 'wepy';
import { BaseUrl } from './api';
import http from '../utils/Http';

export default class base {
    static baseUrl = BaseUrl;
    static get = http.get.bind(http);
    static post = http.post.bind(http);
    static ajaxdata = {};
}
