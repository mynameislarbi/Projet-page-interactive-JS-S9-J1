/// Fonctionnalité 1 ///
let footer = document.querySelector("footer")
footer.addEventListener("click", function(){
  console.log("Clique")
});

/// Fonctionnalité 1 bis ///
let footerCount = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCount++;
    console.log(`Clique numéro ${footerCount}`);
});

/// Fonctionnalité 2 ///
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});


/// Fonctionnalité 3 ///
let firstcard = document.getElementsByClassName("card-body")[0];
firstcard.getElementsByTagName("button")[1].addEventListener('click', function (){
  firstcard.getElementsByTagName("p")[0].classList.add("text-danger");
});

/// Fonctionnalité 4 ///
let secondcard = document.getElementsByClassName("card-body")[1];
secondcard.getElementsByTagName("button")[1].addEventListener('click', function (){
  secondcard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

/// Fonctionnalité 5 ///
let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName('link')[0];

console.log(bootstrap);

	navbar.addEventListener("dblclick", destroyCDN);

	function destroyCDN() {
		if  (bootstrap.rel === "stylesheet") { 
			bootstrap.rel = "styleDisabled";
		} else {
			bootstrap.rel = "stylesheet";
		}
		};