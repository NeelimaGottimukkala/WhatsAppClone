import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://sujay:sujay1234@ac-tojnkbw-shard-00-00.uiom6po.mongodb.net:27017,ac-tojnkbw-shard-00-01.uiom6po.mongodb.net:27017,ac-tojnkbw-shard-00-02.uiom6po.mongodb.net:27017/?ssl=true&replicaSet=atlas-12eiml-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;