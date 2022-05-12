import { QueryTypes } from "sequelize";
import { sequelize2 } from "../database/database2.js";
import { User } from "../models/user.js"

export const postFormulario = async (req, res) => {
    const {valores} = req.body
    console.log("BODY", valores);
    try {
        const newUser =  await User.create(valores)
        return res.status(200).json(newUser)
        // return res.status(200).json({hola:"mundo"})
    } catch (error) {
        console.log("ERROR", error);
        return res.status(500).json({message: error.message})
    }
};

export const getUser = async(req,res) => {
    const {email} = req.query
    console.log("email", email);
    try {
        const user = await User.findOne({where:{email}})
        console.log("user",user);
        if(!user){
            return res.json({exists: false })
        }
        return res.json({exists: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({exists: false })
    }
}

