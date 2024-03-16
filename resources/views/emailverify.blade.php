<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Email</title>  
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin: 0;
            padding: 0;
            }

            .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
            color: #333;
            }

            .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            }

            .button:hover {
            background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hola, {{$name}}</h1>
            <p>
                Gracias por unirte a nosotros. 
                Por favor, verifica tu correo electrónico haciendo clic en el botón de abajo.
            </p>
            <a href="{{$url}}" class="button">Verificar Correo</a>
        </div>
    </body>
</html>