const { stack } = require("../router");

class Definer {
  /**general errors */

  general_err1 = "att: something went wrong! ";

  general_err2 = "att: there is no data with that params!";

  general_err3 = "att: file upload error!";

  /**member auth related  errors*/

  auth_err2 = "att: jwt token creation error";
  auth_err3 = "att: no member with that mb_nick!";
  auth_err4 = "att: your credentials do not match!";
  auth_err5 = "att: you are not authenticated!";

  /**member related  errors*/
  order_err1 = "att: product creation is failed!";
  order_err2 = "att: order item creation is failed!";
  order_err3 = "att: no orders with that params exists!";

  /** articles related errors */

  article_err1 = "att: author member for articles not provided!";

  article_err2 = "att: no article found for that member!";
  article_err3 = "att: no article found for that target!";

  /** Follow related errors*/

  follow_err1 = "att: delf subciption is denied!";
  follow_err2 = "att: new follow subscription is failed!";
  follow_err3 = "att: no follow data found!";

  /**mongo related erros */
  mongo_validation_err1 = "att: mongo db validation is failed!";
}
module.exports = Definer;
