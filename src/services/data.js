class Main {
  constructor(models) {
    this.models = models;
  }

  async get(model) {
    const resposne = await this.models[model].findAll();
    return resposne;
  }

  async getSql(sequelize, reference) {
    const response = await sequelize.query(`
        SELECT 
            c.paymentReference AS 'idDePago',
            c.name AS 'nombre',
            s.Todos_Los_Tickets AS 'todosLosTickets',
            s.Cantidad_De_Tickets AS 'cantidadDeTickets',
            c.created_at AS 'fechaDeCreacion'
        FROM 
            customers c
        LEFT JOIN (
            SELECT 
                paymentReference,
                GROUP_CONCAT(idTicket) AS Todos_Los_Tickets,
                COUNT(idTicket) AS Cantidad_De_Tickets
            FROM 
                services
            WHERE 
                paymentReference = '${reference}'
            GROUP BY 
                paymentReference
        ) s ON c.paymentReference = s.paymentReference
        WHERE 
            c.paymentReference = '${reference}';`);

    return response[0];
  }

  async getSqlV2(sequelize) {
    const response = await sequelize.query(`
      SELECT 
          t.value,
          CASE 
              WHEN s.idTicket IS NOT NULL THEN 'inactive'
              ELSE 'active'
          END AS statusT
      FROM 
          tickets t
      LEFT JOIN 
          services s ON t.value = s.idTicket
          ORDER BY 
    t.value ASC;
          `);
    return response[0];
  }

  async getSqlv3(sequelize, reference) {
    const response = await sequelize.query(`
    SELECT path FROM paymet WHERE paymentReference = '${reference}';
          `);
    return response[0];
  }

  async new(model, data) {
    const response = await this.models[model].create(data);
    return response;
  }

  async bulkCreate1(model, data) {
    const response = await this.models[model].bulkCreate(data);
    return response;
  }

  async update(model, id, data) {
    const response = await this.models[model].update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }

  async delete(model, id) {
    const response = await this.models[model].destroy({
      where: {
        id: id,
      },
    });
    return response;
  }

  async deleteReference(model, reference) {
    const response = await this.models[model].destroy({
      where: {
        paymentReference: reference,
      },
    });
    return response;
  }
  
  async deleteSql(sequelize, reference) {
    console.log("d")
    const response = await sequelize.query(`'
      DELETE FROM customers WHERE paymentReference = '${reference}';
      COMMIT
      `
    );
    return response;
  }


}

module.exports = Main;
