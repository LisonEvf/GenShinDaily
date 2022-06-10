// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: mobile; share-sheet-inputs: url;
// Author: LisonEvf

// const filename = `${Script.name()}.jpg`
// const files = FileManager.local()
// const path = files.joinPath(files.documentsDirectory(), filename)

const imgBg = Image.fromData(Data.fromBase64String('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'))
const imgSZ = Image.fromData(Data.fromBase64String('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'))
const imgWT = Image.fromData(Data.fromBase64String('iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAADAFBMVEVHcEwAABsSBywSBjsAAAAAABUAAAYAAAAAAAAAAAAjFFASCikVCT4UCT0AAA8VCzrCov7Aof4VCjkVCzYVCzYZDEIUDCAWCzMVCzQXDDgEBBMVCj0YCjoAAAAUDD4VCDMWCkAWCTwTChwXCDoWCzwSDywSCDkWDEDAoPkkFk8UCTwVCj0gFEw0JGAWDy0WDTwbEEcVCTtYRYhPPH8UCTwbD0Wvkueni+J6Yq7Aofm6nfSUe8ukid5dSo++oPgWCjYTCTUgEkwVDTEYC0AVCji8nfd5Yq9dS5BjT5Z4YayliNskFUy/n/gyIVyihtkXAC4WCjl6Y7EaDUW7nPlrS61FL32SaeM3I2k+KXJxUrekePihdvZcQZyVe86eeeq8nPdMOnx3Ya1MOnqtkea6nPS6m/N4YKytkOYWCzYWCzgVCTwcDioXCzlSN42ObdJYPpWWes6hdvWqfPYQAihyWayne/eUa+aQbtSDYM+JY9hAKna9m/8pGVmrffxYP5aOaN9uVKQ5JWyJZNh2Vb2JZdiqffune/tuTrGYb+h3XbOBZcE5JW69nvQVDDWVes1bSI2jhtxiTZShhtnAof/k1/9eR4zAoP9dRotcRopdRopdR4vBov+lef+mev9eR4u/oP9fR46ne/9kSpdiSZW7mf+/nf/Bo/9nTZuxiP+8nP+VdNS5mfiFZ8Gzk/N7XreVddXBof/Co/+7m/vl2f9lSppcRYnj1v/Gqv+vh//Ot/+/n//Dpf+rff+9nv9oTZyfdPSoe/5/XMOecvJvUamYbenLsv/Ww/+jdvmqgP+mef1qTqORaN3Irv/j1f+pff/i0/+leP+ggN6ggODSvP/j1/+vif6/n/2/nv20k/V7XrSriutoTp6ri+yXd9e7m/pyUbHg0v+EYM1xVK6hdveMZteMZdashP+3lP9eRo5dRYrezv+lefythP9qTqCFYc7UwP/XxP/Ep//ayP+yiv+5mPeQaOGEZsCYdt2jfO6wiP+ziv/f0P+3l/eDZr+si+yqiuoeWrVkAAAAk3RSTlMABxthBAgFAQIDbBhjZAlU/P5MOzxoFBY5Nw5eSQZAJGRdDUJTHlpn9mpZYmt1I1FrW46BX2jh1qLz8b/Tj/MpNm8mYE/yppOSpc9o9XTMCzOnZPWoiNt7gbTy8JzB3/SAnn/g7++d3y9EVRJDj8uTwu/yGazx3s7A0YT9cPmZ16N9ybrF+vqq4q/AffI+wZLNkszIxFUGAAADuElEQVQ4y2NgwASsrAzEAA4mZWUmDnZCytg5uVVE1VXECark5BNm7ndnFuHjIGAgC5MWl7k5lxYTGzt+i/lEeCdaWnrwivBx4lHJzsGiaqI7QVDQS9dZjwW3Mzk42aSETC2spk2zsjAVkmLj5OBgx1DM7q8qz62ULclrbLZx06aNZsa8EmLcTgF6fOgqWQIUpfmV5bQ0+wQ23L27QaBP01DGRVFB0R7d96z8jlU1PMzabhqz7+y7/W+2hps2D1dovkEOmu/ZGYUMWjqa6xp6pt1YN2PmuhvTXEsiw4pCeCTQPM/B5sAc07pnRfXk1WsWzJq+YM2XyUs/nysMV5NnYUcNF1knw+7oHUsmX1+1eMbUqdMXrbo+bcmKSh2VYllOlHBmkRIx4YpbOX/yxeUzps6cNXXGvkuT5y/t0lYUBoYSOyKYGVVleLw94ydfu7jo5byZ97fMnDd90aVrk109NXllVFmhQc/OwVosLC2aZO0zefWq5dNnzTh16OH0WVNn7lu/erKPdZKotHAxK1glh5hkFo9vWrrA7LXfFs8AGvXkwP7DW6fOm7FozdrZAulpvjxZkmIghcX6zDq2k1I3bvh/c8HMqfMWHHw89+TTRdOBPlqw7taGjal+tjrM+sUMDIxy6kY2doLT7q1fDvTE1BmP9s+dO/f4wRdTp06dNf32+nvTBO1sjNTlGBEKVy2fMWvezC1HDsxZOGfhocMz5wEVLkdSCLHaL2XZZKDVWxedPjDn2dHncxYeebsVaPX/yctSYFZDPZOYDPTM31PvXs85cWbKsR0X5p7eshjkmeREXZhn2DkYQcGTAAyePz+Oz124/cGUKTvfzDn59fvqyRrWCYjgAQU4q6oMLyjAV+6Yu+z85ilTth09ceHqysmubt48iAAHRyGbVC8oCievXPIKqA6ocvvPvZOXdmobSkixIKcfdhZGJ8NGYKKYP/nyWZDCsztXzl/yK1JbRkwWNeVyyAKTWdvCFUunLTt2BWjg+43Tlq44V8/lIo6eHlldDJpqo8Lygud//HRlyofd84PLy6JKQzGzQrZheEV7BFdQoMauM+d/b9+lERjEFRGSq+DAiaZQKsvRUUGNX1ozVmD+5Z27BAo0FfnVeA2c0U1k57QXEhJxYpJQMDabvXHZbDNjBQkmeYnMDH92jMKEkZGFjRG5AJBl4WTDVlSxAwEnm56Jrhe8SGHHX0h5EC6kgCrZiCv2gAEKLEjd3ZmFWTkIFs3iKqKiRBTNwLREXGEPVAmqPjDVAQAEAVVTP3++XgAAAABJRU5ErkJggg=='))
const imgPQ = Image.fromData(Data.fromBase64String('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'))
const imgBQ = Image.fromData(Data.fromBase64String('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'))
const imgZB = Image.fromData(Data.fromBase64String('iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABRFBMVEVHcEzf398NDQ3k5OQNDQ0AAABoaGgAAAAAAAAAAAAUFBQAAAAQEBDd3d0AAAAQEBAMDAwPDw8NDQ0ODg5TU1P9/f3m5ub8/PxUVFRcXFwREREQEBASEhJnZ2cRERHd3d0AAAAAAADi4uJra2vj4+NSUlJRUVETExNbW1teXl4QEBALCwsSEhJdXV3k5OTe3t4QEBDd3d1mZmY7OzsyMjJlZWUA//9hYWH///80NDQwMDD9/f3S0tIcmrozMzQyOUUyNTsyMjM5OTljY2NfX19HR0f+/v54eHi6urpvb29NTU1PT09OTk7T09PAwMAD8/gF7vXU1NQyNz4wRWAyNz0yNj0wRmI7OzwfiaMzMzPZ2dlVVVXKysrY2NjLy8sfjrAE7vXV1dUxRWAxRGAvRmEgiKMgiaMvRmIgjrAD8vgD8ve/v78XrME/AAAAM3RSTlMA3GDkYQOFAQIINAcw3AsxLFdiXn7+5P59gC1gOIYu2gQF4YbgfX41gYAvLzmB5dph24UUT0NSAAACF0lEQVQ4y52U13vaMBTFYyNsEdsQzMYBQnbajLaWQdhm7xUgZG/S3f7/75UNoSME9PU86eH36V7do3uWlv5XPA/dbgj5hRxci3q90bVFJA+Ft/L2tvxGmE/yTtcyG2OYmLLscvLzObDnwNgRAfNIUldkIwljNDISEVYU4Ov3eQDnMI47nWPDwQGPa3afPHSt+MJMrdvW9Xa3xoR9KzNJwu0DLhhqVHWE9GojFOTA6gyScHHWL+H7FsoQodY9lvxs/AVJuFV2YzNgNitpW5WmGdjcYP+90+oP+NfxXb2sTVSu3+F1P/i7T94peHycFLi+KalTlW6uAxLn8wi/50nmIoJwEJv1EkKoWMjnC0VyKNVNHAwDcTp5wu2wHBO6bZZVdJU7Pf/85fw0d4XUcvM2xHDKzoQk/Vm+1Rqtiqai3Mkw23/MfjzJIVWrtBo12027Tz4pAuJbt4rSmlo8G37rpVK9h+FZUdXSqNolbgIxaYEwKlu+tfUMAQufsj9SRL3s1wIBM3qbuPlBjlq2u71bDB50dETAi/xlP2Wrf5m/ICDSOyMsbXndFOAAM2MQxuXYofFzWvr7i9LcuDRMisrBe8OcPObpwX7M0/QxR7vvxCR8Hs/B4R/jeZw9nudFWThw+04qC+1lofoU9N/Mejvdx6VfBfrlol9X+gAYR4qymzAGA+KbIs4JNNqQoo89+iClj2b6sH9VvwCqq5OETG0mJgAAAABJRU5ErkJggg=='))
const imgCL = Image.fromData(Data.fromBase64String('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'))

