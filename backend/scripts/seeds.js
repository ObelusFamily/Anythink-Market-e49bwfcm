//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");
require("../models/User");
require("../models/Item");
require("../models/Comment");
var User = mongoose.model("User");
var Comment = mongoose.model("Comment");
var Item = mongoose.model("Item");

function seed(){
    for(let i = 0; i < 100; i++){
        let user = new User();
      user.username = "plpk"+i;
      user.email = i+"qddf.beooos@gmaezal.com";
      user.setPassword("password")
      user.save()
        let item = new Item()
        item.title = "aze"+i
        item.description = "descrezezaiption"+i
        item.save()
        let comment = new Comment();
        comment.body = "commsfsent"+i
        comment.save()
    }
}
seed()