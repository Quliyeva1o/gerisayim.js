let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let gerisayimdiv = document.getElementById('gerisayimdiv');
let hoursvalue, minutesvalue, secondsvalue

const form = document.getElementById('gerisayimform');
form.addEventListener('submit', function (e) {

    e.preventDefault();

    hoursvalue = parseInt(hours.value);
    minutesvalue = parseInt(minutes.value);
    secondsvalue = parseInt(seconds.value);

    const hourval = document.querySelector(".hourval");
    const minval = document.querySelector(".minval");
    const secval = document.querySelector(".secval");


    if (isNaN(hoursvalue) || isNaN(minutesvalue) || isNaN(secondsvalue)) {
        alert('reqem daxil edin');
        return;

    }

    else if (hoursvalue > 24 || hoursvalue < 0) {
        hourval.classList.replace('d-none', 'd-flex');
    }

    else if (minutesvalue > 60 || minutesvalue < 0) {
        minval.classList.replace('d-none', 'd-flex');
    }

    else if (secondsvalue > 60 || secondsvalue < 0) {
        secval.classList.replace('d-none', 'd-flex');
    }



    else {
        hourval.classList.replace('d-flex', 'd-none');
        minval.classList.replace('d-flex', 'd-none');
        secval.classList.replace('d-flex', 'd-none');

        document.getElementById('startBtn').disabled = true;
        let totalSeconds = hoursvalue * 3600 + minutesvalue * 60 + secondsvalue;
        function gerisayimfun() {
            if (totalSeconds == 0) {
                gerisayimdiv.innerHTML = 'vaxt bitdi!';
                document.getElementById('startBtn').disabled = false;
                let audio = document.getElementById('audio');
                audio.play();
                Swal.fire({
                    title: "vaxt bitdi!",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#000",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("giphy.gif")
                      right top
                      no-repeat
                    `
                });
            } else {
                let hour = Math.floor(totalSeconds / 3600);
                let min = Math.floor((totalSeconds % 3600) / 60);
                let sec = totalSeconds % 60;
                gerisayimdiv.innerHTML = `<div class="d-flex justify-content-between mt-4 p-4" style="border: 1px solid black" ><div><h1>${hour} </h1><p>hours</p></div>
                <div><h1>${min} </h1><p>mins</p></div>
                <div><h1>${sec} </h1><p>seconds</p></div></div>
                `;
                totalSeconds--;
                setTimeout(gerisayimfun, 1000);
            }
        }


        gerisayimfun();
    }


    return;
});

