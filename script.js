function order(name,price){
const msg=`Hello, I want to order *${name}* for ৳${price}.`;
window.open('https://wa.me/8801700000000?text='+encodeURIComponent(msg),'_blank');
}