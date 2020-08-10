
function billingFunction(){
var x = document.getElementById('shippingName').value;
var y= document.getElementById('shippingZip').value;
   if( document.getElementById('same').checked){
       document.getElementById('billingName').removeAttribute("required");
       document.getElementById('billingZip').removeAttribute("required");
    document.getElementById('billingName').value = x;
      document.getElementById('billingZip').value = y;
   }
   else{
    document.getElementById('billingName').value = '';
    document.getElementById('billingZip').value='';
   }
}