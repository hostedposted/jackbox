//@ts-nocheck
import "./style.scss";
import Swal from "sweetalert2";
import { pollkey, pollbonus, fibkey } from "./utils";

document.getElementById("cheat-menu")?.remove()
document.getElementById("menu-toggler")?.remove()

const div = document.createElement("div")
div.id = "cheat-menu"
document.body.prepend(div)

const toggler = document.createElement("button");
toggler.id = "menu-toggler";
toggler.innerText = "▼";

document.body.prepend(toggler);

var invisible = true

toggler.onclick = function () {
	if (invisible) {
		toggler.innerText = "▲"
		div.style.top = "0px"
		invisible = false
	} else {
		toggler.innerText = "▼"
		div.style.top = "-200px"
		invisible = true
	}
}

let title = document.createElement('h1')
title.id = "title"
title.innerText = "HostedPosted's Jackbox cheats."
div.append(title) 
let getanswer = document.createElement('button')
getanswer.innerText = 'Get Answer'
getanswer.classList.add("poll-button")
getanswer.onclick = function() {
    var b = document.getElementsByClassName("pollposition-text question-text").item(0).innerHTML
    var ans, percentage;
    pollkey.forEach(function(value) {
        if (value.question === b) {
            ans = value.answer
        }
    })
    if (typeof ans == 'undefined') {
        b = document.getElementsByClassName("pollposition-text survey-text").item(2).innerHTML
        percentage = document.getElementsByClassName("pollposition-text question-text").item(0).innerHTML.split("said ")[1].split("% ")[0]
        pollkey.forEach(function(value) {
            if (value.question === b) {
                ans = value.answer
            }
        })
    }
    if (typeof percentage !== "undefined") {
        if (percentage-ans > 0) {
            if (document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").length === 4) {
                if (percentage-ans>=15) {
                    document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(3).click()
                }
                else {
                    document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(2).click()
                }
            }
            else {
            document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(1).click()
            }
        }
        else {
            if (document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").length === 4) {
                if (percentage-ans<=-15) {
                    document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(0).click()
                }
                else {
                    document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(1).click()
                }
            }
            else {
            document.getElementsByClassName("pollposition-button pollposition-high-low-button pollposition-choice-button").item(0).click()
            }
        }
    }
    Swal.fire("Answer", `The answer is: ${ans}`)
}
div.append(getanswer)
getanswer.onmouseover = function () {
	getanswer.style.background = '#CDCDCD'
}
getanswer.onmouseout = function () {
	getanswer.style.background = '#292525'
}

let getbonus = document.createElement('button')
getbonus.innerText = 'Get Bonus Answers'
getbonus.classList.add("poll-button")
getbonus.onclick = function() {
    var b = document.getElementsByClassName("pollposition-text question-text").item(4).innerHTML
    var first, second, third;
    pollbonus.forEach(function(value) {
        if (value.name === b) {
            first = value["1"]
            second = value["2"]
            third = value["3"]
        }
    })
    Swal.fire("Answer", `The best are: ${first}, ${second}, ${third}`)
}
div.append(getbonus)
getbonus.onmouseover = function () {
	getbonus.style.background = '#CDCDCD'
}
getbonus.onmouseout = function () {
	getbonus.style.background = '#292525'
}

let getfib = document.createElement('button')
getfib.innerHTML = 'Get Answer'
getfib.classList.add("fib-button")
getfib.onclick = function() {
    var question = document.getElementById("question-text").innerHTML.toLowerCase()
    var ans;
    fibkey.forEach(function(value) {
        if (value.question === question) {
            ans = value.answer
        }
    })
    Swal.fire("Answer", `The answer is: ${ans}`)
}
div.append(getfib)
getfib.onmouseover = function () {
	getfib.style.background = '#CDCDCD'
}
getfib.onmouseout = function () {
	getfib.style.background = '#292525'
}

setInterval(async () => {
    if (document.querySelector("#content-region > div").getElementsByTagName("div")[0].id.replace("page-", "") !== "pollposition") {
        [].forEach.call(document.getElementsByClassName("poll-button"), function(button) {
            button.style.visibility = "hidden";
        }
        )
    }
    if (document.querySelector("#content-region > div").getElementsByTagName("div")[0].id.replace("page-", "") === "pollposition") {
        [].forEach.call(document.getElementsByClassName("poll-button"), function(button) {
            button.style.visibility = "visible";
        }
        )
    }
    if (document.querySelector("#content-region > div").getElementsByTagName("div")[0].id.replace("page-", "") !== "fibbage") {
        [].forEach.call(document.getElementsByClassName("fib-button"), function(button) {
            button.style.visibility = "hidden";
        }
        )
    }
    if (document.querySelector("#content-region > div").getElementsByTagName("div")[0].id.replace("page-", "") === "fibbage") {
        [].forEach.call(document.getElementsByClassName("fib-button"), function(button) {
            button.style.visibility = "visible";
        }
        )
    }
}, 100)