//index.js
const Parser= require('../../lib/xmldom/dom-parser')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    var xbrl = require('../../model/xbrl').sjll;
    let xParser = new Parser.DOMParser();
    let vdoc = xParser.parseFromString(xbrl);
    console.log(vdoc.getElemensByTagName('gl-cor:accountMainID '))
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
