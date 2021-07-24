var aujourdhui=new Date();
with(aujourdhui){j=getDate();
				 m=getMonth();
				 fy=getFullYear();
				 h=getHours();
				 mn=getMinutes();
				 s=getSeconds();}
document.getElementById("aujourdhui").innerHTML+="nous sommes le : "+j+'/'+(m+1)+'/'+fy+', et il est'+' '+h+':'+mn+':'+s;


var Nom=prompt("Bienvenue sur notre site ! Veuillez entrer votre nom");
var Prenom=prompt("Et maintenant votre prenom");
document.getElementById("nom").innerHTML+=Nom+' '+Prenom;
