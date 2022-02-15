<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <link rel="icon" href="/home_logo.png">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_2837028_toxpxk8wf3d.css">
  <!-- <link rel="stylesheet" href="//at.alicdn.com/t/font_2837028_5hg72cvqb14.css"> -->
  <!-- <link rel="stylesheet" href="//at.alicdn.com/t/font_2837030_xtnltpz9a7.css"> -->
  <title>智能云机器人</title>
<link href="/16.df430013bdc084a50720.hot-update.js" rel="prefetch"><link href="/js/0.js" rel="prefetch"><link href="/js/1.js" rel="prefetch"><link href="/js/10.js" rel="prefetch"><link href="/js/11.js" rel="prefetch"><link href="/js/12.js" rel="prefetch"><link href="/js/13.js" rel="prefetch"><link href="/js/14.js" rel="prefetch"><link href="/js/15.js" rel="prefetch"><link href="/js/16.js" rel="prefetch"><link href="/js/17.js" rel="prefetch"><link href="/js/18.js" rel="prefetch"><link href="/js/19.js" rel="prefetch"><link href="/js/2.js" rel="prefetch"><link href="/js/20.js" rel="prefetch"><link href="/js/21.js" rel="prefetch"><link href="/js/22.js" rel="prefetch"><link href="/js/23.js" rel="prefetch"><link href="/js/24.js" rel="prefetch"><link href="/js/25.js" rel="prefetch"><link href="/js/26.js" rel="prefetch"><link href="/js/27.js" rel="prefetch"><link href="/js/28.js" rel="prefetch"><link href="/js/29.js" rel="prefetch"><link href="/js/3.js" rel="prefetch"><link href="/js/30.js" rel="prefetch"><link href="/js/31.js" rel="prefetch"><link href="/js/32.js" rel="prefetch"><link href="/js/33.js" rel="prefetch"><link href="/js/34.js" rel="prefetch"><link href="/js/35.js" rel="prefetch"><link href="/js/36.js" rel="prefetch"><link href="/js/37.js" rel="prefetch"><link href="/js/38.js" rel="prefetch"><link href="/js/39.js" rel="prefetch"><link href="/js/4.js" rel="prefetch"><link href="/js/40.js" rel="prefetch"><link href="/js/41.js" rel="prefetch"><link href="/js/42.js" rel="prefetch"><link href="/js/43.js" rel="prefetch"><link href="/js/44.js" rel="prefetch"><link href="/js/45.js" rel="prefetch"><link href="/js/46.js" rel="prefetch"><link href="/js/47.js" rel="prefetch"><link href="/js/48.js" rel="prefetch"><link href="/js/49.js" rel="prefetch"><link href="/js/5.js" rel="prefetch"><link href="/js/50.js" rel="prefetch"><link href="/js/51.js" rel="prefetch"><link href="/js/52.js" rel="prefetch"><link href="/js/53.js" rel="prefetch"><link href="/js/54.js" rel="prefetch"><link href="/js/55.js" rel="prefetch"><link href="/js/6.js" rel="prefetch"><link href="/js/7.js" rel="prefetch"><link href="/js/8.js" rel="prefetch"><link href="/js/9.js" rel="prefetch"><link href="/js/app.js" rel="preload" as="script"><link href="/js/chunk-vendors.js" rel="preload" as="script"></head>

<body>
  <noscript>
    <strong>We're sorry but demo doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong>
  </noscript>
  <div id="app"></div>
  <!-- uni 的 SDK -->
  <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
  <script type="text/javascript">
    document.addEventListener("UniAppJSBridgeReady", function () {
      document.getElementById('codingtabbar').addEventListener('click', function (evt) {
        var target = evt.target;
        console.error("tagert", target)
        var action = target.getAttribute('data-action');
        console.error('action', action)
        switch (action) {
          case 'teach':
            uni.switchTab({
              url: '/pages/index/home'
            });
            break;
          case 'apply':
            uni.switchTab({
              url: '/pages/application/index'
            });
            break;
          case 'joint':
            uni.switchTab({
              url: '/pages/joint/joint'
            })
            break;
          case 'my':
            uni.switchTab({
              url: '/pages/my/my'
            })
            break;
          default:
            uni.switchTab({
              url: '/pages/index/home'
            });
            break;
        }
      });
      window.onload = function () {
        document.getElementById('codingtabbar').addEventListener('click', function (evt) {
          var target = evt.target;
          console.error("tagert", target)
          var action = target.getAttribute('data-action');
          console.log(action)
          switch (action) {
            case 'teach':
              uni.switchTab({
                url: '/pages/index/home'
              });
              break;
            case 'apply':
              uni.switchTab({
                url: '/pages/application/index'
              });
              break;
            case 'joint':
              uni.switchTab({
                url: '/pages/joint/joint'
              })
              break;
            case 'my':
              uni.switchTab({
                url: '/pages/my/my'
              })
              break;
            default:
              uni.switchTab({
                url: '/pages/index/home'
              });
              break;
          }
        });
      }
      // window.uni = uni;
      // document
      //   .querySelector(".gobackapp")
      //   ?.addEventListener("click", function (evt) {
      //     console.log('点击了gobackapp')
      //     uni.switchTab({
      //       url: "/pages/index/home",
      //     });
      //   });
    });


    // 向 webview 发送消息
    // document.getElementById('postMessage').addEventListener('click', function () {
    //   uni.postMessage({
    //     data: {
    //       action: 'message'
    //     }
    //   });
    // });


  </script>
  <script type="text/javascript">
    document.documentElement.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  </script>
  <!-- built files will be auto injected -->
<script type="text/javascript" src="/js/chunk-vendors.js"></script><script type="text/javascript" src="/js/app.js"></script></body>