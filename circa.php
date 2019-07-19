<?php
// circa cms engine
// static site generator / CMS
// Bryce Mercines 2019


$dbfile = "circa.db.php";
$structure_folders = array("css","assets","js");

function res($msg,$type){
  $response = array(
     "message" => $msg,
     "type" => $type
  );
  echo json_encode($response);
}

function api_get($param_name){
  if(isset($_GET[$param_name])){
    return true;
  }else{
    return false;
  }
}


// get files
if(api_get("files")){
  if(is_dir("assets")){
    $assets_lists = glob("./assets/*.{jpeg,jpg,png,gif,mp4,pm3}", GLOB_BRACE);
    echo json_encode($assets_lists);
 }else{
   res("missing assets folder","error");
 }
}

// get posts
if(api_get("posts")){
  if(is_dir("posts")){
    $post_lists = glob("./posts/*.{php}", GLOB_BRACE);
    echo json_encode($post_lists);
  }else{
    res("missings posts folders","error");
  }
}



