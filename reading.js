var bookdatas = [{
    name: "被討厭的勇氣：自我啟發之父「阿德勒」的教導",
    author: "岸見一郎, 古賀史健",
    publish_house: "究竟",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/065/31/0010653153.jpg&v=543baa1a&w=348&h=348",
    price: 300,
    is_discount: true,
    discount: 0.79,
    link_book: "https://www.books.com.tw/products/0010653153",
    link_author: "https://search.books.com.tw/search/query/key/%E5%B2%B8%E8%A6%8B%E4%B8%80%E9%83%8E/adv_author/1/",
    date: "2014/10/30"
}, {
    name: "被討厭的勇氣 二部曲完結篇：人生幸福的行動指南",
    author: "岸見一郎, 古賀史健",
    publish_house: "究竟",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/073/21/0010732121.jpg&v=57fcbf48&w=348&h=348",
    price: 320,
    is_discount: true,
    discount: 0.79,
    link_book: "https://www.books.com.tw/products/0010732121",
    link_author: "https://search.books.com.tw/search/query/key/%E5%B2%B8%E8%A6%8B%E4%B8%80%E9%83%8E/adv_author/1/",
    date: "2016/11/01"
}, {
    name: "你的未來值多少？：像精算師一樣思考，估算出最適合自己的選擇",
    author: "彼德．紐沃斯",
    publish_house: "天下雜誌 ",
    img: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/075/34/0010753434.jpg&v=591d77ac&w=348&h=348",
    price: 300,
    is_discount: false,
    discount: 0.9,
    link_book: "https://www.books.com.tw/products/0010753434",
    link_author: "https://search.books.com.tw/search/query/key/%E5%BD%BC%E5%BE%B7%EF%BC%8E%E7%B4%90%E6%B2%83%E6%96%AF/adv_author/1/",
    date: "2017/05/31"
}, {
    name: "深夜加油站遇見蘇格拉底",
    author: "丹．米爾曼",
    publish_house: "心靈工坊",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/038/18/0010381877.jpg&v=46ee7e23&w=348&h=348",
    price: 260,
    is_discount: true,
    discount: 0.7,
    link_book: "https://www.books.com.tw/products/0010381877",
    link_author: "https://search.books.com.tw/search/query/key/%E4%B8%B9%EF%BC%8E%E7%B1%B3%E7%88%BE%E6%9B%BC/cat/all",
    date: "2007/09/12"
}, {
    name: "哈利波特全集（1-7）",
    author: "J.K.羅琳",
    publish_house: "皇冠",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/055/07/0010550779.jpg&v=5aeaf2b9&w=348&h=348",
    price: 3005,
    is_discount: true,
    discount: 0.73,
    link_book: "https://www.books.com.tw/products/0010550779#P00a400020053",
    link_author: "https://search.books.com.tw/search/query/key/J.K.%E7%BE%85%E7%90%B3/adv_author/1/",
    date: "2012/07/04"
}, {
    name: "遇見靈熊",
    author: "班‧麥可森/著，Bo2/繪",
    publish_house: "台灣東方",
    img: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/026/29/0010262994.jpg&v=446a1d42&w=348&h=348",
    price: 250,
    is_discount: false,
    discount: 0.9,
    link_book: "https://www.books.com.tw/products/0010262994",
    link_author: "https://search.books.com.tw/search/query/key/%E7%8F%AD%E2%80%A7%E9%BA%A5%E5%8F%AF%E6%A3%AE%2F%E8%91%97%EF%BC%8CBo2%2F%E7%B9%AA/adv_author/1/",
    date: "2004/06/30"
}, {
    name: "小王子 Le petit prince",
    author: "聖．修伯里",
    publish_house: "驛站",
    img: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/067/70/0010677079.jpg&v=55644b30&w=348&h=348",
    price: 220,
    is_discount: true,
    discount: 0.7,
    link_book: "https://www.books.com.tw/products/0010677079",
    link_author: "https://search.books.com.tw/search/query/key/%E8%81%96%EF%BC%8E%E4%BF%AE%E4%BC%AF%E9%87%8C/adv_author/1/",
    date: "2015/06/01"
}];

var vm = new Vue({
    el: "#app",
    data: {
        mode_detail: true,
        mode_size: false,
        books: bookdatas
    }
});