<?php 

    use App\Core\View;

    function view($name, $data = []) {
        return View::make($name, $data);
    }

?>