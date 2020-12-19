import Pen from "../../models/Pen";
import globalRouter from "../router/globalRouter";

const homeController = (req, res) => {
    res.render("screens/home");
};

const penController = async (req, res) => {
    const result = await Pen.find({}, {});

    console.log(result);
    res.render("screens/pen", { pen: result });

};

export const globalController = {
    homeController,
    penController,
};