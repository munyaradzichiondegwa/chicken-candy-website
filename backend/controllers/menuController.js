import Menu from '../models/Menu.js';

// @desc    Fetch all menu items
// @route   GET /api/menu
export const getMenu = async (req, res) => {
  const menuItems = await Menu.find({});
  res.json(menuItems);
};