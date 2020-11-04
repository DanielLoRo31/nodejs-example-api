const userController = {};

const users = [
  {
    id: 1,
    email: "omar.salas@jynsystems.com",
    password: "123",
    role: "teacher",
  },
  {
    id: 2,
    email: "andres@jynsystems.com",
    password: "123",
    role: "student",
  },
  {
    id: 3,
    email: "luis@jynsystems.com",
    password: "123",
    role: "student",
  },
  {
    id: 4,
    email: "felix@jynsystems.com",
    password: "123",
    role: "teacher",
  },
  {
    id: 5,
    email: "daniel@jynsystems.com",
    password: "123",
    role: "teacher",
  },
];

userController.get = (req, res) => {
  res.json(users);
};

userController.getById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userFound = users.find((user) => user.id == id);

  if (userFound) {
    res.json(userFound);
  } else {
    res.send("No existe el usuario");
  }
};

userController.post = (req, res) => {
  const { email, password, role, name, score, description } = req.body;

  const userFound = users.find((userF) => userF.email === email);

  if (userFound) {
    res.send("el email ya existe");
  } else {
    if (email && password && role) {
      const id = users.length + 1;

      var user = {};

      const expectedParams = [ "email", "password", "role", "name", "score", "description" ];
      Object.keys(req.body).forEach((p) => {
        if (expectedParams.includes(p)) {
          user[p] = req.body[p];
        }
      });

      user = {id, ...user}
      
      users.push(user);

      res.json(users[id - 1]);
    } else {
      res.send("Datos incompletos");
    }
  }
};

userController.put = (req, res) => {
  const { id } = req.params;
  const userFound = users.find((userF) => userF.id == id);

  if (userFound) {
    const expectedParams = [
      "email",
      "password",
      "role",
      "name",
      "score",
      "description",
    ];
    Object.keys(req.body).forEach((p) => {
      if (expectedParams.includes(p)) {
        userFound[p] = req.body[p];
      }
    });
    res.json(userFound);
  } else {
    res.send("el usuario que desea actualizar no existe");
  }
};

userController.delete = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((userF) => userF.id == id);

  if (index !== -1) {
    const idDelete = users[index].id;
    users.splice(index, 1);
    res.send(`Se elimino el usuario con el id ${idDelete}`);
  } else {
    res.send("el usuario que desea actualizar no existe");
  }
};

module.exports = userController;
