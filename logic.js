

function save(){
   
    let qtext = document.getElementById("qtext");
    let atext = document.getElementById("atext");
    console.log(qtext.value);
    if((qtext.value!="") ||(atext.value!="") ){
        let noted = document.getElementById("note");
        noted.style.display = "none";

    let para1 = document.createElement("P"); 
    para1.innerText = qtext.value;
    result.appendChild(para1);

    let para2 = document.createElement("P"); 
    para2.innerText = atext.value;
    result.appendChild(para2);

    document.getElementById("qtext").value = "";
    document.getElementById("atext").value = "";



    let edit = document.createElement("button");
    edit.innerText = "Edit";
    result.appendChild(edit);
       
        edit.addEventListener("click", function(){
        document.getElementById("qtext").value = para1.innerText;

        result.removeChild(para1);
        result.removeChild(para2);
        result.removeChild(edit);
        result.removeChild(remove);
        });

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    result.appendChild(remove);
    remove.addEventListener("click", function(){
       
        result.removeChild(para1);
        result.removeChild(para2);
        result.removeChild(edit);
        result.removeChild(remove);
        });
    }else{
        let noted = document.getElementById("note");
        noted.style.display = "block";
        let note1 = document.getElementById("note");
        let para3 = document.createElement("P");
        para3.innerText = "Feild is empty";
        note1.appendChild(para3);
    }

}

// function addDiv() {
//     var objTo = document.getElementById('col-sm-4');
//     var divtest = document.createElement("col-sm-6");
//     let para = document.createElement("P");
//     para.innerText = qtext.value;
//     divtest.innerHTML = para.innerText;
//     objTo.appendChild(divtest);
// }

function close1(){
    console.log("a");
    let div = document.getElementById("typeblock");
    div.style.display="none";
}
function addq(){
    console.log("b");
    let div = document.getElementById("typeblock");
    div.style.display="block";
}
   

   
