pic =document.getElementById("pic")
inputFile=document.getElementById("input-file")
inputFile.onchange = function(){
    pic.src =URL.createObjectURL(inputFile.files[0])
}
inputFile.addEventListener('change',()=>{
    const reader = new FileReader();
    const file = inputFile.files[0];
    reader.readAsDataURL(file);
        reader.addEventListener('load',()=>{
            const dataUrl = reader.result;
            localStorage.setItem('pic',dataUrl)
        })
});
const url =localStorage.getItem('pic');
pic.src = url;

Alist = Array.from(document.querySelectorAll('.sidebar a'))
Alist.forEach((a)=>{
    a.addEventListener('click',()=>{
        Alist.forEach((a)=>{
            a.classList.remove('active')
            })
            a.classList.add('active')
    })})

Mainlist = Array.from(document.querySelectorAll('main .arr'))
// remove class hide from first ele if click on first ele in Alist
Alist.forEach((a,i)=>{
    a.addEventListener('click',()=>{
        Mainlist.forEach((main)=>{
            main.classList.add('hide')
            })
            Mainlist[i].classList.remove('hide')
            })
            })

    
         