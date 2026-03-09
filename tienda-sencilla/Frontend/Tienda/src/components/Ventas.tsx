import React from "react";
import Menu from "./Menu";
import "../stylesheet/ventas.css";

const Ventas: React.FC = () => {

  const filasProductos: number[] = [1,2,3];

  return (
    <>
      <Menu />

      <div className="contenedor-venta">

        {/* Datos cliente */}
        <div className="fila">
          <label>Cédula</label>
          <input type="text" />
          <button>Consultar</button>

          <label>Cliente</label>
          <input type="text" />

          <label>Consec.</label>
          <input type="text" />
        </div>

        {/* Encabezado productos */}
        <div className="productos-header">
          <span>Cod. Producto</span>
          <span></span>
          <span>Nombre Producto</span>
          <span>Cant.</span>
          <span>Vlr Total</span>
        </div>

        {/* Filas productos */}
        {filasProductos.map((fila:number) => (
          <div className="producto" key={fila}>
            <input type="text" />
            <button>Consultar</button>
            <input type="text" />
            <input type="number" />
            <input type="number" />
          </div>
        ))}

        {/* Totales */}
        <div className="totales">

          <button className="confirmar">Confirmar</button>

          <div className="resumen">
            <label>Total Venta</label>
            <input type="number" />

            <label>Total IVA</label>
            <input type="number" />

            <label>Total con IVA</label>
            <input type="number" />
          </div>

        </div>

      </div>
    </>
  );
};

export default Ventas;