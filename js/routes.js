const PATHS = {
    home: {
        path: "/",
        template: `
            <h1>🏠 Home</h1>
        `,
    },
    productos: {
        path: "/productos",
        template: `
        <div class="container-products">
            <form class="register">
                <h5>REGISTRO DE PRODUCTOS</h5>
                <label class="limited-assignment">
                    Código asignado:
                </label>
                <label class="limited-assignment">Categoria</label>
                <input class="limited-assignment" type="text" id="id" disabled>
                <select class="limited-assignment" id="category">
                    <option>Categoria1</option>
                    <option>Categoria2</option>
                    <option>Categoria3</option>
                    <option>Categoria4</option>
                </select>
                <label>Nombre del producto:</label>
                <input type="text" id="name" maxlength="20">
                <label>Descripción:</label>
                <textarea maxlength="500"></textarea>
                <label>Precio:</label>
                <input type="number" id="price">
                <input type="submit" value="Cancelar">
                <input type="submit" value="Guardar">
            </form>
            <section class="list-products">
                <h3>Lista de productos</h3>
                <table class="table-products">
                    <tr>
                        <td class="subtittle">Codigo</td>
                            <td class="subtittle">Categoría</td>
                            <td class="subtittle">Nombre</td>
                            <td class="subtittle">Descripción</td>
                            <td class="subtittle">Precio</td>
                    </tr>
                    <tr>
                        <td>#3004</td>
                        <td>Categoria</td>
                        <td><a href="/view_product">Producto</a></td>
                        <td class="description">Descripción del producto</td>
                        <td>00.00</td>
                    </tr>
                </table>
            </section>
        </div>
        `,
    },
    clientes: {
        path: "/clientes",
        template: `
            <div class="container-customers">
                <form class="form-register-usser">
                    <div class="img-usser"><img src="img/usser2.png"></div>
                    <h3>CREE UNA CUENTA</h3>
                    <section class="add-data">
                        <input type="text" placeholder="#NickName00" id="id" disabled>
                        <input type="text" placeholder="Nombres" id="name" maxlength="20">
                        <input type="text" placeholder="Apellidos" id="surname" maxlength="20">
                        <input type="phone" placeholder="Ingrese su numero telefonico" id="phone" maxlength="14">
                        <input type="email" placeholder="Ingrese su email" maxlength="25">
                        <input type="password" placeholder="Introduzca una clave">
                        <input type="password" placeholder="Confirme su clave">
                        <textarea placeholder="Indique su direccion" id="address" maxlength="499"></textarea>
                    </section>
                    <input type="submit" value="Crear">
                </form>
                <section class="list-ussers">
                    <h3>Usuarios</h3>
                    <table class="table-ussers">
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td id="address">Dirección</td>
                            <td>Teléfono</td>
                        </tr>
                        <tr>
                            <td>#NickName00</td>
                            <td>Arturo Uslar Pietri</td>
                            <td>Dirección del usuario</td>
                            <td>(0000)0000000</td>
                        </tr>
                    </table>
                </section>
            </div>
        `,
    },
    configuracion: {
        path: "/configuracion",
        template: `
        <div class="container-settings">
            <form class="form-rate">
                <h3>Formulario de Configuración</h3>
                <label class="form-answer">Id:</label>
                <input class="form-answer" type="number" min="0" id="id">
                <label class="form-answer">Tasa de cambio (Bs.)</label>
                <input class="form-answer" type="number" min="0" id="exchange_rate">
                <label class="form-answer">IVA %:</label>
                <input class="form-answer" type="number" min="0" id="iva_percentage">
                <input class="submit-margin" type="submit" value="Atras">
                <input type="submit" value="Guardar">
            </form>
        </div>
        `,
    },
}