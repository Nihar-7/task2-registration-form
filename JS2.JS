// add values in local storage
show();
let enroll=document.getElementById("enroll");

enroll.addEventListener('click',function(e){
    let email=document.getElementById("email");
    let website=document.getElementById("website");
    let image=document.getElementById("image");
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    let others=document.getElementById("others");
    
    let check=document.querySelectorAll("input[type='checkbox']");
    let name=document.getElementById("name");
    let notes=localStorage.getItem("notes");

    if (notes==null){
        a=[];
    
    }
    else{
        a=JSON.parse(notes);
    }
    let array=[];
    array.push(name.value);
    if (male.checked==true){
        array.push(male.value);
    }
    else if (female.checked==true){
        array.push(female.value);
    }
    else{
        array.push(others.value);
    }
    array.push(email.value);
    
   
    
    array.push(website.value);
    let w=[];
    check.forEach(function(c){

        if (c.checked==true){
              w.push(c.value);
        }
        
        })
        JSON.stringify(w);
        array.push(w);
    
    array.push(image.value);
    a.push(array);
    localStorage.setItem("notes",JSON.stringify(a));

    name.value="";
    
    email.value="";
    website.value="";
    lang.value="";
    image.value="";
    console.log(a);
    show();
})

function show(){
    let notes=localStorage.getItem("notes");
    if (notes==null){
        a=[];
    
    }
    else{
        a=JSON.parse(notes);
    }
    let html="";
    a.forEach(function(element,index){
        html+=` <tr>
        <td style="width:323px">
        <i class="fa fa-times fa-lg" id=${index} onclick="del(this.id)" aria-hidden="true" "></i>
            <h2>${element[0]}</h2>
        <p>${element[1]}<br>
            ${element[2]}<br>
            <a href="">${element[3]}</a>
             <br>
            ${element[4]}
        </p>

        </td>
        <td style="text-align: -webkit-center;width: 225px ;">
            <img src="${element[5]}" alt="...">
        </td>
    </tr>`
    })
    let n=document.getElementById("tab");
    if (a.length!=0){
        n.innerHTML=html;
        
    }
    else{
        n.innerHTML=`<h1 style="text-align: -webkit-center;width: 558px ;">NONE</h1>`;

    }

}

function del(index){
    let notes=localStorage.getItem("notes");

    if (notes==null){
        a=[];
    
    }
    else{
        a=JSON.parse(notes);
    }
    a.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(a));
    show();
}