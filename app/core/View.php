<?php 

    namespace App\Core;

    class View {
        public static function make($viewName, $data = []) {
            $viewPath = __DIR__ . "/../views/{$viewName}.php";
            
            if (!file_exists($viewPath)) {
                http_response_code(500);
                return "Erro: view '{$viewName}' não encontrada.";
            }

            extract($data);

            ob_start();
            include $viewPath;
            $content = ob_get_clean();

            return $content;
        }
    }

?>