function zhangkb() {
    this.supNumber = function (num, x) {
        /*
        *功能: {在数字前以0补全指定位数}	
        *输入: {number}    (原数据,指定位数)
        *输出: {string}	"04"
        */
        if ((num + "").length < x) {
            return "0" + num;
        } else {
            return num
        }
    }
    this.inherit = function (target, origin) {
        // 原型继承, 圣杯模式,函数的继承
        var temp = function () {}
        temp.prototype = origin.prototype;
        target.prototype = new temp();
        target.prototype.constructor = target;
    }
    this.extends = function (origin) {
        // 克隆
        var result = function () {
            origin.apply(this, arguments);
        };
        this.inherit(result, origin);
        return result;
    }
    this.single = function (origin) {
        // 单例
        var singleResult = (function () {
            var instance;
            return function () {
                if (typeof instance == "object") {
                    return instance;
                }
                instance = this;
                origin && origin.apply(this, arguments);
                return instance;
            }
        })();
        origin && this.inherit(singleResult, origin);
        return singleResult;
    }
    // cookie
    this.setCookie = function (cname, cvalue, exdays) {
        // 设置cookie值
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    this.getCookie = function (cname) {
        // 获取cookie值
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    this.checkCookie = function () {
        // 检测cookie值
        var username = getCookie("username");
        if (username != "") {
            alert("Welcome again " + username);
        } else {
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                setCookie("username", username, 365);
            }
        }
    }
    // 处理时间
    this.countDown = function() {
        /*
         *功能: 获取到下年一月一日的倒计时
         *输入: ""
         *输出: "193 小时 54 分钟 43 秒"
         */
        var date = new Date();
        var now = new Date().getTime();
        date.setFullYear(date.getFullYear() + 1);
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        var target = date.getTime();
        var lev1 = parseInt((target - now) / 1000); // 总秒数
        var lev2 = parseInt(lev1 / 60); // 总分钟数
        var lev3 = parseInt(lev2 / 60); // 总小时数
        var days = parseInt(lev3 / 24); // 总天数
        var seconds = lev1 % 60; // 剩余总计秒数 % 60 --- 除去分钟数后剩余的秒数
        var minutes = lev2 % 60;  // 剩余分钟数
        var hours = lev3 % 24;
        // log(minutes,seconds,hours,days)
        log(days + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒');
    }
    this.setRmainTime = function (deadline) {
        /*
         *   功能: 根据设定的截止时间获取剩余时间
         *   输入: {string}    "2019-07-19 11:40:00"
         *   输出: {string}    "193 小时 54 分钟 43 秒 "
         */
        var reDate;
        var dateArr = deadline.split(' ')[0].split('-');
        var timeArr = deadline.split(' ')[1].split(':');
        var deadDate = new Date();
        var nowDate = new Date();
        // 差异毫秒数
        var dateDiff;
        // 设置时间
        deadDate.setFullYear(dateArr[0]);
        deadDate.setMonth(dateArr[1] - 1);
        deadDate.setDate(dateArr[2]);
        deadDate.setHours(timeArr[0]);
        deadDate.setMinutes(timeArr[1]);
        deadDate.setSeconds(timeArr[2]);
        // 计算差异
        dateDiff = deadDate.getTime() - nowDate.getTime()
        //计算出相差天数
        var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
        var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000)) + dayDiff * 24 //计算出小时数
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000)
        // hours = supNum(hours)
        // minutes = supNum(minutes)
        // seconds = supNum(seconds)
        reDate = hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
            return "00 小时 00 分钟 00 秒"
        } else {
            return reDate
        }
    }

    // 判断是否为DOM
    this.isDOM = (typeof HTMLElement === 'object') ? // chrome中typeof HTMLElement返回function
        function (obj) {
            return obj instanceof HTMLElement; 
        } :
        function (obj) {
            return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        }
    // ip排序
    this.sortby = function(ips) {
        // ips =  ["10.10.15.130", "10.10.16.40", "127.0.0.1", "192.168.1.123", "192.168.1.38", "192.168.1.39"];
        // 升序
        ips.sort(function(a, b){
            a = a.trim(); // 空格会影响排序
            b = b.trim();
            var arr1 = a.split('.')
            var arr2 = b.split('.')
            for (var i = 0; i < 4; i++) {
                if(arr1[i] > arr2[i]) {
                    return 1
                } else if(arr1[i] < arr2[i]){
                    return -1
                }
            }
        })
        return ips
    }
}
window.no$ = new zhangkb();