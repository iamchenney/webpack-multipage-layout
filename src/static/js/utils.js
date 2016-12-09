/*eslint-disable */
const $ = require('jquery');

const moduleExports = {

  isEmail(str) {
    var email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return email.test(str);
  },

  isPhone(str) {
    var mobile = /^(((1[3|4|5|7|8][0-9]{1}))+\d{8})$/;
    return mobile.test(str);
  },

  isEmailOrPhone(str) {
    return this.isEmail(str) || this.isPhone(str);
  },

  getUrlParameter(paramName) {
    var sValue = location.search.match(new RegExp("[\?\&]" + paramName + "=([^\&]*)(\&?)", "i"));
    return sValue ? sValue[1] : sValue;
  },

  addUrlParameter(url,name,value) {
    if (url == null || url == 'undefined') {
        return "";
    }
    var url = url.split('#')[0];
    if (url != null && url != 'undefined' && url != "") {
        value = encodeURIComponent(value);
        var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
        var tmp = name + "=" + value;
        if (url.match(reg) != null) {
            url = url.replace(eval(reg), tmp);
        }
        else {
            if (url.match("[\?]")) {
                url = url + "&" + tmp;
            } else {
                url = url + "?" + tmp;
            }
        }
    }
    return url;
  },

  /**
  * format like this 'yyyy-MM-dd hh:mm:ss'
  **/
  dateFormat(date,format) {
    if (typeof date === "string") {
      var mts = date.match(/(\/Date\((\d+)\)\/)/);
      if (mts && mts.length >= 3) {
        date = parseInt(mts[2]);
      }
    }
    date = new Date(date);
    if (!date || date.toUTCString() == "Invalid Date") {
      return "";
    }

    var map = {
      "M": date.getMonth() + 1, //月份
      "d": date.getDate(), //日
      "h": date.getHours(), //小时
      "m": date.getMinutes(), //分
      "s": date.getSeconds(), //秒
      "q": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
      var v = map[t];
      if(v !== undefined){
        if(all.length > 1){
          v = '0' + v;
          v = v.substr(v.length-2);
        }
        return v;
      }
      else if(t === 'y'){
        return (date.getFullYear() + '').substr(4 - all.length);
      }
      return all;
    });
    return format;
  },

  /**
 * 直接使用 utils.ajax(url,data).done(function(response){});
 * @param url
 * @param data
 * @param async 是否同步 默认异步
 * @param btn
 * @returns {*}
 */
  ajax(url, data, async) {
    var deferred = $.Deferred();

    if (async === false) {
      async = false;
    } else {
      async = true;
    }

    $.ajax({
      url: url,
      type: 'get',
      async: async,
      dataType: 'json',
      data: data,
    })
    .done(function done(json) {
      if (json.status) {
        if (json.status !== 'success') {
          alert(json.message || '操作发生错误');
          deferred.reject();
        } else {
          if (json.data) {
            deferred.resolve(json.data);
          } else {
            deferred.resolve(json);
          }
        }
      } else {
        deferred.resolve(json);
      }
    })
    .fail(function fail() {
      alert('加载失败', 'danger');
      deferred.reject();
    })
    .always(function always() {
      alert('always');
    });

    return deferred.promise();
  },

  countDown(opt) {
    var btn = $(opt.selector);
    var isRun = false;
    btn.click (function  () {
      if (!isRun) {
        if(opt.func) {
          opt.func();
        }
        var time = opt.time;
        isRun=true;
        btn.addClass("disabled");
        var t=setInterval(function () {
            time--;
            btn.html(time+"秒");
            if (time<=0 || opt.intercept) {
                clearInterval(t);
                btn.html("重新发送");
                isRun=false;
                btn.removeClass("disabled");
            }
        },1000);
      }
    });
  },

};

module.exports = moduleExports;
