/*
 #botb headline generator script
 Forked-off of version 1.1 of the GPL v2-licensed 
 "Daily Mail headline generator" script by
 Chris Applegate (www.qwghlm.co.uk)

 Script and data authored by the following users ("BotBrs") of
 Battle of the Bits' ("BotB") (battleofthebits.org):
  - Soiled Bargains
 
 Mega-thanks to:
  - wollymammoth
  - lunar
 
 Version: 0.14 02 Aug 2012
 License: GNU GPL v2 or later
 
 ChangeLog available at <https://github.com/soiledbargains/botbmail>
*/


// A more random random generator, re-purposed for returning an Array.
// a is an array of items, s is the length of the segment, l controls
// a "randomness" factor.
//
// TODO: Due to the need of a segment length, throw exceptions for
// the first few conditionals instead of returning null.
function getRandom(a,s,l) { //"55, male, in my mother's basement"
	//Set-up defaults for s (segment length) and l (length of array n below).
	//JavaScript, I love you for your flexible conditionals (probably not the
	//right term, e.g., i is the same as i != null!
	s=s?s:1;l=l?l:50;
	if (a.length == s) { return null; }
	if (a.length%s != 0) { return null; }
	var n = new Array(l); //Array of l random numbers
	//Populate array of random numbers.
	for (var i=0; i<n.length; i++) n[i] = Math.random();
	//Get random element from the array.
	var m = n[Math.floor(Math.random() * n.length)];
	//Caculate index to use in returned value based on m.
	var o = Math.floor(m * a.length);
	//Make o an interval of s to guarantee a correctly-positioned index that
	//will not have a[o+s] go out of bounds.
	o -= o%s;
	//Populate an array with s items from a starting at index o.
	var r = new Array();
	for (j=0;j<s;j++) r.push(a[o+j]);
	return r;
}

// Matches an auxiliary verb with the subject, taking into account
// the person (subject[1]) and quantity (subject[2]).
function match_verb_and_subject(subject, verb) {
	console.log(subject);
	console.log(verb);
	if (subject[1] == 1 && subject[1] == 3 ||
		subject[2] > 1) {
		return(verb[0]);
	} else { 
		return(verb[1]);
	}
}

// Matches the phrases's tense with that of the transitive verb's.
function match_verb_and_tense(verb, phrase) {
	if (verb[2] == "present") { return phrase[0]; }
	else if (verb[2] == "past") { return phrase[1]; }
	else if (verb[2]  == "active") { return phrase[2]; }
}

// Returns headline as a string
//
// NOTE: THE VARIABLES subjects, auxiliary_verbs, and transitive_phrases ARE
// DEFINED IN A SEPARATE FILE.
function getHeadline(l) {
	var sentence = [];

	//subjects are 3 objects long
	var subject = getRandom(subjects,3,l);
	//phrases are 4 objects long
	var phrase = getRandom(transitive_phrases,4,l);
	//verbs are 4 objects long
	var verb = getRandom(auxiliary_verbs,3,l);
	//subjects are 3 objects long: 
	var object = getRandom(subjects,3,l);

	sentence[0] = match_verb_and_subject(subject, verb);
	sentence[1] = subject[0];
	sentence[2] = match_verb_and_tense(verb, phrase);
	sentence[3] = object[0];
	if (phrase[3] != "") sentence[4] = phrase[3];

	var s = sentence.join(" ").toUpperCase();
	s += "?";
	return s;
}

//NOTE: We really don't need jQuery to do document.getElementById().
//So don't add bloat by adding on 32kB to someone's bandwidth.

// Sets the content of div or paragraph element called "mail_headline"
function setHeadline() {
	document.getElementById("botbmail_headline").innerHTML = getHeadline();
}

function putHeadline(s) {
	document.getElementById("botbmail_headline").innerHTML = s;
}

// Generate random headlines until a certain term is found.
function findHeadline() {
	a = document.getElementById("termfield").value;
	//console.log(a);
	if (a == null || a.trim() == "") { return; }
	t = a.toUpperCase();
	d = new Array();
	for (i = 0; i < 191; i++) {
		d.push(getHeadline(45));
		if (d[i].indexOf(t) != -1) { 
			//console.log(d); 
			roulette(d); 
			return;
		}
	}
	printStatus('Failed to find term "' + a + '" after 191 rounds.',
		{fadeout:true});
}

// Run through an array of headlines and assign them timeouts,
// LIFO-style. When called by findHeadline(), the last element is
// the string containing the found term. 
//
// d used for debugging the curve (which is linear I believe right now).
// m used for holding the messages (crap way of reversing the argument a).
//
// TODO: Store some amount (5?) of past roulettes for something (such as
// substituting it for headline generation)?
//
//_lastroulette = new Array();
_curRoul = new Array();
function roulette(a) {
	t = 450;
	for (i=_curRoul.length;i>0;i--) {
		window.clearTimeout(_curRoul.pop());
	}
	//d = new Array();
	//m = new Array();
	for (i = a.length - 1; i>-1; i--) {
		//d.push(t);
		//m.push(a[a.length-1]);
		//console.log(a[i]);
		_curRoul.push(_setRoulette(a.pop(),t));
		t /= 1.1625;
	}
}

function _setRoulette(ps,tim) {
	return window.setTimeout(function(){putHeadline(ps);},tim);
}

// TODO: Make sure setTimeout()'s don't collide and be ugly.
_fadeTimers = new Array();
_fadeLens = [[0.8, 0.8], [0.4, 0.9], [0.2, 0.95]];
function printStatus(m,opts) {
	if (opts == null) { opts = {}; }
	for (i=_fadeTimers.length;i>0;i--) {
		window.clearTimeout(_fadeTimers.pop());
	}
	w = opts.wait?opts.wait:2500;
	sb = document.getElementById("statusarea");
	sb.style.opacity="1";
	sb.innerHTML = m;
	if (opts.fadeout) {
		for (i=0;i<_fadeLens.length;i++) {
			_fadeTimers.push(_setFade(sb,_fadeLens[i][0],w*_fadeLens[i][1]));
		}
		_fadeTimers.push(window.setTimeout(function(){sb.innerHTML="";},w));
	}
}

function _setFade(ele,opa,tim) {
	return window.setTimeout(function(){ele.style.opacity=opa},tim);
}
