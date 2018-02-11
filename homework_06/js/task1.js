function theFunction() {
    
    const error = "Incorrect Data";
    const notTriangle = "Not a triangle";
    
   
    var a = Number(prompt("Enter a", ));
    var b = Number(prompt("Enter b", ));
    var c = Number(prompt("Enter c", ));
    

    if(isCorrect(a, b, c)){    
        if(!isTriangle(a, b, c))
            console.log(notTriangle);
        else{
            p = (a+b+c)/2;
            result = Math.round(Math.sqrt((p*(p-a)*(p-b)*(p-c)))*100)/100;
            console.log("The type of triangle is " + typeOfTriangle(a, b, c) + " and square is " + result + '\n');
        }
    }
    else{
        console.log(error);
    }
}

function typeOfTriangle(a, b, c){
    
    const equ = "Equilateral";
    const iso = "Isosceles";
    const sca = "Scalene";
    const rt = "Right triangle"; 
    
    if( (a*a) + (b*b) == (c*c) )
        return rt;
    else if(a == b && a == c)
        return equ;
    else if( a!=b && a!=c && b!=c)
        return sca;
    else return iso;
       
}
                
