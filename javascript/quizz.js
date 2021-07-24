function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
      
   else
      champ.style.backgroundColor = "";
}

function verifNom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPrenom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPass(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}



function verif(f)
{
   var NomOk = verifNom(f.nom);
   var PrenomOk = verifPrenom(f.prenom);
   var PassOk = verifPass(f.pass);
   
   if(NomOk && PrenomOk && PassOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}

