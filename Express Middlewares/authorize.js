const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'Jhon') {
        req.user = {name: 'Jhon', id: 5}
        next
    } else {
        res.status(401).send('Unauth')
    }
  console.log("Authorize");
  next();
};

module.exports = authorize
