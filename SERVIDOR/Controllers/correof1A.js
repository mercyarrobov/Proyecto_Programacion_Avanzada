const correoHTMLF1A = `
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aceptación de Solicitud de Beca</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #052241;
            background-color: #fff;
            margin: 10px;
            padding-left: 20%;
            padding-right: 20%;
        }

        header {
            background-color: #FFA500;
            color: #fff;
            padding: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo {
            max-width: 15%;
            margin-right: 20px;
        }

        .content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        footer {
            margin-top: 20px;
            color: #052241;
        }

        .sticker {
            max-width: 90%;
            height: auto;
            margin: 20px auto;
            display: block;
            animation: bounce 1s infinite alternate;
        }

        @keyframes bounce {
            0% {
                transform: translateY(0);
            }

            100% {
                transform: translateY(-10px);
            }
        }

        .text1 {
            font-size: 24px;
            color: #052241;
            text-align: center;
        }

        .text2 {
            font-size: 24px;
            color: #FFA500;
            text-align: center;
        }

        .recomendacion {
            background-color: #f7c66a;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .text3 {
            color: #d7a850;
        }

        .boton-evaluacion a {
            width: 20%;
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #1b1747;
            color: #fff;
            text-decoration: none;
            text-align: center;
            border-radius: 5px;
            font-size: 18px;
        }

        footer {
            background-color: #000;
            color: #1b1747;
            padding: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            border-radius: 5px;
        }

        .text1footer h5 {
            color: #f50606;
            font-size: 10px;
        }

        .text1footer h3 {
            color: #fff;
            font-size: 20px;
        }

        .text1footer {
            width: 50%;
        }

        .text2footer p {
            margin: 12px;
            padding: 12px;
            color: #fff;
            font-size: 15px;
        }
    </style>
</head>

<body>
    <header>
        <img class="logo"
            src="https://th.bing.com/th/id/R.b35215bb3be3ed577c5cea7d96d033c1?rik=KB4tsKSJKfVhkQ&pid=ImgRaw&r=0"
            alt="Logo de tu aplicación">
        <div>
            <h1 style="color: #052241;">DevSpace MKJJ</h1>
        </div>
    </header>

    <div class="content">
        <p class="text1">¡Hola [Nombre del solicitante]!</p>
        <p class="text2">¡Tenemos grandes noticias!</p>
        <a href=""><img src="https://i.ibb.co/w42mg9x/unnamed.gif" alt="unnamed" class="sticker"></a>
        <p>¡En esta temporada festiva, nos complace informarte que tu solicitud de beca para el <strong>curso de
                programación avanzada</strong> ha superado la <strong>primera fase de revisión</strong> y ha sido
            <strong>aceptada</strong>! <strong class="text3">¡Felicidades!💛</strong>
        </p>
        <p>Para avanzar a la <strong>segunda fase</strong>, te invitamos a rendir una evaluación que evaluará tus
            conocimientos previos y determinará tu aptitud para el curso de programación avanzada. Por favor, haz clic
            en
            el siguiente botón para completar la evaluación.⬇️</p>

        <div class="boton-evaluacion">
            <a href="http://localhost:4200/usuario/evaluacionUser">Rendir Evaluación</a>
        </div>
        

        <div class="recomendacion">

            <h3>¡Dos recomendaciones para aprobar la evaluación de programación avanzada!👩🏻‍💻</h3>
            <ol>
                <li><strong>Prepárate adecuadamente:</strong> Antes de comenzar la evaluación, repasa los conceptos
                    clave del curso, incluyendo estructuras de datos y algoritmos.</li>
                <li><strong>Lee cuidadosamente las instrucciones:</strong> Asegúrate de comprender completamente las
                    instrucciones de cada problema antes de comenzar a escribir código.</li>
            </ol>
        </div>

        <p>Agradecemos tu dedicación y entusiasmo en esta época tan especial. ¡Estamos emocionados de tenerte en nuestro
            programa!</p>
    </div>
    <footer>
        <div class="text1footer">
            <h5>ORGANIZADO POR</h5>
            <h3>DevSpace MKJJ</h3>
        </div>
        <div class="text2footer">
            <p>¡Que tengas unas felices fiestas y un próspero año nuevo! Para más información, por favor, no dudes en
                ponerte en contacto con nosotros, respondiendo a este correo.</p>
        </div>

    </footer>
</body>

</html>
`;

module.exports = correoHTMLF1A;
