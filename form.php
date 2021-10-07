<?php 
   if ($_SERVER['REQUEST_METHOD'] =='POST') {
      $name = htmlentities($_POST['name']);
      $email = $_POST['E-mail'];
      $phone = $_POST['phone'];
      $adress = $_POST['adress'];
      $mail = "Имя: $name ;
      Email: $email ;
      Телефон: $message ;
      Адрес доставки: $adress ;";
      mail('mail@yaroslava.space','New message',$mail);
   }
?>