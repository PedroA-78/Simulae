<?php 

    require_once '../app/core/Route.php';

    require_once '../app/core/View.php';
    require_once '../helpers/view.php';

    require_once '../app/core/Response.php';
    require_once '../helpers/response.php';
    
    require_once '../routes/web.php';
    require_once '../routes/api.php';

    use App\Core\Route;

    Route::dispatch();

?>