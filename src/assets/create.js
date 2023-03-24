function create(name, price, description, image)
{
    document.getElementById("cards").innerHTML += 
    `<div class="card">
    <img src="https://full-stack-images.s3.us-east-2.amazonaws.com/${image}" width="200px" height="200px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" id="title">${name}</h5>
      <p class="card-text" id="desc">${description}</p>
      <a href="#" class="btn btn-primary" id="price" onclick="store(0)">$${price}</a>
    </div>
  </div>`
}