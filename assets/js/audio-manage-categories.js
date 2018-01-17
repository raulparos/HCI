


function playClipCategorieBaloane() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Categorii/Categorie-baloane.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-baloane");
            // audio.play();
            audio.play();
        }
    }
}

function playClipCategorieAvioane() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Categorii/Categorie-avioane.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-avioane");
            // audio.play();
            audio.play();
        }
    }
}

function playClipCategorieRachete() {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
        if (document.all)
        {
            document.all.sound.src = "../audio/Categorii/Categorie-rachete.mp3";
        }
    }

    else {
        {
            var audio = document.getElementById("sound-for-rachete");
            // audio.play();
            audio.play();
        }
    }
}