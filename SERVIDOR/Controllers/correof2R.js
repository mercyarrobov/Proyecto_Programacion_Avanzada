const correoHTMLF2R =  `
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de Evaluación de Beca</title>
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
            height: 300px;
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

        .boton-revision a {
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
        <p class="text1">¡Hola, [Nombre del solicitante]!</p>
        <p class="text2">¡Queremos informarte sobre el resultado de la evaluación!</p>
        <a href=""><img src="https://media1.tenor.com/m/olg0-CL8VF4AAAAd/lastima-marina-ruiz.gif" alt="sad" class="sticker"></a>
        <p>Lamentamos informarte que, después de una cuidadosa revisión, tu solicitud para la <strong>beca del curso de
                programación avanzada</strong> no fue aceptada en esta ocasión.😞</p>
        <p>Esta decisión se basa en la evaluación de la <strong>segunda fase</strong> del proceso de selección, donde se
            tuvieron en cuenta varios criterios para asegurar la calidad del programa y la experiencia de aprendizaje.
        </p>
        <div class="recomendacion">
            <h3>Te animamos a considerar las siguientes recomendaciones😊:</h3>
            <ol>
                <li><strong>No desistas:</strong> Aunque esta vez no fue posible, cada intento es una oportunidad para
                    aprender y crecer.</li>
                <li><strong>Refuerza tus conocimientos:</strong> Considera mejorar tus habilidades en conceptos clave
                    del curso, como estructuras de datos y algoritmos.</li>
        </div>

        <p>¡Agradecemos tu esfuerzo y dedicación en el proceso de solicitud! Si tienes preguntas o necesitas más
            información, no dudes en ponerte en contacto con nosotros respondiendo a este correo.</p>
        </div>

        <footer>
            <div class="text1footer">
                <h5>ORGANIZADO POR</h5>
                <h3>DevSpace MKJJ</h3>
            </div>
            <div class="text2footer">
                <p>¡Que tengas éxito en tus futuros esfuerzos y te deseamos lo mejor en tu camino de aprendizaje!</p>
            </div>
        </footer>

</body>

</html>
`;

module.exports = correoHTMLF2R;
