const displayContent=(content)=>{
    dis.value+=content
}
showResult=()=>{
   try{
    dis.value=eval(dis.value)
   }
   catch{
     dis.value=""
     dis.placeholder="invalid Expression"
   }
}
clearAll=()=>{
    dis.value=""
    dis.value="0"
}
Remove=()=>{
    dis.value=dis.value.slice(0,-1)
}

