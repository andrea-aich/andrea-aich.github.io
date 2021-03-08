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
}

