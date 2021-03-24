function fibonacciGenerator (n) {
 
    let output= []
    for (let i= 0; output.length < n; i++) {
      if (i===0){
        output.push(0)
         
      }else if (i===1){
        output.push(1)
      }else {
        output.push(output[i-2]+output[i-1]) 
       
      }
     
    }

     return output
    

}

    fibonacciGenerator(20)