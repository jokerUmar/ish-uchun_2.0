let showModal = document.querySelector('.show-modal')
let modal = document.querySelector('.modal')
let linkModal = document.querySelector('.link-modal')


showModal.addEventListener("click" , function(e){

    modal.style.display = "none"
    
})

linkModal.addEventListener('click' , function(){
    modal.style.display = "none"
})