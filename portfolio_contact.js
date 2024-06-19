let url='https://script.google.com/macros/s/AKfycbzjMNvvUX-tFMPTIL-CbTvXyiLxgLyxThftVhYfpYYQ1zFsCbE9exMT4UAyWgibBBAl_A/exec';
let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    let d=new FormData(form);
    fetch(url,{
        method:"POST",
        body: d
    }).then((res)=> res.text())
    .then((finalRes)=>console.log(finalRes))
    e.preventDefault();
})