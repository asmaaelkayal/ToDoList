let text=document.getElementById('data');
let todo_con=document.querySelector('.todo_con');
let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addtoList();

})
function addtoList(){
    let textAdd=text.value;
    let divAdd=document.createElement('div');
    divAdd.innerHTML=`<div class="do_li">
<div class="check ">
        <img src="/images/icon-check.svg" alt="check">
    </div>
    <p class="ps">${textAdd}</p>
    <button class="close">
        <img src="/images/icon-cross.svg" alt="">
    </button>
</div>
<div class="hr"></div>`
    text.value=''
    todo_con.appendChild(divAdd);
    let cancle=divAdd.querySelector('.close');
    cancle.addEventListener('click',(e)=>{
        divAdd.remove();
    })
    let checked=divAdd.querySelector('.check');
    checked.addEventListener('click',(e)=>{
        checked.classList.toggle('active_ch')
        divAdd.children[0].children[1].classList.toggle("completed")

    })
}








var iconChange=document.getElementById('iconchange')
var hh=document.getElementById('hh1')
var do_li=document.querySelectorAll('.do_li')
var ps=document.getElementsByClassName('ps')

iconChange.addEventListener('click',function mood(){
   
this.classList.toggle('sun')
    if (this.classList.contains('sun')==true){
        this.src='images/icon-moon.svg';
        hh.style.backgroundImage="url('images/bg-desktop-light.jpg')";
        document.body.style.backgroundColor='hsl(0, 0%, 98%)';
        text.style.backgroundColor=' hsl(236, 33%, 92%)';
        todo_con.style.backgroundColor='hsl(236, 33%, 84%)';
        todo_con.style.color='black';
        document.querySelector('.foot').style.backgroundColor=' hsl(236, 33%, 92%)';
        // document.querySelector('.foot').style.color=' hsl(0, 0%, 98%)';
       

    }
    else{
        iconChange.src='images/icon-sun.svg';
        hh.style.backgroundImage="url('images/bg-desktop-dark.jpg')"
        document.body.style.backgroundColor='hsl(235,21%,11%)';
        text.style.backgroundColor=' hsl(235,24%,19%)';
        todo_con.style.backgroundColor='hsl(235,24%,19%)';
        document.querySelector('.foot').style.backgroundColor=' hsl(235,24%,19%)';
    }
})
