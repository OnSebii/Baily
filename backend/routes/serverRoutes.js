const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { setStatus, getProjects } = require('../model/functions.js');

router.get(
  '/cs',
  asyncHandler(async (req, res) => {
    const ans = await setStatus();
    console.log(ans);
    res.status(ans.code).send(ans);
  }),
);

router.get(
  '/projects',
  asyncHandler(async (req, res) => {
    const projects = await getProjects();
    res.status(projects.code).json(projects);
  }),
);

// router.get(
//   '/impresum',
//   asyncHandler(async (req, res) => {
//     const projects = await getProjects();
//     res.status(projects.code).json(projects);
//   }),
// );

module.exports = router;
