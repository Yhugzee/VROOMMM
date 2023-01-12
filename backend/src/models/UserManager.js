const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, phone_number, role) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.phone_number,
        user.role,
      ]
    );
  }

  getUserByEmail(user) {
    return this.connection.query("select * from user where email = ?", [
      user.email,
    ]);
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, email, hashedPassword, phone_number, role from  ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(
      `select firstname, lastname, email, phone_number, role from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ?, phone_number = ? role=? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.phone_number,
        user.role,
      ]
    );
  }
}

module.exports = UserManager;
