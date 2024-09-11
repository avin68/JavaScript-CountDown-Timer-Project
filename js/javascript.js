let showTimer = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let number = document.getElementById('number');
let totolTime , timer , cutDownState = 'off' , currentTime;

//========== start button
startBtn.addEventListener('click' ,()=>{
	if(number.value){
		if(cutDownState == 'on'){
			totolTime = Number(number.value) * 60;
		}
		else if(cutDownState == 'stop'){
			totolTime = currentTime
		}
		timer = setInterval(() => {
			if(totolTime > 0){
				totolTime--;
				showTimer.innerHTML = calculateTime(totolTime);
			}
			else{
				clearInterval(timer);
			}
		}, 1000);	
		startBtn.disabled = true
	}else{
		alert('یک عدد وارد کنید')
	}
    
})
//========== stop button
stopBtn.addEventListener('click' , () => {
	clearInterval(timer)
	currentTime = totolTime
	cutDownState = 'stop'
	startBtn.disabled = false
})

//========== reset button
resetBtn.addEventListener('click' , ()=>{
    number.value = '';
    showTimer.innerHTML = '00 : 00 : 00';
	currentTime = 0
	clearInterval(timer);
	startBtn.classList.toggle('pe-none')
	startBtn.disabled = false
})

number.addEventListener('change' , ()=>{
    cutDownState = 'on';
})

function calculateTime(totolTime){

    let hours = Math.floor(totolTime / 3600) ;
    let minutus = Math.floor(totolTime % 3600 / 60);
    let seconds = totolTime % 3600 % 60;

    if(seconds < 10) seconds = '0' + seconds;
    if(minutus < 10) minutus = '0' + minutus;
    if(hours < 10) hours = '0' + hours;
    
    return `${hours} : ${minutus} : ${seconds}`;
}




