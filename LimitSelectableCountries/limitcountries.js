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
 

mmjQuery(document).ready( function(){
	// InternetExplorerben a remove függvény nem működik, ezért helyettesítjük
	HTMLElement.prototype.remove = function() { return this.parentNode.removeChild(this) };

	//Megadjuk a megjeleníteni kívánt országok kódját
	var countries = ["hu", "at", "ro", "sk", "si"];

	//Végigmegyünk az mssys_bill_country mező opcióin
	mmjQuery("#mssys_bill_country > option").each(function() {
		//És ha az adott opció nem szerepel az általunk megadottak között
		if (countries.indexOf(this.value) === -1) {
			//Akkor töröljük az opciót
			this.remove();
		}
	});

	//Ugyanezt a szállítási országra is megtesszük
	mmjQuery("#mssys_postal_country > option").each(function() {
	if (countries.indexOf(this.value) === -1) {
			this.remove();
		}
	});
});
</script>