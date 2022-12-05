// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [], // 存放轮播图数据的列表
        gridList: [] // 存放九宫格数据的列表
    },

    // 获取轮播图数据的方法
    getSwiperList() {
        wx.request({
            url: 'https://www.escook.cn/slides', // 请求接口的地址，必须基于https协议
            method: 'GET', // 请求的方式
            success: (res) => { // 请求成功后的回调函数
                this.setData({
                    swiperList: res.data
                });
            }
        })
    },

    // 获取九宫格数据的方法
    getGridList() {
        wx.request({
            url: 'https://www.escook.cn/categories', // 请求接口的地址，必须基于https协议
            method: 'GET', // 请求的方式
            success: (res) => { // 请求成功后的回调函数
                this.setData({
                    gridList: res.data
                });
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList();
        this.getGridList();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})