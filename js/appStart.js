console.log("its working")
const photo = document.querySelector('.card__photo');
axios.get("https://pixabay.com/api/?key=28859990-ff86c3cd0cff974ba561d7ff3&q=yellow+flowers&image_type=photo").then((res) =>{photo.src=res.data.hits[1].largeImageURL});