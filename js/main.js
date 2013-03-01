/*
 * Buddy
 * Copyright (c) Seekchange
 */

$(document).bind("mobileinit", function() {
	console.log("MAIN: Initialized app...");	
		
	//setup immediate event handlers
	//$("#setbtn").live("click", setAlarmTime);
	
	//setup specific page initialization routines
	$( document ).delegate("#alarm", "pageinit", initAlarm);
	$( document ).delegate("#meditation", "pageinit", initMeditation);
});


//-------------------------------------------------------------------------
//ALARM CLOCK FUNCTIONS

var initval = "No Time Set...";

function initAlarm(event, data){
	console.log("Initializing mobile alarm tool...");
	
	//set handlers for all buttons on the screen
	$("#alarmstatus").on("change", setAlarm)
	
	//retrieve the alarm data from the local storage
	var currentalarmtime = initval;
	if(localStorage.getItem("currentalarmtime") != null){
		currentalarmtime = JSON.parse(localStorage['currentalarmtime']);
		console.log("Found localstorage item: ["+currentalarmtime[0]+"] ["+currentalarmtime[1]+"]");
		updateAlarmTime(currentalarmtime);
	}else{
		$("#alarmtime").val(currentalarmtime);
	}
		
}

function updateAlarmTime(currentalarmtime){
	var tTime = currentalarmtime[0];
	var tStatus = currentalarmtime[1];
	
	$("#alarmtime").val(currentalarmtime[0]);
	if(tStatus==true){
		var alarmswitch = $("#alarmstatus");
		alarmswitch[0].selectedIndex = 1;
		alarmswitch.slider("refresh");
	}
}

function setAlarm(){
	//console.log("Setting alarm time...");

	//Check alarm time for valid time value
	if ($("#alarmtime").val() == initval){
		console.log("No set: No time was provided...");
		return;
	}
	
	//setup array and save the current time setting
	var currentalarmtime = new Array();
	currentalarmtime[0] = $("#alarmtime").val();

	//Check alarm status and save info if set to 'on'
	var alarmstatus = $("#alarmstatus").val()
	if(alarmstatus != null){
		if (alarmstatus == "on"){
			console.log("Setting alarm to on for: " + $("#alarmtime").val());
			currentalarmtime[1] = true;
		}else{
			console.log("Turning alarm off...");
			currentalarmtime[1] = false;
		}
	}
	//localStorage.setItem("currentalarmtime", currentalarmtime);
	localStorage['currentalarmtime']=JSON.stringify(currentalarmtime);
	console.log("Setting ["+currentalarmtime[0]+"] ["+currentalarmtime[1]+"]");
	//checkAlarmSaved();
}

function checkAlarmSaved(){
	//currentalarmtime = localStorage.getItem("currentalarmtime");
	currentalarmtime = JSON.parse(localStorage['currentalarmtime']);
	console.log("Found localstorage item: ["+currentalarmtime[0]+"] ["+currentalarmtime[1]+"]");
}


function initMeditation(event, data){
	console.log("Initializing meditaiton tool....");
}