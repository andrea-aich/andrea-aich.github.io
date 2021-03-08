/* Java script functions to make the CV interactive */

function displayTable(buttonID) {
	/* Erasing all tables first*/
	var x = document.getElementsByClassName("table");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}

	var table_name = buttonID.split("Button",1);
	table_name = table_name + "Table";
	document.getElementById(table_name).style.display = "inline-block";

	/* Changing the color of the clicked button*/
	var y = document.getElementsByClassName("btn");
	for (i = 0; i < y.length; i++) {
	  y[i].style.color = "#264653";
	}

	document.getElementById(buttonID).style.color = "#2a9d8f";

	/* Remove all maps as well*/
	var x = document.getElementsByClassName("map");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
}

function displayMap(Location) {
	/* Adding the correct map according to which table row was selected*/
	var x = document.getElementsByClassName("map");
	var i;
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}

	var map_name = Location + "Map";
	document.getElementById(map_name).style.display = "inline-block";
}
