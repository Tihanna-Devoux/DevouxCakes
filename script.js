function myFunctionregister(){
    window.location.href = "registration.html";
}

function myFunctionlogin(){
    window.location.href = "login.html";
}

function myFunctionRContinue(e){
    event.preventDefault();
    
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var email1 = document.getElementById('email1').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    if(!fname || !lname || !dob || !email1 || !username || !pass){
        window.alert('Please fill in all required fields.')
        return;
    }
    
    var user = {
        fname: fname,
        lname: lname,
        dob: dob,
        email1: email1,
        username: username,
        pass: pass,
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');


    window.location.href = "login.html";

}

function myFunctionRBack(){
    window.location.href = "index.html";
}

function myFunctionLContinue(e){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var result = document.getElementById('result');
    
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    
    if(data==null||data==''){
        result.innerHTML = 'Username and Password are incorrect';
        window.alert('Please register first or check Password and Username')
    } else if(username == data.username && pass == data.pass){
        window.location.href = "product.html";
    } else if (username !== data.username && pass == data.pass){
        result.innerHTML = 'Your username is incorrect';
    } else{
        result.innerHTML = 'Your password is incorrect';
    }
}

function myFunctionLBack(){
    window.location.href = "index.html";
}

function myFunctionSheetCake(e){
    event.preventDefault();
    
    var id = 1;
    var name = "Sheet Cake";
    var price = 10000;
    var image = "sheetcake.jpeg";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }

    var sheetcake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    
    var json = JSON.stringify(sheetcake1);
    localStorage.setItem(id, json);
    console.log('sheet cake added');
}

function myFunctionCircleCake(e){
    event.preventDefault();
    
    var id = 2;
    var name = "Circle Cake";
    var price = 10000;
    var image = "circlecake.JPG";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }
    
    var circlecake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    

    var json = JSON.stringify(circlecake1);
    localStorage.setItem(id, json);
    console.log('circle cake added');
}

function myFunctionHeartCake(e){
    event.preventDefault();
    
    var id = 3;
    var name = "Heart Cake";
    var price = 10000;
    var image = "heartcake.JPG";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }
    
    var heartcake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    
        
    var json = JSON.stringify(heartcake1);
    localStorage.setItem(id, json);
    console.log('heart cake added');
}

function myFunctionLetterCake(e){
    event.preventDefault();
    
    var id = 4;
    var name = "Letter Cake";
    var price = 30000;
    var image = "lettercake.JPG";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }
    
    var lettercake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    
        
    var json = JSON.stringify(lettercake1);
    localStorage.setItem(id, json);
    console.log('letter cake added');
}

function myFunctionNumberCake(e){
    event.preventDefault();
    
    var id = 5;
    var name = "Number Cake";
    var price = 30000;
    var image = "numbercake.JPG";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }
    
    var numbercake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    
       
    var json = JSON.stringify(numbercake1);
    localStorage.setItem(id, json);
    console.log('number cake added');
}

function myFunctionCharacterCake(e){
    event.preventDefault();
    
    var id = 6;
    var name = "Character Cake";
    var price = 40000;
    var image = "charactercake.JPG";
    
    if (localStorage.getItem(id)) {
        alert("This item is already in the cart!");
        return;
    }
    
    var charactercake1 = {
        id: id,
        name: name,
        price: price,
        image: image,
    };
    
       
    var json = JSON.stringify(charactercake1);
    localStorage.setItem(id, json);
    console.log('sheet cake added');
}

function tocart(){
    window.location.href = "cart.html";
}



if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removeItemButtons= document.getElementsByClassName('Removebutton');
    for (var i=0; i<removeItemButtons.length; i++){
        var button = removeItemButtons[i];
        button.addEventListener('click', removeItem);
    }
    
    var quantityI = document.getElementsByClassName('quantity');
    for (i=0; i<quantityI.length; i++){
        var input = quantityI[i];
        input.addEventListener('change', quantityChange);
    }
    
    var addToCart = document.getElementsByClassName('classbutton');
    for (i=0; i<addToCart.length; i++){
        var buttonI = addToCart[i];
        buttonI.addEventListener('click', addToCartClicked);
    }
}

function removeItem(event){
    var buttonClicked = event.target;
    var id = buttonClicked.parentElement.dataset.id;

    localStorage.removeItem(id);

    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChange(event){
    var input = event.target;
    
    if(isNaN(input.value)|| input.value <= 0){
        input.value = 1;
    }
    
    updateTotal();
}

function addToCartClicked(event){
    var buttonI = event.target;
    var productItems = buttonI.parentElement;

    var id = productItems.dataset.id;
    var parsedItem = JSON.parse(localStorage.getItem(id));
    
    var nameElement = parsedItem.name;
    var priceElement = parsedItem.price;
    var imageElement = parsedItem.image;
    
    var name = nameElement;
    var price = priceElement;
    var image = imageElement;
    
    addLayout();
    updateTotal();
}

function addLayout() {
    var cartList = document.getElementsByClassName('cartList')[0];
    if (!cartList) return;

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i); 
        var item = JSON.parse(localStorage.getItem(key));

        var cartRow = document.createElement('div');
        var cartContent = `
            <div class="divimg1" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" />
                <p>${item.name}</p>
                <p>Base Price: $${item.price}</p>
                <input type="number" class="quantity" value="1" />
                <button type="button" class="Removebutton">Remove</button>
            </div>
        `;
        
        cartRow.innerHTML = cartContent; 
        cartList.append(cartRow); 

        var quantityInput = cartRow.getElementsByClassName('quantity')[0];
        quantityInput.addEventListener('change', quantityChange);
    }
}
function updateTotal(){
    var cartList = document.getElementsByClassName('cartList')[0];
    var cartItems = cartList.getElementsByClassName('divimg1');
    var subtotal = 0;
    
    
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var priceText = cartItem.getElementsByTagName('p')[1].innerText;
        var priceString = priceText.split('$')[1];

        var price = parseFloat(priceString.replace(',', ''));

        var quantity = parseInt(cartItem.getElementsByClassName('quantity')[0].value, 10);
        subtotal += price * quantity;
    }
    
    var discount = 100;
    var tax = 900;
    var total = (subtotal - discount) + tax;
    
    document.getElementsByClassName('itemSubTotal')[0].innerText='$'+subtotal.toFixed(2);
    document.getElementsByClassName('itemDiscount')[0].innerText='$'+discount.toFixed(2);
    document.getElementsByClassName('itemTax')[0].innerText='$'+tax.toFixed(2);
    document.getElementsByClassName('itemTotal')[0].innerText='$'+total.toFixed(2);
};



if (document.getElementsByClassName('cartList')[0]) {
    addLayout();
    updateTotal();
}

function backToproducts(){
    window.location.href = "product.html";
}

function checkout(){
    window.location.href = "checkout.html";
}

function displayCheckoutItems() {
    var checkoutList = document.getElementsByClassName('checkoutList')[0];
    if (!checkoutList) return;

    checkoutList.innerHTML = '';

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var item = JSON.parse(localStorage.getItem(key));

        var row = document.createElement('div');
        row.className = 'checkoutItem';
        row.innerHTML = `
            <div>
            <img src="${item.image}" alt="${item.name}" width="80">
            <p>${item.name}</p>
            <p>Price: $${item.price}</p>
            </div>
        `;
        checkoutList.appendChild(row);
    }
}

window.addEventListener('DOMContentLoaded', displayCheckoutItems);


function ConfirmCheck(){
    window.alert("Your order is confirmed and being processed");
}

function CancelCheck(){
    window.location.href = "product.html";
}
