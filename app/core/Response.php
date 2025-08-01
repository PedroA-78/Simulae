<?php 

    namespace App\Core;

    class Response {
        protected int $status = 200;
        protected array $headers = [];

        public function status(int $code): self {
            $this->status = $code;
            return $this;
        }

        public function header(string $key, string $value): self {
            $this->headers[$key] = $value;
            return $this;
        }

        public function json(array $data): string {
            http_response_code($this->status);
            header('Content-Type: application/json');

            foreach ($this->headers as $key => $value) {
                header("$key: $value");
            }
            
            return json_encode($data);
        }
    }

?>