const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function getItemByName(name) {
  const { rows } = await pool.query("SELECT * FROM items WHERE name = $1", [
    name,
  ]);
  return rows[0];
}

async function getItemById(id) {
  const { rows } = await pool.query(
    "SELECT id, items.name, price, qty, category.name AS category, store.name AS store FROM items LEFT JOIN category on items.category_id = category.category_id LEFT JOIN store ON items.store_id = store.store_id WHERE items.id = $1 ",
    [id],
  );
  return rows[0];
}

async function insertItem(data) {
  const { name, price, qty, category_id, store_id } = data;
  try {
    await pool.query(
      `INSERT INTO items (name, price, qty, category_id, store_id) VALUES ($1, $2, $3, $4, $5)`,
      [name, price, qty, category_id, store_id],
    );
    return null;
  } catch (e) {
    return e;
  }
}

async function deleteItem(item) {
  try {
    const res = await pool.query("DELETE FROM items WHERE id = $1", [item.id]);
    return null;
  } catch (e) {
    return e;
  }
}

async function getAllItemsWithRelationships() {
  const { rows } = await pool.query(
    `SELECT items.id, items.name, items.price, items.qty, category.name AS category_name, store.name AS store_name FROM items 
    LEFT JOIN category ON items.category_id = category.category_id 
    LEFT JOIN store ON items.store_id = store.store_id;`,
  );

  return rows;
}

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function getCategoryId(item) {
  const { rows } = await pool.query("SELECT * FROM category WHERE name = $1", [
    item.name,
  ]);
  return rows[0];
}

async function insertCategory(data) {
  try {
    await pool.query("INSERT INTO category (name) VALUES ($1)", [data]);
    return null;
  } catch (e) {
    return e;
  }
}

async function deleteCategory(itemId) {
  try {
    await pool.query("DELETE FROM category WHERE category_id = $1", [itemId]);
    return null;
  } catch (e) {
    return e;
  }
}

async function getStores() {
  const { rows } = await pool.query("SELECT * FROM store");
  return rows;
}

async function getStoreId(item) {
  const { rows } = await pool.query("SELECT * FROM store WHERE name = $1", [
    item.name,
  ]);
  return rows[0];
}

async function insertStore(data) {
  try {
    await pool.query("INSERT INTO store (name) VALUES ($1)", [data]);
    return null;
  } catch (e) {
    return e;
  }
}

module.exports = {
  insertItem,
  getItemById,
  getAllItems,
  getItemByName,
  deleteItem,
  getCategories,
  getCategoryId,
  getStores,
  getStoreId,
  insertStore,
  insertCategory,
  deleteCategory,
  getAllItemsWithRelationships,
};
