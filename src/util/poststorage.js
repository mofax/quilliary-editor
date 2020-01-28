import lowdb from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("posts");
const localDB = lowdb(adapter);
localDB.defaults({ posts: [] }).write();

function updateStamp(obj, newStamp = false) {
  const lastUpdated = new Date().getTime();
  return Object.assign({}, obj, { lastUpdated, createdWhen: lastUpdated });
}

export function randomID() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = 12;
  const result = [];
  for (let i = length; i > 0; --i) {
    result.push(chars[Math.floor(Math.random() * chars.length)]);
  }
  return result.join("");
}

export async function posts() {
  const items = localDB.get("posts").value();
  return items;
}

async function getPost(id) {
  const post = localDB.get("posts").find({ id });
  return post.value();
}

async function insertNewPost(title, body, id) {
  if (!id) {
    id = randomID();
  }

  const save = updateStamp({ id, title, body, draft: true }, true);

  localDB
    .get("posts")
    .push(save)
    .write();
  return { id };
}

async function updatePost(id, title, body) {
  if (!typeof id === "string")
    throw new Error("id is required to update a post");
  const post = localDB.get("posts").find({ id });

  if (!post) {
    return console.warn(`could not find post with id ${id}`);
  }

  const updates = {};

  if (body) {
    updates.body = body;
  }

  if (title) {
    updates.title = title;
  }

  const contents = updateStamp(updates);
  post.assign(contents).write();
}

export { getPost, insertNewPost, updatePost };
