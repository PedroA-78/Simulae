<?php 

    use App\Core\Route;

    Route::get('/', function() {
        return view('home');
    });

    Route::get('/configuracao', function() {
        return view('config');
    });

    Route::get('/simulado', function() {
        return view('simulate');
    });

    Route::get('/resultados', function() {
        return view('results');
    });

    Route::get('/revisao', function() {
        return view('reviews');
    });

    Route::get('/admin', function() {
        return view('admin');
    });

?>