/**
 * util工具函数
 *
 * @export
 * @class utils
 */
export default class utils {

    /**
     * 深拷贝
     *
     * @static
     * @param {Object} data
     * @returns {Object} data
     * @memberof utils
     */
    static deepCopy(data) {
        const that = this;
        if (Object.prototype.toString.call(data) === "[object Array]") {
            return data.map(((item) => {
                if (Object.prototype.toString.call(item) === "[object Array]" || Object.prototype.toString.call(item) === "[object Object]") {
                    return that.deepCopy(item);
                }
                return item;
            }));
        } else if (Object.prototype.toString.call(data) === "[object Object]") {
            let newData = {};
            for (let i in data) {
                if (Object.prototype.toString.call(data[i]) === "[object Array]" || Object.prototype.toString.call(data[i]) === "[object Object]") {
                    newData[i] = that.deepCopy(data[i]);
                } else {
                    newData[i] = data[i];
                }
            }
            return newData;
        }
    }

    /**
     * 获取今天的日期
     *
     * @static
     * @param {String} [type="-"]
     * @returns {String} // 2018-11-11
     * @memberof utils
     */
    static getDate(type = "-") {
        const date = new Date();
        const year = date.getFullYear();
        const month = this.datePlus0(new Date().getMonth() + 1);
        const currentDate = this.datePlus0(new Date().getDate());
        return `${year}${type}${month}${type}${currentDate}`;
    }

    /**
     * 加0
     *
     * @static
     * @param {Number} x
     * @returns {String}
     * @memberof utils
     */
    static datePlus0(x) {
        if (x < 10) {
            return `0${x}`;
        } else {
            return x;
        }
    }

    /**
     * 函数防抖，代码的健壮性
     * @param {Function} func 需要防抖的函数
     * @param {Number} wait 上次被包装函数被调用时间间隔last小于设定时间间隔wait
     * @param {boolean} immediate 状态锁
     */

    static debounce(func, wait, immediate) {
        let timeout, args, context, timestamp, result

        const later = function () {
            // 据上一次触发时间间隔
            const last = +new Date() - timestamp

            // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
            if (last < wait && last > 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null
                // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
                if (!immediate) {
                    result = func.apply(context, args)
                    if (!timeout) context = args = null
                }
            }
        }

        return function (...args) {
            context = this
            timestamp = +new Date()
            const callNow = immediate && !timeout
            // 如果延时不存在，重新设定延时
            if (!timeout) timeout = setTimeout(later, wait)
            if (callNow) {
                result = func.apply(context, args)
                context = args = null
            }

            return result
        }
    }

    /**
     * 检索url
     * @param {String} name 
     */

    static getcountry = (name) => { //检索url
        var type = navigator.appName;
        if (type == "Netscape") {
            var lang = navigator.language; //获取浏览器配置语言，支持非IE浏览器
        } else {
            var lang = navigator.userLanguage; //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
        };
        var lang = lang.substr(0, 2); //获取浏览器配置语言前两位
        return lang
        // 　　if (lang == "zh"){
        // 　　    //window.location.replace('url');//中文编码时打开链接
        // 　　}else if (lang == "en"){
        //     // 　　 window.location.replace('url');
        // 　　}else{//其他语言编码时打开以下链接
        //     // 　　 window.location.replace('url');
        //     }
    }

    /**
     * 存用户信息
     * @param {Object} info 用户信息
     * @param {Function} callback 回调函数
     */
    static setuser = (info, callback) => {
        localStorage.setItem("userinfo", escape(JSON.stringify(info)));
        if (callback) {
            callback();
        }
    };
    /**
     * 获取用户信息
     */
    static getuser = () => {
        let info = localStorage.getItem("userinfo");
        return JSON.parse(unescape(info));
    };
}