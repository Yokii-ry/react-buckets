# 笔记

# react

- 1、什么是jsx？

  ```js
  是将js和html混合在一起的用法，将组件的数据、样式、结构组合在一起。
  ```

- 2、React.createElement("div",{className:'title',style:{color:'red'}})

  ```js
   `第一个参数是标签名称`  `第二个参数是标签的属性，是被一个对象包裹起来的` `第二个之后的参数是它的孩子。`
  ```

  

- 函数组件

  ```js
  本质是一个函数，接受props参数，返回了一个react元素。(注：函数名字首字母要大写。)
  示例：
  function Welcome(props){
    return <h1><hello,{props.name}/h1>
  }
  let element = <Welcome name = "lry" />
   （注：element打印出来里面的type是一个函数）
  react.createElement(Welcome,{name:'zhufeng'})
  ```

----------------------------------拓展Tips----------------------------------------------

- 函数式编程和面向对象编程的区别？

  ```js
  函数式编程核心是数据流，里面是一个个处理函数（例如compose、filter）。
  面向对象编程里，一个个对象或者实例。
  ```

- compose

  ```js
  `compose`就是一系列的任务(函数)，也是一个任务队列。
  例：
  let tasks = [step1,step2,step3,step4]
  //每一个step都是一个步骤，按照步骤一步步的执行到结尾。
  compose是一个很重要的工具函数，有三点要说明：
  1、第一个函数可以接受多个参数，后面的函数只能接受一个参数。
  2、执行顺序是自右向左。
  3、所有函数的执行都是同步的。
  ```

- freeze和seal的区别

  ```js
  Object.freeze:不可扩展、不可删除，不可修改。
  Object.seal：不可扩展、不可删除，但可以修改。
  ```

  