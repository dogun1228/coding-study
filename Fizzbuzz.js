//2019-03-18 오전 1:09

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

// 직접 풀어봤다.
for (let i = 1; i <= 100; i++) {
    if(!(i % 3 || i % 5)){
        console.log('FizzBuzz')
    }else if(!(i % 3)){
        console.log('Fizz')
    }else if(!(i % 5)){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}

// 다른 사람의 코드를 가져왔다.
for (let i = 1; i <= 100; i++){
    console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}
// 3항 연산자도 그렇지만, ||를 이런 데 쓴다는 게 신기했다.

// 다른 트릭을 생각해 보았다.
for (let i = 1; i <= 100; i++){
    console.log(i % 15 ? (i % 5 ? (i % 3 ? i : 'Fizz' ) : 'Buzz' ) : 'FizzBuzz')
}
// 3항 연산자를 중첩했더니 가독성이 나빠졌다. 읽기 힘든 코드를 작성하고자 한다면 유용할 듯...

// 내일은 좀 어려운 걸 풀어보도록 해야겠다.