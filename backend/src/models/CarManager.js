const AbstractManager = require("./AbstractManager");

class CarManager extends AbstractManager {
  constructor() {
    super({ table: "car" });
  }

  insert(car) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [car.title]
    );
  }

  update(car) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [car.title, car.id]
    );
  }
}

module.exports = CarManager;
