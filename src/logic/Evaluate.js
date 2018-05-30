// import keypad from '../Keypad.js';

var ticket = [];

export default function evaluate(value) {
  let hashKeys = Object.keys(value);
  // console.log(Object.keys(value));
  for (var i = 0; i < hashKeys.length; i++ ){
    console.log(hashKeys[i]);
    if (typeof value !== 'undefined' && value[hashKeys[i]] !== "") {
      ticket.push(value);
      console.log(ticket);
    }
  }

  return ticket;
}
