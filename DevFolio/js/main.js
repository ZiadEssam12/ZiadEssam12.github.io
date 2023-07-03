var completedJobs = document.getElementById("CompeletedWorks");
var YearsOfExp = document.getElementById("YearsOfExp");
var totalClients = document.getElementById("totalClients");
var awardWon = document.getElementById("awardWon");

document.getElementById("prev-jobs").addEventListener('mouseover', handleMouseOver);

async function handleMouseOver() {
    var counter = 0;
    for (var i = 0; i <= 550; i++) {
        if(i <= 45)
        {
            completedJobs.innerHTML = counter;
        }
        if (i <= 25){
            YearsOfExp.innerHTML = counter;
        }
        if (i <= 48){
            awardWon.innerHTML = counter; 
        }

        totalClients.innerHTML = counter;        
        counter++;
        await sleep(5);
    }

    document.getElementById("prev-jobs").removeEventListener('mouseover', handleMouseOver);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
