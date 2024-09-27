class Main {
  constructor(models) {
    this.models = models;
  }

   async get(model) {
    const resposne = await this.models[model].findAll();
    return resposne;
  }

  async new (model, data) {
    const response = await this.models[model].create(data);
    return response;
  }

  async bulkCreate1 (model, data) {
    const response = await this.models[model].bulkCreate(data);
    return response;
  }
  
  async update (model, id, data) {
    const response = await this.models[model].update(data, {
        where: {
            id: id,
        }
    });
    return response;
  }

  async delete (model, id) {
    const response = await this.models[model].destroy({
        where: {
            id: id
        }
    });
    return response;
  }
}

module.exports = Main;
