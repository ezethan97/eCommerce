function create(id, name, price, description, image)
{
    document.getElementById("cards").innerHTML += 
    `<div class="card">
    <img src="https://full-stack-images.s3.us-east-2.amazonaws.com/${image}" width="200px" height="200px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" id="title${id}">${name}</h5>
      <p class="card-text" id="desc">${description}</p>
      <a href="#" class="btn btn-primary" id="${id}" onclick="store(${id})">$${price}</a>
    </div>
  </div>`
}