// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [] // 随机颜色的列表
    },

    getColors() { // 获取随机颜色的方法
        wx.request({ // 发起请求，获取随机颜色值的数组
            url: 'https://www.escook.cn/api/color',
            method: 'GET',
            success: ({ data: res }) => {
                this.setData({
                    colorList: [...this.data.colorList, ...res.data] // 将获取的新数组和原数组通过展开运算符进行拼接
                });
                console.log(this.data.colorList);
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors();
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