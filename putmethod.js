let requestBody = document.getElementById('requestBody');
let sendPutRequestBtn = document.getElementById('sendPutRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let loading = document.getElementById('loading');
let httpResponse = document.getElementById('httpResponse');
let userInput=document.getElementById('userInput');
function sendPostHTTPreq(){
    
    let input=userInput.value;
    let url = "https://gorest.co.in/public-api/users/"+input;
    let data=requestBody.value;
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json",
            Authorization: "Bearer b746906c8a174636bb8046373e22cb557c4c9955e75187272c32ecb173dbdc74"
        },
        body: data
    };
    loading.classList.remove('d-none');
    requestStatus.classList.add('d-none');
    
   fetch(url, options)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonData){
        loading.classList.add('d-none');
        requestStatus.classList.remove('d-none');
        let requestStatus1=jsonData.code;
        let http=JSON.stringify(jsonData);
        requestStatus.textContent=requestStatus1;
        httpResponse.textContent=http ;
    })
}

sendPutRequestBtn.addEventListener('click',sendPostHTTPreq )
   