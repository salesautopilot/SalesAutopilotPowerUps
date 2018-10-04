 <?php
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
 

 header("access-control-allow-origin: *");
error_reporting(E_ALL);
ini_set('display_errors',1);
 
$nl_id = $_POST['l'];
$form_id = $_POST['f'];
$email = $_POST['e'];

$apiusername = "your_apiusername";
$apipassword = "your_apipassword";

$curl = curl_init();

/* Email cím alapján bekérjük a feliratkozásokat a listáról */
curl_setopt_array($curl, array(
CURLOPT_RETURNTRANSFER => true,
CURLOPT_URL => 'http://'.$apiusername.':'.$apipassword.'@'.'restapi.emesz.com/list/'.$nl_id.'/field/email/value/'.$email) 
);
$result = curl_exec($curl);
curl_close($curl);

$subscriberlist = json_decode($result);

/* Az első találathoz tartozó űrlap linkjét lekérjük a rendszerből. Ez a script hírlevél típusú listákhoz íródott, de azért ez a biztonsági intézkedés nem árt */
$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_RETURNTRANSFER => true,
CURLOPT_URL => 'https://'.$apiusername.':'.$apipassword.'@'.'api.salesautopilot.com/updateformlink/'.$nl_id.'/'.$form_id.'/'.$subscriberlist[0]->id.'/secure')
);
$updateformlink = curl_exec($curl);
curl_close($curl);

/* Visszaadjuk a kapott linket */
echo $updateformlink;
?>