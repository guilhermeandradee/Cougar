// models/problemModel.js
import mongoose from 'mongoose';

const { Schema } = mongoose;


const ProblemaSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  resolucao: {
    type: String,
    required: true,
  },
  descricao_palavras_chave: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Problema = mongoose.model('Problema', ProblemaSchema);
export default Problema;