let usuarios=[
    {nombre:'Juan', apellido:'Perez', user:'Juancho', direccion:'Calle 76', correo:'juanp@gmail.com', cedula:'729493045', contraseña: 'juancho123', telefono:'3009847344'}, 
    {nombre:'Camila', apellido:'Gutierrez', user:'Cami', direccion:'Carrera 98', correo:'camgtz@hotmail.com', cedula:'10012348875', contraseña: 'gtz!2309', telefono:'3024678894'}, 
    {nombre:'Ricardo', apellido:'Jimenez', user:'Rick', direccion:'Calle 12', correo:'rickj@gmail.com', cedula:'1010876234', contraseña: 'rckjmnz123', telefono:'3014503256'}, 
    {nombre:'Andrea', apellido:'Cepeda', user:'Andre', direccion:'Calle 24', correo:'andrecep@hotmail.com', cedula:'1005896345', contraseña: '#andrea1512', telefono:'3049465732'}, 
    {nombre:'Pedro', apellido:'Juarez', user:'Pete', direccion:'Carrera 36', correo:'petejuarez@gmail.com', cedula:'1007688310', contraseña: 'Jrzcrrpdr4', telefono:'3057648916'}, 
    
];

const registrar=()=>{
 
    const nombre=document.getElementById('nombre').value.trim()
    const apellido=document.getElementById('apellido').value.trim()
    const user=document.getElementById('user').value.trim()
    const direccion=document.getElementById('direccion').value.trim()
    const correo=document.getElementById('correo').value.trim()
    const cedula=document.getElementById('cedula').value.trim()
    const contraseña=document.getElementById('contraseña').value.trim()
    const telefono=document.getElementById('telefono').value.trim()


    if (!nombre) return alert ("Ingrese su Nombre")
    if (!apellido) return alert ("Ingrese su Apellido")
    if (!user) return alert ("Ingrese su Usuario")
    if (!direccion) return alert ("Ingrese su Dirección")
    if (!correo) return alert ("Ingrese su Correo")
    if (!cedula) return alert ("Ingrese su Cédula")
    if (!contraseña) return alert ("Ingrese su Contraseña")
    if (!telefono) return alert ("Ingrese su Telefono")

    elemento.innerHTML+=`<tr><th scope="row">${i}</th><td>${nombre}</td><td>${apellido}</td><td>${user}</td><td>${direccion}</td><td>${correo}</td><td>${cedula}</td><td>${contraseña}</td><td>${telefono}</td></tr>`
const nuevoUsuario = {nombre:nombre, apellido:apellido, user:user, direccion:direccion, correo:correo, cedula:cedula, contraseña:contraseña, telefono:telefono}
usuarios.push(nuevoUsuario)
i++
}

const Listar=()=>{
    let elemento=document.getElementById('cuerpo-tabla')
    let contenidoTabla=""
    
    for (let i = 0; i < usuarios.length; i++) {
        contenidoTabla+= `<tr><th scope="row">${i+1}</th><td>${usuarios[i].nombre}</td><td>${usuarios[i].apellido}</td><td>${usuarios[i].user}</td><td>${usuarios[i].direccion}</td><td>${usuarios[i].correo}</td><td>${usuarios[i].cedula}</td><td>${usuarios[i].contraseña}</td><td>${usuarios[i].telefono}</td></tr>`
    }
   elemento.innerHTML=contenidoTabla;
}

