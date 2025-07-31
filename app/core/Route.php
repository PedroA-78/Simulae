<?php 

    namespace App\Core;

    class Route {
        protected static $routes = [];
        
        public static function get($uri, $callback) {
            self::$routes['GET'][$uri] = $callback;
        }

        public static function post($uri, $callback) {
            self::$routes['POST'][$uri] = $callback;
        }

        public static function dispatch() {
            $method = $_SERVER['REQUEST_METHOD'];
            $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

            $base = '/';

            if (strpos($uri, $base) === 0) {
                $uri = substr($uri, strlen($base));
            }

            $uri = '/' . trim($uri, '/');

            if (isset(self::$routes[$method][$uri])) {
                $callback = self::$routes[$method][$uri];
                echo call_user_func($callback);
            } else {
                http_response_code(404);
                echo "404 - Página não encontrada";
            }
        }
    }

?>