<?php
      if(!isset($_SESSION)) 
      { 
          session_start();
      }
      if(isset($_SESSION["usuario"]["rol"])){
        if(($_SESSION["usuario"]["rol"] == 1)){
          header("location: index.php?c=admin");
         }else{
             if($_SESSION["usuario"]["rol"] == 2){
                 header("location: index.php");
             }
         }
      }
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/styles/styles.css" />
  <title>Accede como usuario</title>
</head>

<body>
  <header>

    <?php
       require_once "views/partials/header.php";
    ?>
  </header>
  <div class="containerr">
    <div class="forms-containerr">
      <div class="signin-signup">


        <form class="sign-in-form formLocal" id="form" action="index.php?c=usuarios&a=index" method="POST">
          <h2 style="color: #b36105; font-family: Bookman Old Style;">Ingrese los datos</h2>
          <br>

          <div class="formulario__grupo" id="grupo__usuario">
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input name="usuario" placeholder="Usuario" required>
              <i class="formulario__validacion-estado fas fa-times-circle"> </i>
            </div>
            <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros,
              letras y guion bajo.</p>
          </div>

          <div class="formulario__grupo" id="grupo__password">
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="password" name="password" id="password" placeholder="Contraseña" required>
              <i class="formulario__validacion-estado fas fa-times-circle"> </i>
            </div>
            <p class="formulario__input-error">El contraseña debe contener más de 3 digitos.</p>
          </div>

          <div class="formulario__mensaje" id="formulario__mensaje">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </div>

          <div class="formulario__grupo formulario__grupo-btn-enviar">
            <button class="formulario__btn fondo" id="botonIniciar">Iniciar sesión</button>
            <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
          </div>

        </form>

        <form action="index.php?c=usuarios&a=registro" class="sign-up-form formLocal" method="POST" id="form2">
          <h2 style="color: #b36105; font-family: Bookman Old Style;">Ingrese los datos para el registro</h2>
          <br>

          <div class="formulario__grupo" id="grupo__usuario2">
            <label style="color: #b36105; font-family: Bookman Old Style;">Usuario:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="text" name="usuario2" id="usuario2">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros,
              letras y guion bajo.</p>
          </div>


          <!-- Grupo: Nombre -->
          <div class="formulario__grupo" id="grupo__nombre2">
            <label style="color: #b36105; font-family: Bookman Old Style;">Nombre:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="text" name="nombre2" id="nombre2">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El nombre solo puede contener letras.</p>
          </div>



          <!-- Grupo: Contraseña -->
          <div class="formulario__grupo" id="grupo__password2">
            <label style="color: #b36105; font-family: Bookman Old Style;">Contraseña:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="password" name="password2" id="password2">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
          </div>

          <!-- Grupo: Contraseña 2 -->
          <div class="formulario__grupo" id="grupo__password3">
            <label style="color: #b36105; font-family: Bookman Old Style;">Repetir contraseña:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="password" name="password3" id="password3">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
          </div>

          <!-- Grupo: Correo Electronico -->
          <div class="formulario__grupo" id="grupo__correo2">
            <label style="color: #b36105; font-family: Bookman Old Style;">Correo Electrónico:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="email" name="correo2" id="correo2">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion
              bajo.</p>
          </div>

          <!-- Grupo: Teléfono -->
          <div class="formulario__grupo" id="grupo__telefono2">
            <label style="color: #b36105; font-family: Bookman Old Style;">Teléfono:</label>
            <div class="formulario__grupo-input input-field"> <span class="barra"></span>
              <input type="text" name="telefono2" id="telefono2">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El telefono solo puede contener numeros y debe ingresar 10 dígitos.</p>
          </div>

          <div class="formulario__mensaje" id="formulario__mensaje2">
            <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </div>

          <div class="formulario__grupo formulario__grupo-btn-enviar">
            <button type="submit" class="formulario__btn fondo" id="botonRegistrar">Registrarse</button>
            <p style="color: green;" class="formulario__mensaje-exito" id="formulario__mensaje-exito2">Registro exitoso,
              por favor dirigase a iniciar sesión para ingresar.</p>
          </div>

        </form>

      </div>
    </div>

    <div class="panels-containerr">
      <div class="panel left-panel">
        <div class="content">
          <h3>¿No tienes cuenta?</h3>
          <p style="font-size: 17px;">
            Presiona en el siguiente botón para registrarte.
          </p>
          <button class="botonesInicio" id="sign-up-btn">
            Registrarse
          </button>
        </div>
        <img src="assets/resources/logo.png" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>¿Ya estas registrado?</h3>
          <p>
            Inicia sesión ahora con tu cuenta.
          </p>
          <button class="botonesInicio" id="sign-in-btn">
            Iniciar sesión
          </button>
        </div>
        <img src="assets/resources/logo.png" class="image" alt="" />
      </div>
    </div>
  </div>

  
  <footer>
    <?php
       require_once "views/partials/footer.php";
    ?>
  </footer>
  <script src="assets/js/app.js"></script>
  <script src="assets/js/validarFormLogReg.js"></script>
</body>

</html>