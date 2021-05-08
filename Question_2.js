function solution(N, users) {
    var answer = [];
    let player = users.length;
    let temp = [];
  
    for (let i = 1; i <= N; i++) {
      let counter = 0;
      users.forEach(e => {
        if (e === i) {
          counter++
        }
      });
      temp.push({
        stage: i,
        rate: counter / player
      })
      player -= counter
    }
  
    let swap;
  
    do {
      swap = false;
      for (let i = 0; i < temp.length-1; i++) {
        if (temp[i].rate < temp[i+1].rate) {
          var log = temp[i];
          temp[i] =   temp[i+1];
          temp[i+1] = log;
          swap = true;
        }
      }
    } while (swap)
  
    temp.forEach(e => {
      answer.push(e.stage)
    })
  
    return answer;
  }
  
  console.log(solution(5, [2,1,2,6,2,4,3,3]))
  console.log(solution(4, [4,4,4,4,4]))