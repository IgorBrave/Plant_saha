var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === ('Природа.jpg') ){
        myImage.setAttribute ('src','Тайга.jpg');
    } else { 
        myImage.setAttribute ('src','Лена.jpeg');
    }
    if(mySrc === ('Лена.jpeg') ){
        myImage.setAttribute ('src','Природа.jpg');
    }
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h2') 
function setUserName() {
    var myName = prompt('Введите своё имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать ' + myName;
}
if(! localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать ' + storedName + ' на мой сайт';
}
myButton.onclick = function() {
    setUserName();
}