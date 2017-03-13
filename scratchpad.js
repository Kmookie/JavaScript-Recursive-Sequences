document.title = "MorgansRecursiveCrazyNess";
document.body.style.width = '31000px';

var fibHelper = function(n) {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
    div.style.backgroundColor= 'rgba(255, 0,0,' + 1/n + ')'; 
    if (n<=1){
        if (n===0) {
            value = 0;
        }
        else if (n==1){
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'fib(' + n +') = ' + value;
        div.appendChild(p);
        
    }
    
    else {
        var left = fibHelper(n-1);
        var right = fibHelper(n-2);
        
        value = left.value + right.value;
        
        var p = document.createElement('p');
        p.textContent = 'fib(' + n +') = ' + value;
        p.style.textAlign = 'center';
        div.appendChild(p);
        
        left.html.style.cssFloat = 'left';
        left.html.style.display = 'inline-block';
        div.appendChild(left.html);
        
        right.html.style.cssFloat = 'right';
        right.html.style.display = 'inline-block';
        div.appendChild(right.html);
        
    }
    return { 
        'value': value,
        'html': div
    }
}
    
var fib = function(n, node){
    var tree = fibHelper(n);
    tree.html.style.display = 'inline-block';
    node.appendChild(tree.html);
}


//Pell numbers: a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2). 

var pellHelper = function(n)   {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
        div.style.backgroundColor= 'rgba(0, 255,0,' + 1/n + ')'; 

    if (n<=1){
        if (n===0) {
            value = 0;
        }
        else if (n==1){
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'pell(' + n +') = ' + value;
        div.appendChild(p);
        
    }
    
    else {
        var left = pellHelper(n-1);
        var right = pellHelper(n-2);
        
        value = 2*left.value + right.value;
        
        var p = document.createElement('p');
        p.textContent = 'pell(' + n +') = ' + value;
        p.style.textAlign = 'center';
        div.appendChild(p);
        
        left.html.style.cssFloat = 'left';
        left.html.style.display = 'inline-block';
        div.appendChild(left.html);
        
        right.html.style.cssFloat = 'right';
        right.html.style.display = 'inline-block';
        div.appendChild(right.html);
        
    }
    return { 
        'value': value,
        'html': div
    }
}
    
var pell = function(n, node){
    var tree = pellHelper(n);
    tree.html.style.display = 'inline-block';
    node.appendChild(tree.html);
}

/////////////////////////////////////////////


  
var tribHelper = function(n) {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
        div.style.backgroundColor= 'rgba(0, 0,255,' + 1/n + ')'; 

    if (n<=2){
        if (n===0) {
            value = 0;
        }
        else if (n==1){
            value = 0;
        }
        else if (n==2){
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'trib(' + n +') = ' + value;
        div.appendChild(p);
        
    }
    
    else {
        var left = tribHelper(n-1);
        var middle = tribHelper(n-2);
        var right = tribHelper(n-3);
        
        value = left.value + middle.value + right.value;
        
        var p = document.createElement('p');
        p.textContent = 'trib(' + n +') = ' + value;
        p.style.textAlign = 'center';
        div.appendChild(p);
        
        left.html.style.cssFloat = 'left';
        left.html.style.display = 'inline-block';
        div.appendChild(left.html);
        
        middle.html.style.display = 'inline-block';
        div.appendChild(middle.html);
        
        right.html.style.cssFloat = 'right';
        right.html.style.display = 'inline-block';
        div.appendChild(right.html);
        
    }
    return { 
        'value': value,
        'html': div
    }
}
    
var trib = function(n, node){
    var tree = tribHelper(n);
    tree.html.style.display = 'inline-block';
    node.appendChild(tree.html);
}
      
      
var fibAnchor = document.createElement('a');
fibAnchor.href = "https://oeis.org/A000045";
fibAnchor.textContent = "Fibonacci Sequence Info";

var pellAnchor = document.createElement('a');
pellAnchor.href = "https://oeis.org/A000045";
pellAnchor.textContent = "Pell Sequence Info";

var tribAnchor = document.createElement('a');
tribAnchor.href = "https://oeis.org/A000045";
tribAnchor.textContent = "Tribonacci Sequence Info";



document.body.appendChild(fibAnchor);  
fib(11,document.body);
document.body.appendChild(document.createElement("hr"));
 
/////// 
document.body.appendChild(pellAnchor);  
pell(11,document.body);
document.body.appendChild(document.createElement("hr"));

document.body.appendChild(tribAnchor);  
trib(11,document.body);





// pell
//https://oeis.org/A000129

//tri
//https://oeis.org/A000073
        
        
        
        
        
        
 