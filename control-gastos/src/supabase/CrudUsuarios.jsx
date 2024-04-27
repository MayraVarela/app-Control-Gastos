import { supabase } from "../index";

export const InsertarUsuarios = async(p)=>{
    try{
        const {data}= await supabase.from("Usuarios").insert(p).select();
        return data;
    } catch (error) {}
};