function getUrl(type, uid, data = {}) {
  let host = "https://api-takumi.mihoyo.com";
  let host_record = "https://api-takumi-record.mihoyo.com";
  let game_record = "/game_record/app/genshin/api/";
  let server = getServer(uid);
  let query, body, url;

  switch (type) {
    //首页宝箱
    case "index":
      url = host_record + game_record + "index";
      query = `role_id=${uid}&server=${server}`;
      break;
    //深渊
    case "spiralAbyss":
      url = host_record + game_record + "spiralAbyss";
      query = `role_id=${uid}&schedule_type=${data.schedule_type}&server=${server}`;
      break;
    //角色详情
    case "character":
      url = host_record + game_record + "character";
      body = JSON.stringify(data);
      break;
    //树脂每日任务（只能当前id）
    case "dailyNote":
      url = host_record + game_record + "dailyNote";
      query = `role_id=${uid}&server=${server}`;
      break;
    case "detail":
      url = host + "/event/e20200928calculate/v1/sync/avatar/detail";
      query = `uid=${uid}&region=${server}&avatar_id=${data.avatar_id}`;
      break;
    case "getAnnouncement":
      url = host_record + "/game_record/card/wapi/getAnnouncement";
      break;
    case "getGameRecordCard":
      url = host_record + "/game_record/card/wapi/getGameRecordCard";
      query = `uid=${uid}`;//米游社id
      break;
    case "bbs_sign_info":
      url = host + "/event/bbs_sign_reward/info";
      query = `act_id=e202009291139501&region=${server}&uid=${uid}`;
      break;
    case "bbs_sign_home":
      url = host + "/event/bbs_sign_reward/home";
      query = `act_id=e202009291139501&region=${server}&uid=${uid}`;
      break;
    case "bbs_sign":
      url = host + "/event/bbs_sign_reward/sign";
      body = JSON.stringify({ act_id: "e202009291139501", region: server, uid: uid, });
      break;
    case "ys_ledger":
      url = "https://hk4e-api.mihoyo.com/event/ys_ledger/monthInfo";
      query = `month=${data.month}&bind_uid=${uid}&bind_region=${server}`;
      break;
    case "compute":
      url = sign_url + "/event/e20200928calculate/v2/compute";
      body = JSON.stringify(data);
      break;
  }

  if (query) {
    url += "?" + query;
  }

  let headers;
  if (type == "bbs_sign") {
    headers = getHeaders_sign();
  } else {
    headers = getHeaders(query, body);
  }

  return { url, headers, query, body };
}

