// Create a ATTESTATION DE DÉPLACEMENT DÉROGATOIRE with an iOS14 automation
//
// Edit these variables with your personal info: 
//
var firstname = "Albert";
var lastname = "Camus";
var bday = "07/11/1913";
var place = "Mondovi";
var address = "744 Rue de Plague";
var city = "Paris";
var zip = "75001";

// Uncomment depending on the type of sortie:
//
// var checkbox = 'checkbox-sport_animaux';
// var checkbox = 'checkbox-travail';
// var checkbox = 'checkbox-sante';
var checkbox = 'checkbox-achats';
// var checkbox = 'checkbox-famille';
// var checkbox = 'checkbox-handicap';
// var checkbox = 'checkbox-convocation';
// var checkbox = 'checkbox-missions';
// var checkbox = 'checkbox-enfants';


document.getElementsByName('firstname')[0].value = firstname;
document.getElementsByName('firstname')[0].value = firstname;
document.getElementsByName('lastname')[0].value = lastname;
document.getElementsByName('birthday')[0].value = bday;
document.getElementsByName('placeofbirth')[0].value = place;
document.getElementsByName('address')[0].value = address;
document.getElementsByName('city')[0].value = city;
document.getElementsByName('zipcode')[0].value = zip;

var myTime = new Date();
// ensure two digit hours and minutes adding leading 0 and taking last 2
var myHour = ('0' + myTime.getHours()).slice(-2)
var myMins = ('0' + myTime.getMinutes()).slice(-2)
var sortieTime = myHour + ":" + myMins;
document.getElementById('field-heuresortie').value = sortieTime;

document.getElementById(checkbox).click();

document.getElementById('generate-btn').click();

// this tells iOS that the automation is complete.
completion();
