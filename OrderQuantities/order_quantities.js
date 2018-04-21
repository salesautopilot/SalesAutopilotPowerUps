<script>
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
 

mmjQuery( document ).ready( function() {
	//Az 1234 azonosítójú termék darabszámának változásakor
	mmjQuery("#qty_1234").change( function(){
		//A db_1234 szám típusú mezőhöz tartozó beviteli mező értékét beállítjuk a darabszámra
		//A db_1234 mezőt előzőleg fel kell venni a listára, és rejtett mezőként az űrlapon el kell helyezni
		mmjQuery("input[name='db_1234']").val(mmjQuery("#qty_1234").val());
	});
});
</script>
