// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      money: Random.float( 60, 5000, 1,3) ,// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      integral: Random.integer( 100, 1000 ),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      Newmoney: Random.float( -100, 300, 1,2) // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}


const produceNewsData1 = function () {
  let articles1 = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject1 = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      // date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // money: Random.float( 60, 5000, 1,3) ,// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // integral: Random.integer( 100, 1000 ),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // Newmoney: Random.float( -100, 300, 1,2) // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles1.push(newArticleObject1)
  }
  return {
    articles1: articles1
  }
}
// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData)
Mock.mock('http://el.szeltec.com/dev/wxapi', 'post', produceNewsData)
Mock.mock('http://el.szeltec.com/dev/wxapi1', 'post', produceNewsData1)
