let barang = require("../data/barang");

// GET ALL
exports.getAllBarang = (req, res) => {
  res.json(barang);
};

// GET BY ID
exports.getBarangById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = barang.find((b) => b.id === id);

  if (!item) {
    return res.status(404).json({
      message: "Barang tidak ditemukan"
    });
  }

  res.json(item);
};

// CREATE
exports.createBarang = (req, res) => {
  const newBarang = {
    id: barang.length ? barang[barang.length - 1].id + 1 : 1,
    ...req.body
  };

  barang.push(newBarang);

  res.status(201).json({
    message: "Barang berhasil ditambahkan",
    data: newBarang
  });
};

// UPDATE
exports.updateBarang = (req, res) => {
  const id = parseInt(req.params.id);
  const index = barang.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Barang tidak ditemukan"
    });
  }

  barang[index] = {
    ...barang[index],
    ...req.body
  };

  res.json({
    message: "Barang berhasil diupdate",
    data: barang[index]
  });
};

// DELETE
exports.deleteBarang = (req, res) => {
  const id = parseInt(req.params.id);
  const index = barang.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Barang tidak ditemukan"
    });
  }

  const deleted = barang.splice(index, 1);

  res.json({
    message: "Barang berhasil dihapus",
    data: deleted[0]
  });
};