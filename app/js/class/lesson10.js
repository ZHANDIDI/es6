// 数据结构
// Set的用法    Weakset的用法
// Map的用法    Weakmap的用法

{
  // 向Set中加入值的时候不会发生类型转换，所以5和”5”是两个不同的值，Set内部判断两个值是否相等，使用的是 ===，这就意味着这两个对象总是不相等。唯一列外的是NaN本身（精确相等运算符认为NaN不等于自身）
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log('size', list.size);
}

{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);
  console.log('size', list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);

  // 去重
  let arr = [1, 2, 3, 1, 2];
  let list2 = new Set(arr);
  console.log('unique', list2);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('add'));
  console.log('delete', list.delete('add'), list);
  list.clear();
  console.log('list', list);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let value of list) {
    console.log('value--', value);
  }
  for (let key of list.keys()) {
    console.log('key', key);
  }
  for (let value of list.values()) {
    console.log('value', value);
  }
  for (let [key, value] of list.entries()) {
    console.log('entries', key, value);
  }

  list.forEach(function (item) {
    console.log(item);
  })
}

{
  /*
    1、WeakSet 成员只能够是对象 
    2、作为 WeakSet 成员的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在与WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
    3、使用WeakSet存储对象实例的好处是，由于是对对象实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑weaket，也不会出现内存泄漏。
  */
  let weakList = new WeakSet();
  let arg = {};
  weakList.add(arg);
  // Invalid value used in weak set
  // weakList.add(2);
  console.log('weakList', weakList);
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456);
  console.log('map', map, map.get(arr));
}

{
  let map = new Map([['a', 123], ['b', 456]]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  let weakmap = new WeakMap();
  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}