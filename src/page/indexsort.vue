<template>
    <div class="container">
        <pre>
            js中常用的排序

            ## 冒泡
            ### 排序原理
            1. 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。
            2. 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。


            ## 快排

            ## js中的sort

            ## 数组和对象
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

        function sortTwo(arr, n, m){
            // 交换两个
            var tmp, n, m;
            tmp = arr[m];
            arr[m] = arr[n];
            arr[n] = tmp;

        }
        function sortOnePart(arr, left, right) {
            console.log(left, right);
            // 基于一个基数的排序
            var pointValue = arr[Math.floor((right + left) / 2)];
            var i = left;
            var j = right;
            console.log('待排序的数组是：');
            console.log(arr);
            console.log('这次的基数是：' +  pointValue);
            
            while (i <= j) {
            // 两侧分别比较，移动指针，直到两边都找到了元素不在当前区域
            while (arr[i] < pointValue) {
                    i++;
                }

                while (arr[j] > pointValue) {
                    j--;
                }

                if (i <= j) {
                    sortTwo(arr, i, j);
                    i++;
                    j--;
                }
            }
            console.log('排序结果是：');
            console.log(arr);

            // 返回中间位置
            return i;
        }
        function quickSort(arr, left, right) {
            console.log('此次排序开始------------------');
            // 升序，递归操作
            left = (typeof left !== "number" ? 0 : left);

	        right = (typeof right !== "number" ? arr.length - 1 : right);

            if (!arr) {
                return;
            }
            if (arr.length < 2) {
                return arr;
            }
            // 最新的中间位置
            var indexNew = sortOnePart(arr, left, right);
            console.log('最新的中间位置:' + indexNew);
            console.log('此次排序结束------------------');
            if (left < indexNew - 1) {
                quickSort(arr, left, indexNew - 1);
            }
            if (right > indexNew) {
                quickSort(arr, indexNew, right);
            }

            return arr;

        }
        let arr = [2, 41, 1, 100, 54, 'aAa','A', 78, 88, 'a'];
        console.log(arr.sort());
        console.log('aAa'.charCodeAt());
        console.log('b'.charCodeAt());
        console.log('A'.charCodeAt());
        console.log('B'.charCodeAt());
        console.log([9, 20, 'A'].sort(sortBy));

        function sortBy(next, pre){
            console.log(next, pre);
        }
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
            require([
                '../common/js/amd'
            ], function(amd) {
                'use strict';
                console.log(amd.add(3,4));
            });
        },
        bubbleSort(arr) {
            // 升序
            let tmp;
            if (!arr) {
                return;
            }
            if (arr.length < 2) {
                return arr;
            }
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }
            return arr;
        },
    },
    
    
    computed: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
