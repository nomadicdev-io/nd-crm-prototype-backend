import sampleData from "../public/sampleData.js";

export const createClient = async (req, res)=> {
    try {
        sampleData.push(req.body)
        console.log(sampleData)
        res.status(200).json(req.body);
        
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getClients = async (req, res)=> {
    try {
        res.status(200).json(sampleData);
        
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getClientDetails = async (req, res)=> {
    try {

        const id = +req.params.id

        const getID = sampleData.findIndex(x => x.id === id);

        if(getID < 0) {
            res.status(404).json([{message: 'Data not found!'}]);
        }else {
            res.status(200).json(sampleData[getID]);
        }

    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const updateClient = async (req, res)=> {
    try {

        const id = +req.params.id

        const getID = sampleData.findIndex(x => x.id === id);

        if(getID < 0) {
            res.status(404).json([{message: 'Data not found!'}]);
        }else {

            console.log(req.body)
            sampleData[getID] = req.body;
            res.status(200).json(sampleData[getID]);
        }

    } catch(error){
        res.status(500).json({message: error.message})
    }
}