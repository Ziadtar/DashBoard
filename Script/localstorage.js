
//Dom inputs

first =document.getElementById('First');
last =document.getElementById('last');
Email=document.getElementById('email')
phone=document.getElementById('phone')
Address =document.getElementById('add')
CvUpLoad =document.getElementById("cv");

// Dom profile

Firstname = document.getElementById('theFirstName')
Lastname = document.getElementById('theLastName')
EmailId = document.getElementById('theEmail')
locatio = document.getElementById('Address')
CvDownLoad=document.getElementById('CvDownload')
tel = document.getElementById('tel')
// submit Dom

SubBtn=document.getElementById('submit')

// Get local storage to profile 

Firstname.innerHTML = localStorage.getItem("First")
Lastname.innerHTML = localStorage.getItem("Last")
EmailId.innerHTML = localStorage.getItem("Email")
tel.innerHTML = localStorage.getItem("phone")
locatio.innerHTML = localStorage.getItem("Address")
CvDownLoad.href = localStorage.getItem("href")
// set function to localFunction

SubBtn.addEventListener('click',()=>{
    localStorage.setItem('First',first.value)
    localStorage.setItem('Last',last.value)
    localStorage.setItem('Email',Email.value)
    localStorage.setItem('phone',phone.value)
    localStorage.setItem('Address',Address.value)
    localStorage.setItem('href',CvUpLoad.value)
    })
