
// 本文件存放算法


// 1.千分位（三位一分）：2,123,456,789
{
    // 思路：只要字符串长度大于三就裁剪后三位并更新字符串，通过累加实现
    function toThousands(num) {
        var num = (num || 0).toString(), result = '';
        // 将传入数据转换为字符串
        while (num.length > 3) {
            // 只要字符串长度大于三就执行
            // -----------------------------------------------------------------------
            result = ',' + num.slice(-3) + result;      // ',' + 后三位值 + 之前累加的值
            // -----------------------------------------------------------------------
            // 将字符串后三位裁剪并加入最终的字符串     
            num = num.slice(0, num.length - 3);
            // 更新字符串长度
        }
        if (num) { result = num + result; }
        return result;
    }
    // 另用toLocaleString()方法也可实现 --- 兼容性不好
    let num = new Number(123123123).toLocaleString()
}

// 2.输入一个数组及一个目标值，输出数组中相加之和等于目标值的两数的下标，多个匹配则用数组表示，用过的数字不能再用
// 如：输入([1,2,3,4,5,4,3,2,1],4)      输出：[[0,2],[1,7],[6,8]]
{   
    // 思路：
    // 遍历nums，每个值相加，
    // 如果等于target，将这两个数的下标保存到对象中
    // 每次循环前判断该下标有没有使用过
    function twoSum(nums, target) {
        let { num = [] } = { num: nums };
        // 容错处理
        let arr = [];
        let noObj = {};
        for (let i = 0; i < num.length; i++) {
            if (noObj[i]) {
                // 如果该下标已使用则跳出本次循环
                continue
            }
            for (let j = i + 1; j < num.length; j++) {
                if (noObj[j]) {
                    continue
                }
                if (num[i] + num[j] == target) {
                    // 如果有多个匹配项添加到数组中
                    arr.push([i, j])
                    // 将已使用下标保存到对象
                    noObj[i] = i;
                    noObj[j] = j;
                    break
                }
            }
        }
        return arr;
    };
}

// 3.输入字符串，输出字符串中最长不重复子串的长度
{
    // 思路： 移动窗口，用对象记录字符及其下标，有相同的则移动左侧游标，保持三个数，left，right，num
    // [a,b,c],b,b      没有相同的,用对象记录每个字符出现的位置 --- {a:0,b:1,c:3} --- 更新计数器mex(num,(right - left))
    // [a,b,c,b],b  ---  a,b,[c,b],b      出现了相同的字符时将左侧游标右移至已出现字符下标+1的位置

    // tips.索引为0的值判断时为false，可能引发错误
    // "tmmzuxt"
    // t,m,[m,z,u,x],t  

    // 思路2，将所有可能添加到字符串中的字符都保存在数组中，判断当前位是值（10,400,9000等），将对应字符加入
    function lengthOfLongestSubstring(s) {
        let num = 0,obj = {},left = 0;
        if (!s) return 0
        if (s.length === 1) return 1
        for (let right = 0; right < s.length; right++) {
            // 有重复的或索引为0
            if (obj[s[right]] || obj[s[right]] == 0) {
                // 有重复的但是是在左游标之前
                if (obj[s[right]] < left) {
                    obj[s[right]] = right
                    console.log('true')
                } else {
                    left = obj[s[right]] + 1
                    obj[s[right]] = right
                    console.log('false')
                }
            } else {
                // 无重复添加对应值
                obj[s[right]] = right
                console.log(left, right, obj, num)
            }
            num = Math.max(num, right - left + 1)
        }
        return num
    }

}

