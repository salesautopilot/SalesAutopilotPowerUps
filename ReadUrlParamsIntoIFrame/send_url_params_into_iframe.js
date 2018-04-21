<script language="javascript">
/**
 * Ez a program szabad szoftver; terjeszthető illetve módosítható a Free Software
 * Foundation által kiadott GNU General Public License dokumentumában leírtak;
 * akár a licenc 3-as, akár (tetszőleges) későbbi változata szerint.
 * 
 * Ez a program abban a reményben kerül közreadásra, hogy hasznos lesz, de minden
 * egyéb GARANCIA NÉLKÜL, az ELADHATÓSÁGRA vagy VALAMELY CÉLRA VALÓ
 * ALKALMAZHATÓSÁGRA való származtatott garanciát is beleértve. További
 * részleteket a GNU General Public License tartalmaz.
 * 
 * A felhasználónak a programmal együtt meg kell kapnia a GNU General Public
 * License egy példányát; ha mégsem kapta meg, akkor tekintse meg a
 * http://gnu.hu/gplv3.html oldalon.
 **/
 

  //Ezt a kódrészletet az iFrame kód mögé kell beilleszteni
  //Megkeressük az iFrame-et amiben az űrlap található. Az azonosítónak az űrlap azonosítójának kell lennie
	var iframe = document.getElementById('mmiframe12345');
	var src = iframe.src.split("#");
	//Az iFrame URL-jét kiegészítjük az URL paraméterekkel
	iframe.src = src[0] + window.location.search + "#" + src[1];
	//Fejlesztési fázisban érdemes logolni, hogy mi történik
	console.log( iframe.src );
</script>