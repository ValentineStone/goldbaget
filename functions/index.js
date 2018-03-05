'use strict'

const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
})

exports.sendQuestionEmail = functions.firestore
  .document('goldBagetRuQuestions/{questionId}')
  .onCreate(event => {
    let question = event.data.data()
    let email = {
      subject: 'Новый вопрос',
      html: questionAsHtml(question)
    }
    return sendNoreplyEmail(email)
  })
exports.sendOrderEmail = functions.firestore
  .document('goldBagetRuOrders/{orderId}')
  .onCreate(event => {
    var order = event.data.data()
    let email = {
      subject: 'Новый заказ',
      html: orderAsHtml(order)
    }
    return sendNoreplyEmail(email)
  })

function sendNoreplyEmail(email) {
  email.from = '"Goldbaget Noreply" <magbaget.noreply@gmail.com>'
  email.to = 'magbaget@gmail.com'
  return mailTransport.sendMail(email)
    .catch(error => console.error('There was an error while sending the email:', error))
}

function orderAsHtml(order) {
  return `
    <table>
      <tbody>
        <tr><td style="padding-right: 1rem;">Фамилия</td><td>${order.surname}</td></tr>
        <tr><td style="padding-right: 1rem;">Имя</td><td>${order.name}</td></tr>
        <tr><td style="padding-right: 1rem;">Контакты</td><td>${contactsAsHtml(order)}</td></tr>
        <tr><td style="padding-right: 1rem;">Размеры</td><td>${order.width} x ${order.height}</td></tr>
        <tr><td style="padding-right: 1rem;">Предварительная<br>оценка</td><td>${order.pricePreview}руб.</td></tr>
        <tr><td style="padding-right: 1rem;">Вариант оформления</td><td>${order.variant.name}:<br>${order.variant.details}</td></tr>
        <tr><td style="padding-right: 1rem;">Excel</td>
          <td><table style="font-size: .6rem;"><tbody><tr>
            <td>${order.surname}</td>
            <td>${order.name}</td>
            <td>${order.phone}</td>
            <td>${order.email}</td>
            <td>${order.width} x ${order.height}</td>
            <td>${order.pricePreview}руб.</td>
            <td>${order.variant.name}</td>
          </tr></tbody></table></td>
        </tr>
      </tbody>
    </table>
  `
}

function questionAsHtml(question) {
  return `
    <table>
      <tbody>
        <tr><td style="padding-right: 1rem;">Фамилия</td><td>${question.surname}</td></tr>
        <tr><td style="padding-right: 1rem;">Имя</td><td>${question.name}</td></tr>
        <tr><td style="padding-right: 1rem;">Контакты</td><td>${contactsAsHtml(question)}</td></tr>
        <tr><td style="padding-right: 1rem;">Вопрос</td><td><pre style="font-size: 1em; font-family: sans-serif;">${question.question}</pre></td></tr>
        <tr><td style="padding-right: 1rem;">Excel</td>
          <td><table style="font-size: .6rem;"><tbody><tr>
            <td>${question.surname}</td>
            <td>${question.name}</td>
            <td>${question.phone}</td>
            <td>${question.email}</td>
            <td>${question.question}</td>
          </tr></tbody></table></td>
        </tr>
      </tbody>
    </table>
  `
}

function contactsAsHtml(data) {
  let contacts
  if (data.phone)
    if (data.email)
      return data.phone + '<br>' + data.email
    else
      return data.phone
  else
    if (data.email)
      return data.email
    else
      return 'отсутствуют'
}