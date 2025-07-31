<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulaê - Configurações</title>
    <link rel="stylesheet" href="/css/config.css">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
</head>
<body>
    <header>
        <div class="logo">
            <span class="material-symbols-outlined">menu_book</span>
        </div>
        <p>Simulaê</p>
    </header>
    <main>
        <div class="config_introduction">
            <span class="material-symbols-outlined config_introduction_icon">settings</span>
            <h2 class="config_introduction_title">Configure seu simulado</h2>
            <p class="config_introduction_text">Personalize sua experiência de estudo escolhendo a matéria, quantidade de questões e tempo</p>
        </div>
        <div class="config">
            <form>
                <div class="config_field">
                    <label class="config_field_label"><span class="material-symbols-outlined config_field_icon">book_2</span> Área de Conhecimento</label>
                    <select class="config_field_input">
                        <option>Matemática</option>
                        <option>Linguagens</option>
                        <option>Ciências da natureza</option>
                        <option>Ciências humanas</option>
                        <option>Simulado completo (todas as matérias)</option>
                    </select>
                </div>
                <div class="config_field">
                    <label class="config_field_label"><span class="material-symbols-outlined config_field_icon">target</span> Número de Questões</label>
                    <select class="config_field_input">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                    </select>
                </div>
                <div class="config_field">
                    <label class="config_field_label"><span class="material-symbols-outlined config_field_icon">timer</span> Cronômetro</label>
                    <div class="config_field_timer">
                        <p class="config_field_timer_title">Ativar cronômetro</p>
                        <p class="config_field_timer_text">Faça o simulado no seu próprio ritmo</p>
                        <div class="config_field_timer_slider">
                            <span class="config_field_timer_button"></span>
                        </div>
                    </div>
                </div>
                <div class="config_resume">

                </div>
                <div class="config_submit">
                    <a href="/simulado"><span class="material-symbols-outlined">play_arrow</span>Iniciar simulado</a>
                    <a href="/"><span class="material-symbols-outlined">home</span>Voltar ao ínicio</a>
                </div>
            </form>
        </div>
    </main>
    <footer>
        <p>&copy; 2025 Simulaê. Plataforma gratuita de preparação para o ENCCEJA.</p>
        <p>Desenvolvido por <a href="https://pedroa-78.github.io/">Pedro Aurelio Ramos</a> 🚀💻</p>
    </footer>
</body>
</html>
