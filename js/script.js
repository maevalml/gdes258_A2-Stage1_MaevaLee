console.log("hello world");
document.getElementById("menu-toggle").addEventListener("click",function(){
  document.getElementById("menu").classList.toggle("active");
});
var client = contentful.createClient({
    space: '64s4kauvg214',
    accessToken: 'kFxLtsuLQDJVQyF-cu6pJxlZeWB0EpFUaRBGAPNceSQ',
  });

  var placeForContent = document.getElementById('place-for-content');
  var productsGallery = document.createElement('div');
  productsGallery.classList.add('products-gallery');
  placeForContent.appendChild(productsGallery);
  // gets all the entries as a json
  client.getEntries({ content_type: 'assignment2Stage1MaevaLee',}).then(function (entries) {
    // loops through the json to look at one entry at a time
    entries.items.forEach(function (entry) {
        console.log(entry);
        //if statement checks that this field exists
    var entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-div');

      if (entry.fields.name) {
            var name = document.createElement('h3');
            name.innerHTML = entry.fields.name;
            entryDiv.append(name);
            productsGallery.append(entryDiv);
      }
        var contentDiv = document.createElement('div'); //create new div
        contentDiv.classList.add('content');
            var mainImage = document.createElement('img');
            mainImage.classList.add('main-image');
            if (entry.fields.mainImage){
                mainImage.src = entry.fields.mainImage.fields.file.url;
            }

            var linkToDetails = document.createElement('a');
            linkToDetails.href = 'details.html?id=' + entry.sys.id;
            linkToDetails.appendChild(mainImage);

            entryDiv.appendChild(name);
            contentDiv.appendChild(linkToDetails);
            // placeForContent.appendChild(entryDiv);

            var descriptionPrice = document.createElement('div');//new div
            descriptionPrice.classList.add('description-price');//new class
            var description = document.createElement('p');
            description.classList.add('description');
            description.innerHTML = entry.fields.description;
            descriptionPrice.append(description);

            var price = document.createElement('h4');
            price.innerHTML = entry.fields.price;
            descriptionPrice.append(price);
            // contentDiv.appendChild(descriptionPrice);
            entryDiv.appendChild(contentDiv);
          
            console.log(entry.fields.mainImage.fields.file.url);

    });
});