$(document).ready(function() {

// ======================== STORY FOUR ========================	

	// VARIABLES
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var storyFourArray = new Array("h3","p","#threeStoryOne","#threeStoryTwo","#threeStoryThree","#threeStoryFour","#threeStoryFive","#storyFourForm input[type=submit]");
			
	// EVENT HANDLERS
// _______________________ SUBMIT FORM _____________________________________
	$("#storyFourForm").on("submit", function(event){
		event.preventDefault();
		
		var oneMadOne = getQueryParam("valueOfOneOne", searchString);
		var oneMadTwo = getQueryParam("valueOfOneTwo", searchString);
		var oneMadThree = getQueryParam("valueOfOneThree", searchString);
		var oneMadFour = getQueryParam("valueOfOneFour", searchString);
		var oneMadFive = getQueryParam("valueOfOneFive", searchString);

		var twoMadOne = getQueryParam("valueOfTwoOne", searchString);
		var twoMadTwo = getQueryParam("valueOfTwoTwo", searchString);
		var twoMadThree = getQueryParam("valueOfTwoThree", searchString);
		var twoMadFour = getQueryParam("valueOfTwoFour", searchString);
		var twoMadFive = getQueryParam("valueOfTwoFive", searchString);

		var threeMadOne = getQueryParam("valueOfThreeOne", searchString);
		var threeMadTwo = getQueryParam("valueOfThreeTwo", searchString);
		var threeMadThree = getQueryParam("valueOfThreeThree", searchString);
		var threeMadFour = getQueryParam("valueOfThreeFour", searchString);
		var threeMadFive = getQueryParam("valueOfThreeFive", searchString);

		$("#story4").stop(true).animate({opacity:0},750,function(){
			window.location = "storyFinal.html?valueofFirst="+incomingFirstName+"&valueOfOneOne="+oneMadOne+"&valueOfOneTwo="+oneMadTwo+"&valueOfOneThree="+oneMadThree+"&valueOfOneFour="+oneMadFour+"&valueOfOneFive="+oneMadFive
			+"&valueOfTwoOne="+twoMadOne+"&valueOfTwoTwo="+twoMadTwo+"&valueOfTwoThree="+twoMadThree+"&valueOfTwoFour="+twoMadFour+"&valueOfTwoFive="+twoMadFive
			+"&valueOfThreeOne="+threeMadOne+"&valueOfThreeTwo="+threeMadTwo+"&valueOfThreeThree="+threeMadThree+"&valueOfThreeFour="+threeMadFour+"&valueOfThreeFive="+threeMadFive;
		})
	});	
	

	
// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeName(){
		incomingMadOne = getQueryParam("valueOfThreeOne", searchString);
		incomingMadTwo = getQueryParam("valueOfThreeTwo", searchString);
		incomingMadThree = getQueryParam("valueOfThreeThree", searchString);
		incomingMadFour = getQueryParam("valueOfThreeFour", searchString);
		incomingMadFive = getQueryParam("valueOfThreeFive", searchString);
				
		writeTextToPage(incomingMadOne,"#threeStoryOne");
		writeTextToPage(incomingMadTwo,"#threeStoryTwo");
		writeTextToPage(incomingMadThree,"#threeStoryThree");
		writeTextToPage(incomingMadFour,"#threeStoryFour");
		writeTextToPage(incomingMadFive,"#threeStoryFive");
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
				$(".hugoImage").stop(true).delay(1200).animate({opacity:".2"},5000);
			};	
			
					
		};	



	// INITIALIZATION
	writeName();
	animateCanvasPage();

});

