import Sequelize, {Model} from 'sequelize';

class Cursos extends Model{
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            nivel_ensino: Sequelize.ENUM,
            grau_academico: Sequelize.ENUM,
            modalidade: Sequelize.ENUM,
            unidade: Sequelize.STRING,
            data_criacao: Sequelize.DATE
        })
    }
}