function getServer(uid) {
  switch (uid.toString()[0]) {
    case "1":
    case "2":
      return "cn_gf01"; //官服
    case "5":
      return "cn_qd01"; //B服
  }
  return "cn_gf01"; //官服
}

//# Github-@lulu666lulu
function getDs(q = "", b = "") {
  let n = "xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs";
  let t = Math.round(new Date().getTime() / 1000);
  let r = Math.floor(Math.random() * 900000 + 100000);
  let DS = md5(`salt=${n}&t=${t}&r=${r}&b=${b}&q=${q}`);
  return `${t},${r},${DS}`;
}

//签到ds
function getDS_sign() {
  const n = "h8w582wxwgqvahcdkpvdhbh2w9casgfl";
  const t = Math.round(new Date().getTime() / 1000);
  //   const r = lodash.sampleSize("abcdefghijklmnopqrstuvwxyz0123456789", 6).join("");
  const r = Math.random().toString(36).substring(2, 8);
  const DS = md5(`salt=${n}&t=${t}&r=${r}`);
  return `${t},${r},${DS}`;
}

function getHeaders(q = "", b = "") {
  let headers = {
    "x-rpc-app_version": "2.26.1",
    "x-rpc-client_type": "5",
    DS: getDs(q, b),
  };

  return headers;
}

