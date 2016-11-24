### 添加了MarkDown

1. 列表1
2. 列表2
3. 列表3
  * 列表1 2 `qwe`

```js
Object.assign(this.$route.query, {page: this.pagination.current_page + 1})
WorkResource.get(this.$route.query)
  .then(response => {
    this.isGeting = false
    if (response.json().data.works.length > 1) {
      let works = vm.works.concat(response.json().data.works)
      vm.$set('works', works)
      vm.$set('pagination', response.json().data.pagination)
      return
    }
  }, () => {
    this.isGeting = false
  })
  // test
```

```php
public function vrproduct()
  {
      $data = UmengService::getData();
      if (!$data) {
          $data = [
              'uv' =>'',
              'pv' =>'',
          ];
      }

      return view('fakes.vrproduct', $data);
  }
```
```stylus
.md-content
  div
    width 100px
  pre
    color #ccdce1
    background-color #212e35
    overflow auto
    padding 25px 10px 15px
    border-radius 5px
    position relative
  code:before
    position absolute
    top 5px
    left 1em
    content attr(class)
    display inline-block
    color #4a626b
    font-size 12px
  #qwe
    width 80em
  .hljs-function
    color #a87fc6
  .hljs-built_in
    color #dcb360
```
```html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
```

![test](http://images.meet-true.com/default/201602/gxiwh52j1udfhgy9.jpg@200w_100q.jpg)

### 添加了MarkDown

1. 列表1
2. 列表2
3. 列表3
  * 列表1 2

### 添加了MarkDown

1. 列表1
2. 列表2
3. 列表3
  * 列表1 2

### 添加了MarkDown

1. 列表1
2. 列表2
3. 列表3
  * 列表1 2