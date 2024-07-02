let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);
console.log("ttttttttttt")
function inputMsg(){
    let name=prompt('Enter Name of Student');
    namasteBtn.textContent='Roll No. 1:' +name;
}
