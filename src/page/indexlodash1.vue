<template>
    <div class="container" style="height:2000px">
        <pre>
            
        </pre>
       
        <p>{{ name }}</p>
        
        <el-button @click="handleChange">按钮</el-button><br>
        
    </div>
    
</template>

<script>
import tool from  '@/assets/js/tool.js'
import dataFile from  '@/assets/js/dataFile.js'
import _ from 'lodash';
// CommonJS
let moduleA = require('@/common/js/commonjs')

// ES6 
import * as es from '@/common/js/es6';


export default {
    mounted() {
        let self = this;
        console.log(this);
        let arr ;
        let arr1 ;
        let arr2 ;
        let arr3 ;
        let arr4 ;
        let arr5 ;
        let arr6 ;
        let arr7 ;
        let arr8 ;
        let f1;
        let f2;
        let f3;
        let f4;
        let obj;
        let obj1;
        let obj2;
        let obj3;

        // obj = {};

        // function say(name, name1) {
        //     console.log('saying - ' + name + ',' + name1);
        // }

        // f1 = _.bind(say, obj, _, '我的名字');

        // f1('我的名字2');

        // f1 = function(name, age, h) {
        //     return name + age + h;
        // }
        // function add(n) {
        //     return n + 1;
        // }
        // var func = _.partial(f1, '111', '31231');
        
        // console.log(func(9));

        // function sayName() {
        //     console.log(1111);
        // }
        

        // let sayName1 = _.throttle(sayName, 1000);


        // window.onscroll = sayName1;

        // console.log(sayName1.cancel);

        // console.log(_.castArray(1,2));

        // obj1 = {
        //     name: 'name',
        //     age: [1,2,3,4]
        // }

        // obj2 = _.cloneDeep(obj1);

        // console.log(obj2 == obj1);

        // obj1.age = [12312312];

        // console.log(obj1);
        // console.log(obj2);

        // 浅拷贝只能拷贝基本数据类型，不能拷贝引用类型。

        // arr1 = [1,2,3,5];

        // arr2 = arr1;

        // console.log(arr1);
        // console.log(arr2);

        // arr1 = [1];

        // console.log(arr1);
        // console.log(arr2);

        // obj1 = { a: 10, b: 20, c: 30 };
        // obj2 = _.clone(obj1);
        // obj2.b = 100;
        // console.log(obj1);
        // console.log(obj2);

        // arr1 = [1,2,3];
        // arr2 = _.clone(arr1);
        // arr1[0] = 10;
        // console.log(arr2);


        var objects = [{ 'a': 1 }, { 'b': 2 }];

        var shallow = _.clone(objects);
        objects[0].a = 33;

        console.log(objects);
        console.log(shallow);
        // => true


        

        






        

        

        
        



        

    },
    name: 'page1',
    components: {
        
    },
    data () {
        return {
            cWidth: 400,
            cHeight: 400,
            liList: '1',
            num1: 1,
            htmlData: '<span style="color:red;">这是测试</span>',
            disabledData: undefined,
            testWord: 'helloworld',
            testArr: [1,2,3,4],
            nowData: true,
            name: {
                first: 'first',
                end: 'end'
            }
        }
    },
    methods:{
        handleChange() {
            

        }
    },
    
    
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
