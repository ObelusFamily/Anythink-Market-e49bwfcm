//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");
require("../models/User");
require("../models/Item");
require("../models/Comment");
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");
var Item = mongoose.model("Item");


for(let i = 0; i < 100; i++){
    let user = new User();
  user.username = "Xavier";
  user.email = "xavier.belenus@gmail.com";
  user.setPassword("password")
  user.save()
    let item = new Item()
    item.title = "title"+i
    item.description = "description"+i
    item.save()
    let comment = new Comment();
    comment.body = "comment"+i
    comment.save()
}