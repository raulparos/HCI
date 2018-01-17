//
// var beepOne = $("#beep-one")[0];
// $("#rimshot-hover-sound")
//     .mouseenter(function() {
//         beepOne.play();
//     });
//
//
//
//
//
// var rimShotAudio = document.getElementById("beep-one");
//
// function playRim() {
//     rimShotAudio.play();
// }
// item.addEventListener('mouseover', rimShotAudio.playRim, false);

function playClipLearn() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Invatare.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-learn");
            // audio.play();
            audio.play();
        }
    }
}

function playClipDeep() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Aprofunda.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-deep");
            audio.play();
        }
    }
}

function playClipPlay() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Joc.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-play");
            audio.play();
        }
    }
}
function playInfoAirplanes1() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Lectii Avioane/Prima Lectie/Parte 1 prima lectie.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-learn");
            audio.play();
        }
    }
}




