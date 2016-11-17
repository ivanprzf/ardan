// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova','ngAnimate','ng-fx'])

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    
    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

// .run(function($rootScope) {

// })

.controller('ArdanCtrl',function($scope,$http,$ionicModal,$ionicPopup,$ionicPopover,$ionicLoading,$cordovaGeolocation,$filter,$q){
/***********************Inicializaciones/Procesos iniciales****************************/
  $scope.ardan={};
  $scope.ardan.tlf="986269715";
  $scope.ardan.horario="Lunes a Viernes de 9.00 a 15.00";
  $scope.ardan.email="ardan@ardan.es";
  $scope.ardan.direccion="Área Portuaria de Bouzas s/n, 36208 Vigo (Pontevedra)";
  //$scope.ardan.direccion="Rúa das Pontes nº4, 36350 Nigrán, Pontevedra";
  $scope.ardan.web="www.ardan.es";
  $scope.ardan.twitter="www.twitter.com/zonafrancavigo";
  $scope.ardan.facebook="www.facebook.com/zonafrancavigo";
  $scope.ardan.linkedin="www.linkedin.com/company/consorcio-zona-franca-de-vigo";
  $scope.ardan.youtube="www.youtube.com/channel/UCEIJ-u-_5u86DZLei0CDuwg";
  $scope.ardan.webproductos="www.ardan.es/ardan/index.php?option=com_content&task=view&id=1269&Itemid=1527";
  //Coordenadas Bouzas
  $scope.ardan.lat="42.230265";
  $scope.ardan.lng="-8.755338";
  //Coordenadas Porto do Molle
  //$scope.ardan.lat="42.133506";
  //$scope.ardan.lng="-8.7940963";
  $scope.ardan.descargable=['Las 20.000 empresas gallegas de mayor facturación en el ejercicio 2014','Datos totalmente exportables a Excel, permite trabajar con ellos en su ordenador','Múltiples filtros por nombre de empresa, económicos, sectoriales, geográficos, etc.','Permite seleccion de listados o fichas de empresa.','Formato descargable con software de fácil manejo para entorno Windows.'];
  $scope.ardan.libro15=['Informe económico y de competitividad','Directorio con las 10.000 empresas gallegas de mayor facturación','Rankings por sector, facturación y provincia','Base de datos descargable de empresas contenidas en la publicación datos ejercicio económico 2013']
  $scope.ardan.suscripcion=["12 meses de acceso ","Consulta ilimitada de Fichas de Empresa ","Muestra de empresas: más de 95.000 de España (29.000 de Galicia)","Posibilidad de compra de informes económicos o listados de empresas"];
  $scope.ardan.marketing=["12 meses de acceso","Consulta ilimitada de Fichas de Empresa","Muestra de empresas: más de 95.000 de España (29.000 de Galicia)","10 informes Flash económicos","10 informes Económicos (Posición en el Sector o Competidores)","Posibilidad de compra de más informes económicos","Listados: hasta 20.000 empresas para descarga a Excel (sólo datos identificativos)"];
  $scope.ardan.completo=["12 meses de acceso","Consulta ilimitada de Fichas de Empresa","Muestra de empresas: más de 95.000 de España (29.000 de Galicia)","1000 informes Flash económicos","100 informes Económicos (Posición en el Sector o Competidores)","Posibilidad de compra de más informes económicos","Listados: hasta 20.000 empresas para descarga a Excel (con información económica)"];
  $scope.tamanos=[
    {value:"",name:"Todos"},
    {value:"Grande", name:"Grande"},
    {value:"Mediana", name:"Mediana"},
    {value:"Pequeña", name:"Pequeña"}
  ];
  $scope.spss=[
    {value:"",name:"Todos"},
    {value:"Construcción",name:"Construcción"},
    {value:"Productos químicos y derivados",name:"Productos químicos y derivados"},
    {value:"Industria auxiliar",name:"Industria auxiliar"},
    {value:"Automoción y equipo",name:"Automoción y equipo"},
    {value:"Textil, confección y moda",name:"Textil, confección y moda"},
    {value:"Maquinaria y equipo",name:"Maquinaria y equipo"},
    {value:"Agroalimentario",name:"Agroalimentario"},
    {value:"Madera y muebles",name:"Madera y muebles"},
    {value:"Salud y asistencia social",name:"Salud y asistencia social"},
    {value:"Turismo, viajes y ocio",name:"Turismo, viajes y ocio"},
    {value:"Electricidad, energía y agua",name:"Electricidad, energía y agua"},
    {value:"Rocas ornamentales",name:"Rocas ornamentales"},
    {value:"Artículos de consumo",name:"Artículos de consumo"},
    {value:"Información y conocimiento",name:"Información y conocimiento"},
    {value:"Pesca",name:"Pesca"},
    {value:"Servicios profesionales",name:"Servicios profesionales"},
    {value:"Logística y transporte",name:"Logística y transporte"},
    {value:"Administración pública",name:"Administración pública"},
    {value:"Naval",name:"Naval"},
    {value:"Actividades financieras e Inmobiliarias",name:"Actividades financieras e Inmobiliarias"}
  ];
  $scope.indicadores=[
    {value:"altaproductividad",name:"Alta Productividad",desc:"El valor añadido por empleado está situado por encima del percentil 75 del sector en el que opera durante los tres años consecutivos del período de análisis, y dicho valor añadido por empleado crece al menos un 10% durante cada uno de esos tres años."},
    {value:"altorendimiento",name:"Alto Rendimiento",desc:"Empresa que consigue una rentabilidad económica media de al menos el 25%, en un período mínimo de tres años, siempre y cuando en ningún año haya obtenido una rentabilidad económica por debajo del 15%."},
    {value:"biengestionada",name:"Bien Gestionada",desc:"Las empresas bien gestionadas responden a varios criterios simultáneamente: crecimiento, rentabilidad, productividad y liquidez; con valores por encima de la mediana del sector en el que se encuentran y durante un período de tres años consecutivos."},
    {value:"innovadora",name:"Empresa Innovadora",desc:"El desempeño innovador se obtiene mediante una metodología basada en un sistema de sub-indicadores que confeccionan el indicador sintético de innovación.<br/>Las dimensiones de partida se dividen en 4 grupos:<br/>·Inputs de inversión.<br/>·Inputs de capacidades.<br/>·Throughputs.<br/>·Outputs."},
    {value:"internacionalizada",name:"Empresa Internacionalizada",desc:"La empresa internacionalizada es aquélla que, tomando como variable de referencia la propensión exportadora, presenta valores elevados en una serie de magnitudes directamente relacionadas con el proceso de internacionalización empresarial tales como los países a los que exporta, la relación de las exportaciones con las ventas internas, los clientes extranjeros, los empleados dedicados a tareas de internacionalización o las exportaciones fuera de la Unión Europea."},
    {value:"gacela",name:"Gacela",desc:"Son empresas que presentan una tasa de crecimiento elevada y constante en su cifra de ingresos, por encima del 25%, durante 3 años consecutivos (siempre y cuando la cifra de facturación del primer año del período de análisis supere los 300.000 euros)."},
    {value:"generadorariqueza",name:"Generadora de Riqueza",desc:"Empresas que presentan un EVA positivo en el período de análisis. El EVA mínimo del primer año ha de ser superior a 150.000 euros y debe crecer al menos un 10% durante 3 años consecutivos."}
    //{value:"sostenible",name:"Sostenible",desc:"Empresa sostenible."}
  ]; 
  $scope.ccaa=[
    {value:"ANDALUCIA",name:"Andalucía",lat:37.35,lng:-5.00},
    {value:"ARAGON",name:"Aragón",lat:41.25,lng:-0.40},
    {value:"ASTURIAS",name:"Asturias",lat:43.15,lng:-6.00},
    {value:"BALEARES",name:"Islas Baleares",lat:39.30,lng:3.00},
    {value:"CANARIAS",name:"Canarias",lat:28.28,lng:-16.15},
    {value:"CANTABRIA",name:"Cantabria",lat:43.10,lng:-4.00},
    {value:"CASTILLA-LEON",name:"Castilla y León",lat:42.00,lng:-5.00},
    {value:"CASTILLA-MANCHA",name:"Castilla-La Mancha",lat:39.30,lng:-3.30},
    {value:"CATALUÑA",name:"Cataluña",lat:41.40,lng:1.15},
    {value:"EXTREMADURA",name:"Extremadura",lat:39.30,lng:-6.05},
    {value:"GALICIA",name:"Galicia",lat:42.43,lng:-7.45},
    {value:"LA RIOJA",name:"La Rioja",lat:42.20,lng:-2.20},
    {value:"MADRID",name:"Comunidad de Madrid",lat:40.25,lng:-3.45},
    {value:"MURCIA",name:"Región de Murcia",lat:38.05,lng:-1.10},
    {value:"NAVARRA",name:"Navarra",lat:42.40,lng:-1.40},
    {value:"PAIS VASCO",name:"Pais Vasco",lat:42.50,lng:-2.45},
    {value:"VALENCIA",name:"Comunidad Valenciana",lat:39.20,lng:-0.4},
    {value:"CEUTA",name:"Ceuta",lat:35.55,lng:-5.24},
    {value:"MELILLA",name:"Melilla",lat:35.17,lng:-2.56}
  ];
  $scope.anos=[
    {value:"",name:"Todos"},
    {value:"2014", name:"2014"},
    {value:"2013", name:"2013"},
    {value:"2012", name:"2012"},
    {value:"2011", name:"2011"},
    {value:"2010", name:"2010"},
    {value:"2009", name:"2009"}
  ];

  $scope.empresa={};
  $scope.indicadoresempresa=[];
  $scope.filtros={};
  $scope.filtros.tam="";
  $scope.filtros.sps="";
  $scope.filtros.fechacreaciona;
  $scope.filtros.fechacreacionp;
  $scope.filtros.indicadores=[];
  $scope.filtros.conemail=false;
  $scope.filtros.ccaa=[];
  $scope.filtros.anoe="";
  $scope.empresasFiltradas=[];
  $scope.dispositivo={};

  var hoy = new Date(); 
  hoy=hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear();

  /****************Inicializacion base de datos**************/
  if(!window.localStorage['empresasArdan'+hoy]){
    window.localStorage.clear();
    $ionicLoading.show();
    //console.log('pillo database');
    $http.get("http://www.zfv.es/innobench/index2.php?no_html=1&option=com_xestec&task=ccu_controler&act=empresasardan&rutina=listarJSON").then(function(response) {
          //console.log('OK',response);
          window.localStorage['empresasArdan'+hoy] = JSON.stringify(response.data);
          $scope.empresas=JSON.parse(window.localStorage['empresasArdan'+hoy]);            
          $ionicLoading.hide();     
      }, function(err) {
      console.error('Imposible obtener datos.', err);
    });
  }else{
    //console.log('pillo localstorage');
    $scope.empresas=JSON.parse(window.localStorage['empresasArdan'+hoy]);
  }
  /**********************************************************/

/*******************************************************************************/

/************Carga plantillas***************/
  $ionicModal.fromTemplateUrl('templates/fichaEmpresa.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.ficha = modal
  });

  $ionicModal.fromTemplateUrl('templates/filtro.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.filtro = modal
  });

  $ionicModal.fromTemplateUrl('templates/mapaEmpresas.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.mapa = modal
  });

  $ionicPopover.fromTemplateUrl('templates/infoIndicador.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.infoindicador = popover;
  });
