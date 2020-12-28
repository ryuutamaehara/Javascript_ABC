var storage = localStorage;
storage.setItem('fruit1', 'りんご');
storage.fruit2 = 'みかん';
storage['fruit3'] = 'ぶどう';
for (var i = 0, len = storage.length; i < len; i++) {
  var k = storage.key(i);
  var v = storage[k];
  console.log(k + '：' + v);
}
