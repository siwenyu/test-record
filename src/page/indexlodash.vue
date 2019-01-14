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
