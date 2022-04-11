let val=document.querySelector('.input')
let button=document.querySelector('.add')
let lastInput='';
let listDiv=document.querySelector('.list')
let savebutton=document.querySelector('.saveb')
let divbutton=document.querySelector('.buttonDiv')
let myList=document.querySelector('.myLists')
let listCounter=0;
let myListCounter=0;
document.querySelector('.headerbutton1').appendChild(document.createElement('h6'))
document.querySelector('h6').textContent='My Lists ('+myListCounter+')'
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
          if(document.querySelector('.container').clientHeight<230){
              newItem.remove()
              listDiv.style.display='none'
              divbutton.style.display='none'
              listCounter=0;
          }else{
            newItem.remove()
            listCounter--;
            for(let i=1;i<=listCounter;i++){
              let classo1="listnum"+i;
              listDiv.children[i].removeAttribute('class')
              listDiv.children[i].classList.add(classo1)
            }
            for(let i=1;i<=listCounter;i++){
              let classo3=".listnum"+i;
              let classo2="butnum"+i;
              let fox=document.querySelector(classo3);
              fox.querySelector('button').removeAttribute('class')
              fox.querySelector('button').classList.add(classo2)

            }
            
          }
            
            
          })
    }else{
      alert('Please enter a valid product')
    }
}

savebutton.addEventListener('click',function(){
  for(let i=1;i<=listCounter;i++){
    let spin='.butnum' + i;
    let was=document.querySelector(spin)
    if(was!==null){
      was.remove()
    }
  }
  myListCounter++;
  document.querySelector('h6').textContent='My Lists ('+myListCounter+')'
  let copy=document.querySelector('.daamate')
  let newList=document.createElement('div')
  newList.innerHTML=copy.innerHTML
  myList.appendChild(newList)
  myList.classList.add('myListDiv'+myListCounter)
  
  newList.classList.add('myListDiv'+myListCounter)
  newList.setAttribute("id",'myListDivID')
  newList.style.width='25%'
  newList.style.backgroundColor='pink'
  newList.style.borderRadius='30px'
  newList.style.margin='20px'
  newList.style.border='1px black solid'
  for(let i=1;i<=listCounter;i++){
    let gen=newList.children[0];
    gen.textContent='LIST'
    let gen1=newList.children[i];
    if(gen1!==null){
      gen1.style.color='rgb(120, 4, 64)'
      gen1.style.border='none'
      gen1.style.fontWeight='bolder'
    }
  }
  
  
  for(let i=1;i<=listCounter;i++){
    let spin='.listnum' + i;
    let was=document.querySelector(spin)
    if(was!==null){
      was.remove()
    }
    
  }
  listDiv.style.display="none"
  divbutton.style.display='none'
  for(let i=1;i<=listCounter;i++){
    let kok='.listnum' + i;
    let mu=document.querySelector(kok)
    mu.classList.add('margin')

    myList.style.backgroundColor='none'
  }
  let delet=document.createElement('button')
  newList.appendChild(delet)
  delet.classList.add('delete'+myListCounter)
  listCounter=0;
  
  delet.style.marginLeft='37%'
  delet.innerText='Delete'
  delet.style.backgroundColor='red'
  delet.style.border='1px black solid'
  delet.style.borderRadius='20px'
  delet.style.fontSize='12px'
  delet.style.padding='5px'
  delet.style.cursor='pointer'
  newList.style.position='relative'
  delet.style.position='absolute'
  delet.style.top='6px'
  delet.style.left='35%'
  delet.addEventListener('click',function(){
    newList.remove()
    myListCounter--;
    document.querySelector('h6').textContent='My Lists ('+myListCounter+')'
  })
  
})
document.querySelector('.headerbutton1').addEventListener('click',function(){
  myList.style.display='flex'
  myList.classList.add('flex')
  document.querySelector('.container').style.display='none'
})
document.querySelector('.headerbutton').addEventListener('click',function(){
  myList.style.display='none'
  
  document.querySelector('.container').style.display='flex'
})
