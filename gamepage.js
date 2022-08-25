// random value generated
 var y = Math.floor(Math.ramdom() * 10 + 1);
 var x = document.getElementById("guessField").value;
function submit() {
    var x = document.getElementById("guessField").value;
if(x==y)
{
alert("CONGRATULATION!!!"+playername+"  YOU GUESSED IT RIGHT IN " 
+guess+"GUESS");
guess= 1;
}
else if(x > y)
{
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER");
}
}
function playAgain(){
    var y = Math.floor(math.ramdom() * 10 + 1);   
}