// 4.罗马数字转换为整数
{
    // 罗马数字转换为整数,1 -- 1000
    // 罗马数字计数从左往右依次相加
    // 累加器 num，计数并返回,对象obj保存字母对应的数值
    // 1.判断当前位是否为： I | X | C , 有三种情况： 一.（I 为 V | X ) ；  二.(X 后可为 L | C)；   三.(C 后可为 D | M)
    var romanToInt = function (s) {
        let obj = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        },
            num = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] == 'I') {
                if (s[i + 1] == 'V' || s[i + 1] == 'X') {
                    num += obj[s[i + 1]] - obj[s[i]];
                    i += 1
                    continue;
                } else {
                    num += obj[s[i]];
                }

            } else if (s[i] == 'X') {
                if (s[i + 1] == 'L' || s[i + 1] == 'C') {
                    num += obj[s[i + 1]] - obj[s[i]];
                    i += 1
                    continue;
                } else {
                    num += obj[s[i]];
                }
            } else if (s[i] == 'C') {
                if (s[i + 1] == 'D' || s[i + 1] == 'M') {
                    num += obj[s[i + 1]] - obj[s[i]];
                    i += 1
                    continue;
                } else {
                    num += obj[s[i]];
                }
            } else {
                num += obj[s[i]]
            }
        }
        return num;
    };
}

// 5.查找字符串中的第一串有效数字
{
    // myAtoi('+123#$24') ---> +123
    function myAtoi (str) {
        let reStr = '',
            key = true,
            spKey = true;
        for (let i = 0; i < str.length; i++) {
            // 丢弃无用字符
            if (str[i] == ' ') {
                if (spKey) {
                    console.log('空格')
                    continue
                } else {
                    break
                }
            } else if (str[i] == '-' || str[i] == '+') {
                if (key) {
                    console.log('加符号', str[i], reStr)
                    reStr += str[i];
                    key = false
                    spKey = false
                } else {
                    console.log('被符号阻断')
                    break
                }
            } else if (str[i].charCodeAt() <= 58 && str[i].charCodeAt() >= 47) {
                reStr += str[i]
                console.log('为数字', str[i], reStr)
                spKey = false
                key = false
            } else {
                console.log('无效字符')
                break
            }
        }
        if (+reStr > Math.pow(2, 31) - 1) {
            return 2147483647
        } else if (+reStr < -(Math.pow(2, 31) - 1)) {
            return -2147483648
        } else if (!+reStr) {
            return 0
        } else {
            console.log('无事发生')
            return reStr
        }


    };
}

// 6.Z字形变换
// 输入：'12345678',3 
// 输出：15246837
// 1   5
// 2 4 6 8
// 3   7
{
    // 三个变量,obj保存每行的内容 {行数：内容}  
    //         turn为方向
    //         row为行数
    // 思路：控制方向记录每行的内容，当行数等于参数或等于1（不是第一次）时变换方向

    var convert = function (s, numRows) {
        let obj = {},
            turn = 1, // 1为向下
            row = '1',
            reObj = '';
        if (numRows == 1) return s
        for (let i = 0; i < s.length; i++) {
            if (!obj[row]) {
                obj[row] = s[i]
            } else {
                obj[row] += s[i]
            }
            if (row == numRows || (row == 1 && typeof (row) != 'string')) {
                turn *= -1;
            }
            row *= 1;
            row += turn
        }
        for (const prop in obj) {
            reObj += obj[prop]
        }
        return obj
    };
}





 // toLocaleString(locales,options),一参为语言环境，二参为配置属性

// 初始化时间，参数为语言环境
// new Date().toLocaleString('zh') ---> "2019/5/27 下午3:13:06"
// new Date().toLocaleString('en') ---> "5/27/2019, 3:13:04 PM"

// 可配置项：new Date().toLocaleString('zh', { hour12: false });
// hour12:使用十二小时制还是二十四小时制
// {hour: false} ---> 2018/4/4 18:57:36;     {hour: true} ---> 2018/4/4 下午6:57:36
// https://www.colabug.com/2626489.html


// 初始化数字
// 千分位
// new Number(1234567).toLocaleString() ---> "1,234,567"

// 可配置项：new Number(4567).toLocaleString('zh', { minimumIntegerDigits: 5})
// 控制位数：指定整数的最小位数(minimumIntegerDigits)，小数的最少位数(minimumFractionDigits) ,小数的最多位数(maximumFractionDigits)
// 控制有效数字位数: minimumSignificantDigits, maximumSignificantDigits; 两方法均是四舍五入，设置了该属性后上一组属性失效
// useGrouping用于控制是否分割
// new Number(4567).toLocaleString('zh', { minimumIntegerDigits: 5, useGrouping: false });  ---> 04567 
// 