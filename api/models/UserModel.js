import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Produk = db.define('id',{
    nama: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    harga: DataTypes.STRING,
    jumlah: DataTypes.STRING
},{
    freezeTableName:true
});

export default Produk;

(async()=>{
    await db.sync();
})();