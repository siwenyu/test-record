import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import indexmk from '@/page/indexmk'
import indexcallapply from '@/page/indexcallapply'
import indexanquan from '@/page/indexanquan'
import indexemoji from '@/page/indexemoji'
import indexbind from '@/page/indexbind'
import indexflex from '@/page/indexflex'
import indexsort from '@/page/indexsort'
import indexlodash from '@/page/indexlodash'










import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'


import jQuery from 'jquery'


Vue.use(Router);
Vue.component('c-button', {
    data: function (){
        return {
            count: 0
        }
    },
    mounted() {
        console.log('全局c-button加载了');
    },
    template: '<button @click="count++">你点击了我{{ count }}次</button>'
});

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: indexemoji
        },{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/indexmk',
            name: 'indexmk',
            component: indexmk
        },
        {
            path: '/indexcallapply',
            name: 'indexcallapply',
            component: indexcallapply
        },
        {
            path: '/indexanquan',
            mame: 'indexanquan',
            component: indexanquan
        },
        {
            path: '/indexemoji',
            mame: 'indexemoji',
            component: indexemoji
        },
        {
            path: '/indexbind',
            mame: 'indexbind',
            component: indexbind
        },
        {
            path: '/indexflex',
            mame: 'indexflex',
            component: indexflex
        },
        {
            path: '/indexsort',
            mame: 'indexsort',
            component: indexsort
        },
        {
            path: '/indexlodash',
            mame: 'indexlodash',
            component: indexlodash
        }
    ]
})
