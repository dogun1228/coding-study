//2019-03-09 오후 11:17

//문자열을 더하는 함수를 만들어 봅시다.

function small(a,b){
    return a < b ? a : b 
}

function big(a,b){
    return a > b ? a : b 
}

function addText(first,second){
    let ans = new String()
    let carry = 0
    if(first.legnth < second.legnth){
        [first,second] = [second,first] // 긴 쪽을 first에 두기 위해서 swap
    }

    //계산의 용의를 위해 뒤집기
    first = first.split('').reverse().join('')
    second = second.split('').reverse().join('')
    
    for (const i in first) {
        carry = Number.parseInt(first[i]) + Number.parseInt(second[i] || 0) + carry // Pad를 써도 될듯
        console.log(carry)
        ans += carry % 10
        carry = big(Math.floor((carry - carry % 10) / 10) , 0)
    }
    ans += carry //마지막 받아올림 처리
    return ans.split('').reverse().join('')
}

console.log(addText('157','4'), addText('995','444'))

//시간이 없어서 대강 마무리...