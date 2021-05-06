function solution(array) {
    var answer = [];
    let newArray = [];
  
    //begin loop for each array element
    array.forEach(e => {
      console.log("ele",e)
        //split the word (string) into array 
      let stringSplit = e.split(' ');
      console.log("stringSplit", stringSplit)
        //check if there is an 'Enter' word in the first element of the sentence
      if (stringSplit[0] === 'Enter') {
        for (let i = 0; i < newArray.length; i++) {
            //assign 2nd and 3rd of splitted string into uid and name
          if (newArray[i].uid === stringSplit[1]) {
            newArray[i].name = stringSplit[2]
          }
        };
        // push object into newArray
        newArray.push({
          name: stringSplit[2],
          word: 'came in.',
          uid: stringSplit[1]
        });
      }
        //check if there is an 'Leave' word in the first element of the sentence
      if (stringSplit[0] === 'Leave') {
        
        newArray.forEach(e => {
          if (e.uid === stringSplit[1]) {
            newArray.push({
              name: e.name,
              word: 'has left.',
              uid: stringSplit[1]
            });
          }
        })
      }
        //check if there is an 'Change' word in the first element of the sentence
      if (stringSplit[0] === 'Change') {
        
        let check = false;
        newArray.forEach(i => {
          if (i.uid === stringSplit[1]) {
            if (i.word === 'has left.') {
              check = false;
            } else if (i.word === 'came in.') {
              check = true;
            }
          }
        });
        if (check) {
          for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].uid === stringSplit[1]) {
              newArray[i].name = stringSplit[2];
            }
          };
        }
      }
    });
  
    newArray.forEach(e => {
      answer.push(e.name + ' ' + e.word);
    });
  
    return answer;
  }
  
  console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))