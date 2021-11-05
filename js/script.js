//Keydown

window.addEventListener('keydown', function(e){
    const p=document.querySelector(".info");
    p.classList.add('invisible')
    const all_img=document.querySelectorAll('img');
    all_img.forEach(function(del){
        del.style.display="none";
    });

    let x=e.keyCode;
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const text=document.querySelector(`img[data-key="${e.keyCode}"]`);
    if(!audio) return;
    if(!text) return;
    audio.currentTime=0;
    text.style.display="block";
    
    audio.play();
    key.classList.add('playing');
});
function removeTransition(e){
    
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
    
}

const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));


// clickable

const btns=document.querySelectorAll('.key');
btns.forEach(btn => btn.addEventListener('click', function(){
    const all_img=document.querySelectorAll('img');
    all_img.forEach(function(del){
        del.style.display="none";
    });
    const p=document.querySelector(".info");
    p.classList.add('invisible')
    const x=this.getAttribute('data-key');
    const audio=document.querySelector(`audio[data-key="${x}"]`);
    const text=document.querySelector(`img[data-key="${x}"]`);
    audio.currentTime=0;
    text.style.display="block";
    audio.play();
    this.classList.add('playing');
}));

