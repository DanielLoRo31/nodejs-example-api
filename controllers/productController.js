const productController = {};

const products = [
  {
    name: "Sabritas",
    id: 1,
    description: "Bolsa de sabritas de 200g",
  },
  {
    name: "Doritos",
    id: 2,
    description: "Bolsa de doritos de 250g",
  },
];

productController.get = (req, res) => {
  res.json(products);
};

productController.post = (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    const id = products.length + 1;
    products.push({
      name,
      description,
      id,
    });
    res.json(products[id - 1]);
  } else {
    res.send("Datos incompletos");
  }
};

module.exports = productController;
