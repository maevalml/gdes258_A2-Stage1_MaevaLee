var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');
document.getElementById("menu-toggle").addEventListener("click",function(){
  document.getElementById("menu").classList.toggle("active");
});
console.log(id);

var client = contentful.createClient({
    space: '64s4kauvg214',
    accessToken: 'kFxLtsuLQDJVQyF-cu6pJxlZeWB0EpFUaRBGAPNceSQ',
  });


var product = document.getElementById('product');
client.getEntry(id).then(function (entry) {
    console.log(entry);
    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    product.appendChild(name);

    var contentDiv = document.createElement('div'); //create new div
        contentDiv.classList.add('content');
            var mainImage = document.createElement('img');
            mainImage.classList.add('details-image');
            if (entry.fields.mainImage){
                mainImage.src = entry.fields.mainImage.fields.file.url;
            }
            product.appendChild(mainImage);

            var descriptionPrice = document.createElement('div');//new div
            descriptionPrice.classList.add('description-price');//new class
            var description = document.createElement('p');
            description.classList.add('description');
            description.innerHTML = entry.fields.description;
            product.append(description);

            var price = document.createElement('h4');
            price.innerHTML = entry.fields.price;
            product.append(price);
            contentDiv.appendChild(descriptionPrice);


    // create a gallery
    var galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery'); //add a class for css
    entry.fields.gallery.forEach(function(image){ 
        var img = document.createElement('img');
        img.classList.add('gallery-img');
        img.src = image.fields.file.url;
        product.appendChild(img);
    });
    product.appendChild(galleryDiv);
})