var vaults = [
    { id: "123-456-789", text: "Vault-1" },
    { id: "987-654-321", text: "AFS Vault" },
    { id: "111-555-333", text: "FTP Vault" }
  ];
  
  var namedLibraryStats = [
    { name: 'FTP Vault', libStats: [
      { timeDateStamp: new Date(2018, 11, 24, 0, 0, 0, 0), docCount: 277},
      { timeDateStamp: new Date(2018, 11, 25, 0, 0, 0, 0), docCount: 328},
      { timeDateStamp: new Date(2018, 11, 26, 0, 0, 0, 0), docCount: 297},
      { timeDateStamp: new Date(2018, 11, 27, 0, 0, 0, 0), docCount: 255},
      { timeDateStamp: new Date(2018, 11, 28, 0, 0, 0, 0), docCount: 173},
      { timeDateStamp: new Date(2018, 11, 29, 0, 0, 0, 0), docCount: 131}
    ] },
    { name: 'Adept10', libStats: [
      { timeDateStamp: new Date(2018, 11, 24, 0, 0, 0, 0), docCount: 2707},
      { timeDateStamp: new Date(2018, 11, 25, 0, 0, 0, 0), docCount: 3208},
      { timeDateStamp: new Date(2018, 11, 26, 0, 0, 0, 0), docCount: 2907},
      { timeDateStamp: new Date(2018, 11, 27, 0, 0, 0, 0), docCount: 2505},
      { timeDateStamp: new Date(2018, 11, 28, 0, 0, 0, 0), docCount: 1703},
      { timeDateStamp: new Date(2018, 11, 29, 0, 0, 0, 0), docCount: 1301}
    ] },
    { name: 'Quality', libStats: [
      { timeDateStamp: new Date(2018, 11, 24, 0, 0, 0, 0), docCount: 2177},
      { timeDateStamp: new Date(2018, 11, 25, 0, 0, 0, 0), docCount: 3228},
      { timeDateStamp: new Date(2018, 11, 26, 0, 0, 0, 0), docCount: 2397},
      { timeDateStamp: new Date(2018, 11, 27, 0, 0, 0, 0), docCount: 2455},
      { timeDateStamp: new Date(2018, 11, 28, 0, 0, 0, 0), docCount: 1573},
      { timeDateStamp: new Date(2018, 11, 29, 0, 0, 0, 0), docCount: 1631}
    ] },
    { name: 'Engineering', libStats: [
      { timeDateStamp: new Date(2018, 11, 24, 0, 0, 0, 0), docCount: 256},
      { timeDateStamp: new Date(2018, 11, 25, 0, 0, 0, 0), docCount: 512},
      { timeDateStamp: new Date(2018, 11, 26, 0, 0, 0, 0), docCount: 1024},
      { timeDateStamp: new Date(2018, 11, 27, 0, 0, 0, 0), docCount: 1000},
      { timeDateStamp: new Date(2018, 11, 28, 0, 0, 0, 0), docCount: 1256},
      { timeDateStamp: new Date(2018, 11, 29, 0, 0, 0, 0), docCount: 1310}
    ] },
    { name: 'PdfOutput', libStats: [
      { timeDateStamp: new Date(2018, 11, 24, 0, 0, 0, 0), docCount: 130},
      { timeDateStamp: new Date(2018, 11, 25, 0, 0, 0, 0), docCount: 323},
      { timeDateStamp: new Date(2018, 11, 26, 0, 0, 0, 0), docCount: 323},
      { timeDateStamp: new Date(2018, 11, 27, 0, 0, 0, 0), docCount: 419},
      { timeDateStamp: new Date(2018, 11, 28, 0, 0, 0, 0), docCount: 422},
      { timeDateStamp: new Date(2018, 11, 29, 0, 0, 0, 0), docCount: 422}
    ] }
  ];
  
  exports.getLibraryList = (req, res, next) => {
    res.status(200).json(vaults);
  };
  
  exports.getLibraryStats = (req, res, next) => {
    for (const namedLib of namedLibraryStats) {
      if (namedLib.name === req.params.id) {
        res.status(200).json(namedLib.libStats);
        break;
      }
    }
  }