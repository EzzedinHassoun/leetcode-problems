
var maximumWealth = function(accounts) {
let max=[];
    for(let x of accounts){
        let result=x.reduce((acc,num)=>acc+num,0);
        max.push(result);
        
    }

  let final=  Math.max(...max);

return final ;
  
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));