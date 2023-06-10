var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === ('Фото/Природа.jpg') ){
        myImage.setAttribute ('src','Фото/Тайга.jpg');
    } else { 
        myImage.setAttribute ('src','Фото/Лена.jpeg');
    }
    if(mySrc === ('Фото/Лена.jpeg') ){
        myImage.setAttribute ('src','Фото/Природа.jpg');
    }
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h2') 
function setUserName() {
    var myName = prompt('Введите своё имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать на этот сайт, ' + myName;
}
if(! localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать на этот сайт, ' + storedName ;
}
myButton.onclick = function() {
    setUserName();
}