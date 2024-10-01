const express = require("express");
const fs = require("fs-extra");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5001;
const dataFilePath = path.join(__dirname, "mockApiData.json");


app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  fs.readJson(dataFilePath)
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ error: "Unable to read data file" })
    );
});

app.post("/products", (req, res) => {
  fs.readJson(dataFilePath)
    .then((data) => {
      data.products.push({
        ...req.body,
      }); 
      return fs.writeJson(dataFilePath, data);
    })
    .then((data) => {
      res.json({  ...req.body });
    })
    .catch((err) => res.status(500).json({ error: "Unable to save data" }));
});

app.delete("/products/:id", (req, res) => {
  fs.readJson(dataFilePath)
    .then((data) => {
      let filterData = data.products.filter(
        (product) => parseFloat(product.id) !== parseFloat(req.params.id)
      );

      return fs.writeJson(dataFilePath, { ...data, products: filterData });
    })
    .then(() => res.json({ message: "Data deleted successfully" }))
    .catch((err) => res.status(500).json({ error: "Unable to delete data" }));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
