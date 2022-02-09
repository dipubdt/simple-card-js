function handalproductcng(product,isincrese )
{

const productInput = document.getElementById(product); 

const productCount = parseInt(productInput.value);

let newProductcount= productCount;



if( isincrese == true )

{
   newProductcount = productCount+ 1;

}

if( isincrese == false && productCount > 0){


newProductcount= productCount - 1;



}
productInput.value = newProductcount;


let totalProduct = 1 ;

let new1;
let new2;
 

if ( product == 'laptop')
{

	totalProduct = (newProductcount * 2400 );
	
}

else{
    totalProduct= newProductcount * 1200;


}

document.getElementById(product+'-total').innerText = totalProduct;
handalCheckOut ();

}

 function  handalCheckOut ()
{

  const laptopcount = document.getElementById("laptop").value;
      const phonecount = document.getElementById('phone').value;

      const totalprice = parseInt(laptopcount) * 2400 +  parseInt(phonecount) * 1200;

      document.getElementById('maxproduct').innerText =  totalprice;

      const tax = Math.round(totalprice * 0.1);
      document.getElementById('taxproduct').innerText =  tax;

 const grantaotal = totalprice+tax;
  document.getElementById('gproduct').innerText = grantaotal;

}


function checkout ()
{

	location.reload();
}

