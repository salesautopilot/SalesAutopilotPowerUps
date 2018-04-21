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
 

jQuery(document).ready(function() {
    //Függvénybe tesszük a script meghívását, így ha több változóra hivatkozunk, csak a függvényt kell többször meghívnunk
    //Paraméterül a globális változó nevét adjuk meg
    function replaceGlobalVar( globalVariableName ) {
        jQuery.ajax({
            type: 'POST',
            url:  'url_to_your_script/get-global-variable.php',
            data: {
                globalName: globalVariableName
            }
        })
        .done(function(result) {
            //Ha sikeres a hívás, akkor a your_global_var_name class-szal rendelkező elemek tartalmát lecseréljük az értékre.
            //Ez lehet pl: <span class="your_global_var_name"></span>
            jQuery('.'+globalVariableName).html(result);
        })
        .fail(function() {
            //Ha hiba van, arról szólunk a konzolban
            console.log('error');
        });
    }

    //Végül az összes használt változóra meghívjuk a függvényt egyenként.
    replaceGlobalVar('your_global_var_name');
});
</script>