<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Account Details</title>
</head>

<body>
    <?php
    $name = $lastname = $address = $email = $password = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstname = validate_input($_POST['firstname']);
        $lastname = validate_input($_POST['lastname']);
        $address = validate_input($_POST['address']);
        $email = validate_input($_POST['email']);
        $password = validate_input($_POST['password']);
    }

    function validate_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>

    <div class="account" align="center">
        <div id="title">
            <h3>SD 208 Activity -
                <span>JUSPHER BALANGYAO</span>
                <h3>
        </div>
        <p id="noErrors">Successfully Registered</p>
        <div class="main-box">
            <div class="user-details">
                <h3>Acount Details</h3>
                <?php
                echo "<section style='text-align: start; color: white;'>";
                echo "<p> First Name: <span style='font-weight: 600;'>" . $firstname . " </span></p>";
                echo "<p> Last Name: <span style='font-weight: 600;'>" . $lastname . " </span></p>";
                echo "<p> Address: <span style='font-weight: 600;'>" . $address . " </span></p>";
                echo "<p> Email: <span style='font-weight: 600;'>" . $email . " </span></p>";
                echo "<p> Password: <span style='font-weight: 600;'>" . $password . " </span></p>";
                echo "</section>"
                ?>
            </div>
            <div class="OUT"><a href="registration.html">LOGOUT</a></div>
        </div>
    </div>
</body>

</html>