<?php

    use App\Core\Route;

    // Route::get('/api/teste', fn() => response()->status(201)->json(['message' => 'Criado com sucesso']));

    Route::get('/api/teste', function() {
        return response()->status(201)->json(['mensagem' => 'Funcionando!']);
    });

?>