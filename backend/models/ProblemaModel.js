// models/problemModel.js
import mongoose from 'mongoose';

const { Schema } = mongoose;


const ProblemaSchema = new Schema({
  descricao: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Problema = mongoose.model('Problema', ProblemaSchema);
export default Problema; // Certifique-se de que o modelo está sendo exportado corretamente
