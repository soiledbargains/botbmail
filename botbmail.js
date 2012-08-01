/*
 #botb headline generator script
 Forked-off of version 1.1 of the GPL v2-licensed 
 "Daily Mail headline generator" script by
 Chris Applegate (www.qwghlm.co.uk)

 Script and data authored by the following users ("BotBrs") of
 Battle of the Bits' ("BotB") (battleofthebits.org):
  - Soiled Bargains
 
 Version: 0.101 31 Jul 2012
 License: GNU GPL v2 or later
 
 Changelog:
   0.101 [31 Jul 2012]
    - Added putHeadline(), findHeadline(), roulette(), and printStatus().
   0.1 [31 Jul 2012]
	- FORK'D!!
*/


// A more random random generator
function getRandom(a) {
	if (a.length == 1) { return a[0]; }
	var n = new Array(50);
	for (var i=0; i<n.length; i++) { n[i] = Math.random(); }
	var m = n[Math.floor(Math.random() * n.length)];
	var o = Math.floor(m * a.length);
	return a[o];
}

// Objects for nouns, modifier verbs and phrases
function Verb(plural, singular, tense) {
	this.singular = singular;
	this.plural = plural;
	this.tense = tense;
	/* 1 is present, 2 is past, 3 is active */
}

function Noun(word,person,number) {
	this.word = word;
	this.person = person;
	this.number = number;
}

function Phrase(present, past, active, object) {
	this.present = present;
	this.past = past;
	this.active = active;
	this.object = object;
}

// Matches an auxiliary verb with the subject
function match_verb_and_subject(subject, verb) {
	if (subject.number == 1 && subject.person == 3) {
		return(verb.singular);
	} else { 
		return(verb.plural);
	}
}

// Matchs the transitive verb's tense with that of the verb
function match_verb_and_tense(verb, phrase) {
	if (verb.tense == "present") { return phrase.present; }
	else if (verb.tense == "past") { return phrase.past; }
	else if (verb.tense  == "active") { return phrase.active; }
}

// Returns headline as a string
//
//
// NOTE: THE VARIABLES subject, transitive_phrases, auxilary_verbs, and objects
// ARE DEFINED IN A SEPARATE FILE.
function getHeadline() {
	var sentence = [];

	var subject = getRandom(subjects);
		
	var phrase = getRandom(transitive_phrases);
	var verb = getRandom(auxiliary_verbs);
	var object = getRandom(objects);

	sentence[0] = match_verb_and_subject(subject, verb);
	sentence[1] = subject.word;
	sentence[2] = match_verb_and_tense(verb, phrase);
	sentence[3] = object;
	if (phrase.object != "") sentence[4] = phrase.object;

	var s = sentence.join(" ").toUpperCase();
	s += "?";

	return s;
}

//NOTE: We really don't need jQuery to do document.getElementById().

// Sets the content of div or paragraph element called "mail_headline"
function setHeadline() {
	document.getElementById("botbmail_headline").innerHTML = getHeadline();
}

function putHeadline(s) {
	document.getElementById("botbmail_headline").innerHTML = s;
}

// Generate random headlines until a certain term is found.
//
// TODO: Fix bug where multiple accesskey's layer a bunch of prompt()'s! :x
_lastsearch = "";
function findHeadline() {
	a = prompt("Term to wait for:",_lastsearch);
	if (a == null || a.trim() == "") { return; }
	_lastsearch = a;
	t = a.toUpperCase();
	d = new Array();
	for (i = 0; i<191; i++) {
		d.push(getHeadline());
		if (d[i].indexOf(t) != -1) { roulette(d); return; }
	}
	printStatus('Failed to find term "' + a + '" after 191 rounds.');
}

// Run through an array of headlines and assign them timeouts,
// LIFO-style. When called by findHeadline(), the last element is
// the string containing the found term. 
//
// d used for debugging the curve (which is linear I believe right now).
// m used for holding the messages (crap way of reversing the argument a).
//
// TODO: Store some amount (5?) of past roulettes for something (regular
// headline generation?
//
//_lastroulette = new Array();
function roulette(a) {
		t = 450;
		//d = new Array();
		//m = new Array();
		for (i = a.length - 1; i>1; i--) {
			//d.push(t);
			//m.push(a[a.length-1]);
			setTimeout('putHeadline("'+a.pop()+'")', t);
			t /= 1.1625;
		}
}

// TODO: Fix bug where setTimeout()'s collide and be ugly.
function printStatus(m) {
	w = 2500;
	sb = document.getElementById("statusarea");
	sb.innerHTML = m;
	sb.style.opacity="1";
	setTimeout('sb.style.opacity="0.8"',w*.80); //No need for a 
	//setTimeout('sb.style.opacity="0.6"',w*.85); //for loop here
	setTimeout('sb.style.opacity="0.4"',w*.90); //
	//setTimeout('sb.style.opacity="0.2"',w*.95); // \:D/
	setTimeout('sb.innerHTML="";sb.style.opacity="0"',w);
}
