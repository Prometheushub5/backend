"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class Consultores extends _sequelize.Model {
    static init(sequelize) {
        super.init(
        {
            id: {
                type: _sequelize2.default.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              nome: {
                type: _sequelize2.default.STRING,
                allowNull: false,
              },
              email: {
                type: _sequelize2.default.STRING,
                allowNull: false,
                unique: true,
              },
              whats:{
                  type: _sequelize2.default.STRING,
                  allowNull: false
              },
              senha: {
                  type: _sequelize2.default.VIRTUAL                  
            },
              hash_senha: {
                type: _sequelize2.default.STRING,
              },
              created_at: {
                type: _sequelize2.default.DATE,
                allowNull: false,
                defaultValue: _sequelize2.default.DATE
              },
              updated_at: {
                type: _sequelize2.default.DATE,
                allowNull: false,
                defaultValue: _sequelize2.default.DATE
              }
        },
        {
          sequelize,
          tableName: 'consultores',
        });
        this.addHook('beforeSave', async consultor => {
            if (consultor.senha){
              consultor.hash_senha = await _bcryptjs2.default.hash(consultor.senha, 10)
            }
          });
        return this;
    }
    checkPassword(senha){
        return _bcryptjs2.default.compare(senha, this.hash_senha)
      }
    static __initStatic() {this.associate = (models) => {
        Cursos.hasMany(models.Clientes,
          { foreignKey: 'clientes_id', as: 'cliente' });
        }}  
} Consultores.__initStatic();


exports. default = Consultores;