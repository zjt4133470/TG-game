$(function () {
    //判断页面是否联网
    var open;
    if (navigator.onLine) {
        open = 1
        /*连接中*/
    } else {
        open = 2
        /*未联网*/
    }
    //断网或者无网显示的页面
    if (open == 2) {
        var div = $("<div></div>").css({
            width: "100%",
            height: "100%",
            position: "fixed",
            backgroundColor: "rgba(255,255,255,1)",
            top: "0",
            zIndex: "9999999999999999999"
        }).appendTo($("body"));
        var div1 = $("<div title='点我重试'></div>").css({
            position: "absolute",
            width: "500px",
            height: "540px",
            left: "50%",
            top: "50%",
            marginTop: "-350px",
            marginLeft: "-270px",
            backgroundImage: "url('./encryption/image/network.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            borderRadius: "50%",
            cursor: "pointer"
        }).click(function (e) {
            e.stopPropagation();
            location.reload();
        }).appendTo(div);
        var img = $("<img src='./encryption/image/tg.png'>").css({
            width: "100px",
            height: "",
            fontSize: "30px",
            color: "#000",
            position: "absolute",
            right: "-200px"
        }).appendTo(div1);
        var p = $("<p>断开连接，请检查网络。。。</p>").css({
            fontSize: "30px",
            color: "#000",
            marginTop: "515px",
            marginLeft: "85px"
        }).appendTo(div1);
        var color;
        var setIntervals;

        //随机色
        function getRandomColor() {
            var ColorR = Math.floor(Math.random() * 255).toString(16);
            var ColorG = Math.floor(Math.random() * 255).toString(16);
            var ColorB = Math.floor(Math.random() * 255).toString(16);
            ColorR = 1 == ColorR.length ? '0' + ColorR : ColorR;
            ColorG = 1 == ColorG.length ? '0' + ColorG : ColorG;
            ColorB = 1 == ColorB.length ? '0' + ColorB : ColorB;
            return '#' + ColorR + ColorG + ColorB;
        }

        //断开连接
        setIntervals = setInterval(function () {
            div1.find("p").remove();
            color = getRandomColor();
            var p = $("<p>断开连接，请检查网络。。。</p>").css({
                fontSize: "30px",
                color: color,
                marginTop: "515px",
                marginLeft: "85px"
            }).appendTo(div1);
        }, 1000);
    } else if (open == 1) {

        //静态页面
        var divCont = $("").appendTo($("body"));

        //初始化页面
        var initializationTime = localStorage.getItem("initializationTime");
        //是否出动画页面
        var openAnimation = sessionStorage.getItem("openAnimation");
        if (openAnimation == null) {
            sessionStorage.setItem("openAnimation", "1");
        } else {
            sessionStorage.setItem("openAnimation", "0");
        }

        if (initializationTime == null) {
            //首次打开页面背景
            var data = new Date().getTime();
            localStorage.setItem("initializationTime", data);
            $("#M #cont").css({
                backgroundImage: 'url(./encryption/image/backgroundImg/1.jpg)'
            });
            $("#shop #banners div").eq(0).addClass('image_select').siblings().removeClass("image_select");
            localStorage.setItem("bag", "./encryption/image/backgroundImg/1.jpg");
            localStorage.setItem("eq", "0");
            localStorage.setItem("imgurl", "./encryption/image/dian.jpg");
            localStorage.setItem("bg6", "1");
            localStorage.setItem("times", "604800000");
            localStorage.setItem("k", "5000");
            localStorage.setItem("gold_key", "1000");
            localStorage.setItem("redPacketTime", "60");
            localStorage.setItem("VIP", "0");
            localStorage.setItem("practical_jie", "5000");
            localStorage.setItem("bank_cun", "0");
            localStorage.setItem("bank_interest", "0");
            localStorage.setItem("fh_card", "0");
            localStorage.setItem("interestTime", "5");
            localStorage.setItem("cw_img", "./encryption/image/pet/my.png");
            localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/66735/2018-04-23/texiao/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
            var iframe = localStorage.getItem('iframe');
            $("#iframe-wrap").append(iframe);
            localStorage.setItem("cw1", "0");
            localStorage.setItem("cw2", "0");
            localStorage.setItem("cw3", "0");
            localStorage.setItem("cw4", "0");
            localStorage.setItem("cw5", "0");
            localStorage.setItem("cw6", "0");
            localStorage.setItem("cw1_1", "0");
            localStorage.setItem("cw2_2", "0");
            localStorage.setItem("cw3_3", "0");
            localStorage.setItem("cw4_4", "0");
            localStorage.setItem("cw5_5", "0");
            localStorage.setItem("cw6_6", "0");
            localStorage.setItem("mtt", "0");
            localStorage.setItem("mlt", "0");
            localStorage.setItem("ma", "0");

        } else {
            //进来判断页面背景
            var bag = localStorage.getItem("bag");
            $("#M #cont").css({
                backgroundImage: 'url(' + bag + ')',
            });
            var eq = localStorage.getItem("eq");
            $("#shop #banners div").eq(eq).addClass('image_select').siblings().removeClass("image_select");
            var iframe = localStorage.getItem('iframe');
            $("#iframe-wrap").append(iframe);

        }
        //有网最开始（动画）的页面
        var openAnimation = sessionStorage.getItem("openAnimation");
        if (openAnimation == "1") {
            var initializeDiv = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(255,255,255,1)",
                top: "0",
                zIndex: "999999999999999",
                margin: "0 auto"
            }).appendTo($("#M"));
            var initializeDiv1 = $("<iframe frameborder=\"0\" scrolling=\"no\" src=\"./encryption/html/index2.html\" width=\"100%\" height=\"180px\"></iframe>\n" +
                "<div style=\"text-align:center;clear:both\"></div>").appendTo(initializeDiv);
            var initializeDivs = $("<div style='width: 1180px;margin: auto'></div>").appendTo(initializeDiv);
            var videoDiv = $("<video src='https://pic.ibaotu.com/00/34/36/19V888piCudb.mp4' autoplay='autoplay' loop='loop' width='800px' height='400px' style='float: left' id='video'></video>").appendTo(initializeDivs);
            var shuangDIv = $("<div style='width: 400px;height: 400px;float: left;position: relative;margin-left: -20px'><img src='./encryption/image/shuanglong.png' width='400px'height='400px' style='position: absolute' id='shuang'></div>").appendTo(initializeDivs);
            var countDovn_Div = $("<iframe frameborder=\"0\" scrolling=\"no\" src=\"./encryption/html/indexschedule.html\" width=\"210px\" height=\"210px\" style='position: absolute;left: 95px;top: 100px;border-radius: 50%' id='iframe_countDovn'></iframe>").appendTo(shuangDIv);
            var timer = setInterval(function () {
                var countDovn_Divs = $("<div style='position: absolute;left: 95px;top: 100px;border-radius: 50%;width: 210px;height: 210px;background-color: #FFFFFF;z-index: 9;overflow: hidden'><img src='./encryption/image/enter.jpg' width='210px;' height='210px' style='border-radius: 50%;margin-left: 0px;margin-top: -7px;cursor: pointer' id='entdiv' class='img-hover'></div>").appendTo(shuangDIv);
                $("#entdiv").click(function () {
                    initializeDiv.remove()
                });
                clearInterval(timer);
            }, 3000);
        }

        var key = localStorage.getItem("k");
        $(".key").html(key);
        var gold_key = localStorage.getItem("gold_key");
        $(".gold_key").html(gold_key);
        var time_s = localStorage.getItem("time_s");
        if (time_s == null) {
            $("#head .firstTime").html("欢迎您首次登陆,送您1000金币，5000银币").css("color", "#fff");
            prompt("500", "5000", true, "欢迎您首次登陆,送您1000金币，5000银币");
        } else {
            $(".firstTime").html(time_s);
        }
        var oDate = new Date();
        var y = oDate.getFullYear();
        var M = oDate.getMonth() + 1;
        parseInt(M) < 10 ? M = '0' + M : M = M;
        var d = oDate.getDate();
        parseInt(d) < 10 ? d = '0' + d : d = d;
        var h = oDate.getHours();
        parseInt(h) < 10 ? h = '0' + h : h = h;
        var m = oDate.getMinutes();
        parseInt(m) < 10 ? m = '0' + m : m = m;
        var s = oDate.getSeconds();
        parseInt(s) < 10 ? s = '0' + s : s = s;
        var time = y + '/' + M + '/' + d + '  ' + h + ':' + m + ':' + s;
        $(".lastTime").html(time);
        localStorage.setItem("time_s", time);

        //进入调用头像
        var imgurl = localStorage.getItem("imgurl");
        $("#files").css({
            backgroundImage: 'url(' + imgurl + ')'
        });

        //进入时宠物
        var cw_img = localStorage.getItem("cw_img");
        $(".pet img").attr("src", cw_img);

        //判断背景是否解锁成功
        var bg1 = localStorage.getItem("bg1");
        var bg2 = localStorage.getItem("bg2");
        var bg3 = localStorage.getItem("bg3");
        var bg4 = localStorage.getItem("bg4");
        var bg5 = localStorage.getItem("bg5");

        //判断上传图片是否解锁
        var bg6 = localStorage.getItem("bg6");

        //判断动态图片是否被解锁
        var bg7 = localStorage.getItem("bg7");
        var bg8 = localStorage.getItem("bg8");
        var bg9 = localStorage.getItem("bg9");
        var bg10 = localStorage.getItem("bg10");
        var bg11 = localStorage.getItem("bg11");

        if (bg1 == "0") {
            $("#shop #banners div").eq(3).find('img').attr("class", "img-hover");
            $("#shop #banners div").eq(3).find('p').remove();
        }
        if (bg2 == "0") {
            $("#shop #banners div").eq(4).find('img').attr("class", "img-hover");
            $("#shop #banners div").eq(4).find('p').remove();
        }
        if (bg3 == "0") {
            $("#shop #banners div").eq(5).find('img').attr("class", "img-hover");
            $("#shop #banners div").eq(5).find('p').remove();
        }
        if (bg4 == "0") {
            $("#shop #banners div").eq(6).find('img').attr("class", "img-hover");
            $("#shop #banners div").eq(6).find('p').remove();
        }
        if (bg5 == "0") {
            $("#shop #banners div").eq(7).find('img').attr("class", "img-hover");
            $("#shop #banners div").eq(7).find('p').remove();
        }
        if (bg6 == "0") {
            $("#shop #banners .on_file .shadow").remove();
            countDown();
            $("#shop #banners .on_file label .p2").after($("<span class=\"validity\">有效期倒计时： <span style=\"color: #d60000;font-size: 16px\"><span class=\"joind\">00</span>天<span class=\"joinh\">00</span>时<span class=\"joinm\">00</span>分<span class=\"joins\">00</span>秒</span>"));
        }
        if (bg7 == "0") {
            $("#swiper2 .slide2").eq(0).hide();
        }
        if (bg8 == "0") {
            $("#swiper2 .slide2").eq(1).hide();
        }
        if (bg9 == "0") {
            $("#swiper2 .slide2").eq(2).hide();
        }
        if (bg10 == "0") {
            $("#swiper2 .slide2").eq(3).hide();
        }
        if (bg11 == "0") {
            $("#swiper2 .slide2").eq(4).hide();
        }

        //  轮播图
        var swiper = new Swiper('#swiper1', {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: 'vertical',
            navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
            },
            speed: 500,//滑动时间
            preventInteractionOnTransition: true,//切换时滑动无效
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            autoplay: false,
            loop: true,//环路
        });

        //第二个轮播图
        var swiper2 = new Swiper('#swiper2', {
            autoplay: {
                delay: 5000,//自动切换时间
                stopOnLastSlide: true,//自动切换是否停留
                disableOnInteraction: false,//触碰是否停止
            },
            allowTouchMove: false,
            navigation: {
                prevEl: '.swiper-button-prev2',
                nextEl: '.swiper-button-next2',
            },
            loop: true,//环路
            effect: 'cube',
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 80,
                shadowScale: 0.9,
            }
        });

        //        足部轮播图
        var mySwiper = new Swiper('#foot_swiper', {
            autoplay: {
                delay: 3000,//自动切换时间
                stopOnLastSlide: true,//自动切换是否停留
                disableOnInteraction: true,//触碰是否停止
            },
            loop: true,//环路
            preventInteractionOnTransition: true,//切换时滑动无效
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
        });

        //    选中轮播图（切换游戏）
        $("#swiper1 .swiper-slide").click(function () {
            var that = $(this);
            confirm("350", "是否切换游戏？", function () {
                that.addClass('actives').siblings().removeClass('actives');
                $("#main .main").eq(that.attr('abc')).show().siblings().hide();
                var color = getRandomColor();
                $("#M #cont h1").css({
                    color: color,
                    fontFamily: "Adieresis"
                }).html(that.children().html())
            }, "是（√）", "否（×）", function () {
                prompt("500", "2000", false, "切换失败");
            });
        });

        //随机色
        function getRandomColor() {
            var ColorR = Math.floor(Math.random() * 255).toString(16);
            var ColorG = Math.floor(Math.random() * 255).toString(16);
            var ColorB = Math.floor(Math.random() * 255).toString(16);
            ColorR = 1 == ColorR.length ? '0' + ColorR : ColorR;
            ColorG = 1 == ColorG.length ? '0' + ColorG : ColorG;
            ColorB = 1 == ColorB.length ? '0' + ColorB : ColorB;
            return '#' + ColorR + ColorG + ColorB;
        }

        //商城背景切换
        $("#shop #banners").on("click", "div", function () {
            //是否解锁？
            var that = $(this);
            if ($(this).find('img').attr("class") == "img-hover grammaticalization") {
                confirm("350", "是否解锁该背景？", function () {
                    var key = localStorage.getItem("k");
                    if (key <= 0) {
                        prompt("500", "2000", false, "您的银币不足，请先兑换");
                    } else {
                        var keys = that.find('.keys').html();
                        if (key - keys >= 0) {
                            key = key - keys;
                            $(".key").html(key);
                            localStorage.setItem("k", key);
                            that.find('img').attr("class", "img-hover");
                            that.find('p').remove();
                            localStorage.setItem("eq", that.index());
                            that.addClass('image_select').siblings().removeClass("image_select");
                            var src = that.children().attr("src");
                            localStorage.setItem("bag", src);
                            $("#M #cont").css({
                                backgroundImage: 'url(' + src + ')',
                            });
                            prompt("500", "2000", true, "恭喜你获得新的皮肤");
                            silver("subtract", keys);
                            if (that.index() == "3") {
                                localStorage.setItem("bg1", "0");
                            } else if (that.index() == "4") {
                                localStorage.setItem("bg2", "0");
                            } else if (that.index() == "5") {
                                localStorage.setItem("bg3", "0");
                            } else if (that.index() == "6") {
                                localStorage.setItem("bg4", "0");
                            } else if (that.index() == "7") {
                                localStorage.setItem("bg5", "0");
                            }
                        } else {
                            prompt("500", "2000", false, "您的银币数量不足以解锁此皮肤");
                        }
                    }

                }, "是", "否", function () {
                    prompt("500", "2000", false, "很遗憾解锁新皮肤失败");
                });
            } else {
                //是否切换背景
                confirm("350", "是否切换背景皮肤？", function () {
                    localStorage.setItem("eq", that.index());
                    that.addClass('image_select').siblings().removeClass("image_select");
                    var src = that.children().attr("src");
                    localStorage.setItem("bag", src);
                    $("#M #cont").css({
                        backgroundImage: 'url(' + src + ')',
                    });
                    prompt("500", "2000", true, "切换新皮肤成功");
                }, "是", "否", function () {
                    prompt("500", "2000", false, "切换新皮肤失败");
                });
            }

        });

        // //    续费
        // var surplusTime=localStorage.getItem("times");
        // if(surplusTime <= 864000){
        //     confirm("350","是否续费？（3000金币/7天）",function () {
        //         $(".validity").remove()
        //         var surplusTimes=Number(surplusTime);
        //         surplusTimes=surplusTimes+604800000;
        //         localStorage.setItem("timess",surplusTimes);
        //         $("#shop #banners .on_file label .p2").after($("<span class=\"validity\">有效期倒计时： <span style=\"color: #d60000;font-size: 16px\"><span class=\"joind\"></span>天<span class=\"joinh\"></span>时<span class=\"joinm\"></span>分<span class=\"joins\"></span>秒</span>"));
        //         prompt("200","2000",true,"恭喜你续费成功");
        //         localStorage.setItem("surplus","1");
        //         countDown()
        //     },"是","否",function(){
        //         prompt("200","2000",false,"很遗憾续费失败");
        //     });
        // }

        //倒计时
        function countDown() {
            var setTimer = null;
            var chazhi = 0;
            // chazhi = 135 * 86400000;
            // if(surplus=="1"){
            //     var time=localStorage.getItem("timess");
            // }else{
            //     var time=localStorage.getItem("times");
            // }
            var time = localStorage.getItem("times");
            chazhi = time;
            //真实时间(注意月份需减掉1，否则时间会计算错误)
            //chazhi = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数
            //chazhi = (new Date(2018,8-1,6,6,6,6)) - (new Date());
            //执行函数部分
            countFunc(chazhi);
            setTimer = setInterval(function () {
                chazhi = chazhi - 1000;
                localStorage.setItem("times", chazhi);
                chazhi = localStorage.getItem("times");
                //倒计时结束时
                if (chazhi == "-1000") {
                    $("#shop .validity").remove();
                    $("#file_backgroundImg").after($("<span class=\"shadow\"><i class=\"iconfont icon-icon-lock-01\" style=\"color: gold\"></i><span style=\"margin-left: -180px;color: #FFFFFF\">3000<i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i>解锁</span></span>"))
                }
                countFunc(chazhi);
            }, 1000);

            function countFunc(leftTime) {
                if (leftTime >= 0) {
                    var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
                    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
                    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟
                    var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数
                    days = checkTime(days);
                    hours = checkTime(hours);
                    minutes = checkTime(minutes);
                    seconds = checkTime(seconds);
                    $(".joind").html(days);
                    $(".joinh").html(hours);
                    $(".joinm").html(minutes);
                    $(".joins").html(seconds);
                } else {
                    clearInterval(setTimer);
                    $(".joind").html("00");
                    $(".joinh").html("00");
                    $(".joinm").html("00");
                    $(".joins").html("00");
                }
            }

            function checkTime(i) { //将0-9的数字前面加上0，例1变为01
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
        }

        //解锁上传功能
        $("#shop #banners .on_file").on("click", " .shadow", function () {
            var that = $(this);
            confirm("350", "是否解锁自定义上传功能？", function () {
                var gold_key = localStorage.getItem("gold_key");
                if (gold_key <= 0) {
                    prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                } else {
                    if (gold_key - 3000 >= 0) {
                        gold_key = gold_key - 3000;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        localStorage.setItem("times", "604800000");
                        that.remove();
                        countDown();
                        $("#shop #banners .on_file label .p2").after($("<span class=\"validity\">有效期倒计时： <span style=\"color: #d60000;font-size: 16px\"><span class=\"joind\"></span>天<span class=\"joinh\"></span>时<span class=\"joinm\"></span>分<span class=\"joins\"></span>秒</span>"));
                        localStorage.setItem("bg6", "0");
                        prompt("500", "2000", true, "恭喜你解锁上传成功（有效期：7天）");
                        gold("subtract", 3000);
                    } else {
                        prompt("500", "2000", false, "您的金币数量不足以解锁此皮肤");
                    }
                }
            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾功能解锁失败");
            });
        });

        //图片上传
        $("#file_backgroundImg").on("change", function () {
            var that = this;
            confirm("350", "确定上传此图片？", function () {
                $("#add_div").remove();
                var upload = that.files[0];
                var resders = new FileReader();
                resders.readAsDataURL(upload);
                resders.onload = function (e) {
                    var div = $("<div id='add_div'></div>");
                    var img = $("<img class='img-hover addimg'/>").attr("src", this.result).appendTo(div);
                    var p = $("<p class=\"validity\">有效期： <span style=\"color: #d60000;font-size: 16px\">永久免费</span>").appendTo(div);
                    $("#banners").find('.last_img').after(div);
                };
                prompt("500", "2000", true, "图片上传成功");

            }, "是", "否", function () {
                prompt("500", "2000", false, "图片上传失败");
            });
        });

        //底部浮层
        $("#supernatant ul .suggest").hover(function () {
            $("#supernatant ul .suggest").css({
                backgroundColor: "#d60000",
                borderBottom: "1px solid #ffffff"
            });
            $("#supernatant ul .suggest p").show();
            $("#supernatant ul .suggest img").hide();
        }, function () {
            $("#supernatant ul .suggest").css({
                backgroundColor: "#e5e5e5",
                borderBottom: "1px solid #cccccc"
            });
            $("#supernatant ul .suggest p").hide();
            $("#supernatant ul .suggest img").show();
        });

        //微信（反馈意见）弹框
        $("#supernatant ul .suggest").click(function () {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                zIndex: "9999999999999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "300px",
                height: "300px",
                left: "50%",
                top: "50%",
                marginTop: "-150px",
                marginLeft: "-150px",
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                // e.preventDefault();
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>添加客服反馈（功能太难的我也不会）</h2>").css({
                width: "100%",
                height: "30px",
                backgroundColor: "#e9e9e9",
                borderRadius: "4px 4px 0px 0px",
                color: "#333",
                fontSize: "15px",
                lineHeight: "30px",
                textIndent: "10px",
                textAlign: "center"
            }).appendTo(div1);
            var img = $("<img src='./encryption/image/wx_code.jpg'>").css({
                width: "200px",
                height: "200px",
                marginTop: "20px",
                marginLeft: "50px"
            }).appendTo(div1);

            //        内部测试版代码
            var button = $(" <button class=\"add_gold\" style=\"margin-left: 50px;width: 200px;margin-top: 10px\" >内部测试版，点我加金币</button>").appendTo(div1);
            $(".add_gold").click(function () {
                var gold_key = localStorage.getItem("gold_key");
                var gold_keys = Number(gold_key);
                gold_key = gold_keys + 1000;
                if (gold_key > 100000) {
                    gold_key = 100000;
                    $(".add_gold").css({
                        cursor: "not-allowed"
                    }).attr("disabled", "disabled");
                    prompt("500", "2000", false, "别闹，测试要那么多钱干啥")
                }
                localStorage.setItem("gold_key", gold_key);
                $(".gold_key").html(gold_key);
                gold("add", 1000);
            });
        });

        //向上
        $("#supernatant ul .code2").hover(function () {
            $("#supernatant ul .code2").css({
                backgroundColor: "#d60000",
                borderBottom: "1px solid #ffffff"
            });
            $("#supernatant ul .code2 p").show();
            $("#supernatant ul .code2 .img1").hide()
        }, function () {
            $("#supernatant ul .code2").css({
                backgroundColor: "#e5e5e5",
                borderBottom: "1px solid #cccccc"
            });
            $("#supernatant ul .code2 p").hide();
            $("#supernatant ul .code2 .img1").show()
        });

        $("#supernatant ul .toTop").hover(function () {
            $("#supernatant ul .toTop").css({
                backgroundColor: "#d60000",
                borderBottom: "1px solid #ffffff"
            });
            $("#supernatant ul .toTop p").show();
            $("#supernatant ul .toTop img").hide();
        }, function () {
            $("#supernatant ul .toTop").css({
                backgroundColor: "#e5e5e5",
                borderBottom: "1px solid #cccccc"
            });
            $("#supernatant ul .toTop p").hide();
            $("#supernatant ul .toTop img").show();
        });

        //回到顶部
        $("#supernatant ul .toTop p").click(function () {
            if ($(window).scrollTop() == 0) {
                return
            } else {
                $('html , body').animate({scrollTop: 0}, 'slow');
            }
        });

        //宝箱功能
        //宝箱倒计时
        $("#redPacket img").after($("<p>点击领取</p>"));
        CountdownTime();

        function CountdownTime() {
            clearTimeout(test1);
            var redPacketTime = localStorage.getItem("redPacketTime");
            var test1 = null;
            if (redPacketTime >= 1) {
                redPacketTime -= 1;
                localStorage.setItem("redPacketTime", redPacketTime);
                redPacketTime = localStorage.getItem("redPacketTime");
                if (redPacketTime == 0) {
                    $("#redPacket p").remove();
                    $("#redPacket img").after($("<p>点击领取</p>"));
                    return
                }
                $("#redPacket p").remove();
                $("#redPacket img").after($("<p>领取倒计时：<span style=\"color: #d60000\" class=\"redPacket\">" + redPacketTime + "</span>S</p>"));
                test1 = setTimeout(function () {
                    CountdownTime();
                    clearTimeout(test1)
                }, 1000);
            }
        }

        //点击领取宝箱
        $("#redPacket").click(function () {
            if ($("#redPacket").find('p').html() == "点击领取") {
                var x = 999;
                var y = 10;
                var rand;
                rand = parseInt(Math.random() * (x - y + 1) + y);
                // if (rand == 1 || rand == 2 || rand == 3 || rand == 4 || rand == 5 || rand == 6 || rand == 7 || rand == 8 || rand == 9) {
                //     rand = "00" + rand
                // }
                addKey(rand);
                var key = localStorage.getItem("k");
                key = Number(rand) + Number(key);
                $(".key").html(key);
                localStorage.setItem("k", key);
                $("#redPacket p").remove();
                localStorage.setItem("redPacketTime", "300");
                CountdownTime();
            } else {
                prompt("500", "2000", false, "别闹，倒计时呢")
            }
        });

        //宝箱加银币效果
        function addKey(key) {
            var div = $("<div><h2 class='h2s'>恭喜你！！！</h2><p class='ps'>获得<span style='font-size: 30px;color: #d60000;margin: 8px'>" + key + "</span>枚银币</p></div>").css({
                width: "280px",
                height: "300px",
                position: "fixed",
                top: "50%",
                left: "50%",
                marginTop: "-140px",
                marginLeft: "-150px",
                backgroundImage: "url(./encryption/image/addKey.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                zIndex: "9999999999999999"
            }).slideToggle(5000, function () {
                div.remove()
            }).appendTo($("#M"));
            $(".h2s").css({
                marginLeft: "60px",
                marginTop: "60px",
                fontSize: "30px",
                color: "#d60000",
            });
            $(".ps").css({
                marginLeft: "60px",
                marginTop: "30px",
                fontSize: "20px",
                color: "#000000",
            })
        }

        //加/减金币效果
        function gold(str, number) {
            if (str == "add") {

            } else if (str == "subtract") {
                var div = $("<div><p style='font-size: 20px;color: gold;text-align: center'>金币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold;vertical-align: center\"></i><span style='color: #FFFFFF;margin-left: -5px'>-" + number + "</span>个</p></div>").css({
                    width: "300px",
                    height: "50px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    marginTop: "-25px",
                    marginLeft: "-150px",
                    zIndex: "9999999999999999"
                }).animate({marginTop: "100px", opacity: '0',}, 2000, function () {
                    div.remove()
                }).appendTo($("#M"));
            }
        };

        //加/减银币效果
        function silver(str, number) {
            if (str == "add") {
                var div = $("<div><p style='font-size: 20px;color: silver;text-align: center'>银币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver;vertical-align: center\"></i><span style='color: #d60000;margin-left: -5px'>+" + number + "</span>个</p></div>").css({
                    width: "300px",
                    height: "50px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    marginTop: "-25px",
                    marginLeft: "-150px",
                    zIndex: "9999999999999999"
                }).animate({marginTop: "-100px", opacity: '0',}, 2000, function () {
                    div.remove()
                }).appendTo($("#M"));
            } else if (str == "subtract") {
                var div = $("<div><p style='font-size: 20px;color: silver;text-align: center'>银币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver;vertical-align: center\"></i><span style='color: #FFFFFF;margin-left: -5px'>-" + number + "</span>个</p></div>").css({
                    width: "300px",
                    height: "50px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    marginTop: "-25px",
                    marginLeft: "-150px",
                    zIndex: "9999999999999999"
                }).animate({marginTop: "100px", opacity: '0',}, 2000, function () {
                    div.remove()
                }).appendTo($("#M"));
            }
        }

        //金币兑换功能(兑换银币)
        $("#shop .icon-jia12").click(function () {
            conversionSilver()
        });

        //金币兑换功能(兑换金币)
        $("#shop .icon-jia11").click(function () {
            conversionGold()
        });

        //金币兑换功能
        function conversionGold() {
            var rands
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "9999999999999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "500px",
                height: "300px",
                left: "50%",
                top: "50%",
                marginTop: "-150px",
                marginLeft: "-250px",
                // backgroundColor: "rgba(255,255,255,1)",
                backgroundImage: "url('./encryption/image/log.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                // e.preventDefault();
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>兑金币</h2>").css({
                width: "100%",
                height: "30px",
                backgroundColor: "#e9e9e9",
                borderRadius: "4px 4px 0px 0px",
                color: "#333",
                fontSize: "15px",
                lineHeight: "30px",
                textIndent: "10px",
                textAlign: "center"
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "270px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var divRight = $("<div></div>").css({
                width: "300px",
                height: "270px",
                float: "right",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var p2 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>兑换比率：<span style='color: gold'>1</span>金币=<span style='color:silver'>10</span>银币</p>").appendTo(divLeft);
            var p3 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>获取途径：</p>").appendTo(divLeft);
            var p4 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>1.联系客服充值</p>").appendTo(divLeft);
            var p5 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>2.使用银币兑换</p>").appendTo(divLeft);
            var p6 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>3.通过开箱子获得</p>").appendTo(divLeft);
            var silverP = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>我的银币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver\" title=\"银币\"></i>：<span class='silverP'></span></p>").appendTo(divRight);
            var label = $("<lable for='silverNumber' style='margin-left: 30px;margin-top: 20px;display: inline-block'>兑换数量：<input id='silverNumber' type='number' placeholder='例：10' step='10' style='font-size: 16px;width: 150px;height: 30px;text-indent:10px'></lable>").appendTo(divRight);
            var p = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block'>获得金币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i>：<span class='goldNumber' style='margin-left: 10px'>0</span></p>").appendTo(divRight);
            var p1 = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;color: #d60000;font-size: 14px'>（注：兑换数目必须为10的倍数）</p>").appendTo(divRight);
            var button = $("<button class='determine'>兑换</button>").css({
                display: "inline-block",
                marginLeft: "30px",
                width: "240px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).appendTo(divRight);
            var key = localStorage.getItem("k");
            $(".silverP").html(key);

            //正则判断是否为数字
            function checkUser(str) {
                var re = /^(0|[1-9]\d*0)$/;
                if (re.test(str)) {

                } else {
                    $("#silverNumber").attr('placeholder', '必须为10的倍数');
                    $("#silverNumber").val("");
                    $(".goldNumber").html("");
                }
            }

            $("#silverNumber").bind('input propertychange', function (e) {
                var rand = $("#silverNumber").val();
                var key = localStorage.getItem("k");
                var keys = Number(key);
                $(".silverP").html(keys);
                if (rand == 1 || rand == 2 || rand == 3 || rand == 4 || rand == 5 || rand == 6 || rand == 7 || rand == 8 || rand == 9) {
                    rand = rand * 10
                }
                if (rand >= keys) {
                    rand = keys
                }
                $("#silverNumber").val(rand);
                rands = rand / 10;
                $(".goldNumber").html(rands);
                e.preventDefault();
                checkUser($("#silverNumber").val());
            });
            $("#silverNumber").bind("blur", function (e) {
                if ($("#silverNumber").val() == "") {
                    $("#silverNumber").val("0")
                } else {
                    e.preventDefault();
                    checkUser($("#silverNumber").val())
                }
            });

            //兑换
            $(".determine").click(function () {
                if ($("#silverNumber").val() == "" || $("#silverNumber").val() == 0) {
                    prompt("500", "2000", false, "请填入兑换数量")
                } else {
                    div.remove();
                    confirm("350", "是否兑换" + rands + "金币", function () {
                        var key = localStorage.getItem("k");
                        var keys = Number(rands * 10);
                        key = key - keys;
                        localStorage.setItem("k", key);
                        $(".key").html(key);
                        var gold_key = localStorage.getItem("gold_key");
                        var gold_keys = Number(gold_key);
                        gold_key = gold_keys + rands;
                        localStorage.setItem("gold_key", gold_key);
                        $(".gold_key").html(gold_key);
                        prompt("500", "2000", true, "恭喜你，兑换成功" + rands + "枚金币")
                    }, "是", "否", function () {
                        prompt("500", "2000", false, "很遗憾，兑换失败")

                    });
                }
            })
        }

        //银币兑换功能
        function conversionSilver() {
            var rands;
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "500px",
                height: "300px",
                left: "50%",
                top: "50%",
                marginTop: "-150px",
                marginLeft: "-250px",
                // backgroundColor: "rgba(255,255,255,1)",
                backgroundImage: "url('./encryption/image/log.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                // e.preventDefault();
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>兑银币</h2>").css({
                width: "100%",
                height: "30px",
                backgroundColor: "#e9e9e9",
                borderRadius: "4px 4px 0px 0px",
                color: "#333",
                fontSize: "15px",
                lineHeight: "30px",
                textIndent: "10px",
                textAlign: "center"
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "270px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var divRight = $("<div></div>").css({
                width: "300px",
                height: "270px",
                float: "right",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var p2 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>兑换比率：<span style='color: gold'>1</span>金币=<span style='color:silver'>10</span>银币</p>").appendTo(divLeft);
            var p3 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>获取途径：</p>").appendTo(divLeft);
            var p4 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>1.使用金币兑换</p>").appendTo(divLeft);
            var p5 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>2.通过开宝箱获得</p>").appendTo(divLeft);
            var p6 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>3.通过游戏闯关获得</p>").appendTo(divLeft);
            var goldP = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>我的金币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i>：<span class='goldP'></span></p>").appendTo(divRight);
            var label = $("<lable for='goldNumber' style='margin-left: 30px;margin-top: 20px;display: inline-block'>兑换数量：<input id='goldNumber' type='number' placeholder='例：1' step='1' style='font-size: 16px;width: 150px;height: 30px;text-indent:10px'></lable>").appendTo(divRight);
            var p = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block'>获得银币<i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver\" title=\"银币\"></i>：<span class='silverNumber' style='margin-left: 10px'>0</span></p>").appendTo(divRight);
            var p1 = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;color: #d60000;font-size: 14px'>（注：兑换数目必须为1的倍数）</p>").appendTo(divRight);
            var button = $("<button class='determines'>兑换</button>").css({
                display: "inline-block",
                marginLeft: "30px",
                width: "240px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).appendTo(divRight);
            var gold_key = localStorage.getItem("gold_key");
            $(".goldP").html(gold_key);

            //正则判断是否为正整数
            function checkUser(str) {
                var re = /^[1-9]\d*$/;
                if (re.test(str)) {

                } else {
                    $("#goldNumber").attr('placeholder', '必须为1的倍数');
                    $("#goldNumber").val("");
                    $(".silverNumber").html("0");
                }
            }

            $("#goldNumber").bind('input propertychange', function (e) {
                var rand = $("#goldNumber").val();
                var gold_key = localStorage.getItem("gold_key");
                var gold_keys = Number(gold_key);
                if (rand >= gold_keys) {
                    rand = gold_keys
                }
                $("#goldNumber").val(rand);
                rands = rand * 10;
                $(".silverNumber").html(rands);
                e.preventDefault();
                checkUser($("#goldNumber").val());
            });

            //兑换
            $(".determines").click(function () {
                if ($("#goldNumber").val() == "" || $("#goldNumber").val() == 0) {
                    prompt("500", "2000", false, "请填入兑换数量")
                } else {
                    div.remove();
                    confirm("350", "是否兑换" + rands + "银币", function () {
                        var key = localStorage.getItem("k");
                        var keys = Number(key);
                        key = rands + keys;
                        localStorage.setItem("k", key);
                        $(".key").html(key);
                        var gold_key = localStorage.getItem("gold_key");
                        var gold_keys = Number(gold_key);
                        rands = rands / 10;
                        gold_key = gold_keys - rands;
                        localStorage.setItem("gold_key", gold_key);
                        $(".gold_key").html(gold_key);
                        prompt("500", "2000", true, "恭喜你，兑换成功" + rands * 10 + "枚银币")
                    }, "是", "否", function () {
                        prompt("500", "2000", false, "很遗憾，兑换失败")

                    });
                }
            })
        }

        //解锁动态图
        $("#swiper2 .slide2").click(function () {
            var thats = $(this);
            confirm("350", "是否解锁此背景？", function () {
                var money = thats.find('span').html();
                var str = thats.attr("abc");
                var gold_key = localStorage.getItem("gold_key");
                if (gold_key <= 0) {
                    prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                } else {
                    if (gold_key - money >= 0) {
                        gold_key = gold_key - money;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        thats.hide();
                        prompt("500", "2000", true, "恭喜你，解锁成功");
                        gold("subtract", money);
                        if (str == "1") {
                            localStorage.setItem("bg7", "0");
                        } else if (str == "2") {
                            localStorage.setItem("bg8", "0");
                        } else if (str == "3") {
                            localStorage.setItem("bg9", "0");
                        } else if (str == "4") {
                            localStorage.setItem("bg10", "0");
                        } else if (str == "5") {
                            localStorage.setItem("bg11", "0");
                        }
                        ;
                    } else {
                        prompt("500", "2000", false, "您的金币数量不足以解锁此皮肤");
                    }
                }
            }, "确定√", "取消×", function () {
                prompt("500", "2000", false, "很遗憾，解锁失败")
            });
        });

        //动态图切换
        $("#swiper2 .slide1 img").click(function () {
            var that = $(this).parent();
            confirm("350", "是否此背景更换？", function () {
                if (that.index() == 1 || that.index() == 7) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/66735/2018-04-23/texiao/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/66735/2018-04-23/texiao/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");

                } else if (that.index() == 2) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/916994/2017-12-08/html5-webgl-galaxy_(1)/index.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/916994/2017-12-08/html5-webgl-galaxy_(1)/index.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");

                } else if (that.index() == 3) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1/2017-11-15/21/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1/2017-11-15/21/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");

                } else if (that.index() == 4) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1/2017-09-29/h/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1/2017-09-29/h/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");

                } else if (that.index() == 5) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1324218/2018-08-07/jz/demo.html\" frameborder=\"0\"  width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/1324218/2018-08-07/jz/demo.html\" frameborder=\"0\"  width=\"1180px\" height=\"650px\"></iframe>");

                } else if (that.index() == 6 || that.index() == 0) {
                    $("#iframe-wrap").find('iframe').remove();
                    $("#iframe-wrap").append("<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/11/2017-05-19/黑洞/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");
                    localStorage.setItem("iframe", "<iframe id=\"iframe\" src=\"http://www.17sucai.com/preview/11/2017-05-19/黑洞/demo.html\" frameborder=\"0\" width=\"1180px\" height=\"650px\"></iframe>");

                }
                prompt("500", "2000", true, "恭喜你，更换成功")
            }, "确定√", "取消×", function () {
                prompt("500", "2000", false, "很遗憾，更换失败")
            });
        });

        //炫酷时钟
        $("#coolClock").click(function () {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $(" <iframe frameborder=\"0\" scrolling=\"no\" src=\"./encryption/html/indexTime.html\" width=\"800\" height=\"400\"></iframe>").css({
                position: "absolute",
                left: "50%",
                top: "50%",
                marginTop: "-200px",
                marginLeft: "-400px",
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
        });

        //银行系统
        var bank_cuncun
        $(".bank").click(function () {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "500px",
                height: "500px",
                left: "50%",
                top: "50%",
                marginTop: "-250px",
                marginLeft: "-250px",
                backgroundImage: "url('./encryption/image/bank.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "0 30px",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>银行系统</h2>").css({
                width: "100%",
                height: "50px",
                backgroundColor: "#e9e9e9",
                borderRadius: "4px 4px 0px 0px",
                color: "#333",
                fontSize: "25px",
                lineHeight: "50px",
                textIndent: "10px",
                textAlign: "center"
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "450px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var divRight = $("<div></div>").css({
                width: "300px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".8"
            }).appendTo(div1);
            var p2 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>兑换比率：<span style='color:silver'>1</span>信用度=<span style='color: gold'>1</span>金币</p>").appendTo(divLeft);
            var p3 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>银行条例：</p>").appendTo(divLeft);
            var p4 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>1.借款金额受信用额度影响。</p>").appendTo(divLeft);
            var p5 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>2.信用等级受信用额度影响。</p>").appendTo(divLeft);
            var p6 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px;line-height: 24px'>3. 5分钟利率1%（即100金币5分钟获得1银币,100金币起算）。</p>").appendTo(divLeft);
            var p7 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>4.有借款时无法存款且无法购买和升级VIP。</p>").appendTo(divLeft);
            var p8 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>5.借款金额受VIP影响。</p>").appendTo(divLeft);
            var p10 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>6.还款金额受VIP影响（无VIP时100金币/次）。</p>").appendTo(divLeft);
            var p11 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 12px'>7.每次最多存取100000。</p>").appendTo(divLeft);
            var p9 = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>信用额度：<span style='font-size: 18px;color: gold;font-weight: 600;'><span class='practical' style='color: gold'></span>（vip加成<span class='vip_add'style='color: #d60000'>0</span>）</span></p>").appendTo(divRight);
            var button1 = $("<button>借款</button>").css({
                display: "inline-block",
                marginLeft: "20px",
                width: "120px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).click(function () {
                var practical_jie = localStorage.getItem("practical_jie");
                practical_jie = Number(practical_jie);
                $(".practical").html(practical_jie);
                confirm("350", "确定要借款(" + practical_jie + ")金币吗？", function () {
                    if (practical_jie == 0) {
                        prompt1("500", "2000", false, "您的借款余额不足,请先还款")
                    } else {
                        var gold_key = localStorage.getItem("gold_key");
                        gold_key = Number(gold_key);
                        gold_key = gold_key + practical_jie;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        localStorage.setItem("practical_jie", "0");
                        var practical_jie_yu = localStorage.getItem("practical_jie");
                        $(".practical").html(practical_jie_yu);
                        $(".vip_add").html("0");
                    }
                }, "确定", "取消", function () {
                    prompt1("500", "2000", false, "很遗憾借款失败")
                });
            }).appendTo(divRight);
            var button2 = $("<button>还款</button>").css({
                display: "inline-block",
                marginLeft: "20px",
                width: "120px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).click(function () {
                var practical_jie = localStorage.getItem("practical_jie");
                practical_jie = Number(practical_jie);
                var vip_huan;
                var vip_grade = localStorage.getItem("VIP");
                if (vip_grade == 0) {
                    //    vip额度加成
                    $(".practical").html("5000");
                    $(".vip_add").html("0");
                    vip_huan = Number(5100);
                } else if (vip_grade == 1) {
                    //    vip额度加成
                    $(".practical").html("5250");
                    $(".vip_add").html("250");
                    vip_huan = Number(5345);
                } else if (vip_grade == 2) {
                    //    vip额度加成
                    $(".practical").html("5500");
                    $(".vip_add").html("500");
                    vip_huan = Number(5590);
                } else if (vip_grade == 3) {
                    //    vip额度加成
                    $(".practical").html("5750");
                    $(".vip_add").html("750");
                    vip_huan = Number(5835);
                } else if (vip_grade == 4) {
                    //    vip额度加成
                    vip_huan = Number(6080);
                    $(".practical").html("6000");
                    $(".vip_add").html("1000");
                } else if (vip_grade == 5) {
                    //    vip额度加成
                    vip_huan = Number(6325);
                    $(".vip_add").html("1250");
                    $(".practical").html("6250");
                } else if (vip_grade == 6) {
                    //    vip额度加成
                    vip_huan = Number(7550);
                    $(".vip_add").html("2500");
                    $(".practical").html("7500");
                }
                var practical_huan = vip_huan;
                confirm("350", "确定要还款（" + practical_huan + "）吗？", function () {
                    if (practical_jie !== 0) {
                        prompt("500", "2000", false, "您没借钱，不用还款");
                    } else {
                        var gold_key = localStorage.getItem("gold_key");
                        if (gold_key <= 0) {
                            localStorage.setItem("practical_jie", "0");
                            $(".practical").html("0");
                            $(".vip_add").html("0");
                            prompt("500", "2000", false, "您的金币余额不足，不能还款");
                        } else {
                            if (gold_key - practical_huan >= 0) {
                                gold_key = gold_key - practical_huan;
                                $(".gold_key").html(gold_key);
                                localStorage.setItem("gold_key", gold_key);
                                if (vip_grade == 0) {
                                    localStorage.setItem("practical_jie", "5000")
                                } else if (vip_grade == 1) {
                                    localStorage.setItem("practical_jie", "5250")
                                } else if (vip_grade == 2) {
                                    localStorage.setItem("practical_jie", "5500")
                                } else if (vip_grade == 3) {
                                    localStorage.setItem("practical_jie", "5750")
                                } else if (vip_grade == 4) {
                                    localStorage.setItem("practical_jie", "6000")
                                } else if (vip_grade == 5) {
                                    localStorage.setItem("practical_jie", "6250")
                                } else if (vip_grade == 6) {
                                    localStorage.setItem("practical_jie", "7500")
                                }
                                prompt("500", "2000", true, "恭喜你还款成功。");
                            } else {
                                if (practical_jie !== 0) {
                                    prompt("500", "2000", false, "您没借钱，不用还款");
                                } else {
                                    $(".practical").html("0");
                                    $(".vip_add").html("0");
                                    prompt("500", "2000", false, "您的金币数量不足以还款成功。");
                                }

                            }
                        }
                    }
                }, "确定", "取消", function () {
                    if (practical_jie !== 0) {
                        prompt("500", "2000", false, "您没借钱，不用还款");
                    } else {
                        $(".practical").html("0");
                        $(".vip_add").html("0");
                        prompt("500", "2000", false, "很遗憾，还款失败。");
                    }
                });
            }).appendTo(divRight);
            var pn = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>银行存款：<span style='font-size: 18px;color: gold;font-weight: 600;'><span class='bank_cun' style='color: gold'></span> <i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i></p>").appendTo(divRight);
            var bank_cun = localStorage.getItem("bank_cun");
            bank_cun = Number(bank_cun);
            $(".bank_cun").html(bank_cun);
            var label = $("<lable for='goldNumber_huan' style='margin-left: 30px;margin-top: 20px;display: inline-block'>存取数量：<input id='goldNumber_huan' type='number' placeholder='例：1' step='1' style='font-size: 16px;width: 150px;height: 30px;text-indent:10px'></lable>").appendTo(divRight);

            //正则判断是否为正整数
            function checkUser(str) {
                var re = /^[1-9]\d*$/;
                if (re.test(str)) {

                } else {
                    $("#goldNumber_huan").attr('placeholder', '必须为1的倍数');
                    $("#goldNumber_huan").val("");

                }
            }

            $("#goldNumber_huan").bind('input propertychange', function (e) {
                var rand_band = $("#goldNumber_huan").val();
                rand_band = Number(rand_band);
                if (rand_band >= 100000) {
                    rand_band = 100000
                }
                $("#goldNumber_huan").val(rand_band);
                checkUser($("#goldNumber_huan").val());
            });
            var button3 = $("<button>存款</button>").css({
                display: "inline-block",
                marginLeft: "20px",
                width: "120px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).click(function () {
                var practical_jie = localStorage.getItem("practical_jie");
                practical_jie = Number(practical_jie);
                //存入金币
                var gold_key = localStorage.getItem("gold_key");
                gold_key = Number(gold_key);
                var bank_into = $("#goldNumber_huan").val();
                bank_into = Number(bank_into);
                if (bank_into >= gold_key) {
                    bank_into = gold_key
                }
                confirm("350", "是否存入（" + bank_into + "金币）？", function () {
                    if (practical_jie !== 0) {
                        $("#goldNumber_huan").val("");
                        var bank_cun = $(".bank_cun").html();
                        bank_cun = Number(bank_cun);
                        $(".bank_cun").html(bank_into + bank_cun);
                        localStorage.setItem("bank_cun", bank_into + bank_cun);
                        gold_key = gold_key - bank_into;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                    } else {
                        prompt("500", "2000", false, "别闹，请先还清借款。");
                    }
                }, "是", "否", function () {
                    prompt("500", "2000", false, "很遗憾，存款失败。");
                    $("#goldNumber_huan").val("");
                });

            }).appendTo(divRight);

            var button4 = $("<button>取款</button>").css({
                display: "inline-block",
                marginLeft: "20px",
                width: "120px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).click(function () {
                //取出金币
                var gold_key = localStorage.getItem("gold_key");
                gold_key = Number(gold_key);
                var bank_cun_m = $(".bank_cun").html();
                bank_cun_m = Number(bank_cun_m);
                var bank_out = $("#goldNumber_huan").val();
                bank_out = Number(bank_out);
                if (bank_out >= bank_cun_m) {
                    bank_out = bank_cun_m
                }
                confirm("350", "是否取出（" + bank_out + "金币）？", function () {
                    $(".bank_cun").html(bank_cun_m - bank_out);
                    localStorage.setItem("bank_cun", bank_cun_m - bank_out);
                    gold_key = gold_key + bank_out;
                    $(".gold_key").html(gold_key);
                    localStorage.setItem("gold_key", gold_key);
                    $("#goldNumber_huan").val("");
                }, "是", "否", function () {
                    prompt("500", "2000", false, "很遗憾，存款失败。");
                    $("#goldNumber_huan").val("");
                });
            }).appendTo(divRight);
            var ps = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>银行利息：<span style='font-size: 18px;color: silver;font-weight: 600;'><span class='bank_interest' style='color: silver'></span> <i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver;vertical-align: center\"></i></p>").appendTo(divRight);
            // var ptime = $("<p style='margin-left: 30px;margin-top: 5px;font-size: 12px;color: #d60000'>（生利倒计时：<span style='font-size: 12px;font-weight: 600;' id='interestTime'></span> S)</p>").appendTo(divRight);
            var button = $("<button class='determines_huan'>提取利息</button>").css({
                display: "inline-block",
                marginLeft: "20px",
                width: "260px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                cursor: "pointer"
            }).click(function () {
                confirm("350", "是否提取利息？", function () {
                    var key = localStorage.getItem("k");
                    key = Number(key);
                    var bank_interest = localStorage.getItem("bank_interest");
                    bank_interest = Number(bank_interest);
                    key = key + bank_interest;
                    $(".key").html(key);
                    $(".bank_interest").html(0);
                    localStorage.setItem("bank_interest", "0");
                    localStorage.setItem("k", key);

                }, "是", "否", function () {
                    prompt("500", "2000", false, "很遗憾，提取利息失败")
                });
            }).appendTo(divRight);
            var bank_interest = localStorage.getItem("bank_interest");
            $(".bank_interest").html(bank_interest);
            if ($(".bank_cun").html() >= 100) {
                var bank_cun_interest = Math.floor(Number($(".bank_cun").html()) * 0.01);
                localStorage.setItem("bank_cun_interest", bank_cun_interest);
            }
            //银行初始化
            var vip_grade = localStorage.getItem("VIP");
            var practical_jie = localStorage.getItem("practical_jie");
            practical_jie = Number(practical_jie);
            if (practical_jie == 0) {
                $(".practical").html(practical_jie);
                return
            } else {
                if (vip_grade == 0) {
                    //    vip额度加成
                    $(".vip_add").html("0");
                    $(".practical").html(practical_jie);
                } else if (vip_grade == 1) {
                    //    vip额度加成
                    $(".vip_add").html("250");
                    $(".practical").html("5250");
                    localStorage.setItem("practical_jie", "5250")
                } else if (vip_grade == 2) {
                    //    vip额度加成
                    $(".vip_add").html("500");
                    $(".practical").html("5500");
                    localStorage.setItem("practical_jie", "5500")
                } else if (vip_grade == 3) {
                    //    vip额度加成
                    $(".vip_add").html("750");
                    $(".practical").html("5750");
                    localStorage.setItem("practical_jie", "5750")
                } else if (vip_grade == 4) {
                    //    vip额度加成
                    $(".vip_add").html("1000");
                    $(".practical").html("6000");
                    localStorage.setItem("practical_jie", "6000")
                } else if (vip_grade == 5) {
                    //    vip额度加成
                    $(".vip_add").html("1250");
                    $(".practical").html("6250");
                    localStorage.setItem("practical_jie", "6250")
                } else if (vip_grade == 6) {
                    //    vip额度加成
                    $(".vip_add").html("2500");
                    $(".practical").html("7500");
                    localStorage.setItem("practical_jie", "7500")
                }
            }
        });

        //银行利息
        bankDownTime();

        //银行利息(倒计时)
        function bankDownTime() {
            clearTimeout(test1);
            var test1 = null;
            var interestTime = localStorage.getItem("interestTime");
            if (interestTime >= 1) {
                interestTime -= 1;
                localStorage.setItem("interestTime", interestTime);
                interestTime = localStorage.getItem("interestTime");
                if (interestTime == 0) {
                    localStorage.setItem("interestTime", "300");
                    var bank_cun_interest1 = localStorage.getItem("bank_interest");
                    bank_cun_interest1 = Number(bank_cun_interest1);
                    var bank_cun_interest = localStorage.getItem("bank_cun_interest");
                    bank_cun_interest = Number(bank_cun_interest);
                    var bank_cun_interest2 = bank_cun_interest + bank_cun_interest1;
                    localStorage.setItem("bank_interest", bank_cun_interest2);
                    $(".bank_interest").html(bank_cun_interest2);
                    bankDownTime();
                    return
                }
                $("#interestTime").html(interestTime);
                test1 = setTimeout(function () {
                    bankDownTime();
                    clearTimeout(test1)
                }, 1000);
            }
        }

        //VIP系统（点击购买VIP）
        $("#banners_vip div").click(function () {
            var that = $(this);
            var subtractVip = $(this).find('span').html();
            var vipClass = localStorage.getItem("VIP");
            confirm("350", "是否购买此vip卡？", function () {
                var practical_jie = localStorage.getItem("practical_jie");
                practical_jie = Number(practical_jie);
                if (practical_jie == 0) {
                    prompt("500", "2000", false, "很遗憾，请先还清欠款才能升级或购买vip")
                } else {
                    if (vipClass >= that.index() + 1) {
                        prompt("500", "2000", false, "别闹！您所拥有的VIP等级高");
                    } else {
                        var gold_key = localStorage.getItem("gold_key");
                        if (gold_key <= 0) {
                            prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                        } else {
                            if (gold_key - subtractVip >= 0) {
                                gold_key = gold_key - subtractVip;
                                $(".gold_key").html(gold_key);
                                localStorage.setItem("gold_key", gold_key);
                                localStorage.setItem("VIP", that.index() + 1);
                                gold("subtract", subtractVip)
                            } else {
                                prompt("500", "2000", false, "您的金币数量不足以解锁此VIP ");
                            }
                        }
                    }
                }
            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾此VIP卡功能解锁失败");
            });
        });

        //VIP系统（VIP展示区及功能简介）
        $(".vip").click(function () {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "500px",
                height: "500px",
                left: "50%",
                top: "50%",
                marginTop: "-250px",
                marginLeft: "-250px",
                backgroundImage: "url('./encryption/image/network.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "0 30px",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>VIP系统</h2>").css({
                width: "100%",
                height: "50px",
                backgroundColor: "#ddd",
                borderRadius: "4px 4px 0px 0px",
                color: "#000",
                fontSize: "25px",
                lineHeight: "50px",
                textIndent: "10px",
                textAlign: "center",
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "450px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                opacity: ".9"
            }).appendTo(div1);
            var divRight = $("<div></div>").css({
                width: "300px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".9"
            }).appendTo(div1);
            var p3 = $("<p style='margin-left: 20px;margin-top: 20px;display: inline-block;font-size: 14px'>VIP特权：</p>").appendTo(divLeft);
            var p4 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>1.等级越高获得金币越多。</p>").appendTo(divLeft);
            var p6 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px;line-height: 24px'>2. 可以提升借款金额。</p>").appendTo(divLeft);
            var p7 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>3.可以购买对应宠物。</p>").appendTo(divLeft);
            var p8 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>4.部分游戏免费畅玩。</p>").appendTo(divLeft);
            var p5 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>5.金币加成：青铜vip+10%， 白银vip+20%， 黄金vip+30%， 白金vip+40%， 钻石vip+50%， 至尊vip+100%。</p>").appendTo(divLeft);
            var p15 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>6.借款金额加成：青铜vip+5%， 白银vip+10%， 黄金vip+15%， 白金vip+20%， 钻石vip+25%， 至尊vip+50%。</p>").appendTo(divLeft);
            var p15 = $("<p style='margin-left: 20px;margin-top: 15px;display: inline-block;font-size: 12px'>7.还款金额减少：青铜vip：5%， 白银vip：10%， 黄金vip：15%， 白金vip：20%， 钻石vip：25%， 至尊vip：50%。</p>").appendTo(divLeft);
            var p9 = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;font-size: 16px'>我的会员卡:&nbsp;&nbsp;<span class='vip_ka'>普通卡</span></p>").appendTo(divRight);
            var img = $("<div class='img_vip_div' style='border: 2px solid;margin-left: 3px;margin-top: 20px; width: 290px;height: 168px;background: #000000'><img class='vip_img' src='./encryption/image/vip/0.png'></div>").appendTo(divRight);
            var p = $("<p style='margin-left: 30px;margin-top: 20px;display: inline-block;width: 200px'>我的特权</p>").appendTo(divRight);
            var p1 = $("<p style='margin-left: 30px;margin-top: 5px;font-size: 12px'>1.游戏金币加成 + <span style='color: #d60000' class='vip_1'>10%</span></p>").appendTo(divRight);
            var p2 = $("<p style='margin-left: 30px;margin-top: 5px;font-size: 12px'>2.借款金额加成 + <span style='color: #d60000' class='vip_2'>5%</span></p>").appendTo(divRight);
            var p10 = $("<p style='margin-left: 30px;margin-top: 5px;font-size: 12px'>3.可解锁的宠物：<span style='color: gold' class='vip_3'>青龙</span></p>").appendTo(divRight);
            var p11 = $("<p style='margin-left: 30px;margin-top: 5px;font-size: 12px'>4.可免费的游戏：<span class='vip_4'>五子棋</span></p>").appendTo(divRight);
            var button = $("<a class='determines'>升 级</a>").css({
                display: "inline-block",
                marginLeft: "30px",
                width: "240px",
                marginTop: "20px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer"
            }).click(function () {
                div.remove()
            }).attr("href", "#vips").appendTo(divRight);

            var vip_grade = localStorage.getItem("VIP");
            if (vip_grade == 0) {
                $(".vip_1").html("0%");
                $(".vip_2").html("0%");
                $(".vip_3").html("无");
                $(".vip_4").html("无");
                localStorage.setItem("practical_jie", "5000")


            } else if (vip_grade == 1) {
                $(".vip_ka").html("青铜vip卡").css({
                    color: "#8C7853"
                });
                $(".vip_img").attr("src", "./encryption/image/vip/1.png");
                $(".vip_1").html("10%");
                $(".vip_2").html("5%");
                $(".vip_3").html("麒麟");
                $(".vip_4").html("无");
                //    vip额度加成
                $(".vip_add").html("250");
                localStorage.setItem("practical_jie", "5250")
            } else if (vip_grade == 2) {
                $(".vip_ka").html("白银vip卡").css({
                    color: "#c0c0c0",
                    opacity: ".5"
                });
                $(".vip_img").attr("src", "./encryption/image/vip/2.png");
                $(".vip_1").html("20%");
                $(".vip_2").html("10%");
                $(".vip_3").html("麒麟，凤凰");
                $(".vip_4").html("无");
                //    vip额度加成
                $(".vip_add").html("500");
                localStorage.setItem("practical_jie", "5500")
            } else if (vip_grade == 3) {
                $(".vip_ka").html("黄金vip卡").css({
                    color: "gold"
                });
                $(".vip_img").attr("src", "./encryption/image/vip/3.png");
                $(".vip_1").html("30%");
                $(".vip_2").html("15%");
                $(".vip_3").html("麒麟，凤凰，玄武");
                $(".vip_4").html("五子棋");
                //    vip额度加成
                $(".vip_add").html("750");
                localStorage.setItem("practical_jie", "5750")
            } else if (vip_grade == 4) {
                $(".vip_ka").html("白金vip卡").css({
                    color: "#c0c0c0"
                });
                $(".vip_img").attr("src", "./encryption/image/vip/4.png");
                $(".vip_1").html("40%");
                $(".vip_2").html("20%");
                $(".vip_3").html("麒麟，凤凰，玄武，朱雀");
                $(".vip_4").html("五子棋");
                //    vip额度加成
                $(".vip_add").html("1000");
                localStorage.setItem("practical_jie", "6000")
            } else if (vip_grade == 5) {
                $(".vip_ka").html("钻石vip卡").css({
                    color: "#000"
                });
                $(".vip_img").attr("src", "./encryption/image/vip/5.png");
                $(".vip_1").html("50%");
                $(".vip_2").html("25%");
                $(".vip_3").html("麒麟，凤凰，玄武，朱雀，白虎");
                $(".vip_4").html("五子棋");
                //    vip额度加成
                $(".vip_add").html("1250");
                localStorage.setItem("practical_jie", "6250")
            } else if (vip_grade == 6) {
                $(".vip_ka").html("至尊vip卡").css({
                    color: "#d60000"
                });
                $(".vip_img").attr("src", "./encryption/image/longd.gif");
                $(".vip_1").html("100%");
                $(".vip_2").html("50%");
                $(".vip_3").html("全部");
                $(".vip_4").html("全部");
                //    vip额度加成
                $(".vip_add").html("2500");
                localStorage.setItem("practical_jie", "7500")
            }
        });

        //宠物系统（宠物展示区及功能简介）
        $(".pet").click(function () {
            var cw1 = localStorage.getItem("cw1");
            var cw2 = localStorage.getItem("cw2");
            var cw3 = localStorage.getItem("cw3");
            var cw4 = localStorage.getItem("cw4");
            var cw5 = localStorage.getItem("cw5");
            var cw6 = localStorage.getItem("cw6");
            var cw1_1 = localStorage.getItem("cw1_1");
            var cw2_2 = localStorage.getItem("cw2_2");
            var cw3_3 = localStorage.getItem("cw3_3");
            var cw4_4 = localStorage.getItem("cw4_4");
            var cw5_5 = localStorage.getItem("cw5_5");
            var cw6_6 = localStorage.getItem("cw6_6");
            var div = $("<div id='pet_D'></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "800px",
                height: "500px",
                left: "50%",
                top: "50%",
                marginTop: "-250px",
                marginLeft: "-400px",
                backgroundImage: "url('./encryption/image/network.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "0 30px",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>宠物系统</h2>").css({
                width: "100%",
                height: "50px",
                backgroundColor: "#ddd",
                borderRadius: "4px 4px 0px 0px",
                color: "#000",
                fontSize: "25px",
                lineHeight: "50px",
                textIndent: "10px",
                textAlign: "center",
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "450px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                // opacity: ".9"
            }).appendTo(div1);

            var divRight = $("<div class='pet_divs'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                // opacity: ".9"
            }).appendTo(div1);
            var divRight1 = $("<div class='pet_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                // opacity: ".9"
            }).appendTo(divRight);
            var divRight2 = $("<div class='pet_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                // opacity: ".95",
                display: "none"
            }).appendTo(divRight);
            var divRight3 = $("<div class='pet_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                position: "relative",
                // opacity: ".9",
                display: "none"
            }).appendTo(divRight);
            var divRight4 = $("<div class='pet_div'>4</div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                // opacity: ".9",
                display: "none"
            }).appendTo(divRight);
            var cw1_p, cw1_p1, cw1_p2, cw1_p3, cw1_p4, cw1_p5, cws_p, cws_p1, cws_p2, cws_p3, cws_p4, cws_p5;
            if (cw1 == "0") {
                cw1_p = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(麟)</p>"
            } else {
                cw1_p = ""
            }
            if (cw2 == "0") {
                cw1_p1 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(凰)</p>"
            } else {
                cw1_p1 = ""
            }
            if (cw3 == "0") {
                cw1_p2 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(玄)</p>"
            } else {
                cw1_p2 = ""
            }
            if (cw4 == "0") {
                cw1_p3 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(雀)</p>"
            } else {
                cw1_p3 = ""
            }
            if (cw5 == "0") {
                cw1_p4 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(虎)</p>"
            } else {
                cw1_p4 = ""
            }
            if (cw6 == "0") {
                cw1_p5 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>请先购买(龍)</p>"
            } else {
                cw1_p5 = ""
            }
            if (cw1_1 == "0") {
                cws_p = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(麟)</p>"
            } else {
                cws_p = ""
            }
            if (cw2_2 == "0") {
                cws_p1 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(凰)</p>"
            } else {
                cws_p1 = ""
            }
            if (cw3_3 == "0") {
                cws_p2 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(玄)</p>"
            } else {
                cws_p2 = ""
            }
            if (cw4_4 == "0") {
                cws_p3 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(雀)</p>"
            } else {
                cws_p3 = ""
            }
            if (cw5_5 == "0") {
                cws_p4 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(虎)</p>"
            } else {
                cws_p4 = ""
            }
            if (cw6_6 == "0") {
                cws_p5 = "<p style='position: absolute;top: 0;background: #000;opacity: .8;width: 99px;height: 99px;z-index: 9;color: #FFFFFF;text-align: center;line-height: 99px'>尚未解锁(龍)</p>"
            } else {
                cws_p5 = ""
            }
            var p1 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer;'class='pet_p pet_p_select'>我的宠物蛋</p>").appendTo(divLeft);
            var p2 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='pet_p'>我的宠物</p>").appendTo(divLeft);
            var p4 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='pet_p'>宠物装备</p>").appendTo(divLeft);
            var p3 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='pet_p'>宠物特权</p>").appendTo(divLeft);
            var v1 = $("<div style='width: 100%;height: 100px;border-bottom: 1px solid #999999' id='v1'></div>").appendTo(divRight1);
            var v1_1 = $("<div style='width: 100%;height: 100px;border-bottom: 1px solid #999999' id='v1_1'></div>").appendTo(divRight2);
            var v2 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/cd.png' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p + "</div>").appendTo(v1);
            var v3 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/2.jpg' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p1 + "</div>").appendTo(v1);
            var v4 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/3.jpg' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p2 + "</div>").appendTo(v1);
            var v5 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/4.jpg' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p3 + "</div>").appendTo(v1);
            var v6 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/5.jpg' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p4 + "</div>").appendTo(v1);
            var v7 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/6.jpg' style='width: 80px;height: 99px;margin-left: 10px'>" + cw1_p5 + "</div>").appendTo(v1);
            var v2_2 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/ql.png' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p + "</div>").appendTo(v1_1);
            var v3_3 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/fh.png' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p1 + "</div>").appendTo(v1_1);
            var v4_4 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/xw.png' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p2 + "</div>").appendTo(v1_1);
            var v5_5 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/zq.png' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p3 + "</div>").appendTo(v1_1);
            var v6_6 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/bh.gif' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p4 + "</div>").appendTo(v1_1);
            var v7_7 = $("<div style='width: 99px;height: 99px;border-right: 1px solid #999999;float: left;cursor: pointer;position: relative'><img src='./encryption/image/pet/ql.gif' style='width: 80px;height: 99px;margin-left: 10px'>" + cws_p5 + "</div>").appendTo(v1_1);
            var v1_3 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: left;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>笼 头</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/lt.png')",
                backgroundSize: "100% 100%",
                marginLeft: "20px",
                marginTop: "20px"
            }).appendTo(divRight3);
            var v1_v = $("<div style='width: 300px;height: 300px;border: 1px solid #999999;float: left;cursor: pointer;position: relative'></div>").css({
                backgroundImage: "url('./encryption/image/pet/xuanze1.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "28px",
                marginTop: "75px"
            }).appendTo(divRight3);
            var v1_4 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: right;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马 鞍</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/ma.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginRight: "20px",
                marginTop: "20px"
            }).appendTo(divRight3);
            var v1_5 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: left;cursor: pointer;position: relative;'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马蹄铁</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/tt.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "-431px",
                marginTop: "325px"
            }).appendTo(divRight3);
            var v1_6 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: right;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马蹄铁</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/tt.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginRight: "20px",
                marginTop: "200px"
            }).appendTo(divRight3);
            var button_6 = $("<a href='#'>立即购买宠物装备</a>").css({
                display: "inline-block",
                marginLeft: "30px",
                width: "300px",
                marginTop: "10px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer"
            }).click(function () {
                div.remove()
            }).attr("href", "#equips").appendTo(divRight3);
            var mtt = localStorage.getItem("mtt");
            var mlt = localStorage.getItem("mlt");
            var ma = localStorage.getItem("ma");
            if (mlt == "0") {

            } else {
                v1_3.find("p").remove();
            }
            if (mtt == "0") {

            } else {
                v1_5.find("p").remove();
                v1_6.find("p").remove();
            }
            if (ma == "0") {

            } else {
                v1_4.find("p").remove();
            }

            var v8 = $("<div style='height: 330px;width: 240px;margin-left:100px;border: 2px solid ;border-radius: 4px;float: left;margin-top: 10px'></div>").css({
                background: "url('./encryption/image/pet/xuanze.png') no-repeat",
                backgroundSize: "100% 100%"
            }).appendTo(divRight1);
            var v8_8 = $("<div style='height: 330px;width: 330px;margin-left:50px;border: 2px solid ;border-radius: 4px;float: left;margin-top: 10px'></div>").css({
                background: "url('./encryption/image/pet/xuanze1.png') no-repeat",
                backgroundSize: "100% 100%"
            }).appendTo(divRight2);
            var cw_img = localStorage.getItem("cw_img");
            v1_v.css({
                backgroundImage: "url(" + cw_img + ")"
            });
            //  选择类型
            $(".pet_p").click(function () {
                $(this).addClass("pet_p_select").siblings().removeClass("pet_p_select");
                $(".pet_divs .pet_div").eq($(this).index()).show().siblings().hide();
            });
            var button1 = $("<a id='hatch'>孵 化</a>").css({
                display: "inline-block",
                width: "200px",
                marginTop: "50px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer",
                float: "right",
                marginRight: "30px"
            }).appendTo(divRight1);
            var button4 = $("<a id='confirm_pet'>确定宠物</a>").css({
                display: "inline-block",
                width: "150px",
                marginTop: "150px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer",
                float: "right",
                marginRight: "30px"
            }).appendTo(divRight2);
            //选择彩蛋
            var that_pet
            $("#v1").on("click", "div", function () {
                that_pet = $(this).index();
                var that = $(this);
                if ($(this).find('p').length == 1) {
                    return
                } else {
                    if ($(this).find('i')) {
                        $(this).find('i').remove()
                    }
                    $(this).append($("<i class='iconfont icon-xuanzhong-copy'></i>")).siblings().find("i").remove();
                    var cd_background = $(this).find('img').attr("src");
                    v8.css({
                        background: "url(" + cd_background + ")",
                        backgroundSize: "100% 100%"
                    });
                    $("#hatch").click(function () {
                        if (cd_background == "./encryption/image/pet/cd.png") {
                            prop_img('./encryption/image/pet/ql.png', "1")
                        } else if (cd_background == "./encryption/image/pet/2.jpg") {
                            prop_img('./encryption/image/pet/fh.png', "2")
                        } else if (cd_background == "./encryption/image/pet/3.jpg") {
                            prop_img('./encryption/image/pet/xw.png', "4")
                        } else if (cd_background == "./encryption/image/pet/4.jpg") {
                            prop_img('./encryption/image/pet/zq.png', "6")
                        } else if (cd_background == "./encryption/image/pet/5.jpg") {
                            prop_img('./encryption/image/pet/bh.gif', "8")
                        } else if (cd_background == "./encryption/image/pet/6.jpg") {
                            prop_img('./encryption/image/pet/ql.gif', "10")
                        }
                    })
                }
            });
            var cwimg = localStorage.getItem("cw_img");
            v8_8.css({
                background: "url(" + cwimg + ")",
                backgroundSize: "100% 100%"
            });
            //选择宠物(确定宠物)
            $("#v1_1").on("click", "div", function () {
                var that = $(this);
                if ($(this).find('p').length == 1) {
                    return
                } else {
                    if ($(this).find('i')) {
                        $(this).find('i').remove()
                    }
                    $(this).append($("<i class='iconfont icon-xuanzhong-copy'></i>")).siblings().find("i").remove();
                    var cd_background = $(this).find('img').attr("src");
                    v8_8.css({
                        background: "url(" + cd_background + ")",
                        backgroundSize: "100% 100%"
                    });
                }
                $("#confirm_pet").click(function () {
                    $("#pet_D").remove();
                    localStorage.setItem("cw_img", cd_background);
                    $(".pet img").attr({
                        src: cd_background
                    });
                });
            });


            var button2 = $("<a>购买宠物蛋</a>").css({
                display: "inline-block",
                width: "200px",
                marginTop: "50px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer",
                float: "right",
                marginRight: "30px"
            }).click(function () {
                div.remove()
            }).attr("href", "#pets").appendTo(divRight1);
            var button3 = $("<a>购买孵化卡</a>").css({
                display: "inline-block",
                width: "200px",
                marginTop: "50px",
                height: "50px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "50px",
                cursor: "pointer",
                float: "right",
                marginRight: "30px"
            }).click(function () {
                div.remove()
            }).attr("href", "#prop").appendTo(divRight1);
        });

        //获取的宠物
        function prop_img(url, number) {
            confirm("350", "是否孵化（需孵化卡" + number + "张）？", function () {
                var fh_card = localStorage.getItem('fh_card');
                fh_card = Number(fh_card);
                if (number > fh_card) {
                    prompt("500", "2000", false, "对不起，你的孵化卡不足，请先购买");
                } else {
                    var div = $("<div><h2 style='margin-left: 60px;margin-top: 40px;font-size: 30px;color: #d60000'>恭喜你获得：</h2><img src=" + url + " style='width: 150px;height: 150px;margin-top: 10px;margin-left: 70px'></p></div>").css({
                        width: "280px",
                        height: "300px",
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        marginTop: "-140px",
                        marginLeft: "-150px",
                        backgroundImage: "url(./encryption/image/addKey.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        zIndex: "9999999999999999"
                    }).slideToggle(5000, function () {
                        div.remove();
                    }).appendTo($("#M"));
                    if (number == "1") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card);
                        localStorage.setItem("cw1", "0");
                        localStorage.setItem("cw1_1", "1");
                        $("#pet_D").remove();

                    } else if (number == "2") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card);
                        localStorage.setItem("cw2", "0");
                        localStorage.setItem("cw2_2", "1");
                        $("#pet_D").remove()
                    } else if (number == "4") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card)
                        localStorage.setItem("cw3", "0");
                        localStorage.setItem("cw3_3", "1");
                        $("#pet_D").remove()
                    } else if (number == "6") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card)
                        localStorage.setItem("cw4", "0");
                        localStorage.setItem("cw4_4", "1");
                        $("#pet_D").remove()
                    } else if (number == "8") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card)
                        localStorage.setItem("cw5", "0");
                        localStorage.setItem("cw5_5", "1");
                        $("#pet_D").remove()
                    } else if (number == "10") {
                        fh_card = fh_card - number;
                        localStorage.setItem("fh_card", fh_card)
                        localStorage.setItem("cw6", "0");
                        localStorage.setItem("cw6_6", "1");
                        $("#pet_D").remove()
                    }

                }
            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾你放弃了孵化");
            });

        }

        //宠物系统（点击购买宠物）
        $("#pet_div div").click(function () {
            //判断宠物蛋是否购买过
            var cw1 = localStorage.getItem("cw1");
            var cw2 = localStorage.getItem("cw2");
            var cw3 = localStorage.getItem("cw3");
            var cw4 = localStorage.getItem("cw4");
            var cw5 = localStorage.getItem("cw5");
            var cw6 = localStorage.getItem("cw6");
            if (cw1 == "1" && $(this).index() == "0") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }
            if (cw2 == "1" && $(this).index() == "1") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }
            if (cw3 == "1" && $(this).index() == "2") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }
            if (cw4 == "1" && $(this).index() == "3") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }
            if (cw5 == "1" && $(this).index() == "4") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }
            if (cw6 == "1" && $(this).index() == "5") {
                prompt("500", "2000", false, "您已购买过此宠物");
                return
            }

            var that = $(this);
            var subtractPet = $(this).find('.span1').html();
            var vip_grade = localStorage.getItem("VIP");
            confirm("350", "是否购买此宠物蛋？", function () {
                if (vip_grade == 0) {
                    prompt("500", "2000", false, "请先购买VIP");
                    return
                } else if (vip_grade == 1) {
                    if (that.index() !== 0) {
                        prompt("500", "2000", false, "请先购买更高的VIP");
                        return
                    }

                } else if (vip_grade == 2) {
                    if (that.index() !== 0 && that.index() !== 1) {
                        prompt("500", "2000", false, "请先购买更高的VIP");
                        return
                    }

                } else if (vip_grade == 3) {
                    if (that.index() !== 0 && that.index() !== 1 && that.index() !== 2) {
                        prompt("500", "2000", false, "请先购买更高的VIP");
                        return
                    }

                } else if (vip_grade == 4) {
                    if (that.index() !== 0 && that.index() !== 1 && that.index() !== 2 && that.index() !== 3) {
                        prompt("500", "2000", false, "请先购买更高的VIP");
                        return
                    }

                } else if (vip_grade == 5) {
                    if (that.index() !== 0 && that.index() !== 1 && that.index() !== 2 && that.index() !== 3 && that.index() !== 4) {
                        prompt("500", "2000", false, "请先购买更高的VIP");
                        return
                    }
                }
                var gold_key = localStorage.getItem("gold_key");
                if (gold_key <= 0) {
                    prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                } else {
                    if (gold_key - subtractPet >= 0) {
                        gold_key = gold_key - subtractPet;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        gold("subtract", subtractPet);
                        if (that.index() == "0") {
                            localStorage.setItem("cw1", "1");
                        } else if (that.index() == "1") {
                            localStorage.setItem("cw2", "1");
                        } else if (that.index() == "2") {
                            localStorage.setItem("cw3", "1");
                        } else if (that.index() == "3") {
                            localStorage.setItem("cw4", "1");
                        } else if (that.index() == "4") {
                            localStorage.setItem("cw5", "1");
                        } else if (that.index() == "5") {
                            localStorage.setItem("cw6", "1");
                        }
                    } else {
                        prompt("500", "2000", false, "您的金币数量不足以解锁此宠物蛋");
                    }
                }


            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾购买宠物失败");
            });


        });

        //个人中心系统
        $(".prop").click(function () {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.7)",
                top: "0",
                fontSize: "16px",
                zIndex: "99999999"
            }).click(function () {
                div.remove()
            }).appendTo($("#M"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "800px",
                height: "500px",
                left: "50%",
                top: "50%",
                marginTop: "-250px",
                marginLeft: "-400px",
                backgroundImage: "url('./encryption/image/huolong.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "100px 0",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2>个人中心</h2>").css({
                width: "100%",
                height: "50px",
                backgroundColor: "#ddd",
                borderRadius: "4px 4px 0px 0px",
                color: "#000",
                fontSize: "25px",
                lineHeight: "50px",
                textIndent: "10px",
                textAlign: "center",
            }).appendTo(div1);
            var divLeft = $("<div></div>").css({
                width: "199px",
                height: "450px",
                float: "left",
                borderRight: "1px solid #ccc",
                background: "white",
                opacity: ".9"
            }).appendTo(div1);
            var divRight = $("<div class='personal_divs'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".9"
            }).appendTo(div1);
            var divRight1 = $("<div class='personal_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".9"
            }).appendTo(divRight);
            var divRight2 = $("<div class='personal_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".95",
                display: "none"
            }).appendTo(divRight);
            var divRight3 = $("<div class='personal_div'></div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".9",
                display: "none"
            }).appendTo(divRight);
            var divRight4 = $("<div class='personal_div'>4</div>").css({
                width: "600px",
                height: "450px",
                float: "right",
                background: "white",
                opacity: ".9",
                display: "none"
            }).appendTo(divRight);
            var p1 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer;'class='personal_p personal_p_select'>我的信息</p>").appendTo(divLeft);
            var p2 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='personal_p'>我的宠物</p>").appendTo(divLeft);
            var p3 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='personal_p'>我的道具</p>").appendTo(divLeft);
            var p4 = $("<p style='display: block;font-size: 20px;line-height: 112px;height: 112px;text-align: center; cursor: pointer; border-top:1px solid #999999' class='personal_p'>我的成就</p>").appendTo(divLeft);
            var p5 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 30px'>我的头像:</p>").appendTo(divRight1);
            var imgurl = localStorage.getItem("imgurl");
            var img = $("<img style='display: block;width:100px;height:100px;margin-left: 150px;margin-top: -30px;border: 1px solid #d60000'>").attr("src", imgurl).appendTo(divRight1);
            var p6 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>我的VIP:</p>").appendTo(divRight1);
            var p7 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -23px' class='vip_ka'></p>").appendTo(divRight1);
            var p66 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>我的宠物:</p>").appendTo(divRight1);
            var p77 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -23px' class='cw_m'></p>").appendTo(divRight1);
            var p8 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>银行可借款:</p>").appendTo(divRight1);
            var p9 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -21px'><span class='practical' style='color:red'></span><i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i></p>").appendTo(divRight1);
            var p10 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>银行存款:</p>").appendTo(divRight1);
            var p11 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -23px'><span class='bank_cun' style='color:red'></span><i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i></p>").appendTo(divRight1);
            var p12 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>个人金币数:</p>").appendTo(divRight1);
            var p13 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -21px'><span class='gold_key' style='color:red'></span><i class=\"iconfont icon-jinbi1 gold\" style=\"color: gold\" title=\"金币\"></i></p>").appendTo(divRight1);
            var p14 = $("<p style='display: block;font-size: 16px;margin-left: 50px;margin-top: 20px'>个人银币数:</p>").appendTo(divRight1);
            var p15 = $("<p style='display: block;font-size: 16px;margin-left: 150px;margin-top: -23px'><span class='key' style='color:red'></span><i class=\"iconfont icon-jinbi1 gold\" style=\"color: silver\" title=\"银币\"></i></p>").appendTo(divRight1);
            var v1_3 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: left;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>笼 头</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/lt.png')",
                backgroundSize: "100% 100%",
                marginLeft: "20px",
                marginTop: "20px"
            }).appendTo(divRight2);
            var v1_v = $("<div style='width: 300px;height: 300px;border: 1px solid #999999;float: left;cursor: pointer;position: relative'></div>").css({
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "28px",
                marginTop: "75px"
            }).appendTo(divRight2);
            var v1_4 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: right;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马 鞍</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/ma.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginRight: "20px",
                marginTop: "20px"
            }).appendTo(divRight2);
            var v1_5 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: left;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马蹄铁</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/tt.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginLeft: "-431px",
                marginTop: "325px"
            }).appendTo(divRight2);
            var v1_6 = $("<div style='width: 99px;height: 99px;border: 1px solid #999999;float: right;cursor: pointer;position: relative'><p style='position: absolute;top: 0;left: 0;background:#000000;width: 99px;height: 99px;color: #FFFFFF;font-size: 30px;text-align: center;line-height: 99px'>马蹄铁</p></div>").css({
                backgroundImage: "url('./encryption/image/pet/tt.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                marginRight: "20px",
                marginTop: "200px"
            }).appendTo(divRight2);
            var mtt = localStorage.getItem("mtt");
            var mlt = localStorage.getItem("mlt");
            var ma = localStorage.getItem("ma");
            if (mlt == "0") {

            } else {
                v1_3.find("p").remove();
            }
            if (mtt == "0") {

            } else {
                v1_5.find("p").remove();
                v1_6.find("p").remove();
            }
            if (ma == "0") {

            } else {
                v1_4.find("p").remove();
            }
            var vi6 = $("<div style='width: 300px;height: 168px;border-radius: 4px;border: 2px solid;margin-top: 30px;margin-left: 30px;float: left;position: relative'><img src='./encryption/image/prop/fhk.png' width='168px' height='168px' style='margin-left: 65px'> <p style='position: absolute;top: 60px;font-size: 30px;font-weight: 600;left: 115px'>孵 化</p></div>").appendTo(divRight3);
            var vi6_1 = $("<p style='float: left;font-size: 50px;font-weight: 600;margin-top: 80px;margin-left: 30px'> × <span class='fh_card'>0</span> 张 </p>").appendTo(divRight3);
            var vi7 = $("<div style='width: 300px;height: 168px;border-radius: 4px;border: 2px solid;margin-top: 30px;margin-left: 30px;float: left;position: relative'><img src='./encryption/image/prop/fhk.png' width='168px' height='168px' style='margin-left: 65px'> <p style='position: absolute;top: 60px;font-size: 30px;font-weight: 600;left: 115px'>双 倍</p></div>").appendTo(divRight3);
            var vi7_1 = $("<p style='float: left;font-size: 50px;font-weight: 600;margin-top: 80px;margin-left: 30px'> × <span class='sb_card'>0</span> 张 </p>").appendTo(divRight3);
            var cw_img = localStorage.getItem("cw_img");
            v1_v.css({
                backgroundImage: "url(" + cw_img + ")"
            });
            //孵化卡数量
            var fh_card = localStorage.getItem('fh_card');
            $(".fh_card").html(fh_card);
            //个人可借款
            var practical_jie_yu = localStorage.getItem("practical_jie");
            $(".practical").html(practical_jie_yu);
            //个人存款
            var bank_cun = localStorage.getItem("bank_cun");
            $(".bank_cun").html(bank_cun);
            //个人金币数
            var gold_key = localStorage.getItem("gold_key");
            $(".gold_key").html(gold_key);
            //个人银币数
            var key = localStorage.getItem("k");
            $(".key").html(key);
            //个人宠物
            var cw_img = localStorage.getItem("cw_img");
            if (cw_img == "./encryption/image/pet/ql.png") {
                $(".cw_m").html("麒麟").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/fh.png") {
                $(".cw_m").html("凤凰").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/xw.png") {
                $(".cw_m").html("玄武").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/zq.png") {
                $(".cw_m").html("朱雀").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/bh.gif") {
                $(".cw_m").html("白虎").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/ql.gif") {
                $(".cw_m").html("青龙").css({
                    color: "gold"
                });
            } else if (cw_img == "./encryption/image/pet/my.png") {
                $(".cw_m").html("无").css({
                    color: "gold"
                });
            }

            // 个人vip
            var vip_grade = localStorage.getItem("VIP");
            if (vip_grade == 0) {
                $(".vip_ka").html("普通卡").css({
                    color: "#8C7853"
                });
            } else if (vip_grade == 1) {
                $(".vip_ka").html("青铜vip卡").css({
                    color: "#8C7853"
                });
            } else if (vip_grade == 2) {
                $(".vip_ka").html("白银vip卡").css({
                    color: "#c0c0c0",
                });
            } else if (vip_grade == 3) {
                $(".vip_ka").html("黄金vip卡").css({
                    color: "gold"
                });
            } else if (vip_grade == 4) {
                $(".vip_ka").html("白金vip卡").css({
                    color: "#c0c0c0"
                });
            } else if (vip_grade == 5) {
                $(".vip_ka").html("钻石vip卡").css({
                    color: "#000"
                });
            } else if (vip_grade == 6) {
                $(".vip_ka").html("至尊vip卡").css({
                    color: "#d60000"
                });
            }

            //  选择
            $(".personal_p").click(function () {
                $(this).addClass("personal_p_select").siblings().removeClass("personal_p_select");
                $(".personal_divs .personal_div").eq($(this).index()).show().siblings().hide()
            })
        });

        //道具系统（点击购买孵化卡）
        $("#prop_div div").eq(0).click(function () {
            var that = $(this);
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.5)",
                top: "0",
                zIndex: "9999999999999999999999999999999999999999999999999999999999999999999999999999999"
            }).click(function () {
                div.remove()
            }).appendTo($("body"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "350px",
                height: "200px",
                left: "50%",
                top: "50%",
                marginTop: "-100px",
                marginLeft: "-175px",
                backgroundImage: "url('./encryption/image/kuang.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                borderRadius: "5px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation()
            }).appendTo(div);
            var p = $("<p>请输入购买数量</p>").css({
                color: "rgba(0,0,0,1)",
                fontSize: "18px",
                width: "350px",
                marginTop: "25px",
                textAlign: "center",
                letterSpacing: "1px"
            }).appendTo(div1);
            var input = $("<input type='number' placeholder='必须为1的倍数' id='propNumber'>").css({
                color: "rgba(0,0,0,1)",
                fontSize: "18px",
                width: "200px",
                height: "40px",
                borderRadius: "5px",
                marginTop: "20px",
                textAlign: "center",
                marginLeft: "74px",
                outline: "none",
                border: "1px solid"
            }).appendTo(div1);
            var button = $("<button>确定购买</button>").css({
                display: "inline-block",
                width: "200px",
                marginTop: "20px",
                height: "40px",
                backgroundColor: "#347ffe",
                outline: "none",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                letterSpacing: "2px",
                borderRadius: '5px',
                textAlign: "center",
                textDecoration: "none",
                lineHeight: "40px",
                cursor: "pointer",
                float: "right",
                marginRight: "74px"
            }).click(function () {
                var propNumber = $("#propNumber").val();
                propNumber = Number(propNumber);
                var subtractProp = that.find('.span1').html();
                var prop_num = subtractProp * propNumber;
                var gold_key = localStorage.getItem("gold_key");
                var fh_card = localStorage.getItem('fh_card');
                fh_card = Number(fh_card);
                if (gold_key <= 0) {
                    prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                } else {
                    if (gold_key - prop_num >= 0) {
                        gold_key = gold_key - prop_num;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        gold("subtract", prop_num);
                        fh_card = fh_card + propNumber;
                        prompt("500", "2000", true, "恭喜你成功购买" + propNumber + "张孵化卡");
                        localStorage.setItem('fh_card', fh_card);
                    } else {
                        prompt("500", "2000", false, "您的金币数量不足以购买 ");
                    }
                }
                div.remove();

            }).appendTo(div1);

            function checkUser(str) {
                var re = /^[1-9]\d*$/;
                if (re.test(str)) {

                } else {
                    $("#propNumber").attr('placeholder', '必须为1的倍数');
                    $("#propNumber").val("");
                }
            }

            $("#propNumber").bind('input propertychange', function (e) {
                e.preventDefault();
                checkUser($("#propNumber").val());
            });
        });

        //宠物装备系统（点击购买宠物装备）
        $("#equip_div div").click(function () {
            var mlt = localStorage.getItem("mlt");
            var ma = localStorage.getItem("ma");
            var mtt = localStorage.getItem("mtt");
            if (mlt == "1" && $(this).index() == "0") {
                prompt("500", "2000", false, "已购买过笼头");
                return
            }
            if (mtt == "1" && $(this).index() == "2") {
                prompt("500", "2000", false, "已购买过蹄铁");
                return
            }
            if (ma == "1" && $(this).index() == "1") {
                prompt("500", "2000", false, "已购买过马鞍");
                return
            }
            var that = $(this);
            var gold_key = localStorage.getItem("gold_key");
            var subtractEquip = $(this).find('.span1').html();
            confirm("350", "是否购买此宠物装备？", function () {
                if (gold_key <= 0) {
                    prompt("500", "2000", false, "您的余额不足，请联系（客服）充值");
                } else {
                    if (gold_key - subtractEquip >= 0) {
                        gold_key = gold_key - subtractEquip;
                        $(".gold_key").html(gold_key);
                        localStorage.setItem("gold_key", gold_key);
                        gold("subtract", subtractEquip);
                        if (that.index() == "0") {
                            localStorage.setItem("mlt", "1")
                        } else if (that.index() == "1") {
                            localStorage.setItem("ma", "1")
                        } else if (that.index() == "2") {
                            localStorage.setItem("mtt", "1")
                        }
                    } else {
                        prompt("500", "2000", false, "您的金币数量不足以解锁此宠物装备");
                    }
                }
            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾此宠物装备购买失败");
            });
        });

        //上传头像弹框
        // onFile_pop();
        function onFile_pop() {
            var div = $("<div></div>").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                backgroundColor: "rgba(0,0,0,.5)",
                top: "0",
                zIndex: "999999"
            }).click(function () {
                div.remove()
            }).appendTo($("body"));
            var div1 = $("<div></div>").css({
                position: "absolute",
                width: "382px",
                height: "345px",
                left: "50%",
                top: "50%",
                marginTop: "-172.5px",
                marginLeft: "-191px",
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "4px",
                border: "1px solid #999",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, .5)"
            }).click(function (e) {
                e.stopPropagation();
            }).appendTo(div);
            var h2 = $("<h2></h2>").html("头像设置").css({
                backgroundColor: "#e9e9e9",
                borderRadius: "4px 4px 0px 0px",
                width: "360px",
                fontSize: "15px",
                color: "#333",
                padding: "8px 11px"
            }).appendTo(div1);
            var err = $("<img src='./encryption/image/ico/err.png'>").css({
                width: "13px",
                height: "13px",
                float: "right",
                marginTop: "3px",
                cursor: "pointer"
            }).click(function () {
                div.remove()
            }).appendTo(h2);
            var div2 = $("<div></div>").css({
                width: "162px",
                height: "165px",
                backgroundColor: "rgba(0,0,0,.4)",
                marginTop: "27px",
                marginLeft: "40px",
                float: "left"
            }).appendTo(div1);
            var img = $("<img class='backImg' title='' alt=''/>").css({
                width: "100%",
                height: "100%"
            }).appendTo(div2);
            var divs = $("<div></div>").css({
                width: "100px",
                height: "165px",
                float: 'left',
                marginTop: "27px",
                marginLeft: "40px",
            }).appendTo(div1);
            var p = $("<p>预览</p>").css({
                color: "#333",
                fontSize: "14px",
                width: "100%",
                textAlign: "center"
            }).appendTo(divs);
            var div3 = $("<div></div>").css({
                float: "left",
                width: "80px",
                height: "80px",
                marginTop: "20px",
                marginLeft: "10px",
                position: "relative",
            }).appendTo(divs);
            var div5 = $("<div id='anew'><img src=\"./encryption/image/ico/camera.png\" style='margin-left: 10px;margin-top: 8px;margin-right: 5px' ><label style='font-size: 14px;color: #999999;cursor: pointer' for='files'>重新上传</label><input type='file' id='files' name='file' style='display: none'></div>").css({
                width: "100px",
                height: "28px",
                backgroundColor: "#eeeeee",
                borderRadius: "4px",
                border: "solid 1px #dddddd",
                float: "left",
                marginTop: "20px",
                display: "none"
            }).appendTo(divs);
            var imgs1 = $("<img title='' alt='' class='small'>").css({
                position: "absolute",
                top: '0',
                width: "80px",
                height: "80px",
                overflow: "hidden",
            }).appendTo(div3);
            var img2 = $("<img title='' alt='' class='small1'>").css({
                position: "absolute",
                top: '0',
                width: "80px",
                height: "80px",
                backgroundColor: "#cccccc",
                overflow: "hidden",
                borderRadius: "50%",
                zIndex: 1
            }).appendTo(div3);
            var div4 = $("<div></div>").css({
                position: "absolute",
                top: '0',
                width: "80px",
                height: "80px",
                backgroundColor: "#000",
                opacity: .6
            }).appendTo(div3);
            var divv = $("<div style='width: 320px;margin-left: 39px;margin-top: 20px;float: left'><span style='color: #999999;font-size: 14px'>可上传的图片格式：jpg、jpeg、png，图片大小不超过2M</span></div>").appendTo(div1);
            var button = $("<button>保存</button>").css({
                float: "left",
                width: "100px",
                height: "28px",
                backgroundColor: "#d60000",
                borderRadius: "4px",
                outline: "none",
                border: "none",
                textAlign: "center",
                color: "#fff",
                marginLeft: "140px",
                marginTop: "15px",
                cursor: "pointer",
            }).click(function () {
                confirm("350", "确定保存此头像吗？", function () {
                    prompt("500", "2000", true, "头像更换成功");
                    div.remove();
                    var imgurl = localStorage.getItem("imgurl");
                    $("#files").css({
                        backgroundImage: 'url(' + imgurl + ')'
                    });
                }, "确定（√）", " 取消（×）", function () {
                    prompt("500", "2000", false, "头像更换失败")
                });

            }).appendTo(div1)
        }

        //上传头像
        $("#file").on("change", function () {
            var that = this;
            confirm("350", "确认更换头像？（500银币/次）", function () {
                var key = localStorage.getItem("k");
                if (key <= 0) {
                    prompt("500", "2000", false, "您的银币不足，请先兑换");
                } else {
                    if (key - 500 >= 0) {
                        key = key - 500;
                        $(".key").html(key);
                        silver("subtract", 500);
                        localStorage.setItem("k", key);
                        onFile_pop();
                        var upload_file = that.files[0];
                        var resder = new FileReader();
                        resder.readAsDataURL(upload_file);
                        resder.onload = function (e) {
                            $(".backImg").attr("src", this.result)
                                .cropper({
                                    aspectRatio: 16 / 16,
                                    viewMode: 3,
                                    modal: false,
                                    dragMode: 'none',
                                    responsive: false,
                                    restore: false,
                                    center: true,
                                    minContainerWidth: 165,
                                    crop: function (e) {
                                        var dataURL = $(".backImg").cropper("getCroppedCanvas");
                                        var imgurl = dataURL.toDataURL("image/png", 1.0);
                                        $(".small1").attr("src", imgurl);
                                        $(".small").attr("src", imgurl);
                                        localStorage.setItem("imgurl", imgurl)
                                    },
                                    cropmove: function (e) {
                                        var dataURL = $(".backImg").cropper("getCroppedCanvas");
                                        var imgurl = dataURL.toDataURL("image/png", 1.0);
                                        $(".small1").attr("src", imgurl);
                                        $(".small").attr("src", imgurl);
                                        $(".onfile").css({
                                            backgroundImage: imgurl
                                        });
                                        localStorage.setItem("imgurl", imgurl);
                                    },
                                })
                        };
                    } else {
                        prompt("500", "2000", false, "您的银币数量不足以更换头像");
                    }
                }
            }, "是", "否", function () {
                prompt("500", "2000", false, "很遗憾，头像更换失败");
            });
        });

        //音乐播放组件
        var setConfig = {

            song: [
                {
                    title: "That girl",
                    src: 'https://music.163.com/song/media/outer/url?id=440208476.mp3',
                    cover: './encryption/image/images/00.jpg'

                },
                // {
                //     title: "We Don't Talk Anymore",
                //     src: 'http://jq22.qiniudn.com/2_01.mp3',
                //     cover: './encryption/image/images/01.jpg'
                //
                // },
                {
                    title: '马步谣',
                    src: 'http://www.ytmp3.cn/down/48919.mp3',
                    cover: './encryption/image/images/02.jpg'

                },
                {
                    title: '盗将行',
                    src: 'http://www.ytmp3.cn/down/52567.mp3',
                    cover: './encryption/image/images/03.jpg'

                },
                {
                    title: '烟火里的尘埃',
                    src: 'http://www.ytmp3.cn/down/48275.mp3',
                    cover: './encryption/image/images/04.jpg'

                },
                {
                    title: '七友',
                    src: 'http://www.ytmp3.cn/down/38654.mp3',
                    cover: './encryption/image/images/05.jpg'

                },
                {
                    title: '钟无艳',
                    src: 'http://www.ytmp3.cn/down/39157.mp3',
                    cover: './encryption/image/images/06.jpg'

                },
            ],
            error: function (meg) {

                console.log(meg);
            }
        };
        var audioFn = audioPlay(setConfig);

        if (audioFn) {
            //开始加载音频,true为播放,false不播放
            audioFn.loadFile(1);
        }
    }
});





