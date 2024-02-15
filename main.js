var huntList = [
	{ title: "Example1", desc: "Example1 description is right here", rating: 4.0, date: "04/05/2020", filter: "kid-friendly" },
	{ title: "Example2", desc: "Example2 description is right here", rating: 7.0, date: "10/22/2023", filter: "18+" },
	{ title: "Example3", desc: "Example3 description is right here", rating: 9.0, date: "06/13/2017", filter: "kid-friendly"},
	{ title: "Example4", desc: "Example4 description is right here", rating: 6.0, date: "12/14/2019", filter: "work" }
];

var inputValue = "";
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

reSort();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const selections = dropdown.querySelector('.selections');
    const options = dropdown.querySelectorAll('.selections li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        selections.classList.toggle('selections-open');

    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            selections.classList.remove('selections-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
			reSort();
        });
    });
});

searchButton.addEventListener('click', function() {
	inputValue = searchInput.value;
	reSort();
});

function reSort() {
	document.querySelectorAll('.tile').forEach(e => e.remove());
	var filter = "";
	
	if (document.getElementById("kid-friendly").classList.contains('active')) {
		filter = "kid-friendly";
	}
	else if (document.getElementById("18+").classList.contains('active')) {
		filter = "18+";
	}
	else if (document.getElementById("work").classList.contains('active')) {
		filter = "work";
	}
	
	if (document.getElementById("z-a").classList.contains('active')) {
		huntList.sort(function(a, b) {
			if (b.title < a.title) {
				return -1;
			}
			if (b.title > a.title) {
				return 1;
			}
			return 0;
		});
	}
	else if (document.getElementById("a-z").classList.contains('active')) {
		huntList.sort(function(a, b) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
	}
	else if (document.getElementById("rating").classList.contains('active')) {
		huntList.sort(function(a, b) {
			if (b.rating < a.rating) {
				return -1;
			}
			if (b.rating > a.rating) {
				return 1;
			}
			return 0;
		});
	}
	else if (document.getElementById("newest").classList.contains('active')) {
		huntList.sort(function(a, b) {
			let date1 = new Date(a.date).getTime();
			let date2 = new Date(b.date).getTime();
			
			if (date2 < date1) {
				return -1;
			}
			if (date2 > date1) {
				return 1;
			}
			return 0;
		});
	}
	console.log("After the if statement");
	
	var container = document.getElementById("container");
	for (var i = 0; i < huntList.length; i++) {
		if ((!(inputValue.localeCompare(huntList[i].title)) || !inputValue) && (!(filter.localeCompare(huntList[i].filter)) || !filter)) {
			var tile = document.createElement("div");
			var textnode = document.createTextNode(huntList[i].title);
			var textnode2 = document.createTextNode(huntList[i].desc);
			var textnode3 = document.createTextNode(huntList[i].rating);
			var textnode4 = document.createTextNode(huntList[i].date);
			var title = document.createElement("span");
			var description = document.createElement("span");
			var rating = document.createElement("span");
			var date = document.createElement("span");
			title.classList.add("tile-title");
			title.appendChild(textnode);
			description.classList.add("tile-desc");
			description.appendChild(textnode2);
			rating.classList.add("tile-rating");
			rating.appendChild(textnode3);
			date.classList.add("tile-date");
			date.appendChild(textnode4);
			tile.classList.add("tile");
			container.appendChild(tile);
			tile.appendChild(title);
			tile.appendChild(description);
			tile.appendChild(rating);
			tile.appendChild(date);
		}
	}
}
