function addName(){
   PLAYER1=document.getElementById("PLAYER1").value
   PLAYER2=document.getElementById("PLAYER2").value
   localStorage.setItem("PLAYER1",PLAYER1)
   localStorage.setItem("PLAYER2",PLAYER2)
   window.location="maths_page_game.html";

}