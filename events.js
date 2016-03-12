module.exports = function () {
  var channels = {};
  return {
    on: function (chan, f) {
      (channels[chan] = channels[chan] || []).unshift(f)
    },
    emit: function (chan, data) {
      (channels[chan] || []).forEach(function (f) { f(data) })
    }
  }
}

