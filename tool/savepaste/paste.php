<?php
if (isset($_GET["file"])) {
  $file = $_GET["file"];
  $path = "../paste/$file";
  
  if (file_exists($path)) {
    // Tampilkan konten
    echo "<pre>" . htmlspecialchars(file_get_contents($path)) . "</pre>";
    
    // Hapus file setelah 14 hari
    if (filemtime($path) < strtotime('-14 days')) {
      unlink($path);
      echo "<p style='color:red;'>Pesan telah dihapus karena telah melewati batas waktu 14 hari.</p>";
    }
  } else {
    echo "File tidak ditemukan.";
  }
} else {
  echo "Parameter file tidak diberikan.";
}
?>
