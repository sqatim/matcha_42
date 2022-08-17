export const getLastMessage = (check, message) => {
  let result = "";
  let salam;
  if (check) {
    result = "you: ";
  }
 result =  result.concat(message);
  if(result.length> 19) return result.substring(0, 19) + '...';
  else return result;
};
