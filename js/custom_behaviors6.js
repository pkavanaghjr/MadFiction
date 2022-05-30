$(document).ready(function() {

// ======================== STORY FINAL ========================	

	// VARIABLES
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var storyFourArray = new Array("h1","h3","p","#storyFinal span","#restart");
			
	// EVENT HANDLERS
// _______________________ SUBMIT FORM _____________________________________
	// $("#storyFourForm").on("submit", function(event){
	// 	event.preventDefault();
		
	// 	var madOne = $(".fourFieldOne").val();
	// 	var madTwo = $(".fourFieldTwo").val();
	// 	var madThree = $(".fourFieldThree").val();
	// 	var madFour = $(".fourFieldFour").val();
	// 	var madFive = $(".fourFieldFive").val();
	// 	window.location = "page4.html?valueOfFirst="+madOne+"&valueOfSecond="+madTwo+"&valueOfThird="+madThree+"&valueOfFourth="+madFour+"&valueOfFifth="+madFive;
	// });	
	

	
// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeName(){
		incomingOneMadOne = getQueryParam("valueOfOneOne", searchString);
		incomingOneMadTwo = getQueryParam("valueOfOneTwo", searchString);
		incomingOneMadThree = getQueryParam("valueOfOneThree", searchString);
		incomingOneMadFour = getQueryParam("valueOfOneFour", searchString);
		incomingOneMadFive = getQueryParam("valueOfOneFive", searchString);

		incomingTwoMadOne = getQueryParam("valueOfTwoOne", searchString);
		incomingTwoMadTwo = getQueryParam("valueOfTwoTwo", searchString);
		incomingTwoMadThree = getQueryParam("valueOfTwoThree", searchString);
		incomingTwoMadFour = getQueryParam("valueOfTwoFour", searchString);
		incomingTwoMadFive = getQueryParam("valueOfTwoFive", searchString);

		incomingThreeMadOne = getQueryParam("valueOfThreeOne", searchString);
		incomingThreeMadTwo = getQueryParam("valueOfThreeTwo", searchString);
		incomingThreeMadThree = getQueryParam("valueOfThreeThree", searchString);
		incomingThreeMadFour = getQueryParam("valueOfThreeFour", searchString);
		incomingThreeMadFive = getQueryParam("valueOfThreeFive", searchString);
				
		writeTextToPage(incomingFirstName+",","#nameHolder");

		writeTextToPage(incomingOneMadOne,".oneStoryOne");
		writeTextToPage(incomingOneMadTwo,".oneStoryTwo");
		writeTextToPage(incomingOneMadThree,".oneStoryThree");
		writeTextToPage(incomingOneMadFour,".oneStoryFour");
		writeTextToPage(incomingOneMadFive,".oneStoryFive");

		writeTextToPage(incomingTwoMadOne,".twoStoryOne");
		writeTextToPage(incomingTwoMadTwo,".twoStoryTwo");
		writeTextToPage(incomingTwoMadThree,".twoStoryThree");
		writeTextToPage(incomingTwoMadFour,".twoStoryFour");
		writeTextToPage(incomingTwoMadFive,".twoStoryFive");		

		writeTextToPage(incomingThreeMadOne,".threeStoryOne");
		writeTextToPage(incomingThreeMadTwo,".threeStoryTwo");
		writeTextToPage(incomingThreeMadThree,".threeStoryThree");
		writeTextToPage(incomingThreeMadFour,".threeStoryFour");
		writeTextToPage(incomingThreeMadFive,".threeStoryFive");
	};

// _______________________ WRITE QUERY STRING TO PAGE _____________________________________
	function writeTextToPage(textToWrite, destination){
		$(destination).html(textToWrite);
		
	};
	
// _______________________ GET QUERY STRING _____________________________________
	function getQueryParam(parameter, qs) {
		qs = "&" + qs.replace(/%20/gi, ' ' );
		var p = escape(unescape(parameter));
		var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
	   
		var match = regex.exec(qs);
		var value = "";
		if (match != null) {
			value = match[1];
		};
		return value;
	};		

// _______________________ ANIMATE PAGE _____________________________________
	function animateCanvasPage(){			
			for(i=0;i<storyFourArray.length;i++){
				$(storyFourArray[i]).stop(true).delay(200*i).animate({opacity:1},750);							
				$(".back1").stop(true).animate({opacity:".2"},5000);
			};	
			
					
		};	

// _______________________ IMAGE FADER _____________________________________
	
	var sayCounter = 0;

	function startTimerSayings(){
		myTimerSayings = setInterval(function(){
			console.log("timer Four");
			if(sayCounter == 0){
				$('.back1').animate({opacity:0},1000);
				$('.back2').animate({opacity:.2},1000);
				sayCounter++;
			}else if(sayCounter == 1){
				$('.back2').animate({opacity:0},1000);
				$('.back3').animate({opacity:.2},1000);
				sayCounter++;
			}else if(sayCounter == 2){
				$('.back3').animate({opacity:0},1000);
				$('.back4').animate({opacity:.2},1000);
				sayCounter++;
			}else if(sayCounter == 3){
				$('.back4').animate({opacity:0},1000);
				$('.back1').animate({opacity:.2},1000);
				sayCounter = 0;
			}	
		}, 7500);	
	};



	// INITIALIZATION
	writeName();
	animateCanvasPage();
	startTimerSayings();

});

