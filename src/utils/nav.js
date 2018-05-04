/**
 * 页面导航类
 */
import { isScope } from './scope';
export default class NAV {

    /**
     * navigate
     * @param {*按钮事件} e
     * @param {*触发路由} root
     */
    static async navigateTest(e, root) {
        let res = await isScope();
        if (res) {
            root.$navigate('userOrder');
        }
    }

    /**
     * navigateBack
     * @param {*按钮事件} e
     * @param {*触发路由} root
     */
    static async navigateBackTest(e, root) {
        wx.navigateBack('mbrand');
    }

    /**
     * redirect
     * @param {*按钮事件} e
     * @param {*触发路由} root
     * @param {*页面参数} data
     */
    static async redirectTest(e, root, data) {
        root.$redirect('success', data);
    }

    /**
     * switch
     * @param {*按钮事件} e 
     * @param {*触发路由} root 
     */
    static async switchTest(e, root) {
        root.$switch('index');
    }
}
