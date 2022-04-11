let val=document.querySelector('.input')
let button=document.querySelector('.add')
let lastInput='';
let listDiv=document.querySelector('.list')
let savebutton=document.querySelector('.saveb')
let divbutton=document.querySelector('.buttonDiv')
let myList=document.querySelector('.myLists')
let listCounter=0;
let myListCounter=0;
val.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  })
button.addEventListener('click',function(){
    createListElement();
})
function createListElement(){
  let list=val.value;

    lastInput=list;
    val.value= "";
    if(lastInput.length>0){
      listDiv.style.display='block'
      divbutton.style.display='flex'
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
      if(listCounter==1){
        savebutton.style.display='block'
      }
      let classo="listnum"+listCounter;
      let classobut="butnum"+listCounter;
      newItem.classList.add(classo)
      butoo.classList.add(classobut)
      butoo.addEventListener('click',function(){
          if(document.querySelector('.list').clientHeight<100){
              document.querySelector('h3').style.display='none'
              document.querySelector("."+classo).remove()
              document.querySelector('.list').classList.remove('daamate')
              divbutton.style.display='none'
          }
          document.querySelector("."+classo).remove()
      })
    }else{
      alert('Please enter a valid product')
    }
}

savebutton.addEventListener('click',function(){
  for(let i=1;i<=listCounter;i++){
    let spin='.butnum' + i;
    let was=document.querySelector(spin)
    was.remove()
    
  }
  myListCounter++;
  let copy=document.querySelector('.daamate')
  let newList=document.createElement('div')
  newList.innerHTML=copy.innerHTML
  myList.appendChild(newList)
  myList.classList.add('myListDiv'+myListCounter)
  myList.style.display='flex'
  myList.classList.add('flex')
  newList.style.width='25%'
  
  for(let i=1;i<=listCounter;i++){
    let spin='.listnum' + i;
    let was=document.querySelector(spin)
    was.remove()
    
  }
  listDiv.style.display="none"
  divbutton.style.display='none'
  for(let i=1;i<=listCounter;i++){
    let kok='.listnum' + i;
    let mu=document.querySelector(kok)
    mu.classList.add('margin')
    myList.style.backgroundColor='none'
  }
  listCounter=0;
  
})