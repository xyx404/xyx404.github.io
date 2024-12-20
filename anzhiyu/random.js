var posts=["2024/10/06/20241006记录/","2024/12/14/ABC384 E - Takahashi is Slime 2/","2024/09/15/AT_past202203_f/","2023/12/30/P9941 题解/","2024/09/15/AT_past202203_e/","2024/10/07/CF2010B Three Brothers/","2024/10/01/azy主题修改加载时的头像和新品主题/","2024/11/18/UVA10056/","2024/08/16/c++ STL 1/","2024/08/17/c++ STL 2/","2024/08/17/c++ STL 3/","2024/11/24/friend-circle-lite的实现/","2024/09/16/AT_nikkei2019_final_d/","2024/11/04/csp2024反思/","2024/10/19/uptimerobot实现友链监控/","2024/09/24/搭建 hexo 博客主题 anzhiyu(1)/","2024/09/24/搭建 hexo 博客主题 anzhiyu(2)/","2024/12/19/文章统计/","2024/12/07/题解 9 Divisors/","2024/11/30/题解 Keep Distance/","2024/04/28/题解：B3958 [GESP202403 四级] 相似字符串/","2024/04/22/题解：B3968 [GESP202403 五级] 成绩排序/","2024/04/25/题解：B3969 [GESP202403 五级] B-smooth 数/","2024/12/06/题解：CF1468C Berpizza/","2024/12/08/题解：AT_abc383_c [ABC383C] Humidifier 3/","2024/08/04/题解：CF45C Dancing Lessons/","2024/03/30/题解：P10291 [CCC 2024 J2] Dusa And The Yobis/","2024/03/26/题解：P10265 [GESP样题 七级] 迷宫统计/","2024/08/04/题解：CF75B Facetook Priority Wall/","2024/03/30/题解：P10295 [CCC 2024 S1] Hat Circle/","2024/03/30/题解：P10292 [CCC 2024 J3] Bronze Count/","2024/04/06/题解：P10312 [SHUPC 2024] 栅栏密码/","2024/04/22/题解：P10355 [PA2024] Znaczki pocztowe/","2024/04/21/题解：P10373 [AHOI2024 初中组] 立方根/","2024/04/26/题解：P10377 [GESP202403 六级] 好斗的牛/","2024/03/29/题解：P10296 [CCC 2024 S2] Heavy-Light Composition/","2024/05/03/题解：P10401 「XSOI-R1」区间操作/","2024/04/27/题解：P10376 [GESP202403 六级] 游戏/","2024/05/15/题解：P10448 组合型枚举/","2024/05/21/题解：P10520 [XJTUPC2024] 榕树之心/","2024/07/01/题解：P10677 『STA - R6』inkar-usi/","2024/08/24/题解：P10905 [蓝桥杯 2024 省 C] 回文字符串/","2024/11/14/题解：P11275 微观戏剧/","2024/08/24/题解：P10904 [蓝桥杯 2024 省 C] 挖矿/","2024/08/18/题解：P10885 【MX-S3-T1】「FeOI Round 1」野心/","2024/04/21/题解：P10372 [AHOI2024 初中组] 家庭作业/","2024/11/14/题解：P11276 第一首歌/","2024/11/03/题解：UVA10081 Tight Words/","2024/10/03/题解：P11156 【MX-X6-T2】もしも/","2024/11/16/题解：UVA10761 Broken Keyboard/","2024/08/02/题解：P2318 [HNOI2005] 虚拟内存/","2024/12/14/题解：UVA628 Passwords/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"xyx404","link":"https://xyx404.github.io/","avatar":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.23/avatar.webp","descr":"在努力和摆烂中选择了努力摆烂AWA","siteshot":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.24/wzsyjt.png"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebc5158dc.jpg"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://fastly.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","descr":"开发学习启发性二刺螈","siteshot":"https://fastly.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"璜珀的小屋","link":"https://blog.hpcesia.com/","avatar":"https://blog.hpcesia.com/img/myavatar.webp","descr":"一个想要摆烂却又不甘于躺平的人","siteshot":"https://blog.hpcesia.com/img/siteshot.webp"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活","siteshot":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640"},{"name":"南川吟梦","link":"https://blog.southz.top/","avatar":"https://cravatar.cn/avatar/8418eeff381919776ab9bdb0bf488d5a?d=mm","descr":"川流不息，逐梦无畏","recommend":false},{"name":"知返","link":"https://docs.lizili.online/","avatar":"https://docs.lizili.online/logo.png","descr":"明正义，求美好，悟奇妙","recommend":false},{"name":"MC-Sep","link":"https://blog.mc-sep.top/","avatar":"https://blog.mc-sep.top/logo.png","descr":"人生能有几回搏，天涯何处无芳草🌟","recommend":false},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情"},{"name":"Tianli","link":"https://blog.tianli0.top/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 5) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };