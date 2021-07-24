var image;
var i;
var arret;
function demarrer()
{i=1;
setTimeout("newSlide()",2000);
}
function newSlide()
{document.getElementById("id1").src="../media/img"+i+".jpg";
	 if(i<5)
	 i++;
	else
	i=1;
arret=setTimeout("newSlide()",2000);
}
function stop()
{clearTimeout(arret);
}
function reprendre()
{setTimeout("newSlide()",2000);
}

