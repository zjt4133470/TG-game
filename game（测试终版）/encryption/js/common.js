//成功或失敗的提示框
let prompt = function (width, time, bool, state) {
    let set = "";
    clearTimeout(set);
    var div = $("<div></div>").css({
        width: "100%",
        position: "fixed",
        opacity: "0",
        zIndex: "9999999999999999999999999999999999999999999999999999999999999999999"
    }).animate({top: "50px", opacity: '1',}, 500).appendTo($("body"));
    if (bool == true) {
        var div1 = $("<div></div>").css({
            webkitBoxAlign: "center",
            msFlexAlign: "center",
            alignItems: "center",
            width: width + "px",
            borderColor: "#e1f3d8",
            height: "50px",
            margin: "0px auto",
            backgroundColor: "#f0f9eb",
            borderRadius: "4px",
            border: "1px solid #0fce1b",
            boxShadow: "0px 0px 10px 1px rgba(15, 206, 27, .5)"
        }).appendTo(div);
        var p = $("<p>" + state + "</p>").css({
            color: "rgba(15,206,27,1)",
            fontSize: "18px",
            lineHeight: "50px",
            textAlign: "center"
        }).appendTo(div1)
    } else if (bool == false) {
        var div1 = $("<div></div>").css({
            width: width + "px",
            borderColor: "#fde2e2",
            height: "50px",
            margin: "0px auto",
            backgroundColor: "#fef0f0",
            borderRadius: "4px",
            border: "1px solid #e1f3d8",
            boxShadow: "0px 0px 10px 1px rgba(254, 110, 110, .5)"
        }).appendTo(div);
        var p = $("<p>" + state + "</p>").css({
            color: "rgba(254, 110, 110, 1)",
            fontSize: "18px",
            lineHeight: "50px",
            textAlign: "center"
        }).appendTo(div1)
    }
    set = setTimeout(function () {
        div.animate({marginTop: "-50px", opacity: '0',}, 500, function () {
            div.remove()
        });
        clearTimeout(set)
    }, time)
};
let prompt1 = function (width, time, bool, state) {
    let set = "";
    clearTimeout(set);
    var div = $("<div></div>").css({
        width: "100%",
        position: "fixed",
        opacity: "0",
        zIndex: "9999999999999999999999999999999999999999999999999999999999999999999"
    }).animate({top: "150px", opacity: '1',}, 500).appendTo($("body"));
    if (bool == true) {
        var div1 = $("<div></div>").css({
            webkitBoxAlign: "center",
            msFlexAlign: "center",
            alignItems: "center",
            width: width + "px",
            borderColor: "#e1f3d8",
            height: "50px",
            margin: "0px auto",
            backgroundColor: "#f0f9eb",
            borderRadius: "4px",
            border: "1px solid #0fce1b",
            boxShadow: "0px 0px 10px 1px rgba(15, 206, 27, .5)"
        }).appendTo(div);
        var p = $("<p>" + state + "</p>").css({
            color: "rgba(15,206,27,1)",
            fontSize: "18px",
            lineHeight: "50px",
            textAlign: "center"
        }).appendTo(div1)
    } else if (bool == false) {
        var div1 = $("<div></div>").css({
            width: width + "px",
            borderColor: "#fde2e2",
            height: "50px",
            margin: "0px auto",
            backgroundColor: "#fef0f0",
            borderRadius: "4px",
            border: "1px solid #e1f3d8",
            boxShadow: "0px 0px 10px 1px rgba(254, 110, 110, .5)"
        }).appendTo(div);
        var p = $("<p>" + state + "</p>").css({
            color: "rgba(254, 110, 110, 1)",
            fontSize: "18px",
            lineHeight: "50px",
            textAlign: "center"
        }).appendTo(div1)
    }
    set = setTimeout(function () {
        div.animate({marginTop: "-50px", opacity: '0',}, 1000, function () {
            div.remove()
        });
        clearTimeout(set)
    }, time)
};

//时间格式化
let timeFilter = function (value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var m = oDate.getMonth() + 1;
    parseInt(m) < 10 ? m = '0' + m : m = m;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    return y + '/' + m + '/' + d
};

let timeFilter1 = function (value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var m = oDate.getMonth() + 1;
    parseInt(m) < 10 ? m = '0' + m : m = m;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    return y + '年' + m + '月' + d + '日'
};

let timeFilter2 = function (value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var h = oDate.getHours();
    parseInt(h) < 10 ? h = '0' + h : h = h;
    var m = oDate.getMinutes();
    parseInt(m) < 10 ? m = '0' + m : m = m;
    return h + ':' + m
};

let timeFilter3 = function (value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var M = oDate.getMonth() + 1;
    parseInt(M) < 10 ? M = '0' + M : M = M;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    var h = oDate.getHours();
    parseInt(h) < 10 ? h = '0' + h : h = h;
    var m = oDate.getMinutes();
    parseInt(m) < 10 ? m = '0' + m : m = m;
    return y + '-' + M + '-' + d + ' ' + h + ':' + m
};

let timeFilter4 = function (value) {
    var oDate = new Date();
    oDate.setTime(value * 1000);
    var y = oDate.getFullYear();
    var M = oDate.getMonth() + 1;
    parseInt(M) < 10 ? M = '0' + M : M = M;
    var d = oDate.getDate();
    parseInt(d) < 10 ? d = '0' + d : d = d;
    var h = oDate.getHours();
    parseInt(h) < 10 ? h = '0' + h : h = h;
    var m = oDate.getMinutes();
    parseInt(m) < 10 ? m = '0' + m : m = m;
    return y + '/' + M + '/' + d + ' ' + h + ':' + m
};

