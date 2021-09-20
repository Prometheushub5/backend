import jwt from 'jsonwebtoken';

import Consultores from '../models/Consultores';
import authConfig from '../../config/auth';

class ControleSessao{
  async store(req, res){
    const { email, senha } = req.body;

    const consultor = await Consultores.findOne({ where: { email }});

    if (!consultor){
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    if (!(await consultor.checkPassword(senha))){
      return res.status(401).json({ message: 'Senha inválida'})
    }

    const { id, nome, whats } = consultor;
    console.log(authConfig.secret)

    res.json({ 
      consultor: {
        id,
        nome,
        email,
        whats,
      },
      token: jwt.sign({ id, nome, email }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })
  }
}

export default new ControleSessao();