function displayDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    document.getElementById('current-date').innerText = formattedDate;
}



       function passTime() {

        var element = document.body;
        element.classList.toggle("darkMode");
        element.classList.toggle("darkButton");
        var elem = document.getElementById("time");

       
        setTimeout(() => {  
            if (elem.value === "Night") {
                elem.value = "Day";
            } else {
                elem.value = "Night";
            }
        }, 600); 
    }






function shuffleString(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
}

window.onload = function () {
    displayDate();

    const elements = document.getElementsByClassName("shuffleButton");

   
    Array.from(elements).forEach(element => {
        let originalText; 
        let intervalId;
        let restoreTimeoutId;
        let shuffling = false;
       
        element.addEventListener("mouseover", function () {
          
            
            if(!shuffling)
                originalText = element.value || element.innerText; 
            shuffling=true;
            

            
            clearInterval(intervalId);
            clearTimeout(restoreTimeoutId);


            
            intervalId = setInterval(function () {
                const shuffledText = shuffleString(originalText);
                if (element.tagName === "INPUT") {
                    element.value = shuffledText;
                } else {
                    element.innerText = shuffledText;
                }
            }, 100);

           
            restoreTimeoutId = setTimeout(function () {
                clearInterval(intervalId); 
                if (element.tagName === "INPUT") {
                    element.value = originalText; 
                } else {
                    element.innerText = originalText; 
                }
                shuffling=false;
            }, 500); 

            
            
        });
    });
  
};
