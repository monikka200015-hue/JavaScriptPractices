<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="main">
        <p>This is my first paragraph</p>
        <p>This is my second paragraph</p>
    </div>
    <div id="Output">
        <p id="demo">Hi</p>
        <script>
            const x =document.getElementById("main").
            innerHTML;
            const y =x.getElementByTagName("p").innerHTML;
            document.getElementById("demo").innerHTML=
            "Hello";
            document.getElementById("demo").innerHTML=
            "Here is the output"+x.innerHTML;


        </script>
    </div>
    
</body>
</html>

