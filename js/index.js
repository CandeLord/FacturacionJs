// CARGA INICIAL de datos 
const productos_base = [
    {
        descripción:"Procesador Intel Core i5. Memoria RAM de 8GB. Resolución de 1920x1080 px. Placa de video NVIDIA GeForce GTX 1650.La duración de la batería depende del uso que se le dé al producto.",
        precio_Unitario: 417000,
        nombre: "Notebook Hp Victus 15-fa0031dx 8gb Ram 512gb Ssd Intel Core I5 Nvidia Geforce Gtx 1650 4gb Gddr6 15.6 Fhd 144hz Windows 11",
        fecha_de_Creación: Date.now(),
        Stock: 3,
        Foto_url :"https://http2.mlstatic.com/D_NQ_NP_715158-MLA51949377565_102022-O.webp", 
        permite_stock_negativo: false,
    },
    {
        descripción:" Resolución máxima de video: 1280px x 720px. Imagen con resolución de 1.2Mpx. Interfaz: USB-A.Funciona con Chrome OS, macOS 10.10, Windows 8.Adecuada para notebook, pc de escritorio.",
        precio_Unitario: 12500,
        nombre: "Cámara web Logitech C505e HD 30FPS color negro",
        fecha_de_Creación: Date.now(),
        Stock: 10,
        Foto_url :"https://http2.mlstatic.com/D_NQ_NP_789405-MLA49253755126_032022-O.webp", 
        permite_stock_negativo: false,
    },
    {
        descripción:"Conectividad con múltiples dispositivos. Resiste a salpicaduras. Tipo de teclado: mecánico. Con conector USB 2.0.Con cable removible.",
        precio_Unitario: 27500,
        nombre: "Teclado Bluetooth Redragon Fizz Pro Argentina K616-rgb-ar Qwerty Red Español Color Celeste Y Blanco Con Luz Rgb",
        fecha_de_Creación: Date.now(),
        Stock: 6,
        Foto_url :"https://http2.mlstatic.com/D_NQ_NP_709944-MLA51984562627_102022-O.webp", 
        permite_stock_negativo: false,
    }
];

const local_storage_llaves = {
    PRODUCTOS: "productos",
    USUARIOS: "usuarios", 
};

window.onload = function() {
    const productos = ObtenerLocalStorage(local_storage_llaves.PRODUCTOS);

    if (productos === null || productos === undefined ){
    AgregarLocalStorage(local_storage_llaves.PRODUCTOS, productos_base ); 
    } else {
        console.log("el local storage posee datos");
    }
};

function ObtenerLocalStorage(key) {
    const res = localStorage.getItem(key);
    return JSON.parse(res)
};

function AgregarLocalStorage(key, objeto){
    localStorage.setItem(key, JSON.stringify(objeto));
};