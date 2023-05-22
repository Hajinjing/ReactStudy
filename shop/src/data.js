// let a = 10;
// let b = 12;
//
// // export default a;  // 한 개 export
// export {a, b};  // 여러개 export




let a = ['kim', 20] // array 자료  인덱싱으로 출력 가능 a[0]
let b = {name:'kim', age:20} // object
let c = b.name

//array 안에 object가 들어있는 구조
let data = [
    {
        id : 0,
        imageUrl : "https://codingapple1.github.io/shop/shoes1.jpg",
        title : "White and Black",
        content : "Born in France",
        price : 120000
    },

    {
        id : 1,
        imageUrl: "https://codingapple1.github.io/shop/shoes2.jpg",
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 2,
        imageUrl: "https://codingapple1.github.io/shop/shoes3.jpg",
        title : "Grey Yordan",
        content : "Born in the States",
        price : 130000
    }
]

export default data;
