let val=document.querySelector('.input')
let button=document.querySelector('.add')
let lastInput='';
let listDiv=document.querySelector('.list')
let listCounter=0;
val.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  })
button.addEventListener('click',function(){
    let list=val.value;
    console.log(list)
    lastInput=list;
    val.value= "";
    let newItem=document.createElement('div')
    listDiv.appendChild(newItem)
    newItem.textContent=lastInput;
    newItem.style.color='white'
    newItem.style.fontWeight='bolder'
    listDiv.classList.add('daamate')
    newItem.style.marginTop='10px'
    newItem.style.marginLeft='20%'
    newItem.style.border='3px green solid'
    newItem.style.borderRadius='20px'
    newItem.style.padding='10px'
    newItem.style.marginBottom='10px'
    newItem.style.width='55%'
    let butoo=document.createElement('button')
    newItem.appendChild(butoo)
    newItem.style.display='flex'
    newItem.style.justifyContent='space-between'
    newItem.style.alignItems='center'
    butoo.style.backgroundColor='red'
    butoo.style.border='none'
    butoo.style.cursor='pointer'
    butoo.style.height='4px'
    butoo.style.length='10px'

    document.querySelector('h3').style.display='block'
    listCounter++; 
    let classo="listnum"+listCounter;
    let classobut="butnum"+listCounter;
    newItem.classList.add(classo)
    butoo.classList.add(classobut)
    butoo.addEventListener('click',function(){
        if(document.querySelector('.list').clientHeight<100){
            document.querySelector('h3').remove()
            document.querySelector("."+classo).remove()
            document.querySelector('.list').classList.remove('daamate')
        }
        document.querySelector("."+classo).remove()
    })

})

