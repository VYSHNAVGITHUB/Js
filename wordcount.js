s="hello hi hello"

count={}
words=s.split(" ")
// for(word of words){
//     if(word in count){
//         count[word]+=1

//     }
//     else{
//         count[word]=1
//     }
// }
// console.log(count);
// console.log(words)


words.map(word=>word in count?count[word]+=1:count[word]=1)
console.log(count);