// index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: 'hello world',
        imgSrc: '/images/1.jpg',
        randomNum1: Math.random() * 10,
        randomNum2: Math.random().toFixed(2),
        count1: 0,
        count2: 0,
    },

    // 定义按钮的事件处理函数
    btnTapHandler(e) {
        console.log(e);
    },

    // +1按钮的事件处理函数
    countChange1(){
        this.setData({
            count1: this.data.count1 + 1
        })
    },

    // +2按钮的事件处理函数
    countChange2(e){
        this.setData({
            // dataset是一个对象，包含了所有通过data-*传递过来的参数项
            // 通过dataset可以访问到具体参数的值
            count2: this.data.count2 + e.target.dataset.info
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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