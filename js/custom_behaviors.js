$(document).ready(function() {
				
// ======================== HOME PAGE ========================

	// VARIABLES
	var titlePageArray = new Array("#titlePage h1","#titlePage h2","#titleForm input","#designby","#copyrightText");
	
	
	// EVENT HANDLERS	

// _______________________ TEXT FORM FOCUS _____________________________________
	$("#titleForm input[type=text]").on("focus",function(){
		if(this.value == "Enter Your Name"){
			this.value = "";	
		} else{
			//this.value	
		 }	
		
		$(this).addClass("hasFocus");
	});
		
	
// _______________________ TEXT FORM BLUR _____________________________________
	$("#titleForm input[type=text]").on("blur",function(){
		if(this.value == ""){
			this.value = "Enter Your Name";	
		} else{
			//this.value	
		 }		
		 
		$(this).removeClass("hasFocus");
	});		


// _______________________ SUBMIT FORM _____________________________________
	$("#titleForm").on("submit", function(event){
		event.preventDefault();
		
		var firstTextField = $("#titleForm input[type=text]").val();

		$("#titlePage, #copyright").stop(true).animate({opacity:0},750,function(){
			window.location = "story1.html?valueOfFirst="+firstTextField;	
		})
		
	});	
	

	

		
	function animateTitlePageIn(){
			// loop across array of items you want faded in			
			for(i=0;i<titlePageArray.length;i++){
				// make sure all objects you want faded in have styles set to visibility=hidden, opacity=0
				//then make them visible and full opacity
				$(titlePageArray[i]).stop(true).css("visibility", "visible");						
				$(titlePageArray[i]).stop(true).delay(200*i).animate({
					opacity:1
				},750);				
			};	// then initialize the function
					
		};	



	// INITIALIZATION
	animateTitlePageIn();
	
	
});

