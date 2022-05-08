var numresult,
	str,
 	isNotCal = false // si el cálculo se ha realizado
	 function onclicknum(nums) {
		console.log(nums)
		str = document.getElementById("nummessege")
		if(isNotCal == true) {
			str.value = ""
		}
		str.value = str.value + nums
		isNotCal = false
		}

	function onclickclear() {
		str = document.getElementById("nummessege")
		str.value = ""

	}

	function onclickresult(){
		isNotCal = true
		str = document.getElementById("nummessege")

		numresult = eval(str.value)
		str.value = numresult
	}

function onclickDelete(){
	if(isNotCal == false){
		str = document.getElementById("nummessege");
		str.value = str.value.substr(0, str.value.length -1)
	} else {
		inclickclear()
	}
}


document.onkeydown = function(e){
	switch(e.key){
		case'1':
			onclicknum(1);
		break

		case'2':
			onclicknum(2);
		break
		
		case'3':
			onclicknum(3);
		break

		case'4':
			onclicknum(4);
		break

		case'5':
			onclicknum(5);
		break


		case'6':
			onclicknum(6);
		break

		case'7':
			onclicknum(7);
		break


		case'8':
			onclicknum(8);
		break

		case'9':
			onclicknum(9);
		break

		case'0':
			onclicknum(0);
		break

		case '.':
			onclicknum('.')
		break
		
		case '+':
			onclicknum('+')
		break
		
		case '-':
			onclicknum('-')
		break
					
		case '*':
			onclicknum('×')
		break
					
		case '/':
			onclicknum('/')
		break


		case 'Backspace':
			e.preventDefault()
			onclickDelete()
		break

		case 'Enter':
			e.preventDefault()
			onclickresult()
		break
		default:
		break
	}
}