<?php

use PHPMailer\PHPMailer\PHPMailer;

require '../phpMailer/src/Exception.php';
require '../phpMailer/src/PHPMailer.php';
require '../phpMailer/src/SMTP.php';
$name = $_POST['username'];
$email = $_POST['usermail'];
$message = $_POST['usertext'];
$body = "<h2>Новое сообщение с сайта ReclamOrg!!!</h2>
        <b>Имя: </b> $name <br>
        <b>EMail:</b> $email<br>
        <b>Сообщение: $message</b>";

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'testphpmailer021@gmail.com';
    $mail->Password = 'ploozhyztaiwybrj';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($email, $name);

    $mail->addAddress('testphpmailer021@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Новое обращение с сайта ReclamOrg';
    $mail->Body = $body;
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
// header('Location: index.html');

// <?php

// use PHPMailer\PHPMailer\PHPMailer;

// require '../phpMailer/src/Exception.php';
// require '../phpMailer/src/PHPMailer.php';
// require '../phpMailer/src/SMTP.php';

// try {
//     $mail = new PHPMailer(true);
//     $mail->isSMTP();
//     $mail->Host = 'smtp.gmail.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'testphpmailer021@gmail.com';
//     $mail->Password = 'ploozhyztaiwybrj';
//     $mail->SMTPSecure = 'ssl';
//     $mail->Port = 465;
//     $mail->CharSet = 'UTF-8';
//     $mail->setFrom($_POST['usermail'], $_POST['username']);

//     $mail->addAddress('testphpmailer021@gmail.com');
//     $mail->isHTML(true);
//     $mail->Subject = 'Обращение с сайта ReclamOrg';
//     $mail->Body = 'Письмо от ' + $_POST['username'] + '<p> ' + $_POST['usertext'] + '</p>';
//     $mail->send();
//     if ($mail->send()) {
//         $result = "success";
//     } else {
//         $result = "error";
//     }
// } catch (Exception $e) {
//     $result = "error";
//     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }
