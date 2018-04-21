<script>
/**
 * Ez a program szabad szoftver; terjeszthetÅ‘ illetve mÃ³dosÃ­thatÃ³ a Free Software
 * Foundation Ã¡ltal kiadott GNU General Public License dokumentumÃ¡ban leÃ­rtak;
 * akÃ¡r a licenc 3-as, akÃ¡r (tetszÅ‘leges) kÃ©sÅ‘bbi vÃ¡ltozata szerint.
 * 
 * Ez a program abban a remÃ©nyben kerÃ¼l kÃ¶zreadÃ¡sra, hogy hasznos lesz, de minden
 * egyÃ©b GARANCIA NÃ‰LKÃœL, az ELADHATÃ“SÃGRA vagy VALAMELY CÃ‰LRA VALÃ“
 * ALKALMAZHATÃ“SÃGRA valÃ³ szÃ¡rmaztatott garanciÃ¡t is beleÃ©rtve. TovÃ¡bbi
 * rÃ©szleteket a GNU General Public License tartalmaz.
 * 
 * A felhasznÃ¡lÃ³nak a programmal egyÃ¼tt meg kell kapnia a GNU General Public
 * License egy pÃ©ldÃ¡nyÃ¡t; ha mÃ©gsem kapta meg, akkor tekintse meg a
 * http://gnu.hu/gplv3.html oldalon.
 **/
 

mmjQuery(document).ready(function(){
    //Megadjuk a termék-fizetési mód megfeleltetést:
    //termek_fizetes_matrix['termékid'] = [fizetési módok];
    //Ha egy termék nem szerepel a mátrixban, akkor ahhoz minden fizetési mód engedélyezett
    //Ha több termék van kiválasztva, az a fizetési mód elérhetõ, amelyik mindegyikhez engedélyezett
    var termek_fizetes_matrix = Array();
    termek_fizetes_matrix['123456'] = [987, 2654, 321];
    termek_fizetes_matrix['789101'] = [321, 548];

    //Ha változik a kiválasztott termék
    mmjQuery(".prodqty").change(function() {
        //Minden módot bekapcsolunk, és kikapcsoljuk majd a nem kellõ módokat
    	mmjQuery(".shippingmethodradio").parent().show();

        //Minden kiválasztott termékre
        mmjQuery('.prodqty').each( function() {
    		if( 0<mmjQuery(this).val() ) {
    			var selected_prod = mmjQuery(this).prop('name').substr(4);

            //Ha van a termékhez korlátozás
    			if(termek_fizetes_matrix[selected_prod]) {
                //Minden fizetési módra
		  			mmjQuery('.shippingmethodradio').each( function() {
                    //Ha a fizetési mód nincs a termékhez engedélyezettek között
		  				if( !termek_fizetes_matrix[selected_prod].includes(parseInt(mmjQuery(this).val())) ) {
                        //Akkor elrejtjük
		  					mmjQuery(this).parent().hide();

                        //Ha ez a mód van épp kiválasztva
		  					if( mmjQuery(this).prop('checked') ) {
                            //Akkor kikapcsoljuk a kiválasztást
		  						mmjQuery(this).prop('checked',false);
                            //És eltûntetjük az esetleges Kártyás fizetési mód blokkot
		  						mmjQuery("#online-payment-container").hide();
		  					}
		  				}
		  			});
	    		}
	    	}
    	});
        //Ha csak egy engedélyezett fizetési mód van, azt válasszuk is ki egybõl
    	if (1==mmjQuery('.shippingmethodradio:visible').length) {
    		mmjQuery('.shippingmethodradio:visible').prop('checked', true);
    	}
    });
});
</script>