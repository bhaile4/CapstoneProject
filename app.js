$.getJSON( "./data.json", function( data ) {
    // $("#cake").text(data[0].title)
    const products=$("#pastry")
    for(product of data){
        console.log(product);
        let div = $("div")
        div.text(product.title)
        //  products.append(div)
        // $("#pastry").append(div)
        
    //     1.create an Array of divs
    //     2. Append(push) each div to the Array
    //     3.append the array to the product div
    // }
    
  });

  
