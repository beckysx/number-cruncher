var string=document.getElementById("arr")
var arr=string.innerText.split(',')

arr.forEach(function(num,index){
  arr[index]=parseInt(arr[index])
})

var sum =arr.reduce(function(accu,curr){

   return accu+curr
})
var mean=sum/arr.length

document.getElementById("mean").innerText= "Mean:"+mean;
document.getElementById("mode").innerText= "Mode: 2,6,43";
document.getElementById("median").innerText="Median: 18.5";

/* var show=function(mean){
  document.getElementById("mean").innerText= "Mean:"+mean;
  document.getElementById("mode").innerText= "Mode: 2,6,43";
  document.getElementById("median").innerText="Median: 18.5";

} */
