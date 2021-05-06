function solution(array) {
    var answer = [];
    let temp = [];
  
    //begin loop for each array element
    array.forEach(e => {
        //split the word (string) into array 
      let stringSplit = e.split(' ');
        //check if there is an 'Enter' word in the first element of the sentence
      if (stringSplit[0] === 'Enter') {
        for (let i = 0; i < temp.length; i++) {
            //assign 2nd and 3rd of splitted string into uid and username
          if (temp[i].uid === stringSplit[1]) {
            temp[i].username = stringSplit[2]
          }
        };
        // push object into temp
        temp.push({
          username: stringSplit[2],
          word: 'came in.',
          uid: stringSplit[1]
        });
      }
        //check if there is an 'Leave' word in the first element of the sentence
      if (stringSplit[0] === 'Leave') {
        
        temp.forEach(e => {
          if (e.uid === stringSplit[1]) {
            temp.push({
              username: e.username,
              word: 'has left.',
              uid: stringSplit[1]
            });
          }
        })
      }
        //check if there is an 'Change' word in the first element of the sentence
      if (stringSplit[0] === 'Change') {
        let check = false;
        temp.forEach(i => {
          if (i.uid === stringSplit[1]) {
            if (i.word === 'has left.') {
              check = false;
            } else if (i.word === 'came in.') {
              check = true;
            }
          }
        });
        if (check) {
          for (let i = 0; i < temp.length; i++) {
            if (temp[i].uid === stringSplit[1]) {
              temp[i].username = stringSplit[2];
            }
          };
        }
      }
    });
  
    temp.forEach(e => {
      answer.push(e.username + ' ' + e.word);
    });
  
    return answer;
  }
  
  console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))