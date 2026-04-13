const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangController");

/**
 * @swagger
 * tags:
 *   name: Barang
 *   description: API CRUD Barang
 */

/**
 * @swagger
 * /api-barang:
 *   get:
 *     summary: Ambil semua data barang
 *     tags: [Barang]
 *     responses:
 *       200:
 *         description: List semua barang
 */
router.get("/", barangController.getAllBarang);

/**
 * @swagger
 * /api-barang/{id}:
 *   get:
 *     summary: Ambil barang berdasarkan ID
 *     tags: [Barang]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail barang
 */
router.get("/:id", barangController.getBarangById);

/**
 * @swagger
 * /api-barang:
 *   post:
 *     summary: Tambah barang baru
 *     tags: [Barang]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               deskripsi:
 *                 type: string
 *               harga_barang:
 *                 type: number
 *               stok:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Barang berhasil ditambahkan
 */
router.post("/", barangController.createBarang);

/**
 * @swagger
 * /api-barang/{id}:
 *   put:
 *     summary: Update barang
 *     tags: [Barang]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.put("/:id", barangController.updateBarang);

/**
 * @swagger
 * /api-barang/{id}:
 *   delete:
 *     summary: Hapus barang
 *     tags: [Barang]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", barangController.deleteBarang);

module.exports = router;