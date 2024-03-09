<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Simpan konten ke dalam file teks
  $content = $_POST["content"];
  $filename = uniqid() . ".txt"; // Generate nama file acak
  file_put_contents("../paste/$filename", $content);

  // Redirect ke halaman tautan
  $url = "http://$_SERVER[HTTP_HOST]/php/paste.php?file=$filename";
  header("Location: $url");
  exit;
}
?>
