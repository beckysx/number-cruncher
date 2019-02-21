var arr=[11,4,41,50,7,19,8,18,2,6,43,6,20,43,2,23,12,24,31,29]


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
