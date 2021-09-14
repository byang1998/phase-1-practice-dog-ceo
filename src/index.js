console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(imageArray => {
    // console.log(imageArray)
    imageArray.message.forEach(image => addImage(image))
});

function addImage(source){

    // get DogImageContainer 
    const DogImageContainer = document.querySelector('#dog-image-container')
    // create imageTag
    let imageTag = document.createElement('img');
    //console.log(image)
    // set img source to source
    imageTag.src = source;
    
    // append img to dog container

    DogImageContainer.append(imageTag)

    // console.log(source)
}




const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(response => response.json())
.then(data => {
   
     console.log(Object.keys(data.message))
    Object.keys(data.message).forEach(breed => addbreed(breed))

})

function addbreed(breed){
    //get the ul//
//create li//
// set the created li's inner text to breed
// append li to ul 


console.log(breed)
}