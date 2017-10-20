const AV = require('./utils/av-live-query-weapp-min');

AV.init({
  appId: 'ue4HxDmQwp7CriXlOAuPIzqA-gzGzoHsz',
  appKey: 'oUY8ECgPb7flCPMEnbIYrciq',
});
App({
  globalData:{
    user: {                                     //用户的原始定义
      "userRolName": "0",
      "uName": "0",
      "emailVerified": false,
      "nickName": "游客",
      "avatarUrl": "../../images/index.png",
      "country": "CN",
      "userAuthorize": -1,
      "authData": {},
      "mobilePhoneVerified": false,
      "objectId": "0"},
    sysinfo: wx.getSystemInfo()
  },
  wxLogin: function() {
    return AV.Promise.resolve(AV.User.current()).then(user =>
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null
    ).then(user => user ? user : AV.User.loginWithWeapp());
  },
  onShow: function({path,query,scene,shareTicket,referrerInfo}){
    var that = this;
    return AV.Promise.resolve(AV.User.current()).then(user =>           //读缓存登录信息
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null
    ).then(user => {
      if (user) {
        that.globalData.user = lcuser.toJSON();
      } else {
        wx.getNetworkType({
          success: function(res) {
            if (res.networkType!='none') {                     //如果有网络
              wx.getSetting({
                success(res) {
                  if (res.authSetting['scope.userInfo']) {                   //用户已经同意小程序使用用户信息
                    AV.User.loginWithWeapp().then(loginUser =>{
                      that.globalData.user = loginUser.toJSON();               //有缓存登录信息
                      that.logData.push([Date.now(), '系统初始化设备' + that.globalData.sysinfo]);                      //本机初始化时间记入日志
                    }).catch((loginErr) => {
                      that.logData.push([Date.now(), '系统初始化失败' + loginErr]);
                    });
                  }
                }
              });
            };
          }
        });
      }
    });
    if (scene===1007 && path=='/pages/f_Role/f_Role'){
      wx.setStorageSync('proScene',{path,query,scene})
      wx.navigateTo({url:path+query})
    }
  },

  onHide: function () {             //进入后台时缓存数据。
    var that=this;
    wx.getStorageInfo({             //查缓存的信息
      success: function(res) {
        if ( res.currentSize>(res.limitSize-512) ) {          //如缓存占用大于限制容量减512kb，将大数据量的缓存移除。
          wx.removeStorage({key:"aData"});
          wx.removeStorage({key:"oData"});
          wx.removeStorage({key:"mData"});
          wx.removeStorage({key:"procedures"});
        }else{
          wx.setStorage({key:"aData", data:that.aData});
          wx.setStorage({key:"mData", data:that.mData});
          wx.setStorage({key:"oData", data:that.oData});
          wx.setStorage({key:"procedures", data:that.procedures});
        }
      }
    });
    let logData = that.logData.concat(wx.getStorageSync('loguser') || []);  //如有旧日志则拼成一个新日志数组
    if (logData.length>0){
      wx.getNetworkType({
        success: function(res) {
          if (res.networkType=='none') {                     //如果没有网络
            wx.setStorageSync('loguser', logData)           //缓存操作日志
          }else{
            let loguser = AV.Object.extend('userlog');       //有网络则上传操作日志
            let userlog = new loguser();
            userlog.set('userObjectId',that.globalData.user.objectId);
            userlog.set('workRecord',logData);
            userlog.save().then( resok =>{
              wx.removeStorageSync('loguser');              //上传成功清空日志缓存
            }).catch( (error) =>{                            //上传失败保存日志缓存
              wx.setStorage({ key: 'loguser', data: logData })
            })
          }
        }
      })
    }
  }
});
