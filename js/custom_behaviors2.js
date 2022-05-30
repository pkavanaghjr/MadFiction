$(document).ready(function() {

// ======================== STORY ONE ========================

	// VARIABLES
	var searchString = document.location.search;
	var incomingFirstName = getQueryParam("valueOfFirst", searchString);
	var storyOneArray = new Array("h1","h2","h3","p",".oneFieldOne",".oneFieldTwo",".oneFieldThree",".oneFieldFour",".oneFieldFive","#storyOneForm input[type=submit]");
			
	// EVENT HANDLERS
// _______________________ SUBMIT FORM _____________________________________
	$("#storyOneForm").on("submit", function(event){
		event.preventDefault();
		
		var oneMadOne = $(".oneFieldOne").val();
		var oneMadTwo = $(".oneFieldTwo").val();
		var oneMadThree = $(".oneFieldThree").val();
		var oneMadFour = $(".oneFieldFour").val();
		var oneMadFive = $(".oneFieldFive").val();
	
		$("#story1").stop(true).animate({opacity:0},750,function(){
			window.location = "story2.html?valueofFirst="+incomingFirstName+"&valueOfOneOne="+oneMadOne+"&valueOfOneTwo="+oneMadTwo+"&valueOfOneThree="+oneMadThree+"&valueOfOneFour="+oneMadFour+"&valueOfOneFive="+oneMadFive;
		})

	});	
	
	
// _______________________ WRITE USERNAME INPUT _____________________________________
	function writeName(){
		incomingFirstName = getQueryParam("valueOfFirst", searchString);
				
		writeTextToPage(incomingFirstName+",","#nameHolder");
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
			for(i=0;i<storyOneArray.length;i++){
				$(storyOneArray[i]).stop(true).delay(200*i).animate({opacity:1},750);
				$(".backImage").stop(true).delay(1200).animate({opacity:".15"},5000);							
			};	
			
					
		};	



	// INITIALIZATION
	writeName();
	animateCanvasPage();

});

