var score=[0,0];
var currentscore=0;
var activeplayer=0;
var gameon=true;
//document.querySelector('#current-'+activeplayer).innerHTML=dice;
//var x=document.querySelector('#current-'+activeplayer).innerHTML;
document.querySelector(".dice").style.display="none";
document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gameon){
	var dice=Math.floor(Math.random()*6)+1;
	var dicechange=document.querySelector('.dice');
	dicechange.style.display='block';
	dicechange.src="dice-"+dice+'.png';

	if(dice!== 1){
		currentscore+=dice;
		document.querySelector('#current-'+ activeplayer).innerHTML=currentscore;


	}
	else
	{
		nextplayer();
	}
}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameon){
			score[activeplayer]+=currentscore;
			document.querySelector('#score-'+activeplayer).innerHTML=score[activeplayer];
			if(score[activeplayer]>= 100){
				document.querySelector('#name-'+activeplayer).innerHTML='winner';
				document.querySelector(".dice").style.display="none";
		    	document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
		    	document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
		    	gameon=false;
			}
			else{
			nextplayer();
		}
	}
		});







function nextplayer(){
	activeplayer === 0 ? activeplayer =1 :activeplayer = 0;
		currentscore=0;
		document.getElementById('current-0').innerHTML='0';
		document.getElementById('current-1').innerHTML='0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector(".dice").style.display="none";
}




document.querySelector('.btn-new').addEventListener('click',function(){
	var score=[0,0];
    var currentscore=0;
    var activeplayer=0;
    gameon=true;
    document.querySelector('#current-0').innerHTML='0';
    document.querySelector('#current-1').innerHTML='0';
    document.querySelector('#score-0').innerHTML='0';
    document.querySelector('#score-1').innerHTML='0';
    document.querySelector('#name-0').innerHTML='player 1';
     document.querySelector('#name-1').innerHTML='player 2';  
	document.querySelector(".dice").style.display="none";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
});