function getHeaders_sign() {
  let headers = {
    "x-rpc-app_version": "2.3.0",
    "x-rpc-client_type": "5",
    "x-rpc-device_id": guid(),
    "User-Agent": " miHoYoBBS/2.3.0",
    DS: getDS_sign(),
  };

  return headers;
}

function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getCookie() {
  let paramCookie = args.widgetParameter

  if (!paramCookie) throw "没有参数"

  if (!paramCookie.includes("ltoken")) throw "没有ltoken"

  let cookie = paramCookie.replace(/#|\'|\"/g, "") + ";";
  let param = cookie.match(/ltoken=([^;]+;)|ltuid=(\w{0,9})|cookie_token=([^;]+;)/g);

  if (!param) throw "复制体力cookie错误\n正确例子：ltoken=***;ltuid=***;"

  let token = {};
  for (let val of param) {
    let tmp = val.split("=");
    token[tmp[0]] = tmp[1];
  }

  let ltoken = `ltoken=${token["ltoken"]}ltuid=${token["ltuid"]};`;

  //cookie_token转换uid
  if (!paramCookie.includes("cookie_token=")) {
    throw "没有cookie_token"
  }
  return ltoken + `cookie_token=${token["cookie_token"]} account_id=${token["ltuid"]};`;
}

async function getUid() {
  let uid = ''

  let url = "https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn"
  let req = new Request(url)
  req.headers = { Cookie: getCookie() }

  const response = await req.loadJSON();

  if (response.retcode != 0) throw `体力cookie错误：${response.message}`

  for (let val of response.data.list) {
    //米游社默认展示的角色
    if (val.is_chosen) {
      uid = val.game_uid;
      break;
    }
  }
  if (!uid) {
    if (!response.data.list || response.data.list.length <= 0) throw "米游社账号未绑定原神角色！"

    uid = response.data.list[0].game_uid;
  }
  return uid
}

async function dailySign(uid) {
  var { url, headers, query, body } = getUrl("bbs_sign_info", uid);

  headers.Cookie = getCookie()

  var req = new Request(url)
  req.headers = headers
  let signInfo = await req.loadJSON()

  if(signInfo.retcode != 0) {
    if(signInfo.message == "尚未登录" && headers.Cookie.includes("cookie_token")) 
      throw `体力cookie已失效${signInfo.message}`
    else
      throw `米游社info接口错误[${uid}]:${JSON.stringify(signInfo)}`
  }

  var { url, headers, query, body } = getUrl("bbs_sign_home", uid);

  headers.Cookie = getCookie()

  var req = new Request(url)
  req.headers = headers
  var res = await req.loadJSON()

  let reward = res.data.awards[signInfo.data.is_sign ? signInfo.data.total_sign_day - 1 : signInfo.data.total_sign_day]

  if(signInfo.data && signInfo.data.is_sign){
    return `今日米游社已签到第${signInfo.data.total_sign_day}天奖励：${reward.name}*${reward.cnt}`
  }

  var { url, headers, query, body } = getUrl("bbs_sign", uid);

  headers.Cookie = getCookie()

  var req = new Request(url)
  req.headers = headers
  req.method = "post"
  req.body = body
  var res = await req.loadJSON()

  if(res.retcode == 0 || res.retcode == -5003)
    return `今日米游社已签到第${signInfo.data.total_sign_day++}天奖励：${reward.name}*${reward.cnt}`
  else
    throw `米游社info接口错误[${uid}]:${JSON.stringify(res)}`
}

function calTime(remainingSec) {
  let expiryDate;
  if (remainingSec > 0) {
    expiryDate = new Date().getTime() + remainingSec * 1000;

    let maxDate = new Date(expiryDate);
    expiryDate = `${maxDate.getHours()}:${maxDate.getMinutes()}`;

    switch (maxDate.getDate() - new Date().getDate()) {
      case 0:
        return `今天 ${expiryDate}`;
      case 1:
        return `明天 ${expiryDate}`;
      case 2:
        return `后天 ${expiryDate}`;
      default:
        return `${maxDate.getDate() - new Date().getDate()}天后 ${expiryDate}`;
    }
  }

  return expiryDate
}

// javascript:(()=>{prompt('',document.cookie)})();
async function getDailyNote(uid) {

  let { url, headers, query, body } = getUrl("dailyNote", uid);

  headers['Cookie'] = getCookie()

  let req = new Request(url)
  req.headers = headers

  let res = await req.loadJSON()

  if (res.retcode == 10102) throw "请先开启实时便笺数据展示"
  if (res.retcode != 0) {
    if (res.message == "Please login") throw "体力cookie已失效，请重新配置\n注意：退出米游社登录cookie将会失效！"
    else throw `体力查询错误:${res.message}`
  }
  return res.data
}

async function data() {

  let uid = await getUid()
  let dailyData = await getDailyNote(uid);

  return [{
    icon: imgSZ,
    num: `${dailyData.current_resin}/${dailyData.max_resin}`,
    desc: [{
      text: "原粹树脂  "
    }, {
      text: dailyData.current_resin < dailyData.max_resin ? `${calTime(dailyData.resin_recovery_time)} 全部恢复` : "已满",
      color: dailyData.resin_recovery_time > 960 ? "#000000" : "#ff0000"
    }]
  }, {
    icon: imgWT,
    num: `${dailyData.finished_task_num}/${dailyData.total_task_num}`,
    desc: [{
      text: "每日委托奖励  "
    }, {
      text: `${dailyData.is_extra_task_reward_received ? "已领取" : "未领取"}`,
      color: dailyData.is_extra_task_reward_received ? "#000000" : "#ff0000"
    }]
  }, {
    icon: imgPQ,
    num: `${dailyData.current_expedition_num}/${dailyData.max_expedition_num}`,
    desc: [{
      text: "派遣探索  "
    }, {
      text: dailyData.expeditions[0].remained_time > 0 ? `${calTime(dailyData.expeditions[0].remained_time)} 完成` : "已完成",
      color: dailyData.expeditions[0].remained_time > 0 ? "#000000" : "#ff0000"
    }]
  }, {
    icon: imgBQ,
    num: `${dailyData.current_home_coin}/${dailyData.max_home_coin}`,
    desc: [{
      text: "洞天宝钱  "
    }, {
      text: dailyData.home_coin_recovery_time > 0 ? `${calTime(dailyData.home_coin_recovery_time)}溢出` : "已溢出",
      color: dailyData.home_coin_recovery_time > 0 ? "#000000" : "#ff0000"
    }]
  }, {
    icon: imgZB,
    num: `${dailyData.resin_discount_num_limit - dailyData.remain_resin_discount_num}/${dailyData.resin_discount_num_limit}`,
    desc: "值得铭记的强敌"
  }, {
    icon: imgCL,
    num: dailyData.transformer.recovery_time.Day > 0 ? `${dailyData.transformer.recovery_time.Day}天后` : calTime(dailyData.transformer.recovery_time.Hour * 3600 + dailyData.transformer.recovery_time.Minute * 60 + dailyData.transformer.recovery_time.Second),
    desc: "参量质变仪"
  }
  ]
}


async function createWidget() {

  let widget = new ListWidget()
  widget.backgroundColor = new Color("#f0eae3")
  widget.backgroundImage = imgBg

  if (config.runsInApp){
    // Safari.openInApp('https://bbs.mihoyo.com/ys/')
    widget.url = "https://docs.qq.com/doc/DUWNVQVFTU3liTVlO"
    for (let text of "在桌面添加小组件，选择Scriptable，建议选择中尺寸，长按小组件，选择“编辑小组件”，Script选择本脚本，Parameter粘贴米游社Cookie".split("，")) {
      let tipText = widget.addText(text)
      tipText.font = Font.mediumSystemFont(12)
      tipText.textColor = Color.black()
    }
    return widget
  }

  try {
    let signText = widget.addText(await dailySign(await getUid()))
    signText.font = Font.mediumSystemFont(8)
    signText.rightAlignText()
    signText.textColor = Color.black()
    widget.url = "yuanshengame://"
    for (let item of await data()) {
      createItem(widget, item)
    }
  } catch (error) {
    let errText = widget.addText(typeof error == "string" ? error : error.message)
    errText.textColor = Color.red()
    errText.centerAlignText()
  }

  return widget
}

async function createItem(widget, item) {
  let stack = widget.addStack()
  stack.setPadding(0, 5, 0, 5)

  let icon = stack.addImage(item.icon)
  icon.size = new Size(50, 50)
  stack.addSpacer(10)

  if (typeof item.desc === "string") {
    let descStack = stack.addText(item.desc)
    descStack.font = Font.mediumSystemFont(12)
    descStack.textColor = Color.black()
  } else {
    for (let desc of item.desc) {
      let descStack = stack.addText(desc.text)
      descStack.font = Font.mediumSystemFont(12)
      descStack.textColor = new Color(desc.color || "#000000")
    }
  }

  stack.addSpacer()

  let numStack = stack.addText(item.num)
  numStack.font = Font.mediumSystemFont(12)
  numStack.textColor = Color.black()

  return stack
}


let widget = await createWidget()
if (config.runsInWidget) {
  // The script runs inside a widget, so we pass our instance of ListWidget to be shown inside the widget on the Home Screen.
  Script.setWidget(widget)
  // 设置刷新间隔
  widget.refreshAfterDate = new Date(600 * 1000)

} else {
  // The script runs inside the app, so we preview the widget.
  widget.presentMedium()
}
// Calling Script.complete() signals to Scriptable that the script have finished running.
// This can speed up the execution, in particular when running the script from Shortcuts or using Siri.
Script.complete()

/**
* md5 加密字符串
* @param {string} str 要加密成md5的数据
*/
function md5(str) { function d(n, t) { var r = (65535 & n) + (65535 & t); return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r) } function f(n, t, r, e, o, u) { return d(((c = d(d(t, n), d(e, u))) << (f = o)) | (c >>> (32 - f)), r); var c, f } function l(n, t, r, e, o, u, c) { return f((t & r) | (~t & e), n, t, o, u, c) } function v(n, t, r, e, o, u, c) { return f((t & e) | (r & ~e), n, t, o, u, c) } function g(n, t, r, e, o, u, c) { return f(t ^ r ^ e, n, t, o, u, c) } function m(n, t, r, e, o, u, c) { return f(r ^ (t | ~e), n, t, o, u, c) } function i(n, t) { var r, e, o, u; (n[t >> 5] |= 128 << t % 32), (n[14 + (((t + 64) >>> 9) << 4)] = t); for (var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0; h < n.length; h += 16)(c = l((r = c), (e = f), (o = i), (u = a), n[h], 7, -680876936)), (a = l(a, c, f, i, n[h + 1], 12, -389564586)), (i = l(i, a, c, f, n[h + 2], 17, 606105819)), (f = l(f, i, a, c, n[h + 3], 22, -1044525330)), (c = l(c, f, i, a, n[h + 4], 7, -176418897)), (a = l(a, c, f, i, n[h + 5], 12, 1200080426)), (i = l(i, a, c, f, n[h + 6], 17, -1473231341)), (f = l(f, i, a, c, n[h + 7], 22, -45705983)), (c = l(c, f, i, a, n[h + 8], 7, 1770035416)), (a = l(a, c, f, i, n[h + 9], 12, -1958414417)), (i = l(i, a, c, f, n[h + 10], 17, -42063)), (f = l(f, i, a, c, n[h + 11], 22, -1990404162)), (c = l(c, f, i, a, n[h + 12], 7, 1804603682)), (a = l(a, c, f, i, n[h + 13], 12, -40341101)), (i = l(i, a, c, f, n[h + 14], 17, -1502002290)), (c = v(c, (f = l(f, i, a, c, n[h + 15], 22, 1236535329)), i, a, n[h + 1], 5, -165796510,)), (a = v(a, c, f, i, n[h + 6], 9, -1069501632)), (i = v(i, a, c, f, n[h + 11], 14, 643717713)), (f = v(f, i, a, c, n[h], 20, -373897302)), (c = v(c, f, i, a, n[h + 5], 5, -701558691)), (a = v(a, c, f, i, n[h + 10], 9, 38016083)), (i = v(i, a, c, f, n[h + 15], 14, -660478335)), (f = v(f, i, a, c, n[h + 4], 20, -405537848)), (c = v(c, f, i, a, n[h + 9], 5, 568446438)), (a = v(a, c, f, i, n[h + 14], 9, -1019803690)), (i = v(i, a, c, f, n[h + 3], 14, -187363961)), (f = v(f, i, a, c, n[h + 8], 20, 1163531501)), (c = v(c, f, i, a, n[h + 13], 5, -1444681467)), (a = v(a, c, f, i, n[h + 2], 9, -51403784)), (i = v(i, a, c, f, n[h + 7], 14, 1735328473)), (c = g(c, (f = v(f, i, a, c, n[h + 12], 20, -1926607734)), i, a, n[h + 5], 4, -378558,)), (a = g(a, c, f, i, n[h + 8], 11, -2022574463)), (i = g(i, a, c, f, n[h + 11], 16, 1839030562)), (f = g(f, i, a, c, n[h + 14], 23, -35309556)), (c = g(c, f, i, a, n[h + 1], 4, -1530992060)), (a = g(a, c, f, i, n[h + 4], 11, 1272893353)), (i = g(i, a, c, f, n[h + 7], 16, -155497632)), (f = g(f, i, a, c, n[h + 10], 23, -1094730640)), (c = g(c, f, i, a, n[h + 13], 4, 681279174)), (a = g(a, c, f, i, n[h], 11, -358537222)), (i = g(i, a, c, f, n[h + 3], 16, -722521979)), (f = g(f, i, a, c, n[h + 6], 23, 76029189)), (c = g(c, f, i, a, n[h + 9], 4, -640364487)), (a = g(a, c, f, i, n[h + 12], 11, -421815835)), (i = g(i, a, c, f, n[h + 15], 16, 530742520)), (c = m(c, (f = g(f, i, a, c, n[h + 2], 23, -995338651)), i, a, n[h], 6, -198630844,)), (a = m(a, c, f, i, n[h + 7], 10, 1126891415)), (i = m(i, a, c, f, n[h + 14], 15, -1416354905)), (f = m(f, i, a, c, n[h + 5], 21, -57434055)), (c = m(c, f, i, a, n[h + 12], 6, 1700485571)), (a = m(a, c, f, i, n[h + 3], 10, -1894986606)), (i = m(i, a, c, f, n[h + 10], 15, -1051523)), (f = m(f, i, a, c, n[h + 1], 21, -2054922799)), (c = m(c, f, i, a, n[h + 8], 6, 1873313359)), (a = m(a, c, f, i, n[h + 15], 10, -30611744)), (i = m(i, a, c, f, n[h + 6], 15, -1560198380)), (f = m(f, i, a, c, n[h + 13], 21, 1309151649)), (c = m(c, f, i, a, n[h + 4], 6, -145523070)), (a = m(a, c, f, i, n[h + 11], 10, -1120210379)), (i = m(i, a, c, f, n[h + 2], 15, 718787259)), (f = m(f, i, a, c, n[h + 9], 21, -343485551)), (c = d(c, r)), (f = d(f, e)), (i = d(i, o)), (a = d(a, u)); return [c, f, i, a] } function a(n) { for (var t = '', r = 32 * n.length, e = 0; e < r; e += 8)t += String.fromCharCode((n[e >> 5] >>> e % 32) & 255); return t } function h(n) { var t = []; for (t[(n.length >> 2) - 1] = void 0, e = 0; e < t.length; e += 1)t[e] = 0; for (var r = 8 * n.length, e = 0; e < r; e += 8)t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32; return t } function e(n) { for (var t, r = '0123456789abcdef', e = '', o = 0; o < n.length; o += 1)(t = n.charCodeAt(o)), (e += r.charAt((t >>> 4) & 15) + r.charAt(15 & t)); return e } function r(n) { return unescape(encodeURIComponent(n)) } function o(n) { return a(i(h((t = r(n))), 8 * t.length)); var t } function u(n, t) { return (function (n, t) { var r, e, o = h(n), u = [], c = []; for (u[15] = c[15] = void 0, 16 < o.length && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)(u[r] = 909522486 ^ o[r]), (c[r] = 1549556828 ^ o[r]); return ((e = i(u.concat(h(t)), 512 + 8 * t.length)), a(i(c.concat(e), 640))) })(r(n), r(t)) } function t(n, t, r) { return t ? (r ? u(t, n) : e(u(t, n))) : r ? o(n) : e(o(n)) } return t(str) }
