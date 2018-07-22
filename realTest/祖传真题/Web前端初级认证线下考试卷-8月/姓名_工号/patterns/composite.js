// 前端开发中会频繁涉及到表单的校验、保存等操作。
// 一般的表单校验代码如下：
function validate() {
  var name = document.getElementById('name')
  var address = document.getElementById('address')

  if (name.value.length > 10) {
    console.log('name should less than 10')
    return false
  }

  if (address.value.length > 100) {
    console.log('address should less than 100')
    return false
  }

  return true
}

// 这种写法把表单中所有元素的校验都放在一个方法中实现。存在的问题是：
// 1、耦合性很强。要增减元素或调整检验规则的时候，都要修改校验方法。
// 2、不够灵活。校验方法中的校验元素必须事先确定，无法实现动态表单的校验。

// 组合（composite）模式是为创建动态用户接口量身定制的一种设计模式。组合模式将对象组合成树形结构以表示“部分-整体”的层次结构。
// 使用这种模式，通过一个命令就可以在多个对象上激发复杂的或递归的行为。
// 请使用组合模式完善下面的代码

function Field (element, validator) {
  this.element = element
  this.validator = validator
}

Field.prototype.validate = function() {
  // 请补全代码
}

function CompositeForm () {
  this.items = []
}

CompositeForm.prototype.add = function(item) {
  // 请补全代码
}

CompositeForm.prototype.validate = function() {
  // 请补全代码
}

var form = new CompositeForm()
var nameField = new Field(document.getElementById('name'), function(element) {
  if (element.value.length > 10) {
    console.log('name should less than 10')
    return false
  }

  return true
})

var addressField = new Field(document.getElementById('name'), function(element) {
  if (element.value.length > 100) {
    console.log('address should less than 100')
    return false
  }

  return true
})

form.add(nameField)
form.add(addressField)
form.validate()


