<?php 
   if ($_SERVER['REQUEST_METHOD'] =='POST') {
      $name = htmlentities($_POST['Имя']);
      $email = $_POST['E-mail'];
      $phone = $_POST['Телефон'];
      $adress = $_POST['Адрес доставки'];
      $mail = "Имя: $name ;
      Email: $email ;
      Телефон: $message ;
      Адрес доставки: $adress ;";
      mail('mail@yaroslava.space','New message',$mail);
   }
?>