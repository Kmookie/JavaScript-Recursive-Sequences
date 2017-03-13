document.body.style.width = '31000px';

var fibHelper = function(n) {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
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

//fib(11,document.body);



//Pell numbers: a(0) = 0, a(1) = 1; for n > 1, a(n) = 2*a(n-1) + a(n-2). 

var pellHelper = function(n)   {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
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

//pell(11,document.body);
/////////////////////////////////////////////

  
var tribHelper = function(n) {
    var value = 0;
    var div = document.createElement('div');
    div.style.padding = '5px';
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
        
        //middle.html.style.cssFloat = 'none';
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
      
trib(11,document.body);

        
        
        
        
        
        
 