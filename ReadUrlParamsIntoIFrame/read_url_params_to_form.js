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
 

//Ezt a scriptet az űrlap egyedi kód részébe kell másolni
  mmjQuery( document ).ready( function () {
  	//Kimásoljuk egy tömbbe a paramétereket
    var query = document.location.search.replace('?', '');
    query = query.split('&');
    //Az azonos nevű input mezőkbe betöltjük a kapott értékeket
    for (var i = 0; i < query.length; i++) {
      var field = query[i].split("=");
      mmjQuery("input[name='" + field[0] + "'], select[name='" + field[0] + "'], textarea[name='" + field[0] + "']").val(decodeURIComponent(field[1]));
    }
  });
</script>