studentarray=[]

function submit(){
    var displaystudentarray=[]
    for(var j=1;j<=4;j++){
        var studentname=document.getElementById("name of the student "+j).Value
        console.log(studentname)
        studentarray.push(studentname)
    }
    console.log(studentarray);
    var lengthofstudentarray=studentname.length
    console.log(lengthofstudentarray)
    
    for(var k=0;k<lengthofstudentarray;k++){
        displaystudentarray.push("<h4>name "+studentarray[k]+"</h4>")
        console.log(displaystudentarray)
    }
    console.log(displaystudentarray)
  document.getElementById("displaynamewithcomma").innerHTML=displaystudentarray  
    document.getElementById("Submitbutton").style.display="none"
    document.getElementById("Sortbutton").style.display="inline-block"



}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    var displaystudentarraysorted=[]
    var lengthofstudentarray=studentarray.length
    console.log(lengthofstudentarray)
    
    for(var k=0;k<lengthofstudentarray;k++){
        displaystudentarraysorted.push("<h4>name "+studentarray[k]+"</h4>")
        console.log(displaystudentarraysorted)
        
    }
    var removecommas=displaystudentarraysorted.join(" ")
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas




}
function update(){
    document.getElementById("displaynamewithoutcommas").innerHTML="<h1>"+studentarray+"</h1>"
}
