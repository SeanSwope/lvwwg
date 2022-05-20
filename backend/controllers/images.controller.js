var vaults = [
  { id: "123-456-789", text: "Vault-1" },
  { id: "987-654-321", text: "AFS Vault" },
  { id: "111-555-333", text: "FTP Vault" }
];

exports.getVaultUsage = (req, res, next) => {
  var vault = [
    { name: "free", size: "43536932864" },
    { name: "used", size: "559869806592" }
  ];
  var vault2 = [
    { name: "free", size: "5369328641" },
    { name: "used", size: "9569806592" }
  ];
  var vault3 = [
    { name: "free", size: "9569806592" },
    { name: "used", size: "53693211" }
  ];

  if (req.params.id == vaults[0].id) {
    res.status(200).json(vault);
  } else if (req.params.id == vaults[1].id) {
    res.status(200).json(vault2);
  } else {
    res.status(200).json(vault3);
  }
};

exports.getVaultList = (req, res, next) => {
  res.status(200).json(vaults);
};
