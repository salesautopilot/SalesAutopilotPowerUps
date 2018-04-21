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
 

header('Access-Control-Allow-Origin: *');
header('content-type: text/html; charset:utf-8');

//Ahhoz a fiókhoz tartozó api felhasználónév és jelszó, amelyikben a globális változó található
//API kulcspárt így lehet létrehozni: https://www.salesautopilot.hu/tudasbazis/osszetett-rendszerek-keszitese/api-kulcsparok-kezelese
$apiusername = "";
$apipassword = "";

//Kiszedjük a kapott adatokból a változó nevét
$globalName = $_POST["globalName"];

//Meghíjuk az API metódust, hogy megkapjuk a globális változó értékét
$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_RETURNTRANSFER => true,
CURLOPT_URL => 'http://'.$apiusername.':'.$apipassword.'@restapi.emesz.com/getglobalvar/name/'.$globalName) 
);
$result = curl_exec($curl);
curl_close($curl);

//Az érték html verzióját kivesszük a kapott válaszból
$data = json_decode($result)->html;
//És visszaküldjük a weboldalnak
echo $data;
?>