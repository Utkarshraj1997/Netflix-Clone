// BROWSE FUNCTIONING
let browsetoggle = document.getElementById("browsetoggle")
let browsemenu = document.getElementById("browsemenu")





let flag = 0;
browsetoggle.addEventListener("click", function () {
    if (flag === 0) {
        browsemenu.style.display = "block";
        flag = 1;
    }
    else if (flag === 1) {
        browsemenu.style.display = "none";
        flag = 0;
    }

})



// Notification Tab 
let bell = document.getElementById("bell");
let notificationtab = document.getElementById("notificationtab")

bell.addEventListener("mouseover", function () {
    notificationtab.style.display = "block"
})
bell.addEventListener("mouseout", function () {
    notificationtab.style.display = "none"
})


// navigation shadowing
let scroll = 1
let navigation = document.getElementById("navigation")
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navigation.style.backgroundColor = "black"


    } else if (window.pageYOffset < 30) {
        navigation.style.backgroundColor = "rgba(0,0,0,0.2)"
    }
})

// search area 

let searchform = document.getElementById("searchform");
let searchicon = document.getElementById("searchicon");
let search = 1;

searchicon.addEventListener("click", function () {
    if (search == 1) {
        searchform.style.visibility = "visible";
        searchform.style.opacity = "1";
        search = 0;
    } else {
        searchform.style.visibility = "hidden";
        searchform.style.opacity = "0";
        search = 1;
    }
});

// usertabs 

let userimg = document.getElementById("userimg")
let usercard = document.getElementById("usercard")
userimg.addEventListener("mouseover", function () {
    usercard.style.visibility = "visible"
    usercard.style.opacity = "0.9"
    usercard.style.right = "1vw"
})

userimg.addEventListener("mouseleave", function () {
    usercard.style.visibility = "hidden"
    usercard.style.opacity = "0"
    usercard.style.right = "-400px"

})
usercard.addEventListener("mouseover", function () {
    usercard.style.visibility = "visible"
    usercard.style.opacity = "0.9"
    usercard.style.right = "1vw"
})

usercard.addEventListener("mouseleave", function () {
    usercard.style.visibility = "hidden"
    usercard.style.opacity = "0"
    usercard.style.right = "-400px"
})






// end game tabs woking AND VIDEOS PLAYING IN BACKGROUND AND IN MORE INFO TABS

let infobtn = document.getElementById("infobtn")
let infotabs = document.getElementById("endgame")
let colorverlay = document.getElementById("color-overlay")
let close = document.getElementById("close")

let value = 0

infobtn.addEventListener("click", function () {
    if (value == 0) {
        infotabs.style.display = "block"
        colorverlay.style.display = "block"
        close.style.display = "block"
        value = 1
    }
    else {
        infotabs.style.display = "none"
        colorverlay.style.display = "none"
        value = 0
    }


})
close.addEventListener("click", function () {
    infotabs.style.display = "none"
    colorverlay.style.display = "none"
    close.style.display = "none"
    value = 0
})


let avengersimg = document.getElementById("avengersimg");
let batmanimg = document.getElementById("batmanimg");
let americaimg = document.getElementById("americaimg");
let deadpoolimg = document.getElementById("deadpoolimg");
let thorimg = document.getElementById("thorimg");
let strangeimg = document.getElementById("strangeimg");
let galaxyimg = document.getElementById("galaxyimg");
let venomimg = document.getElementById("venomimg");
let ironmanimg = document.getElementById("ironmanimg");



let endgamevideo = document.getElementById("endgamevideo");
let venomvideo = document.getElementById("venomvideo");
let batmvideo = document.getElementById("batmvideo");
let americavideo = document.getElementById("americavideo");
let deadpoolvideo = document.getElementById("deadpoolvideo");
let thorvideo = document.getElementById("thorvideo");
let strangevideo = document.getElementById("strangevideo");
let galaxyvideo = document.getElementById("galaxyvideo");
let ironmanvideo = document.getElementById("ironmanvideo");
let allvideos = document.getElementsByClassName("allvideos");



let h3 = document.getElementById("bannerh3");
let h1 = document.getElementById("bannerh1");
let infopic = document.getElementById("infopic");
let para = document.getElementById("para");


venomimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none"
    }
    venomvideo.style.display = "block";
    h1.innerHTML = "Venom";
    h3.innerHTML = "Sony";
    para.innerHTML = "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it. After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces."
    infopic.src = "Images/venomvideo.mp4";

})

avengersimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none"
    }
    endgamevideo.style.display = "block";
    h1.innerHTML = "Avengers:End Game";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = "AVENGERS: ENDGAME is set after Thanos' catastrophic use of the Infinity Stones randomly wiped out half of Earth's population in Avengers: Infinity War. Those left behind are desperate to do something -- anything -- to bring back their lost loved ones"
    infopic.src = "Images/video.mp4";

})

batmanimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    batmvideo.style.display = "block";
    h1.innerHTML = "The Batman";
    h3.innerHTML = "DC";
    para.innerHTML = "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis."
    infopic.src = "Images/batmavideo.mp4";

})

americaimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    americavideo.style.display = "block";
    h1.innerHTML = "Captain America";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers. America's World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty."
    infopic.src = "Images/americavideo.mp4";

})

deadpoolimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    deadpoolvideo.style.display = "block";
    h1.innerHTML = "Deadpool";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = "Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor."
    infopic.src = "Images/deadpoolvideo.mp4";

})


thorimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    thorvideo.style.display = "block";
    h1.innerHTML = "Thor Love & Thunder";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = "Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thor's surprise - inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor."
    infopic.src = "Images/thorvideo.mp4";

})

strangeimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    strangevideo.style.display = "block";
    h1.innerHTML = "Dr.Strange Multiverse of Madness";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = " Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others."
    infopic.src = "Images/strangevideo.mp4";

})

galaxyimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    galaxyvideo.style.display = "block";
    h1.innerHTML = "Gardians Of Galaxy vol.3";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = " The Guardians soon learn that the High Evolutionary is responsible for experimenting on Rocket many years ago on Counter Earth, but horrific truths will soon come into light for the heroes including the High Evolutionary's desperation to capture Rocket for his illegal experiments."
    infopic.src = "Images/galaxyvideo.mp4";

})

ironmanimg.addEventListener("click", function () {
    for (let i = 0; i < allvideos.length; i++) {
        allvideos[i].style.display = "none";
    }
    ironmanvideo.style.display = "block";
    h1.innerHTML = "Iron Man";
    h3.innerHTML = "Marvel's Studio's";
    para.innerHTML = "  After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. After being kidnapped by a powerful terrorist organization, brilliant industrialist Tony Stark narrowly escapes using an iron suit he crafted from scrap metal and spare parts."
    infopic.src = "Images/ironmanvideo.mp4"

})



// outercont HOVER FUNCTIONING
let avatar = document.getElementById("avatar")
let one = document.getElementById("one")
avatar.addEventListener("mouseover", function () {
    one.style.visibility = "visible";
    one.style.opacity = 1
})
one.addEventListener("mouseleave", function () {
    one.style.visibility = "hidden";
    one.style.opacity = 0;
})



let fast = document.getElementById("fast")
let two = document.getElementById("two")
fast.addEventListener("mouseover", function () {
    two.style.visibility = "visible";
    two.style.opacity = 1
})
two.addEventListener("mouseleave", function () {
    two.style.visibility = "hidden";
    two.style.opacity = 0;
})


let oppen = document.getElementById("oppen")
let three = document.getElementById("three")
oppen.addEventListener("mouseover", function () {
    three.style.visibility = "visible";
    three.style.opacity = 1
})
three.addEventListener("mouseleave", function () {
    three.style.visibility = "hidden";
    three.style.opacity = 0;
})




let godzilla = document.getElementById("godzilla")
let four = document.getElementById("four")
godzilla.addEventListener("mouseover", function () {
    four.style.visibility = "visible";
    four.style.opacity = 1
})
four.addEventListener("mouseleave", function () {
    four.style.visibility = "hidden";
    four.style.opacity = 0;
})



let arrival = document.getElementById("arrival")
let five = document.getElementById("five")
arrival.addEventListener("mouseover", function () {
    five.style.visibility = "visible";
    five.style.opacity = 1
})
five.addEventListener("mouseleave", function () {
    five.style.visibility = "hidden";
    five.style.opacity = 0;
})


//  thumbs up  liker

let thumbs = document.getElementsByClassName("fa-thumbs-up");

let up = 0;

for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", function () {
        if (up === 0) {
            thumbs[i].style.color = "red";
            up = 1;
        } else if (up === 1) {
            thumbs[i].style.color = "white";
            up = 0;
        }
    });
}
// My list 
let plus  = document.getElementsByClassName("fa-plus")
console.log(plus)
for(let i =0;i<plus.length;i++){
    add = 0;
    plus[i].addEventListener("click",function(){
       if(add === 0){
        plus[i].style.color = "red";
        add = 1;

       }
       else if(add ===1){
        plus[i].style.color = "white";
        add =0;
       }

    })

}
// trending scale control

let crosstrends = document.getElementsByClassName("crosstrend");

for (let i = 0; i < crosstrends.length; i++) {
    crosstrends[i].addEventListener('click', function () {
        let trendingscale= crosstrends[i].parentElement.parentElement; 
        trendingscale.style.display = 'none';
    });
}











