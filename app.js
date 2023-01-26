const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  id: 'ic1',
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  id: 'ic2',
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://images.unsplash.com/photo-1555529211-3237f6e13d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80',
  price: 2,
  id: 'ic3',
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  id: 't1',
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  id: 't2',
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  id: 'c1'
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  id: 'c2'
}]

let cart = {
  iceCream: [],
  toppings: [],
  container: {}
}

function addIceCreamToCart(id){
  let added = iceCream.find(ic => ic.id == id)
  let alreadyInCart = cart.iceCream.find(t => t.id == id)

  if(!alreadyInCart){
    cart.iceCream.push(added)
    added.quantity++
  }else{
    alreadyInCart.quantity++
  }

}
function addToppingToCart(id){
  let added = toppings.find(t => t.id == id)
  let alreadyInCart = cart.toppings.find(t => t.id == id)

  if(!alreadyInCart){
    cart.toppings.push(added)
    added.quantity++
  }else{
    alreadyInCart.quantity++
  }

}
function addContainerToCart(id){
let added = containers.find(c => c.id == id)

if (cart.container) {
  cart.splice(containers)
  cart.container.push(added)
  
}else{
  cart.container.push(added)
}

}

function drawStore(){
  drawCream()
  drawToppings()
  drawContainers()
}

function drawCream(){
  let creamElem = document.getElementById("ice-cream")
  let template = ''

  iceCream.forEach(item => {
  template += `
  <div class="col-md-6 col-lg-4 my-3">
  <div class="card">
    <img src="${item.image}" alt="">
  </div>
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <p class="lobster">${item.name}</p>
      <p>$${item.price}</p>
    </div>
    <button class="btn btn-outline-success">Add</button>
  </div>
</div>`
  })
  
  creamElem.innerHTML = template
}

function drawToppings(){
  let toppingsElem = document.getElementById("toppings")
  let template = ''

  toppings.forEach(item => {
  template += `
  <div class="col-md-6 col-lg-4 my-3">
  <div class="card">
    <img src="${item.image}" alt="">
  </div>
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <p class="lobster">${item.name}</p>
      <p>$${item.price}</p>
    </div>
    <button class="btn btn-outline-success">Add</button>
  </div>
</div>`
  })
  
  toppingsElem.innerHTML = template
}

function drawContainers(){
  let containerElem = document.getElementById("vessel")
  let template = ''

  containers.forEach(item => {
  template += `
  <div class="col-md-6 col-lg-4 my-3">
  <div class="card">
    <img src="${item.image}" alt="">
  </div>
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <p class="lobster">${item.name}</p>
      <p>$${item.price}</p>
    </div>
    <button class="btn btn-outline-success">Add</button>
  </div>
</div>`
  })
  
  containerElem.innerHTML = template
}

function drawCart(){

}

function calculateTotalPrice(){
  let total = 0
  cart.forEach(item => {
    total += item.price * item.quantity
  })
  return total
}

function checkout(){
  cart = {
    iceCream: [],
    toppings: [],
    container: {}
  }
  drawCart()
}

function removeItem(id){
let remove = cart.find(r => r.id == id)

cart.splice(remove)
}

drawStore()