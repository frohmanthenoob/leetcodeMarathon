var twoSum = function(nums, target) {
    var l = [];
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                l.push([i,j]);
            }
        }
    }
    return l;
};