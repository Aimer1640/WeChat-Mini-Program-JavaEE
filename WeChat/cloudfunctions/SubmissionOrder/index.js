const cloud = require('wx-server-sdk')
cloud.init({
  env:'cloud1-5gkqj9vh973f44be',
})
const TcbRouter = require('tcb-router');
const db = cloud.database()
const _ = db.command
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  });
  // 路由为字符串，该中间件只适用于 add 路由
  app.router('add', async (ctx, next) => {
    try {
      return await db.collection('SubmissionOrder').add({
        data: {
          _openid:event.userInfo.openId,
          name: event.name,
          phone: event.phone,
          place: event.place,
          symptom: event.symptom,
          url: event.url,
          avatarUrl: event.avatarUrl,
          submitdate: new Date(),
          completedate: new Date(),
          status: '提交订单',
          step: 1,
          staff: '',
          staffphone: '',
          adminphone: '',
          feedback: '',
          score: 5,
          evaluate: ''
        }
      })
    } catch (e) {
      console.error(e)
    }
    await next(); // 执行下一中间件
  })

  // 路由为字符串，该中间件只适用于 update_step2 路由
  app.router('update_step2', async (ctx, next) => {
    try {
      return await db.collection('SubmissionOrder').doc(event.id).update({
        data: {
          staff: event.staff,
          staffphone: event.staffphone,
          adminphone: event.adminphone,
          feedback: event.feedback,
          step: 2,
          completedate: new Date(),
          status: "已派单"
        }
      })
    } catch (e) {
      console.error(e)
    }
    await next(); // 执行下一中间件
  })

  // 路由为字符串，该中间件只适用于 update_step3 路由
  app.router('update_step3', async (ctx, next) => {
    try {
      return await db.collection('SubmissionOrder').doc(event.id).update({
        data: {
          adminphone: event.adminphone,
          feedback: event.feedback,
          step: 3,
          completedate: new Date(),
          status: "待评价"
        }
      })
    } catch (e) {
      console.error(e)
    }
    await next(); // 执行下一中间件
  })

  // 路由为字符串，该中间件只适用于 update_step4 路由
  app.router('update_step4', async (ctx, next) => {
    try {
      return await db.collection('SubmissionOrder').doc(event.id).update({
        data: {
          step: 4,
          status: "已完成",
          score: event.score,
          feedback: event.feedback,
        }
      })
    } catch (e) {
      console.error(e)
    }
    await next(); // 执行下一中间件
  })

  return app.serve();
}