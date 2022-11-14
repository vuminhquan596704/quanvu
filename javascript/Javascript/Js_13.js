// JavaScript Document
function xu_ly(){
		var input = document.getElementById("input").value;
		var divide_vocabolary = new Array();
		var divide_word = new Array();
		var output ="";
		divide_word = input.split("");
		output += "Characters: " + divide_word.length + "<br>";
		divide_vocabulary = input.split(" ");
		output += "Words: " + divide_vocabulary.length + "<br>";
		var dem = new Array();
		for(var z = 0 ; z < 123 ; z++)
			{
				dem[z] = 0;
			}
		for(var i = 0 ; i < input.length; i++)
			{
				if (64 < input.charCodeAt(i) && input.charCodeAt(i) < 91) {
                        dem[input.charCodeAt(i)]++;
                    }
                    else if (96 < input.charCodeAt(i) && input.charCodeAt(i) < 123) {
                        dem[input.charCodeAt(i) - 32]++;
                    }
                    else if (47 < input.charCodeAt(i) && input.charCodeAt(i) < 58) {
                        dem[input.charCodeAt(i)]++;
                    }
                    else {
                        dem[input.charCodeAt(i)] = 0;
                    }
			}
		for (var j = 0; j < dem.length; j++){
				if (dem[j] != 0){
					output += "Character '" + String.fromCharCode(j) + "': " +  dem[j] + "<br>"; 
				}
		}
		 document.getElementById("output").innerHTML = output;
	}