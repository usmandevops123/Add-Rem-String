var str=prompt("Enter a string");
if (str.length>=3)
{
  lastchar=str.substring(str.length-3,str.length)
  document.write(lastchar+str+lastchar);
} 