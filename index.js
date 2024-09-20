
const h1 = document.querySelector ("h1");
h1.innerText = ("productos");

const section = document.querySelector ("container-fluid");

let array = [];

for (let i = 0; i < 10; i++) {
    
    const card =
       ` <div class="card" style="width: 18rm;">
        <a href="#"><img src= "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt= "producto ${i}">
        <div class="card-body">
          <h5 class="card-title">coches ${i}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> `

      array.push(card)
}

document.querySelector('section').innerHTML = array.join("")
