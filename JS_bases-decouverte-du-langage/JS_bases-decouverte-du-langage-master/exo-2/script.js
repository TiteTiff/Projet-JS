// you can write js here
console.log('exo-2');
let isTesting = false;
let myDate = new Date();
let semaine = "Ce n'est pas le week-end";
let week_end = "C'est le week-end";
let day = myDate.getDay();
alert(day);
let hour = myDate.getHours();

/*if (day == 6 || day == 0) {
    console.log(week-end);
} else {
    console.log(semaine);
}

if (day==5 && hour>=17 || day==6 || day==0) {
    console.log(week_end);
} else {
    console.log(semaine);
}
*/

if (day==5 && hour>=17 || day==6 || day==0 || day == 1 && hour < 9) {
    console.log(week_end);
} else {
    console.log(semaine);
}


if (isTesting) {
    prompt (day="Renseignez le jour de la semaine");
    prompt (hour="Renseignez l'heure (0-23)");
    }
else {
    day;
    hour;
}

