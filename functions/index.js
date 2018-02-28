const functions = require('firebase-functions');

exports.sendQuestionEmail = functions.firestore
  .document('goldBagetRuQuestions/{questionId}')
  .onCreate(event => {
    var question = event.data.data()
    console.log('email(?):', question)
    return true
  })
exports.sendOrderEmail = functions.firestore
  .document('goldBagetRuOrders/{orderId}')
  .onCreate(event => {
    var order = event.data.data()
    console.log('email($):', order)
    return true
  })