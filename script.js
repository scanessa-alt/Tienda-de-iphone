const iphones = [
    {
        modelo: "iPhone 17",
        precio: "USD 800",
        imagen: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 240'><rect width='300' height='240' fill='%231e293b'/><rect x='105' y='25' width='90' height='190' rx='18' fill='%230f172a' stroke='%2338bdf8' stroke-width='3'/><rect x='115' y='38' width='32' height='58' rx='10' fill='%231e293b'/><circle cx='131' cy='53' r='9' fill='%23090d16' stroke='%2338bdf8' stroke-width='2'/><circle cx='131' cy='80' r='9' fill='%23090d16' stroke='%2338bdf8' stroke-width='2'/><text x='150' y='165' font-family='sans-serif' font-size='14' font-weight='bold' fill='%2338bdf8' text-anchor='middle'>17</text></svg>"
    },
    {
        modelo: "iPhone 16",
        precio: "USD 750",
        imagen: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 240'><rect width='300' height='240' fill='%231e1b4b'/><rect x='105' y='25' width='90' height='190' rx='18' fill='%230f172a' stroke='%23818cf8' stroke-width='3'/><rect x='115' y='38' width='30' height='56' rx='10' fill='%231e1b4b'/><circle cx='130' cy='53' r='8' fill='%23090d16' stroke='%23818cf8' stroke-width='2'/><circle cx='130' cy='79' r='8' fill='%23090d16' stroke='%23818cf8' stroke-width='2'/><text x='150' y='165' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23818cf8' text-anchor='middle'>16</text></svg>"
    },
    {
        modelo: "iPhone 15",
        precio: "USD 700",
        imagen: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 240'><rect width='300' height='240' fill='%23064e3b'/><rect x='105' y='25' width='90' height='190' rx='18' fill='%230f172a' stroke='%2334d399' stroke-width='3'/><rect x='115' y='38' width='42' height='42' rx='10' fill='%23064e3b'/><circle cx='127' cy='50' r='7' fill='%23090d16' stroke='%2334d399' stroke-width='2'/><circle cx='144' cy='67' r='7' fill='%23090d16' stroke='%2334d399' stroke-width='2'/><text x='150' y='165' font-family='sans-serif' font-size='14' font-weight='bold' fill='%2334d399' text-anchor='middle'>15</text></svg>"
    },
    {
        modelo: "iPhone 14",
        precio: "USD 650",
        imagen: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 240'><rect width='300' height='240' fill='%23311042'/><rect x='105' y='25' width='90' height='190' rx='18' fill='%230f172a' stroke='%23f472b6' stroke-width='3'/><rect x='115' y='38' width='42' height='42' rx='10' fill='%23311042'/><circle cx='127' cy='50' r='7' fill='%23090d16' stroke='%23f472b6' stroke-width='2'/><circle cx='144' cy='67' r='7' fill='%23090d16' stroke='%23f472b6' stroke-width='2'/><text x='150' y='165' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23f472b6' text-anchor='middle'>14</text></svg>"
    }
];

const galeria = document.getElementById("galeriaProductos");

iphones.forEach((celular) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `
        <img src="${celular.imagen}" alt="${celular.modelo}">
        <div class="info">
            <h3>${celular.modelo}</h3>
            <div class="compra">
                <span class="precio">${celular.precio}</span>
                <button onclick="comprar('${celular.modelo}', '${celular.precio}')">Comprar</button>
            </div>
        </div>
    `;

    galeria.appendChild(tarjeta);
});

function comprar(modelo, precio) {
    alert("Seleccionaste el " + modelo + " (" + precio + ").");
}