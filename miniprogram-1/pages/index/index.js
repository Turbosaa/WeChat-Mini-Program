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
        msg: '你好，',
        type: 1,
        flag: true,
        arr1: ['A', 'B', 'C'],
        userList: [
            {id: 1, name: '小红'},
            {id: 2, name: '小黄'},
            {id: 3, name: '小蓝'}
        ]
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

    // input输入框的事件处理函数
    inputHandler(e) {
        // e.detail.value是变化过后，文本框最新的值
        // console.log(e.detail.value);
        this.setData({
            msg: e.detail.value
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