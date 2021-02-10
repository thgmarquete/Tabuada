function clic(){
        
        var number = document.getElementById('number')
        var result = document.getElementById('result')
        var table = parseInt(number.value)
        var result = document.getElementById('result')
        var multiplicator = 1
                  
        if (number.value.lenght == 0){
            alert('Por favor, digite um número')     
        } 
           else {     
                     result.innerHTML = ''
                     while(multiplicator <= 10){
                     let item = document.createElement('option')  
                     item.text = `${table} x ${multiplicator} = ${table * multiplicator}`           
                     result.appendChild(item)   
                     multiplicator++

                     }

                     

                }

        



}