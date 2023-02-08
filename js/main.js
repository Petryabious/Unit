// Работа с навигацией 
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

// находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// обходим ссылки с помощью foreach
navLinks.forEach(function(item){
	item.addEventListener("click", function () { 
		navIcon.classList.remove('nav-icon--active'); // убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // убираем активный класс у блока моб. навигации
	 })
})

// Работа с формой поиска
const searchForm = document.querySelector(".search");
const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", function(e){

    if (!searchForm.classList.contains("search--visible")) {
            e.preventDefault();
            searchForm.classList.toggle("search--visible");
    } 
})