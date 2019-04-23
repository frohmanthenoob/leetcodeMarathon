var lengthOfLongestSubstring = function(s) {
    var s_len = s.length,
    s_set = new Set(),
    ans = 0, i = 0, j = 0;
    while(i<s_len && j < s_len){
        if(s_set.has(s.charAt(j))){
            s_set.delete(s.charAt(i++))
        }else{
            s_set.add(s.charAt(j++))
            ans = Math.max(ans,j-i)
        }
    }
    return ans
};