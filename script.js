

function fetchData(){
   fetch('https://api.adviceslip.com/advice')
   .then((response)=>response.json())
   .then((data)=>{

    // console.log(data)
    let quoteId = data.slip.id
    let adviceId = document.getElementById('adviceId')
    adviceId.textContent="ADVICE #" +" "+quoteId

    let quote = data.slip.advice;
    let adviceEl = document.getElementById('advice')
    // console.log(data.slip.advice)
    adviceEl.textContent = quote;


    
   })

}   


setInterval(fetchQuote,1);

function Refresh(){
    fetchData()
}
