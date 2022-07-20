let showModal = document.querySelector('.show-modal')
let modal = document.querySelector('.modal')
let linkModal = document.querySelector('.link-modal')

let showModal2 = document.querySelector('.show-modal2')
let modal2 = document.querySelector('.modal2')
let linkModal2 = document.querySelector('.link-modal2')


showModal.addEventListener("click" , function(e){

    modal.style.display = "none"
    
})

linkModal.addEventListener('click' , function(){
    modal.style.display = "none"
})

showModal2.addEventListener("click" , function(e){

    modal2.style.display = "none"
    
})

linkModal2.addEventListener('click' , function(){
    modal2.style.display = "none"
})