// 在以下某一行中改动部分代码
// 使得在Chrome浏览器上的执行效率提高40%以上
// 提供优化前后的每秒执行次数（提供截图）

(function() {
  var myarray = Array(100),
    sum = myarray.length,
    ii = Math.random();
  for (i = 0; i < sum; ) {
    myarray[i++] = ii;
  }
})()

// 可选的性能测试工具：
// https://jsfiddle.net/liwenfu/fd73u6uw/
