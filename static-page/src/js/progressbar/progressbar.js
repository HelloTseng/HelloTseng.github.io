/*!
 * ProgressTool进度条插件
 * author: KevinTseng < 921435247@qq.com >
 */
;
(function() {
	'use strict'
	var _global;
	//ProgressTool进度条插件
	function ProgressTool(option) {
		this.progtool_box = document.getElementById("progtool_box"); //进度dom
		this.progtool_now = document.getElementById("progtool_now"); //进度标尺
		this.progtool_percent = document.getElementById("progtool_percent"); //进度
		this.progtool_fit = document.getElementById("progtool_fit"); //背景条
		this.progtool_fitW = this.progtool_fit.offsetWidth;
		this.progtool_body = document;
		this.settings = extend({
			minValue: 0,
			maxValue: 100,
			dragUp: function() {},
			dragDown: function() {},
			dragMove: function() {},
			clickDown: function() {}
		}, option, true);
		this._init();
	}
	ProgressTool.prototype = {
		_init: function() {
			var isfalse = false,
				f = this,
				s = this.settings,
				m = Math,
				res = 0;
			f.progtool_now.onmousedown = function(e) {
				e.preventDefault();
				isfalse = true;
				var beginX = e.clientX,
					beginY = e.clientY;
				var offLeft = this.offsetLeft;
				var moveMax = f.progtool_fit.offsetWidth - this.offsetWidth;
				s.dragDown();
				f.progtool_body.onmousemove = function(e) {
					e.preventDefault();
					if(isfalse == false) {
						return;
					}
					var changeX = e.clientX,
						changeY = e.clientY;
					var moveX = m.min(moveMax, m.max(-2, offLeft + (changeX - beginX)));
					var moveY = m.abs(changeY - beginY);
					if(moveY > 15 || moveX<0) {
						f.progtool_body.onmousemove = null;
						f.progtool_now.onmouseup(e);
					}
					res = m.round(m.max(0, moveX / moveMax) * s.maxValue);
					setTimeout(function(){
						f.progtool_now.style.marginLeft = m.max(0, moveX) + "px";
						f.progtool_percent.style.width = m.max(0, moveX) + "px";
						s.dragMove(res);
					},10)
					return;
				}
			}
			f.progtool_now.onmouseup = function(e) {
				e.preventDefault();
				isfalse = false;
				f.progtool_body.onmousemove = null;
				setTimeout(function(){
					s.dragUp(res);
				},10)
			}
			document.ondragstart = function(e) {
            	e.preventDefault();
	        };
	        document.ondragend = function(e) {
	            e.preventDefault();
	        };
		},
		setValue: function(value) {
			var f = this,
				s = this.settings;
			var theV = value * 1;
			if(theV > s.maxValue || theV < s.minValue) {
				f.progtool_now.style.marginLeft = "0px";
				f.progtool_percent.style.width = "0px";
				return;
			}
			var moveX = theV / s.maxValue * f.progtool_fitW;
			f.progtool_now.style.marginLeft = moveX + "px";
			f.progtool_percent.style.width = moveX + "px";
		},
		show: function() {
			this.progtool_box.style.display = "block";
		},
		hide: function() {
			this.progtool_box.style.display = "none";
		}
	}

	//参数默认值覆盖
	function extend(o, n, override) {
		for(var key in n) {
			if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
				o[key] = n[key];
			}
		}
		return o;
	}

	//window.ProgressTool = ProgressTool;

	//将插件对象暴露给全局对象
	_global = (function() {
		return this || (0, eval)('this');
	}());
	if(typeof module !== "undefined" && module.exports) {
		module.exports = ProgressTool;
	} else if(typeof define === "function" && define.amd) {
		define(function() {
			return ProgressTool;
		});
	} else {
		!('ProgressTool' in _global) && (_global.ProgressTool = ProgressTool);
	}

})();