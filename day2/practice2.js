
//if condition
// if the marks is greater than and equal to 50 then print pass else print fail

var marks  =40;
if(marks>=50){
    console.log("pass")
} else{
    console.log("fail");

}

function checkmarks(marks){
    if(marks>=50){
        console.log("pass");
    } else{
        console.log("fail");
    }
}
checkmarks(60)

//traffic light color

let color ="green"
function trafficlightcolor(color){
    if (color=="red"){
        return "stop";
    }
    else if (color=="yellow"){
        return "ready";

    }
    else if (color=="green"){
        return "go";
    }
}
console.log (trafficlightcolor(color))