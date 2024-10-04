const userExists = false;

const user = {
    firstName: "Amar",
    lastName: "Moyya",
    id: 1
}

const updateUser = (userObj) => {
    if(userObj) {
        userExists = true;
        user = userObj;
    } else {
        userExists = false;
        user = {};
    }
}


const products = document.getElementById('products');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    
})



const prds = [];

if(user) {
    const headerNav = document.getElementById('headerNav');
    const userIndication = document.createElement('h5');
    userIndication.classList.add('userIndication');
    const userIcon = document.createElement('i');
    userIcon.classList.add('fa-solid');
    userIcon.classList.add('fa-user');
    userIcon.style.marginRight = '5px';
    userIndication.appendChild(userIcon);
    userMsg = document.createElement('span');
    userMsg.innerText = `Hello! ${user.firstName}`;
    userIndication.appendChild(userMsg);
    let children = headerNav.children;
    headerNav.removeChild(children[0]);
    headerNav.insertBefore(userIndication, headerNav.children[0]);
}


if(prds.length == 0) {
    const info = document.createElement('h3');
    info.innerText = "Sorry! Currently no products to sell";
    info.style.color = 'RED';
    products.appendChild(info);
}