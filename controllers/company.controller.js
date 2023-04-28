export const createCompany = async (req, res)=> {
    try {
        console.log(req.body)
        res.status(200).json(req.body);
        
    } catch(error){
        res.status(500).json({message: error.message})
    }
};