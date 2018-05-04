/**
 * 用户认证
 */
import Tips from './Tips';

const isScope = () => {
    return new Promise((resolve, reject) => {
        if (!wx.getSetting) {
            wx.showModal({
                title: '提示',
                content:
                    '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            });
        }
        wx.getSetting({
            success: res => {
                if (
                    res.authSetting['scope.userInfo'] === false ||
                    res.authSetting['scope.userLocation'] === false ||
                    res.authSetting['scope.address'] === false ||
                    res.authSetting['scope.camera'] === false
                ) {
                    // 说明获取授权失败
                    Tips.modal('请您开启权限以获取更好的服务').then(
                        res => {
                            wx.openSetting({
                                success: res => {
                                    if (
                                        res.authSetting['scope.userInfo'] ===
                                            false ||
                                        res.authSetting[
                                            'scope.userLocation'
                                        ] === false ||
                                        res.authSetting['scope.address'] ===
                                            false ||
                                        res.authSetting['scope.camera'] ===
                                            false
                                    ) {
                                        resolve(false);
                                    } else {
                                        resolve(true);
                                    }
                                },
                                fail: res => {
                                    reject(false);
                                }
                            });
                        }
                    );
                } else {
                    resolve(true);
                }
            },
            fail: res => {
                reject(false);
            }
        });
    });
};
exports.isScope = isScope;