/********************************************/

/*****************Obtener coordenadas GPS al iniciar la aplicación.*****************/
  var posOptions = {timeout: 2000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
        $scope.dispositivo.latitud  = position.coords.latitude
        $scope.dispositivo.longitud = position.coords.longitude
    }, function(err) {
      // error
      //alert('Para mayor precisión, por favor, active el posicionamiento GPS del dispositivo.');
    });
  
/*********************************************************/

/***************Consultas SQL -> JSON************************/  
   $scope.getDatosEmpresa = function(cif){
    $ionicLoading.show();
    $http.get("http://www.zfv.es/innobench/index2.php?no_html=1&option=com_xestec&task=ccu_controler&act=empresasardan&rutina=obtenerEmpresaJSON&cif="+cif).then(function(response) {
          console.log('OK',response.data[0]);
          $scope.empresa=response.data[0];
          $scope.empresa.web=$scope.empresa.web.replace("http://","");         
          $scope.setLogoEmpresa();          
          $scope.formateaCifras();
          $scope.checkIndicadores();
          if($scope.empresa.domicilio==' ')$scope.empresa.domicilio='';
          $ionicLoading.hide();
          $scope.ficha.show();
      }, function(err) {
      console.error('Imposible obtener datos.', err);
    }) 
  };

  $scope.getDatosEmpresasFiltradas = function(){
    $ionicLoading.show();
    $http.get("http://www.zfv.es/innobench/index2.php?no_html=1&option=com_xestec&task=ccu_controler&act=empresasardan&rutina=filtrarEmpresasJSON&tam="+$scope.filtros.tam+"&sps="+$scope.filtros.sps+"&indicadores="+$scope.filtros.indicadores+"&conemail="+$scope.filtros.conemail+"&ccaa="+$scope.filtros.ccaa+"&anoe="+$scope.filtros.anoe).then(function(response) {
          //console.log("http://www.zfv.es/innobench/index2.php?no_html=1&option=com_xestec&task=ccu_controler&act=empresasardan&rutina=filtrarEmpresasJSON&tam="+$scope.filtros.tam+"&sps="+$scope.filtros.sps+"&indicadores="+$scope.filtros.indicadores+"&conemail="+$scope.filtros.conemail+"&ccaa="+$scope.filtros.ccaa+"&anoe="+$scope.filtros.anoe);
          //console.log('OK',response.data);
          $scope.empresasFiltradas=response.data;
          $ionicLoading.hide();
      }, function(err) {
      console.error('Imposible obtener datos.', err);
    })
  };
