var addTwoNumbers = function(l1, l2) {
    var loopl1=l1,loopl2=l2;
    var ans=[];
    var isCarry = false;
    while(loopl1!==null||loopl2!==null){
        var v1,v2,total;
        if(loopl1!==null){
            v1=loopl1.val;
            loopl1 = loopl1.next;
        }else{
            v1=0;
        }
        if(loopl2!==null){
            v2=loopl2.val;
            loopl2 = loopl2.next;
        }else{
            v2=0;
        }
        if(isCarry){
            total = v1+v2+1
        }else{
            total = v1+v2
        }
        isCarry=false
        if(total>9){
            isCarry=true
            total = total%10
        }
        ans.push(total)
    }
    if(isCarry){
        ans.push(1)
    }
    function parseNode(lst){
      var start,loop;
      for(let i=0;i<lst.length;i++){
        if(i===0){
          start = new ListNode(lst[i])
          loop = start;
        }else{
          loop.next = new ListNode(lst[i])
          loop = loop.next
        }
      }
      return start
    }
    return parseNode(ans)
};