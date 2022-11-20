import Express from "express"
import category from "./routes/category.route.js";
import sub_cate from "./routes/sub_category.route.js";
import hostconnect from "./config/db.js";
import {product_data} from "./routes/product.route.js";
import { user } from "./routes/user.route.js";
import { reviewrating } from "./routes/review.rating.route.js";
import { config } from 'dotenv';
config();
const app = Express();
app.use(Express.json());
hostconnect();
app.use(category)
app.use(sub_cate)
app.use(product_data)
app.use(user)
// app.use(reviewrating)
app.listen(process.env.PORT || 3001, (req, res) => {
    console.log("server is run on 2000 port");
})
