const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const h=parseInt(document.querySelector('#height').value); 
    const w=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    if(h==' ' || h<0 || isNaN(h)){
        result.innerHTML="Please give a valid height";
    }
    //else result.innerHTML=`${h}`;
    if(w==' ' || w<0 || isNaN(w)){
        result.innerHTML="Please give a valid weight";
    }
    //else result.innerHTML=`${w}`;
    else result.innerHTML=((w/(h*h))*10000).toFixed(2);

})