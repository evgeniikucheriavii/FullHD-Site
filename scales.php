<?php 
session_start();

if(isset($_GET["size"]))
{
	$size = $_GET["size"];

	if($size == "small" || $size == "normal" || $size == "big")
	{
		$_SESSION["scale"] = $size;
	}
}

?>