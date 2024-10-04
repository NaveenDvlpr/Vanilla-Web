const container = document.querySelector(".container");
const target = document.querySelector(".target");
const infinite = document.querySelector(".infinite");
const challenge = document.querySelector(".challenge");
const restart = document.querySelector(".restart");
const score = document.querySelector(".score");

-*
 ,
 
let targetMetrics, infiniteCount, challengeCounts, mode;

const addCounter = (cont) => {
    const counter = document.createElement("div");
    if(mode === "infinite") cont.insertBefore(counter, container.firstElementChild);
    else cont.appendChild(counter);
    
    counter.classList.add("counter");
    counter.addEventListener("click", addSticks);
}

const disableCounter = (counter) => {
    counter.removeEventListener("click", addSticks);
    counter.classList.remove("counter");
    counter.classList.add("oldCounter");
}

const addSticks = (e) => {
    if(e.target.matches(".counter")) {
        const stick = document.createElement("div");
        stick.classList.add("stick");
        e.target.appendChild(stick);
        if(mode == "target") {
            targetMetrics.current++;
            if(targetMetrics.current === targetMetrics.final) handleSuccess();
            else localStorage.setItem("target", JSON.stringify(targetMetrics));
        } else if(mode == "infinite") {
            infiniteCount++;
            localStorage.setItem("infinite", infiniteCount);
        } else {
            if(e.target.parentElement.getAttribute("id") == "cc1") challengeCounts.scoreA++;
            else challengeCounts.scoreB++;
            if(challengeCounts.scoreA === challengeCounts.target || challengeCounts.scoreB === challengeCounts.target) handleSuccess();
            else localStorage.setItem("challenge", JSON.stringify(challengeCounts));
        }
    }
};

const addPlaneSticks = (num, counter) => {
    for(let i = 1; i <= num; i++) {
        const stick = document.createElement("div");
        stick.classList.add("stick");
        counter.appendChild(stick);
    }
}

const handleCounter = (e) => {
    let count, cont = container;
    if(e.target.matches(".counter")) {
        if(mode == "infinite") count = infiniteCount;
        else if(mode == "target") count = targetMetrics.current;
        else {
            if(e.target.parentElement.getAttribute("id") == "cc1") {
                console.log("player A");
                count = challengeCounts.scoreA;
                cont = document.querySelector("#cc1");
            } else {
                console.log("player B");
                count = challengeCounts.scoreB;
                cont = document.querySelector("#cc2");
            }
        }
        if(count%5 === 0) {
            const counters = cont.getElementsByClassName("counter");
            if(mode == "infinite") disableCounter(counters[0]);
            else disableCounter(counters[counters.length-1]);
            addCounter(cont);
        }
    }
}

const handleLoad = () => {
    targetMetrics = JSON.parse(localStorage.getItem("target"));
    if(targetMetrics == null) {
        targetMetrics = {};
        targetMetrics.current = 0;
        targetMetrics.final = 0;
        localStorage.setItem("target", JSON.stringify(targetMetrics));
    }
    infiniteCount = localStorage.getItem("infinite");
    if(infiniteCount == null) {
        infiniteCount = 0;
        localStorage.setItem("infinite", infiniteCount);
    }
    challengeCounts = JSON.parse(localStorage.getItem("challenge"));
    if(challengeCounts == null) {
        challengeCounts = {};
        challengeCounts.target=20;
        challengeCounts.scoreA=0;
        challengeCounts.scoreB=0;
        localStorage.setItem("challenge", JSON.stringify(challengeCounts));
    }
    mode = localStorage.getItem("mode");
    if(mode == null) {
        mode = "target";
        localStorage.setItem("mode", mode);
    }
    if(mode === "challenge") handleChallengeLoad();
    else if(mode === "infinite") handleInfiniteLoad();
    else handleTargetLoad(); 
}

const handleTargetLoad = () => {
    if(targetMetrics.final === 0) {
        handleIdle();
        return;
    }
    for(let i = targetMetrics.current; i >= 0; i-=5) {
        const counter = document.createElement("div");
        if(i < 5) {
            counter.classList.add("counter");
            counter.addEventListener("click", addSticks);
            addPlaneSticks(i, counter);
        } else {
            counter.classList.add("oldCounter");
            addPlaneSticks(5, counter);
        }
        container.appendChild(counter);
    }
}

const handleInfiniteLoad = () => {
    for(let i = infiniteCount; i >= 0; i-=5) {
        const counter = document.createElement("div");
        if(i < 5) {
            counter.classList.add("counter");
            counter.addEventListener("click", addSticks);
            addPlaneSticks(i, counter);
        } else {
            counter.classList.add("oldCounter");
            addPlaneSticks(5, counter);
        }
        container.insertBefore(counter, container.firstChild);
    }
}

