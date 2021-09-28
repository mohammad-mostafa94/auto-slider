const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg'
];

// let index = 0;
// const image = document.getElementById("imageId");
// setInterval( ()=>{
//         if (index >= images.length) {
//             index = 0;
//         }
//        let imgUrl = images[index];
//        image.setAttribute("src",imgUrl);
//     index++;
//     }
//     ,1000)


let index = 0;
const image = document.getElementById("imageId");
setInterval(()=>{
    if (index >= images.length) {
        index = 0;
    }
    let imageUrl = images[index];
    image.setAttribute("src",imageUrl);
    index++;
}
    ,1000)