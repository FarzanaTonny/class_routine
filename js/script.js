alert('By hovering subject you can know the teacher\'s name & gmail who will take this class');

var dateObject = new Date();

 console.log(dateObject.getDay());

f_day = dateObject.getDay();

if( f_day === 0 ){

	document.querySelector('.s_row') .setAttribute('style','display:block');
	
	document.querySelector('.s_row1') .setAttribute('style','display:block');

	document.querySelector('.s_row1').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.s_row1').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.s_row2') .setAttribute('style','display:block');

	document.querySelector('.s_row2').addEventListener('mouseover',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:1');

  		document.querySelector('.s_row2').addEventListener('mouseout',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.s_row3') .setAttribute('style','display:block');

	document.querySelector('.s_row3').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.s_row3').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.s_row4') .setAttribute('style','display:block');

	document.querySelector('.s_row4').addEventListener('mouseover',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:1');

  		document.querySelector('.s_row4').addEventListener('mouseout',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.s_row5') .setAttribute('style','display:block');

		document.querySelector('.s_row5').addEventListener('mouseover',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:1');

  		document.querySelector('.s_row5').addEventListener('mouseout',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:0');
 		
  });

  });
	
}else if( f_day === 1){
	
	document.querySelector('.t_row') .setAttribute('style','display:block');
	document.querySelector('.t_row1') .setAttribute('style','display:block');

	document.querySelector('.t_row1').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.t_row1').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.t_row2') .setAttribute('style','display:block');

	document.querySelector('.t_row2').addEventListener('mouseover',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:1');

  		document.querySelector('.t_row2').addEventListener('mouseout',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.t_row3') .setAttribute('style','display:block');

	document.querySelector('.t_row3').addEventListener('mouseover',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:1');

  		document.querySelector('.t_row3').addEventListener('mouseout',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.t_row4') .setAttribute('style','display:block');

	document.querySelector('.t_row4').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.t_row4').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.t_row5') .setAttribute('style','display:block');

		document.querySelector('.t_row5').addEventListener('mouseover',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:1');

  		document.querySelector('.t_row5').addEventListener('mouseout',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:0');
 		
  });

  });

}else if( f_day === 2){

	document.querySelector('.fo_row') .setAttribute('style', 'display:block');
	document.querySelector('.fo_row1') .setAttribute('style', 'display:block');

document.querySelector('.fo_row1').addEventListener('mouseover',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:1');

  		document.querySelector('.fo_row1').addEventListener('mouseout',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:0');

  });

  });

	document.querySelector('.fo_row2') .setAttribute('style', 'display:block');

document.querySelector('.fo_row2').addEventListener('mouseover',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:1');

  		document.querySelector('.fo_row2').addEventListener('mouseout',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:0');		

  });

  });

	document.querySelector('.fo_row3') .setAttribute('style', 'display:block');

document.querySelector('.fo_row3').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.fo_row3').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fo_row4') .setAttribute('style', 'display:block');

document.querySelector('.fo_row4').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.fo_row4').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fo_row5') .setAttribute('style', 'display:block');

	document.querySelector('.fo_row5').addEventListener('mouseover',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:1');

  		document.querySelector('.fo_row5').addEventListener('mouseout',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:0');
 		
  });

  });

}else if ( f_day === 3){

	document.querySelector('.fi_row') .setAttribute('style','display:block');

	document.querySelector('.fi_row1') .setAttribute('style','display:block');

	document.querySelector('.fi_row1').addEventListener('mouseover',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:1');

  		document.querySelector('.fi_row1').addEventListener('mouseout',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fi_row2') .setAttribute('style','display:block');

document.querySelector('.fi_row2').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.fi_row2').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fi_row3') .setAttribute('style','display:block');

document.querySelector('.fi_row3').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.fi_row3').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fi_row4') .setAttribute('style','display:block');

document.querySelector('.fi_row4').addEventListener('mouseover',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:1');

  		document.querySelector('.fi_row4').addEventListener('mouseout',function(){

  		document.querySelector('.bio').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.fi_row5') .setAttribute('style','display:block');

	document.querySelector('.fi_row5').addEventListener('mouseover',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:1');

  		document.querySelector('.fi_row5').addEventListener('mouseout',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:0');
 		
  });

  });

}else if(f_day === 4){

	document.querySelector('.si_row') .setAttribute('style','display:block');

}else if( f_day === 5){

	document.querySelector('.sa_row') .setAttribute('style','display:block');

}else if ( f_day === 6){

	document.querySelector('.f_row') .setAttribute('style','display:block');

	document.querySelector('.f_row1') .setAttribute('style','display:block');

	document.querySelector('.f_row1').addEventListener('mouseover',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:1');

  		document.querySelector('.f_row1').addEventListener('mouseout',function(){

  		document.querySelector('.eng').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row2') .setAttribute('style','display:block');

	document.querySelector('.f_row2').addEventListener('mouseover',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:1');

  		document.querySelector('.f_row2').addEventListener('mouseout',function(){

  		document.querySelector('.phy').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row3') .setAttribute('style','display:block');

	document.querySelector('.f_row3').addEventListener('mouseover',function(){

  		document.querySelector('.math').setAttribute('style','opacity:1');

  		document.querySelector('.f_row3').addEventListener('mouseout',function(){

  		document.querySelector('.math').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row4') .setAttribute('style','display:block');

	document.querySelector('.f_row4').addEventListener('mouseover',function(){

  		document.querySelector('.che').setAttribute('style','opacity:1');

  		document.querySelector('.f_row4').addEventListener('mouseout',function(){

  		document.querySelector('.che').setAttribute('style','opacity:0');
 		
  });

  });

	document.querySelector('.f_row5') .setAttribute('style','display:block');

	document.querySelector('.f_row5').addEventListener('mouseover',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:1');

  		document.querySelector('.f_row5').addEventListener('mouseout',function(){

  		document.querySelector('.bang').setAttribute('style','opacity:0');
 		
  });

  });

}