/************************************************************/
/**********************Funciones varias**********************/

  function isImage(src) {
    var deferred = $q.defer();
    var image = new Image();
    image.onerror = function() {
        deferred.resolve(false);
    };
    image.onload = function() {
        deferred.resolve(true);
    };
    image.src = src;
    return deferred.promise;
  }

  $scope.setLogoEmpresa = function(){
    //Busco en un directorio
    isImage("http://www.ardan.es/exportacion/expgal/imagenes/tratadas200/grempres/"+$scope.empresa.cif+"_E_0.PNG").then(function(test) {
      if(test) 
        $scope.empresa.logo="http://www.ardan.es/exportacion/expgal/imagenes/tratadas200/grempres/"+$scope.empresa.cif+"_E_0.PNG";
    });
    //Busco en otro directorio (el mod de apache 'mod_speling' hace que salgan logotipos que no corresponden a la empresa)
    // isImage("http://www.ardan.es/ardan/images/stories/xestec-35/200/logotipo-"+$scope.empresa.idth+".png").then(function(test) {
    //   if(test) 
    //     $scope.empresa.logo="http://www.ardan.es/ardan/images/stories/xestec-35/200/logotipo-"+$scope.empresa.idth+".png";
    // });
    //Busco en otro directorio
    //...
  }

  $scope.abreFicha = function(cif) {
    $scope.getDatosEmpresa(cif);
  };

  $scope.cierraFicha = function() {
    $scope.ficha.hide();
  };

  $scope.abreInfoIndicador = function($event,indicador){
    $scope.infoindicador.show($event);
    switch (indicador){
      case 'ap.jpg':
        $scope.infoindicadornombre=$scope.indicadores[0].name;
        $scope.infoindicadortexto=$scope.indicadores[0].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'ar.jpg':
        $scope.infoindicadornombre=$scope.indicadores[1].name;
        $scope.infoindicadortexto=$scope.indicadores[1].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'bg.jpg':
        $scope.infoindicadornombre=$scope.indicadores[2].name;
        $scope.infoindicadortexto=$scope.indicadores[2].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'inn.jpg':
        $scope.infoindicadornombre=$scope.indicadores[3].name;
        $scope.infoindicadortexto=$scope.indicadores[3].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'int.jpg':
        $scope.infoindicadornombre=$scope.indicadores[4].name;
        $scope.infoindicadortexto=$scope.indicadores[4].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'g.jpg':
        $scope.infoindicadornombre=$scope.indicadores[5].name;
        $scope.infoindicadortexto=$scope.indicadores[5].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      case 'gr.jpg':
        $scope.infoindicadornombre=$scope.indicadores[6].name;
        $scope.infoindicadortexto=$scope.indicadores[6].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;      
      case 's.jpg':
        $scope.infoindicadornombre=$scope.indicadores[7].name;
        $scope.infoindicadortexto=$scope.indicadores[7].desc;
        $scope.infoindicadorfondo="img/indicadores/"+indicador;
      break;
      default:
      break;
    }
  }

  $scope.abreMapa = function() {
    if($scope.empresasFiltradas.length<1){
      var alertPopup = $ionicPopup.alert({
        title: 'Mapa Empresas',
        template: 'Para ver el mapa de empresas debes aplicar primero un filtro'
      });
      return;
    }
    if($scope.empresasFiltradas.length<=500){
      $ionicLoading.show();
      //Refresco las coordenadas.
      var posOptions={timeout: 4000, enableHighAccuracy: false};
      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
          //console.log(position);
          $ionicLoading.hide();
          $scope.dispositivo.latitud  = position.coords.latitude
          $scope.dispositivo.longitud = position.coords.longitude          
          $scope.mapa.show();
          initializeMap();
      }, function(err) {
        // error
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
          title: 'Mapa Empresas',
          template: 'Para esta funcionalidad, es necesario que actives el geoposicionamiento del dispositivo.'
        });
      });     
    }else{
      var alertPopup = $ionicPopup.alert({
        title: 'Mapa Empresas',
        template: 'Hay demasiadas empresas en tu filtro, prueba con una busqueda más reducida.'
      });
      return;
    }
  };

  $scope.cierraMapa = function() {
    $scope.mapa.hide();
  };

  $scope.abreFiltros = function(){
    $scope.filtro.show();
  };

  $scope.cerrarFiltros = function(){
    $scope.filtro.hide();
  };

  $scope.aplicarFiltros = function(){
    $scope.empresasFiltradas=[];
    $scope.getDatosEmpresasFiltradas();
    $scope.cerrarFiltros();
  };

  $scope.empresasbuscadas=[];
  $scope.buscaempresas = function(){
    $scope.empresasbuscadas=[];
    $scope.empresas.searchupper=$scope.empresas.search.toUpperCase();
    if($scope.empresas.search!=''){
      angular.forEach($scope.empresas,function(value,key){
        if(value.empresa.indexOf($scope.empresas.searchupper) > -1 || value.cif.indexOf($scope.empresas.searchupper) > -1)
          $scope.empresasbuscadas.push({nom:value.empresa,cif:value.cif});
      });
    }     
  };

  $scope.borrasearch = function(){
    $scope.empresas.search="";
    $scope.empresasbuscadas=[];
  };

  $scope.checkIndicadores = function(){
    $scope.indicadoresempresa=[];
    if($scope.empresa.altaproductividad) $scope.indicadoresempresa.push('ap.jpg');
    if($scope.empresa.altorendimiento) $scope.indicadoresempresa.push('ar.jpg');
    if($scope.empresa.biengestionada) $scope.indicadoresempresa.push('bg.jpg');
    if($scope.empresa.innovadora) $scope.indicadoresempresa.push('inn.jpg');
    if($scope.empresa.internacionalizada) $scope.indicadoresempresa.push('int.jpg');
    if($scope.empresa.gacela) $scope.indicadoresempresa.push('g.jpg');
    if($scope.empresa.generadorariqueza) $scope.indicadoresempresa.push('gr.jpg');
    //Si la empresa no tiene ningun indicador ponemos el valor del array a false, para que no salga el campo en la plantilla.
    if($scope.indicadoresempresa.length==0) $scope.indicadoresempresa=false;
  };

  $scope.openBrowser = function(url) {
    //console.log('url: '+url);
    window.open('http://'+url, '_system');
  };

  $scope.openBrowserGMaps = function(lat,lng) {
    //Si tengo coordenadas gps del dispositivo.
    if($scope.dispositivo.latitud && $scope.dispositivo.longitud){
      window.open('https://www.google.com/maps/dir/'+$scope.dispositivo.latitud+','+$scope.dispositivo.longitud+'/'+lat+','+lng,'_system');
    }
    else{
      //Sin coordenadas gps del dispositivo usamos el posicionamiento del explorador con 'Current Location'.
      window.open('https://www.google.com/maps/dir/Current+Location/'+lat+','+lng,'_system');
    }     
  };

  $scope.formateaCifras = function(){
    if($scope.empresa.npinge) $scope.empresa.npingef=$filter('number')($scope.empresa.npinge,0).replace(/,/g,".");
    if($scope.empresa.nprbex) $scope.empresa.nprbexf=$filter('number')($scope.empresa.nprbex,0).replace(/,/g,".");
    if($scope.empresa.npreje) $scope.empresa.nprejef=$filter('number')($scope.empresa.npreje,0).replace(/,/g,".");
    if($scope.empresa.nppatn) $scope.empresa.nppatnf=$filter('number')($scope.empresa.nppatn,0).replace(/,/g,".");
  };

  //Calculo distancia entre dos posiciones.
  $scope.distance = function (lat1, lon1, lat2, lon2){
    rad = function(x) {return x*Math.PI/180;}

    var R     = 6378.137;                     //Radio de la tierra en km
    var dLat  = rad( lat2 - lat1 );
    var dLong = rad( lon2 - lon1 );

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
  }

  $scope.cambiacentromapa = function(){
    if($scope.filtros.ccaa.length==1){
      for(i=0;i<19;i++){
        if($scope.filtros.ccaa[0]==$scope.ccaa[i].value) 
          return new google.maps.LatLng($scope.ccaa[i].lat, $scope.ccaa[i].lng);
      }
      return new google.maps.LatLng($scope.dispositivo.latitud, $scope.dispositivo.longitud);
    }
    if($scope.filtros.ccaa.length==0)
      return new google.maps.LatLng($scope.dispositivo.latitud, $scope.dispositivo.longitud);
    if($scope.filtros.ccaa.length>1)
      return new google.maps.LatLng($scope.ccaa[12].lat, $scope.ccaa[12].lng);
  }


  //GMaps
  function initializeMap() {
    $ionicLoading.show();

    //Si hemos seleccionado más de 1 región establecemos un zoom más alejado en el que se vea España entera.
    if($scope.filtros.ccaa.length>1) 
      var zoom=5;
    else
      var zoom=7;

    var miPos = new google.maps.LatLng($scope.dispositivo.latitud, $scope.dispositivo.longitud);
    var centro = $scope.cambiacentromapa();
      
    var mapOptions = {
      center: centro,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: miPos,
      map: map,
      title: 'Mi posición'
    });

    oms = new OverlappingMarkerSpiderfier(map,
      {markersWontMove: true, markersWontHide: true, keepSpiderfied: true, circleSpiralSwitchover: 40 });

    //Añadimos un marcador por cada empresa que aparecerá en el mapa.
    angular.forEach($scope.empresasFiltradas,function(value,key){
      //console.log(key,value);
      var posempresa = new google.maps.LatLng(value.latitud,value.longitud);
      var marcador = new google.maps.Marker({
              position: posempresa,
              map: map,
              label: "",
              draggable: false,
              animation: google.maps.Animation.DROP,
              icon: "img/mapPoint.png"
          });
      console.log(value);
      var infowindow = new google.maps.InfoWindow({
              content: "<div><b>"+value.cif+"</b></div><div>"+value.empresa+"</div>"
          });
          marcador.addListener('click', function() {
              infowindow.open(map, marcador);
          });

          oms.addMarker(marcador);
    });
    $scope.map = map;
    $ionicLoading.hide();
  }
/************************************************************/

});