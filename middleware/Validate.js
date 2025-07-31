const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().valid('Movie', 'TV Show').required(),
  director: Joi.string().required(),
  budget: Joi.string().required(),
  location: Joi.string().required(),
  duration: Joi.string().required(),
  year: Joi.string().required(),
}).unknown(true); // allows extra fields like "id"

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
