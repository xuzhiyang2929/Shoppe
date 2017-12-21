//import { Mall } from 'class/Mall.js';
var app = getApp();
Page({
  data: {
    mall: {}
  },
  onLoad: function (options) {
    var mallId = options.id;
    var url = app.globalData.doubanBase +
      "/v2/movie/subject/" + mallId;
    var mall = new Mall(url);
    // var movieData = movie.getMovieData();
    // var that = this;
    // movie.getMovieData(function (movie) {
    //   that.setData({
    //     movie: movie
    //   })
    // })
    //C#、Java、Python lambda
    mall.getMovieData((mall) => {
      this.setData({
        mall: mall
      })
    })
  },

  /*查看图片*/
  viewMoviePostImg: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
    })
  },
})