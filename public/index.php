<?php 

    require_once '../app/core/Route.php';
    require_once '../app/core/View.php';
    require_once '../helpers/view.php';
    require_once '../routes/web.php';

    use App\Core\Route;

    Route::dispatch();

?>