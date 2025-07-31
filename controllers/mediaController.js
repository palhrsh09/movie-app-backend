const Media = require('../models/Media');

exports.getMedia = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Media.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      media: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createMedia = async (req, res) => {
  try {
    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Media.update(req.body, { where: { id } });
    if (updated) {
      const updatedMedia = await Media.findByPk(id);
      res.json(updatedMedia);
    } else {
      res.status(404).json({ error: 'Media not found' });
    }
  } catch (error) {
    console.log("error",error)
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Media.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Media not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};