const handleChallengeLoad = () => {
    if(challengeCounts.target === 0) {
        handleIdle();
        return;
    }
    const scoreA = challengeCounts.scoreA;
    const scoreB = challengeCounts.scoreB;
    const conA = document.createElement("div");
    conA.classList.add("challengeContainer");
    conA.setAttribute("id", "cc1");
    container.appendChild(conA);
    const conB = document.createElement("div");
    container.appendChild(conB);
    conB.classList.add("challengeContainer");
    conB.setAttribute("id", "cc2");
    for(let i = scoreA; i >= 0; i-=5) {
        const counter = document.createElement("div");
        if(i < 5) {
            counter.classList.add("counter");
            counter.addEventListener("click", addSticks);
            addPlaneSticks(i, counter);
        } else {
            counter.classList.add("oldCounter");
            addPlaneSticks(5, counter);
        }
        conA.appendChild(counter);
    }
    for(let i = scoreB; i >= 0; i-=5) {
        const counter = document.createElement("div");
        if(i < 5) {
            counter.classList.add("counter");
            counter.addEventListener("click", addSticks);
            addPlaneSticks(i, counter);
        } else {
            counter.classList.add("oldCounter");
            addPlaneSticks(5, counter);
        }
        conB.appendChild(counter);
    }
}


const handleRestart = () => {
    container.innerHTML="";  
    if(mode === "target" || mode === "challenge") {
        handleSetInput();
    } 
    else{
        infiniteCount = 0;
        localStorage.setItem("infinite", infiniteCount);
        handleInfiniteLoad();
    }
}

const handleModeChange = () => {
    container.innerHTML = "";
    handleLoad();
}

const handleSuccess = () => {
    const dialog = document.createElement('dialog');
    const div = document.createElement('div');
    if(mode === "target") {
        div.innerText = "Hurray... U reached the target";
    } else {
        let player;
        if(challengeCounts.scoreA === challengeCounts.target) player="A";
        else player="B";
        div.innerText = `Congratulations Player ${player} you won the challenge`;
    } 
    const clsBtn = document.createElement('button');
    clsBtn.innerText = "CLOSE";
    dialog.appendChild(div);
    dialog.appendChild(clsBtn);
    container.appendChild(dialog);
    clsBtn.addEventListener('click', () => {
        dialog.close();
        handleRestart();
    }); 
    dialog.showModal();
}

const handleIdle = () => {
    const div = document.createElement('div');
    if(mode === "target") {
        div.innerText="You had set no Target, To set ciick Restart";
    } else {
        div.innerText="Hey are you Challenge Ready...., To start click Restart";
    }
    container.appendChild(div);
}

const handleSetInput = () => {
        const dialog = document.createElement('dialog');
        const label = document.createElement('label');
        if(mode === "target") {
            label.innerText="Set the Target Range";
        } else {
            label.innerText="Set the Challenge Range";
        }
        const range = document.createElement('input');
        range.setAttribute('type', 'range');
        const display = document.createElement('span');
        const setBtn = document.createElement('button');
        setBtn.innerText = "SET";
        dialog.appendChild(label);
        dialog.appendChild(range);
        dialog.appendChild(display);
        dialog.appendChild(setBtn);
        container.appendChild(dialog);
        display.innerText = range.value;
        range.addEventListener('input', (e) => {
            display.innerText = e.target.value;
        });
        setBtn.addEventListener('click', () => {
            dialog.close();
            if(mode === "target") {
                targetMetrics.current = 0;
                targetMetrics.final = parseInt(range.value);
                localStorage.setItem("target", JSON.stringify(targetMetrics));
                dialog.close();
                handleTargetLoad();
            } else {
                challengeCounts.target=parseInt(range.value);
                challengeCounts.scoreA=0;
                challengeCounts.scoreB=0;
                localStorage.setItem("challenge", JSON.stringify(challengeCounts));
                handleChallengeLoad();
            }
        });
        dialog.showModal();
}

window.addEventListener("load", handleLoad);
container.addEventListener("click", handleCounter);
restart.addEventListener("click", handleRestart);
target.addEventListener("click", () => {
    if(mode !== "target") {
        mode = "target";
        localStorage.setItem("mode", mode);
        handleModeChange();
    }
});
infinite.addEventListener("click", () => {
    if(mode !== "infinite") {
        mode = "infinite";
        localStorage.setItem("mode", mode);
        handleModeChange();
    } 
});
challenge.addEventListener("click", () => {
    if(mode !== "challenge") {
        mode = "challenge";
        localStorage.setItem("mode", mode);
        handleModeChange();
    }
});
