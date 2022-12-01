// components/numbers/numbers.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
    behaviors: [ storeBindingsBehavior ], // 通过storeBindingsBehavior来实现自动绑定

    storeBindings: {
        // 数据源
        store, // 指定要绑定的store
        fields: { // 指定要绑定的字段数据
            // numA: () => store.numA, // 绑定字段的第1种方式
            // numA: (store) => store.numA, // 绑定字段的第2种方式
            numA: 'numA', // 绑定字段的第3种方式
            numB: 'numB',
            sum: 'sum'
        },
        actions: { // 指定要绑定的方法
            updateNum2: 'updateNum2'
        }
    },

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        btnHandler2(e) {
            this.updateNum2(e.target.dataset.step);
        }
    }
})