import Volcano from "../models/Volcano.js"

const volcanoService = {
    getAll(){
        return Volcano.find();
    },
    getOne(volcanoId){
        return Volcano.findById(volcanoId);
    },
    create(volcanoData, userId){
        return Volcano.create({ ...volcanoData, owner: userId });       
    },
    vote(volcanoId, userId){
        return Volcano.findByIdAndUpdate(volcanoId, { $push: { voteList: userId } });
    },
    remove(volcanoId){
        return Volcano.findByIdAndDelete(volcanoId);
    },
    edit(volcanoId, volcanoData){
        return Volcano.findByIdAndUpdate(volcanoId, volcanoData, { runValidators: true });
    }
}

export default volcanoService;