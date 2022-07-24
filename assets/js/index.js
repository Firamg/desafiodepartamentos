const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500
  }
];

//Definicion de variables a tomar
const btn = document.querySelector("#btn")
const templatePropiedades = document.querySelector(".propiedades");
let total = document.querySelector("#total");
let html = "";


//template general
const templateBase = (item) => {
 return `
    <div class="propiedad">
      <div class="img"
          style="background-image: url(${item.src})">
      </div>
      <section>
        <h5>${item.nombre}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos:${item.cuartos}</p>
          <p>Metros: ${item.metros}</p>
        </div>
        <p class="my-3">${item.descripcion}</p>
        <button class="btn btn-info ">Ver más</button>
      </section>
    </div>
  `;
}


//Función para carga inicial
const cargaInicial = () => {
  for (const item of propiedadesJSON) {
    html += templateBase(item);
  }
  templatePropiedades.innerHTML += html;
  total.innerHTML = propiedadesJSON.length;
}


//Función de búsqueda
const busquedaItem = (dsd, hst, cuartos) => {
  html = "";
  let resultadoBusqueda = [];

  for (const item of propiedadesJSON) {
    if ((dsd <= item.metros <= hst) && (item.cuartos >= cuartos)) {
      html += templateBase(item);
      resultadoBusqueda.push(item);
    }
  }

  if(resultadoBusqueda.length>0) {
    templatePropiedades.innerHTML = html;
    total.innerHTML = resultadoBusqueda.length;
  } else {
    templatePropiedades.innerHTML = `
    <div class="propiedad">Sin Propiedades</div>
    `;
    total.innerHTML = resultadoBusqueda.length;
  }
}
;

btn.addEventListener("click", validar = () => {
  var cuartos = document.querySelector("#cuartos").value;
  var dsd = document.querySelector("#dsd").value;
  var hst = document.querySelector("#hst").value;

  if (cuartos != 0 && dsd != 0 && hst != 0) {
    busquedaItem(dsd, hst, cuartos);
  }
});




window.onload = function () {
  cargaInicial();
}


