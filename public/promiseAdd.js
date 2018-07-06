function add(){
    var a= document.getElementById("num1").value;
    var b= document.getElementById("num2").value;
    console.log(typeof a,b);
    p = new Promise(function(res, rej){
        var regex = /^[0-9]+$/;
        if(a.match(regex) && b.match(regex))
        {
            res(parseInt(a) + parseInt(b));
        }
        else
        {
            console.log("Not a number, please try again.");
            rej("Not a number, please try again.");
        }
    });
    p.then(function(x){
        document.getElementById("result").innerHTML = "Result = "+x;
    }).catch(r=>document.getElementById("result").innerHTML = r);
}
