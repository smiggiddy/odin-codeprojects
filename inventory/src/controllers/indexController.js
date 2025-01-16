const db = require("../db/queries");
const { links } = require("../config");

async function indexGet(req, res) {
  const items = await db.getAllItemsWithRelationships();

  res.render("base", {
    links: links,
    pageTitle: "Iventory Home",
    items: items,
    page: "",
  });
}

async function storeGet(req, res) {
  const stores = await db.getStores();

  res.render("base", {
    page: "add",
    links: links,
    pageTitle: "Inventory | Stores",
    type: "store",
    data: stores,
  });
}
async function storesGetAll(req, res) {
  const stores = await db.getStores();
  res.json(stores);
}

async function storePost(req, res) {
  const r = await handlePostRequets({ reqBody: req.body, dbName: "store" });
  res.redirect("/store");
}

async function categoryGet(req, res) {
  const categories = await db.getCategories();
  res.render("base", {
    page: "add",
    links: links,
    pageTitle: "Inventory | Categories",
    type: "category",
    data: categories,
  });
}
async function categoryGetAll(req, res) {
  const categories = await db.getCategories();
  res.json(categories);
}

async function categoryPost(req, res) {
  const r = await handlePostRequets({ reqBody: req.body, dbName: "category" });
  if (r) {
    console.log("something went wrong");
  }
  res.redirect("/category");
}

async function handlePostRequets(data) {
  const { dbName } = data;
  const { name } = data.reqBody;
  let res;

  if (dbName === "store") {
    res = db.insertStore(name);
  } else if (dbName === "category") {
    res = db.insertCategory(name);
  }

  return res;
}

async function itemPost(req, res) {
  const categoryId = await db.getCategoryId({ name: req.body.category });
  const storeId = await db.getStoreId({ name: req.body.store });

  let formData = req.body;
  const data = {
    name: formData.name,
    price: formData.price,
    qty: formData.qty,
    store_id: storeId.store_id,
    category_id: categoryId.category_id,
  };

  try {
    const r = await db.insertItem(data);
    if (r) throw new Error(r);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }
}

async function itemEditGet(req, res, next) {
  const itemId = req.params.id;

  const items = await db.getAllItemsWithRelationships();
  const item = await db.getItemById(Number(itemId));
  const categories = await db.getCategories();
  const stores = await db.getStores();

  if (item)
    res.render("base", {
      item: item,
      categories: categories,
      stores: stores,
      pageTitle: `Inventory | Editing Item: ${item.name}`,
      page: "edit",
      links: links,
    });
}

async function itemEditPost(req, res, next) {
  const itemId = req.params.id;
  console.log(itemId);
  res.redirect("/");
}

async function itemDelete(req, res) {
  console.log(req.body.name);
  const itemId = await db.getItemByName(req.body.name);
  if (itemId) db.deleteItem(itemId);
  console.log(`Delted item: ${itemId}`);
  res.redirect("deleted item: ${item}");
}

async function categoryDelete(req, res) {
  const query = await db.deleteCategory(req.body.id);
  if (query) {
    res.send(`${query}`);
  }
  res.send("category deleted");
}

module.exports = {
  indexGet,
  itemPost,
  itemEditGet,
  itemEditPost,
  itemDelete,
  storeGet,
  storePost,
  storesGetAll,
  categoryGet,
  categoryPost,
  categoryGetAll,
  categoryDelete,
};
