const correoHTMLF1R = `
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación de Solicitud de Beca</title>
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
        .text1footer h5{
            color: #f50606;
            font-size: 10px;
        }
        .text1footer h3{
            color: #fff;
            font-size: 20px;
        }
        .text1footer{
            width: 50%;
        }
        .text2footer p{
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
    <p class="text2">Lamentamos informarte que tu solicitud de beca para el <strong>curso de
            programación avanzada</strong> no ha sido aceptada en la <strong>primera fase de revisión</strong>.</p>
            <a href=""><img src="https://media1.tenor.com/m/U4-GsHLOxGIAAAAC/sorry.gif" alt="unnamed" class="sticker"></a>

    <p>Agradecemos tu interés en nuestro programa y te animamos a considerar aplicar nuevamente en futuras convocatorias. </p>
    
    <div class="recomendacion">
        <h3>Queremos compartir contigo algunas reflexiones:</h3>
        <p>Comprendemos que, en esta ocasión, tu solicitud no fue aceptada. Esta decisión se basa en la evaluación de todas las solicitudes recibidas, considerando las necesidades de cada solicitante y los recursos disponibles.</p>
        <p>Es importante destacar que la no aceptación en esta fase no significa que no tengas mérito ni habilidades. A veces, recibimos más solicitudes de las que podemos aceptar y debemos tomar decisiones difíciles.</p>
        <p>Te animamos a no desanimarte y a recordar que esta no es la única oportunidad para alcanzar tus metas. Cada experiencia, sin importar el resultado, es una oportunidad para aprender y crecer.</p>
        <p>Valoramos tus esfuerzos y agradecemos tu interés en nuestra beca.</p>
    </div>       

    <p>Agradecemos tu dedicación y te deseamos mucho éxito en tus futuros esfuerzos académicos.</p>

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

module.exports = correoHTMLF1R;
