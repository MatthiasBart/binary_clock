function toBinary(n) { 
    return (n).toString(2);
}

function UpdateClock() 
{
  var now = new Date(); // current date & time from computer clock
  var hDigitOne = now.getHours()%10;
  var hDigitTwo = (now.getHours() - hDigitOne) / 10;
  var mDigitOne = now.getMinutes()%10;
  var mDigitTwo = (now.getMinutes() - mDigitOne) / 10;
  var sDigitOne = now.getSeconds()%10;
  var sDigitTwo = (now.getSeconds() - sDigitOne) / 10;
  
  var hDigitOneStr = toBinary(hDigitOne)
  var hDigitTwoStr = toBinary(hDigitTwo)
  var mDigitOneStr = toBinary(mDigitOne)
  var mDigitTwoStr = toBinary(mDigitTwo)
  var sDigitOneStr = toBinary(sDigitOne)
  var sDigitTwoStr = toBinary(sDigitTwo)
  
  return [hDigitTwoStr, hDigitOneStr, mDigitTwoStr, mDigitOneStr, sDigitTwoStr, sDigitOneStr]
}

export default UpdateClock;