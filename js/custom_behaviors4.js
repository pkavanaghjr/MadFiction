$(document).ready(function() {

// ======================== STORY THREE ========================	

	// VARIABLES
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var storyThreeArray = new Array("h3","p","#story3 span",".threeFieldOne",".threeFieldTwo",".threeFieldThree",".threeFieldFour",".threeFieldFive","#storyThreeForm input[type=submit]");
			
	// EVENT HANDLERS
// _______________________ SUBMIT FORM _____________________________________
	$("#storyThreeForm").on("submit", function(event){
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
		
		var threeMadOne = $(".threeFieldOne").val();
		var threeMadTwo = $(".threeFieldTwo").val();
		var threeMadThree = $(".threeFieldThree").val();
		var threeMadFour = $(".threeFieldFour").val();
		var threeMadFive = $(".threeFieldFive").val();
	
		$("#story3").stop(true).animate({opacity:0},750,function(){
			window.location = "story4.html?valueofFirst="+incomingFirstName+"&valueOfOneOne="+oneMadOne+"&valueOfOneTwo="+oneMadTwo+"&valueOfOneThree="+oneMadThree+"&valueOfOneFour="+oneMadFour+"&valueOfOneFive="+oneMadFive
			+"&valueOfTwoOne="+twoMadOne+"&valueOfTwoTwo="+twoMadTwo+"&valueOfTwoThree="+twoMadThree+"&valueOfTwoFour="+twoMadFour+"&valueOfTwoFive="+twoMadFive
			+"&valueOfThreeOne="+threeMadOne+"&valueOfThreeTwo="+threeMadTwo+"&valueOfThreeThree="+threeMadThree+"&valueOfThreeFour="+threeMadFour+"&valueOfThreeFive="+threeMadFive;
		})
	});	
	
	
// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeName(){
		incomingMadOne = getQueryParam("valueOfTwoOne", searchString);
		incomingMadTwo = getQueryParam("valueOfTwoTwo", searchString);
		incomingMadThree = getQueryParam("valueOfTwoThree", searchString);
		incomingMadFour = getQueryParam("valueOfTwoFour", searchString);
		incomingMadFive = getQueryParam("valueOfTwoFive", searchString);
				
		writeTextToPage(incomingMadOne,"#twoStoryOne");
		writeTextToPage(incomingMadTwo,"#twoStoryTwo");
		writeTextToPage(incomingMadThree,"#twoStoryThree");
		writeTextToPage(incomingMadFour,"#twoStoryFour");
		writeTextToPage(incomingMadFive,"#twoStoryFive");
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
			for(i=0;i<storyThreeArray.length;i++){
				$(storyThreeArray[i]).stop(true).delay(200*i).animate({opacity:1},750);							
				$(".backImage").stop(true).delay(1200).animate({opacity:".2"},5000);
			};	
			
					
		};	



	// INITIALIZATION
	writeName();
	animateCanvasPage();

});

