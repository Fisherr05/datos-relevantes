import { QueryTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const getEstaciones = async (req, res) => {

    const {feci, fecf}=req.query
    console.log("FECHA INCIO", feci)
    console.log("FECHA FIN", fecf)
    // validar fecha no definida
    
    // validar que sean fecha
    // const validateDate=(feci)=>isNaN(Date.parse(feci))
    // console.log("Valida Fecha inicio",validateDate(feci))

    // const validateDatef=(fecf)=>isNaN(Date.parse(fecf))
    // console.log("Valida Fecha fin",validateDatef(fecf))
    // validar que fecha inicio <= fecha fin
  const estaciones = await sequelize.query(`select
  count(cast(d.severidad as Integer)),
    avg(cast(d.severidad as Integer)) ,
    max(cast(d.severidad as Integer)),
    pq.nombre as parroquia,
    e.id as idEstudio,
    e."nombreEstudio",
    z.x,
    z.y 
  FROM
    monitoreos m
    INNER JOIN estudios e on m."idEstudio" = e.id
    inner join datos d on m.id=d."idMonitoreo"
    inner join finca_variedad fv on e."idFv" = fv.id
    inner join fincas f on fv."finca_id" = f.id
    inner join variedads v on fv."variedad_id" = v.id
    inner join "plantas" p on d."idPlanta"=p.id
    inner join zonas z on f."idZona"=z.id
    inner join parroquias pq on z."idParroquia" = pq.id
    inner join cantons c on pq."idCanton" = c.id
    where cast(d.severidad as Integer) >= 0 and m."fechaEjecucion" between :fecha_init and :fecha_end
    group by pq.nombre,e."nombreEstudio",e.id ,z.x,z.y`, {
        replacements:{fecha_init:feci,fecha_end: fecf},
    type: QueryTypes.SELECT,
  });
//   console.log("RESULT", estaciones);
  res.json(estaciones);
};


