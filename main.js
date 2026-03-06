

window.addEventListener('scroll', function() {
    var header = document.querySelector('nav');
    header.classList.toggle('nav-scroll', window.scrollY > 20);
});


const submit_btn = document.querySelector('#submit');

submit_btn.addEventListener('click', function() {

    if(document.querySelector('.table-container').style.display == 'block'){
        document.querySelector('.table-container').style.display = 'none';
        
    } 
    else{
        document.querySelector('.table-container').style.display = 'block';
    }    
});