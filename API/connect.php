<?php
$conn = new mysqli("localhost", "root", "", "algorythm_beats");
if($conn->connect_error) {
    die(json_encode(["Error" => "DB Connect Failed"]));
}
?>