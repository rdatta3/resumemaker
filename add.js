function addNewWEField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    
    newNode.setAttribute('placeholder','Enter here')

    let weob = document.getElementById('we')
    let weAddButton = document.getElementById('weAddButton')

    weob.insertBefore(newNode,weAddButton)
}
function addNewEDField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')
    
    newNode.setAttribute('placeholder','Enter here')

    let edob = document.getElementById('ed')
    let edAddButton = document.getElementById('edAddButton')

    edob.insertBefore(newNode,edAddButton)
}

function addNewpwField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('pwField')
    newNode.classList.add('mt-2')
    
    newNode.setAttribute('placeholder','Enter here')

    let pwob = document.getElementById('pw')
    let pwAddButton = document.getElementById('pwAddButton')

    pwob.insertBefore(newNode,pwAddButton)
}

function generatecv(){
    document.getElementById('name1').innerHTML=document.getElementById('firstname').value;
    document.getElementById('name2').innerHTML=document.getElementById('lastname').value;
    document.getElementById('phone2').innerHTML=document.getElementById('number').value;
    document.getElementById('mail').innerHTML=document.getElementById('email').value;
    document.getElementById('address2').innerHTML=document.getElementById('address').value;
    document.getElementById('linkedin2').innerHTML=document.getElementById('linkedin').value;
    document.getElementById('gfg2').innerHTML=document.getElementById('gfg').value;
    document.getElementById('codechef2').innerHTML=document.getElementById('codechef').value;
    document.getElementById('objective2').innerHTML=document.getElementById('objective').value;


   let wes= document.getElementsByClassName('weField')
    let str=''
    for(let e of wes){
    str=str + `<li>${e.value}</li>`;
    }
    document.getElementById('we2').innerHTML=str;

    let eds= document.getElementsByClassName('eqField')
    let strn=''
    for(let e of eds){
    strn=strn + `<li>${e.value}</li>`;
    }
    document.getElementById('ed2').innerHTML=strn;

    let pws= document.getElementsByClassName('pwField')
    let strng=''
    for(let e of pws){
    strng=strng + `<li>${e.value}</li>`;
    }
    document.getElementById('pw2').innerHTML=strng;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}
function printcv(){
        let printButton = document.getElementById("buttonn");
        printButton.style.visibility = 'hidden'
        window.print();
        printButton.style.visibility = 'visible'
}

    