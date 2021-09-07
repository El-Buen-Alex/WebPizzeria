const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const formulario2 = document.getElementById("form2");
const inputs2 = document.querySelectorAll("#form2 input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10}$/, // 10 numeros.
};
const campos = {
  password2: false,
  password3: false,
  usuario2: false,
  usuario: false,
  nombre2: false,
  correo2: false,
  telefono2: false,
  password: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "correo2":
      validarCampo(expresiones.correo, e.target, "correo2");
      break;
    case "telefono2":
      validarCampo(expresiones.telefono, e.target, "telefono2");
      break;
    case "usuario":
      validarCampo(expresiones.usuario, e.target, "usuario");
      break;
    case "nombre2":
      validarCampo(expresiones.nombre, e.target, "nombre2");
      break;
    case "usuario2":
      validarCampo(expresiones.usuario, e.target, "usuario2");
      break;

    case "password":
      validarCampo(expresiones.password, e.target, "password");
      break;
    case "password2":
      validarCampo(expresiones.password, e.target, "password2");
      validarPassword3();
      break;
    case "password3":
      validarCampo(expresiones.password, e.target, "password3");
      validarPassword3();
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

const validarPassword3 = () => {
  const inputPassword1 = document.getElementById("password2");
  const inputPassword2 = document.getElementById("password3");

  if (inputPassword1.value !== inputPassword2.value) {
    document
      .getElementById(`grupo__password3`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password3`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password3 i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__password3 i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__password3 .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos["password"] = false;
  } else {
    document
      .getElementById(`grupo__password3`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password3`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password3 i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__password3 i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__password3 .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos["password"] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

inputs2.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario2.addEventListener("submit", (e) => {
  if (
    campos.usuario2 &&
    campos.nombre2 &&
    campos.password2 &&
    campos.correo2 &&
    campos.telefono2
  ) {
    document
      .getElementById("formulario__mensaje-exito2")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito2")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 2000);

    document
      .querySelectorAll(".formulario__grupo-correcto2")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    e.preventDefault();
    document
      .getElementById("formulario__mensaje2")
      .classList.add("formulario__mensaje-activo");

    setTimeout(() => {
      document
        .getElementById("formulario__mensaje2")
        .classList.remove("formulario__mensaje-activo");
    }, 3000);
  }
});

/* valida login */
formulario.addEventListener("submit", (e) => {
  // noVacio = document.getElementById(noVacio).value; (noVacio.length==0 || /ˆ\s+$/.test(noVacio)
  if (campos.usuario && campos.password) {
  } else {
    e.preventDefault();

    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");

    setTimeout(() => {
      document
        .getElementById("formulario__mensaje")
        .classList.remove("formulario__mensaje-activo");
    }, 3000);
  }
});
