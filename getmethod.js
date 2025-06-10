let httpResponse = document.getElementById('httpResponse');
let sendGetRequestBtn = document.getElementById('sendGetRequestBtn');
let requestStatus = document.getElementById('requestStatus');
let loading=document.getElementById('loading');
let options = {
    method: 'GET'
};

function appendIntoWebpage(status, body) {
    loading.classList.add('d-none');
    requestStatus.textContent =  status;
    httpResponse.textContent = body;
}

let url = "https://gorest.co.in/public-api/users";

sendGetRequestBtn.addEventListener('click', function () {
    loading.classList.remove('d-none');
    
    
    fetch(url, options)
        .then(function (response) {
            return response.text().then(function (text) {
                return [response.status, text];
            });
        })
        .then(function ([status, body]) {
            appendIntoWebpage(status, body);
        })

});
