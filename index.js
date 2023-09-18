generateAdvice();

async function generateAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const respJSON = await response.json();
    const advice = respJSON.slip;

    document.getElementById("advice-id").textContent = advice.id
    document.getElementById("advice-text").textContent = advice.advice;
}