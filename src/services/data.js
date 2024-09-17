const { where } = require("sequelize");

class Main {
  constructor(models) {
    this.models = models;
  }

   async get(model) {
    const resposne = await this.models[model].findAll();
    return resposne;
  }

  new (model, data) {
    const response = this.models[model].create(data);
    return response;
  }
  
  update (model, id, data) {
    const response = this.models[model].update(data, {
        where: {
            id: id,
        }
    });
    return response;
  }

  delete (model, id) {
    const response = this.models[model].delete({
        where: {
            id: id
        }
    });
    return response;
  }
}

module.exports = Main;
