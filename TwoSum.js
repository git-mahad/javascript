const arr = [0,-1, 2, -3, 1]
const length = arr.length

const TwoSum = (n) =>{
    for(var i = 0; i < length; i++){
        for(var j = i + 1; j < length; j++){
            if(arr[i] + arr[j] == n){
                return true;
            }
        }
    }
    return false;
}

console.log(TwoSum(-2))