//（confirm）弹窗
let confirm = function (width, state, successCallback, confirm, deselect, failCallback) {
    if (confirm == "" || confirm == null || confirm == undefined) {
        confirm = "确定"
    }
    if (deselect == "" || deselect == null || deselect == undefined) {
        deselect = "取消"
    }
    var div = $("<div></div>").css({
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,.5)",
        top: "0",
        zIndex: "9999999999999999999999999999999999999999999999999999999999999999999999999999999"
    }).appendTo($("body"));
    var div1 = $("<div></div>").css({
        position: "absolute",
        width: width,
        height: "200px",
        left: "50%",
        top: "50%",
        marginTop: "-100px",
        marginLeft: -width / 2,
        backgroundImage:"url('./encryption/image/kuang.png')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100% 100%",
        borderRadius: "5px",
        border: "1px solid #999",
        boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
    }).appendTo(div);
    var p = $("<p>" + state + "</p>").css({
        color: "rgba(0,0,0,1)",
        fontSize: "18px",
        width: width,
        marginTop: "50px",
        textAlign: "center",
        letterSpacing: "1px"
    }).appendTo(div1);
    var button1 = $('<button>' + confirm + '</button>').css({
        cursor: "pointer",
        minWidth: "80px",
        height: "40px",
        color: "rgba(255,255,255,1)",
        fontSize: "14px",
        marginTop: "50px",
        textAlign: "center",
        letterSpacing: "3px",
        marginLeft: width / 10 + "px",
        outline: "none",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#347ffe",
    }).click(function () {
        div.remove();
        successCallback()
    }).appendTo(div1);

    var button2 = $('<button>' + deselect + '</button>').css({
        float: "right",
        cursor: "pointer",
        minWidth: "80px",
        height: "40px",
        color: "rgba(255,255,255,1)",
        fontSize: "14px",
        marginTop: "50px",
        textAlign: "center",
        letterSpacing: "3px",
        marginRight: width / 10 + "px",
        outline: "none",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "rgba(153,153,153,.8)"
    }).click(function () {
        div.remove();
        failCallback();
    }).appendTo(div1)
};

//验证码倒计时
let countDown = function (time, css1, css2) {
    var time = time;
    var that = $(event.target);
    CountdownTime();

    function CountdownTime() {
        var test1;
        if (time >= 1) {
            time -= 1;
            if (time == 0) {
                $(that).css(css1);
                $(that).css({
                    cursor: "pointer"
                }).removeAttr("disabled").html("获取验证码");
                return
            }
            //点击后按钮变化
            $(that).css(css2);
            $(that).css({
                cursor: "not-allowed"
            }).attr("disabled", "disabled").html(time + "s后重试");
            test1 = setTimeout(function () {
                CountdownTime();
                clearTimeout(test1)
            }, 1000);
        }
    }
};

// 点赞/评论 效果
let likeResult = function (str, css) {
    if (css == "" || css == null || css == undefined) {
        var that = $(event.target);
        var y = that.offset().top;
        var x = that.offset().left;
        var div = $("<div>" + str + " +1</div>").css({
            position: "fixed",
            top: y,
            left: x,
            marginTop: "-25px",
            color: "#d60000",
            fontWeight: "600",
            zIndex: "999999999"
        }).animate({marginTop: "-100px", opacity: '0',}, 2000, function () {
            div.remove()
        }).appendTo($("#M"));
    } else {
        var that = $(event.target);
        var y = that.offset().top;
        var x = that.offset().left;
        var div = $("<div>" + str + " +1</div>").css({
            position: "fixed",
            top: y,
            left: x,
            marginTop: "-25px",
            color: "#d60000",
            fontWeight: "600",
            zIndex: "999999999"
        }).animate({marginTop: "-100px", opacity: '0',}, 2000, function () {
            div.remove()
        }).appendTo($("#M"));
        div.css(css);
    }
};

//验证的封装
let verification = function (type, str, successCallback, failCallback) {
    //手机号验证
    if ("phone" == type) {
        if (str == "") {
            prompt("500", "2000", false, "请您输入手机号");
        } else {
            window.event.preventDefault();
            var re = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    } else if ("code4" == type) {
        //4位验证码验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入验证码");
        } else {
            window.event.preventDefault();
            var re = /^\d{4}$/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    } else if ("code6" == type) {
        //6位验证码验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入验证码");
        } else {
            window.event.preventDefault();
            var re = /^\d{6}$/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    } else if ("Email" == type) {
        //Emali验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入邮箱");
        } else {
            window.event.preventDefault();
            var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (re.test(str)) {
                successCallback();
            } else {
                failCallback()
            }
        }
    } else if ("IDcard" == type) {
        //身份证验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入身份证号");
        } else {
            window.event.preventDefault();
            var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    } else if ("special" == type) {
        //座机验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入联系方式");
        } else {
            window.event.preventDefault();
            var re = /^[0-9-]+$/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    }else if ("password" == type) {
        //座机验证
        if (str == "") {
            prompt("500", "2000", false, "请您输入密码");
        } else {
            window.event.preventDefault();
            var re = /^.{6,}$/;
            if (re.test(str)) {
                successCallback()
            } else {
                failCallback()
            }
        }
    }
}




