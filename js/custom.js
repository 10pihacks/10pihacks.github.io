// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var saturday = [];
var sunday = [];

// track = {main, ws} where ws is workshop

saturday.push(new scheduleEvent("Hacking Begins", "10:00", "main"));
saturday.push(new scheduleEvent("Project Idea Workshop", "11:00", "12:30", "ws"));
saturday.push(new scheduleEvent("(TBD) Beginner-Level Workshop", "14:00", "15:00", "ws"));
saturday.push(new scheduleEvent("(TBD) Intermediate-Level Workshop", "16:00", "17:00", "ws"));
saturday.push(new scheduleEvent("(TBD) Intermediate-Level Workshop", "18:00", "19:00", "ws"));
saturday.push(new scheduleEvent("(TBD) Advanced-Level Workshop", "21:00", "22:00", "ws"));
saturday.push(new scheduleEvent("Minecraft UHC Tournament", "23:00", "24:00", "ws"));
sunday.push(new scheduleEvent("(TBD) Advanced-Level Workshop", "08:00", "09:00", "ws"));
sunday.push(new scheduleEvent("(TBD) Guest Speaker", "10:00", "11:00", "ws"));
sunday.push(new scheduleEvent("Estimathon", "12:00", "13:00", "ws"));
sunday.push(new scheduleEvent("(TBD) Guest Speaker", "14:00", "15:00", "ws"));
sunday.push(new scheduleEvent("League Of Legends 1v1 Tournament", "16:00", "17:00", "ws"));
sunday.push(new scheduleEvent("Hacking Ends", "17:41:59", "main"));
sunday.push(new scheduleEvent("Judging Phase I", "18:00", "19:00", "main"));
sunday.push(new scheduleEvent("Top 12 Announced", "19:15", "main"));
sunday.push(new scheduleEvent("Judging Phase II", "19:30", "20:30", "main"));
sunday.push(new scheduleEvent("Closing Ceremony", "21:00", "22:00", "main"));




/**
saturday.push(new scheduleEvent("Check-In Opens", "10:00", "main"));
saturday.push(new scheduleEvent("Hacking Begins", "12:00", "main"));
saturday.push(new scheduleEvent("Opening Ceremony", "11:00", "main"));
saturday.push(new scheduleEvent("Introduction to Electronics", "12:15", "13:15", "ws"));
saturday.push(new scheduleEvent("LUNCH", "13:00", "main"));
saturday.push(new scheduleEvent("Coding Challenge by BlackRock", "13:30", "14:30", "ws"));
saturday.push(new scheduleEvent("Entreprenuership workshop by Edinburgh Innovations", "15:00", "16:00", "ws"));
saturday.push(new scheduleEvent("Workshop by Nexmo", "17:00", "18:00", "ws"));
saturday.push(new scheduleEvent("Dinner", "19:00", "main"));
saturday.push(new scheduleEvent("Werewolf by MLH (Social)", "20:00", "21:00", "ws"));
saturday.push(new scheduleEvent("Sleep Drop-In Begins", "21:00", "main"));
sunday.push(new scheduleEvent("Pizza!!", "00:00", "main"));
sunday.push(new scheduleEvent("Hacking Ends", "12:00", "main"));
sunday.push(new scheduleEvent("Breakfast", "08:00", "main"));
sunday.push(new scheduleEvent("Lunch", "12:00", "main"));
sunday.push(new scheduleEvent("Judging Commences", "13:15", "14:30", "main"));
sunday.push(new scheduleEvent("Closing Ceremony", "15:00", "16:00", "main"));
sunday.push(new scheduleEvent("Venue closed", "17:00", "main"));
// sunday.push(new scheduleEvent("No workshops today", "00:00", "17:00", "ws"));
*/

saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Events</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Events</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;