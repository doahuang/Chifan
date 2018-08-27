const requireLogin = require('../middlewares/requireLogin');

const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id });
    res.send(surveys);
  });

  app.delete('/api/surveys/:id', requireLogin, async (req, res) => {
    const survey = await Survey.findByIdAndRemove({ _id: req.params.id });
    res.send(survey);
  });

  app.post('/api/surveys', requireLogin, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    await survey.save();
    res.send(survey);
  });
};