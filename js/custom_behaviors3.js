$(document).ready(function() {

// ======================== STORY TWO ========================


	// VARIABLES
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var storyTwoArray = new Array("h3","p","#story2 span",".twoFieldOne",".twoFieldTwo",".twoFieldThree",".twoFieldFour",".twoFieldFive","#storyTwoForm input[type=submit]");
			
	// EVENT HANDLERS
// _______________________ SUBMIT FORM _____________________________________
	$("#storyTwoForm").on("submit", function(event){
		event.preventDefault();

		var oneMadOne = getQueryParam("valueOfOneOne", searchString);
		var oneMadTwo = getQueryParam("valueOfOneTwo", searchString);
		var oneMadThree = getQueryParam("valueOfOneThree", searchString);
		var oneMadFour = getQueryParam("valueOfOneFour", searchString);
		var oneMadFive = getQueryParam("valueOfOneFive", searchString);

		
		var twoMadOne = $(".twoFieldOne").val();
		var twoMadTwo = $(".twoFieldTwo").val();
		var twoMadThree = $(".twoFieldThree").val();
		var twoMadFour = $(".twoFieldFour").val();
		var twoMadFive = $(".twoFieldFive").val();
	
		$("#story2").stop(true).animate({opacity:0},750,function(){
			window.location = "story3.html?valueofFirst="+incomingFirstName+"&valueOfOneOne="+oneMadOne+"&valueOfOneTwo="+oneMadTwo+"&valueOfOneThree="+oneMadThree+"&valueOfOneFour="+oneMadFour+"&valueOfOneFive="+oneMadFive
			+"&valueOfTwoOne="+twoMadOne+"&valueOfTwoTwo="+twoMadTwo+"&valueOfTwoThree="+twoMadThree+"&valueOfTwoFour="+twoMadFour+"&valueOfTwoFive="+twoMadFive;
		})

	});	
	

// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeName(){
		incomingMadOne = getQueryParam("valueOfOneOne", searchString);
		incomingMadTwo = getQueryParam("valueOfOneTwo", searchString);
		incomingMadThree = getQueryParam("valueOfOneThree", searchString);
		incomingMadFour = getQueryParam("valueOfOneFour", searchString);
		incomingMadFive = getQueryParam("valueOfOneFive", searchString);
				
		writeTextToPage(incomingMadOne,"#oneStoryOne");
		writeTextToPage(incomingMadTwo,"#oneStoryTwo");
		writeTextToPage(incomingMadThree,"#oneStoryThree");
		writeTextToPage(incomingMadFour,"#oneStoryFour");
		writeTextToPage(incomingMadFive,"#oneStoryFive");
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
			for(i=0;i<storyTwoArray.length;i++){
				$(storyTwoArray[i]).stop(true).delay(200*i).animate({opacity:1},750);							
				$(".backImage").stop(true).delay(1200).animate({opacity:".15"},5000);
			};	
			
					
		};	



	// INITIALIZATION
	writeName();
	animateCanvasPage();

});

