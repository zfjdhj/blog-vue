function ECB(e, t) {
	this.count = e, this.dataCodewords = t, this.__defineGetter__("Count", function() {
		return this.count
	}), this.__defineGetter__("DataCodewords", function() {
		return this.dataCodewords
	})
}

function ECBlocks(e, t, n) {
	this.ecCodewordsPerBlock = e, this.ecBlocks = n ? new Array(t, n) : new Array(t), this.__defineGetter__("ECCodewordsPerBlock", function() {
		return this.ecCodewordsPerBlock
	}), this.__defineGetter__("TotalECCodewords", function() {
		return this.ecCodewordsPerBlock * this.NumBlocks
	}), this.__defineGetter__("NumBlocks", function() {
		for (var e = 0, t = 0; t < this.ecBlocks.length; t++) e += this.ecBlocks[t].length;
		return e
	}), this.getECBlocks = function() {
		return this.ecBlocks
	}
}

function Version(e, t, n, r, i, o) {
	this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = new Array(n, r, i, o);
	for (var a = 0, s = n.ECCodewordsPerBlock, c = n.getECBlocks(), u = 0; u < c.length; u++) {
		var l = c[u];
		a += l.Count * (l.DataCodewords + s)
	}
	this.totalCodewords = a, this.__defineGetter__("VersionNumber", function() {
		return this.versionNumber
	}), this.__defineGetter__("AlignmentPatternCenters", function() {
		return this.alignmentPatternCenters
	}), this.__defineGetter__("TotalCodewords", function() {
		return this.totalCodewords
	}), this.__defineGetter__("DimensionForVersion", function() {
		return 17 + 4 * this.versionNumber
	}), this.buildFunctionPattern = function() {
		var e = this.DimensionForVersion,
			t = new BitMatrix(e);
		t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
		for (var n = this.alignmentPatternCenters.length, r = 0; n > r; r++)
			for (var i = this.alignmentPatternCenters[r] - 2, o = 0; n > o; o++) 0 == r && (0 == o || o == n - 1) || r == n - 1 && 0 == o || t.setRegion(this.alignmentPatternCenters[o] - 2, i, 5, 5);
		return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t
	}, this.getECBlocksForLevel = function(e) {
		return this.ecBlocks[e.ordinal()]
	}
}

function buildVersions() {
	return new Array(new Version(1, new Array, new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))), new Version(2, new Array(6, 18), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))), new Version(3, new Array(6, 22), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, new ECB(2, 13))), new Version(4, new Array(6, 26), new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))), new Version(5, new Array(6, 30), new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))), new Version(6, new Array(6, 34), new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))), new Version(7, new Array(6, 22, 38), new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))), new Version(8, new Array(6, 24, 42), new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))), new Version(9, new Array(6, 26, 46), new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))), new Version(10, new Array(6, 28, 50), new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))), new Version(11, new Array(6, 30, 54), new ECBlocks(20, new ECB(4, 81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))), new Version(12, new Array(6, 32, 58), new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))), new Version(13, new Array(6, 34, 62), new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))), new Version(14, new Array(6, 26, 46, 66), new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))), new Version(15, new Array(6, 26, 48, 70), new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))), new Version(16, new Array(6, 26, 50, 74), new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))), new Version(17, new Array(6, 30, 54, 78), new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))), new Version(18, new Array(6, 30, 56, 82), new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))), new Version(19, new Array(6, 30, 58, 86), new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))), new Version(20, new Array(6, 34, 62, 90), new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))), new Version(21, new Array(6, 28, 50, 72, 94), new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))), new Version(22, new Array(6, 26, 50, 74, 98), new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))), new Version(23, new Array(6, 30, 54, 74, 102), new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 15), new ECB(14, 16))), new Version(24, new Array(6, 28, 54, 80, 106), new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))), new Version(25, new Array(6, 32, 58, 84, 110), new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(13, 16))), new Version(26, new Array(6, 30, 58, 86, 114), new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))), new Version(27, new Array(6, 34, 62, 90, 118), new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 15), new ECB(28, 16))), new Version(28, new Array(6, 26, 50, 74, 98, 122), new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))), new Version(29, new Array(6, 30, 54, 78, 102, 126), new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, new ECB(19, 15), new ECB(26, 16))), new Version(30, new Array(6, 26, 52, 78, 104, 130), new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))), new Version(31, new Array(6, 30, 56, 82, 108, 134), new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))), new Version(32, new Array(6, 34, 60, 86, 112, 138), new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))), new Version(33, new Array(6, 30, 58, 86, 114, 142), new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))), new Version(34, new Array(6, 34, 62, 90, 118, 146), new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))), new Version(35, new Array(6, 30, 54, 78, 102, 126, 150), new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))), new Version(36, new Array(6, 24, 50, 76, 102, 128, 154), new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))), new Version(37, new Array(6, 28, 54, 80, 106, 132, 158), new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))), new Version(38, new Array(6, 32, 58, 84, 110, 136, 162), new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))), new Version(39, new Array(6, 26, 54, 82, 110, 138, 166), new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))), new Version(40, new Array(6, 30, 58, 86, 114, 142, 170), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16))))
}

function PerspectiveTransform(e, t, n, r, i, o, a, s, c) {
	this.a11 = e, this.a12 = r, this.a13 = a, this.a21 = t, this.a22 = i, this.a23 = s, this.a31 = n, this.a32 = o, this.a33 = c, this.transformPoints1 = function(e) {
		for (var t = e.length, n = this.a11, r = this.a12, i = this.a13, o = this.a21, a = this.a22, s = this.a23, c = this.a31, u = this.a32, l = this.a33, f = 0; t > f; f += 2) {
			var h = e[f],
				d = e[f + 1],
				p = i * h + s * d + l;
			e[f] = (n * h + o * d + c) / p, e[f + 1] = (r * h + a * d + u) / p
		}
	}, this.transformPoints2 = function(e, t) {
		for (var n = e.length, r = 0; n > r; r++) {
			var i = e[r],
				o = t[r],
				a = this.a13 * i + this.a23 * o + this.a33;
			e[r] = (this.a11 * i + this.a21 * o + this.a31) / a, t[r] = (this.a12 * i + this.a22 * o + this.a32) / a
		}
	}, this.buildAdjoint = function() {
		return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
	}, this.times = function(e) {
		return new PerspectiveTransform(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
	}
}

function DetectorResult(e, t) {
	this.bits = e, this.points = t
}

function Detector(e) {
	this.image = e, this.resultPointCallback = null, this.sizeOfBlackWhiteBlackRun = function(e, t, n, r) {
		var i = Math.abs(r - t) > Math.abs(n - e);
		if (i) {
			var o = e;
			e = t, t = o, o = n, n = r, r = o
		}
		for (var a = Math.abs(n - e), s = Math.abs(r - t), c = -a >> 1, u = r > t ? 1 : -1, l = n > e ? 1 : -1, f = 0, h = e, d = t; h != n; h += l) {
			var p = i ? d : h,
				g = i ? h : d;
			if (1 == f ? this.image[p + g * qrcode.width] && f++ : this.image[p + g * qrcode.width] || f++, 3 == f) {
				var A = h - e,
					w = d - t;
				return Math.sqrt(A * A + w * w)
			}
			if (c += s, c > 0) {
				if (d == r) break;
				d += u, c -= a
			}
		}
		var v = n - e,
			m = r - t;
		return Math.sqrt(v * v + m * m)
	}, this.sizeOfBlackWhiteBlackRunBothWays = function(e, t, n, r) {
		var i = this.sizeOfBlackWhiteBlackRun(e, t, n, r),
			o = 1,
			a = e - (n - e);
		0 > a ? (o = e / (e - a), a = 0) : a >= qrcode.width && (o = (qrcode.width - 1 - e) / (a - e), a = qrcode.width - 1);
		var s = Math.floor(t - (r - t) * o);
		return o = 1, 0 > s ? (o = t / (t - s), s = 0) : s >= qrcode.height && (o = (qrcode.height - 1 - t) / (s - t), s = qrcode.height - 1), a = Math.floor(e + (a - e) * o), i += this.sizeOfBlackWhiteBlackRun(e, t, a, s), i - 1
	}, this.calculateModuleSizeOneWay = function(e, t) {
		var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.X), Math.floor(e.Y), Math.floor(t.X), Math.floor(t.Y)),
			r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.X), Math.floor(t.Y), Math.floor(e.X), Math.floor(e.Y));
		return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14
	}, this.calculateModuleSize = function(e, t, n) {
		return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2
	}, this.distance = function(e, t) {
		return xDiff = e.X - t.X, yDiff = e.Y - t.Y, Math.sqrt(xDiff * xDiff + yDiff * yDiff)
	}, this.computeDimension = function(e, t, n, r) {
		var i = Math.round(this.distance(e, t) / r),
			o = Math.round(this.distance(e, n) / r),
			a = (i + o >> 1) + 7;
		switch (3 & a) {
			case 0:
				a++;
				break;
			case 2:
				a--;
				break;
			case 3:
				throw "Error"
		}
		return a
	}, this.findAlignmentInRegion = function(e, t, n, r) {
		var i = Math.floor(r * e),
			o = Math.max(0, t - i),
			a = Math.min(qrcode.width - 1, t + i);
		if (3 * e > a - o) throw "Error";
		var s = Math.max(0, n - i),
			c = Math.min(qrcode.height - 1, n + i),
			u = new AlignmentPatternFinder(this.image, o, s, a - o, c - s, e, this.resultPointCallback);
		return u.find()
	}, this.createTransform = function(e, t, n, r, i) {
		var o, a, s, c, u = i - 3.5;
		null != r ? (o = r.X, a = r.Y, s = c = u - 3) : (o = t.X - e.X + n.X, a = t.Y - e.Y + n.Y, s = c = u);
		var l = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, u, 3.5, s, c, 3.5, u, e.X, e.Y, t.X, t.Y, o, a, n.X, n.Y);
		return l
	}, this.sampleGrid = function(e, t, n) {
		var r = GridSampler;
		return r.sampleGrid3(e, n, t)
	}, this.processFinderPatternInfo = function(e) {
		var t = e.TopLeft,
			n = e.TopRight,
			r = e.BottomLeft,
			i = this.calculateModuleSize(t, n, r);
		if (1 > i) throw "Error";
		var o = this.computeDimension(t, n, r, i),
			a = Version.getProvisionalVersionForDimension(o),
			s = a.DimensionForVersion - 7,
			c = null;
		if (a.AlignmentPatternCenters.length > 0)
			for (var u = n.X - t.X + r.X, l = n.Y - t.Y + r.Y, f = 1 - 3 / s, h = Math.floor(t.X + f * (u - t.X)), d = Math.floor(t.Y + f * (l - t.Y)), p = 4; 16 >= p; p <<= 1) {
				c = this.findAlignmentInRegion(i, h, d, p);
				break
			}
		var g, A = this.createTransform(t, n, r, c, o),
			w = this.sampleGrid(this.image, A, o);
		return g = null == c ? new Array(r, t, n) : new Array(r, t, n, c), new DetectorResult(w, g)
	}, this.detect = function() {
		var e = (new FinderPatternFinder).findFinderPattern(this.image);
		return this.processFinderPatternInfo(e)
	}
}

function FormatInformation(e) {
	this.errorCorrectionLevel = ErrorCorrectionLevel.forBits(e >> 3 & 3), this.dataMask = 7 & e, this.__defineGetter__("ErrorCorrectionLevel", function() {
		return this.errorCorrectionLevel
	}), this.__defineGetter__("DataMask", function() {
		return this.dataMask
	}), this.GetHashCode = function() {
		return this.errorCorrectionLevel.ordinal() << 3 | dataMask
	}, this.Equals = function(e) {
		var t = e;
		return this.errorCorrectionLevel == t.errorCorrectionLevel && this.dataMask == t.dataMask
	}
}

function ErrorCorrectionLevel(e, t, n) {
	this.ordinal_Renamed_Field = e, this.bits = t, this.name = n, this.__defineGetter__("Bits", function() {
		return this.bits
	}), this.__defineGetter__("Name", function() {
		return this.name
	}), this.ordinal = function() {
		return this.ordinal_Renamed_Field
	}
}

function BitMatrix(e, t) {
	if (t || (t = e), 1 > e || 1 > t) throw "Both dimensions must be greater than 0";
	this.width = e, this.height = t;
	var n = e >> 5;
	0 != (31 & e) && n++, this.rowSize = n, this.bits = new Array(n * t);
	for (var r = 0; r < this.bits.length; r++) this.bits[r] = 0;
	this.__defineGetter__("Width", function() {
		return this.width
	}), this.__defineGetter__("Height", function() {
		return this.height
	}), this.__defineGetter__("Dimension", function() {
		if (this.width != this.height) throw "Can't call getDimension() on a non-square matrix";
		return this.width
	}), this.get_Renamed = function(e, t) {
		var n = t * this.rowSize + (e >> 5);
		return 0 != (1 & URShift(this.bits[n], 31 & e))
	}, this.set_Renamed = function(e, t) {
		var n = t * this.rowSize + (e >> 5);
		this.bits[n] |= 1 << (31 & e)
	}, this.flip = function(e, t) {
		var n = t * this.rowSize + (e >> 5);
		this.bits[n] ^= 1 << (31 & e)
	}, this.clear = function() {
		for (var e = this.bits.length, t = 0; e > t; t++) this.bits[t] = 0
	}, this.setRegion = function(e, t, n, r) {
		if (0 > t || 0 > e) throw "Left and top must be nonnegative";
		if (1 > r || 1 > n) throw "Height and width must be at least 1";
		var i = e + n,
			o = t + r;
		if (o > this.height || i > this.width) throw "The region must fit inside the matrix";
		for (var a = t; o > a; a++)
			for (var s = a * this.rowSize, c = e; i > c; c++) this.bits[s + (c >> 5)] |= 1 << (31 & c)
	}
}

function DataBlock(e, t) {
	this.numDataCodewords = e, this.codewords = t, this.__defineGetter__("NumDataCodewords", function() {
		return this.numDataCodewords
	}), this.__defineGetter__("Codewords", function() {
		return this.codewords
	})
}

function BitMatrixParser(e) {
	var t = e.Dimension;
	if (21 > t || 1 != (3 & t)) throw "Error BitMatrixParser";
	this.bitMatrix = e, this.parsedVersion = null, this.parsedFormatInfo = null, this.copyBit = function(e, t, n) {
		return this.bitMatrix.get_Renamed(e, t) ? n << 1 | 1 : n << 1
	}, this.readFormatInformation = function() {
		if (null != this.parsedFormatInfo) return this.parsedFormatInfo;
		for (var e = 0, t = 0; 6 > t; t++) e = this.copyBit(t, 8, e);
		e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
		for (var n = 5; n >= 0; n--) e = this.copyBit(8, n, e);
		if (this.parsedFormatInfo = FormatInformation.decodeFormatInformation(e), null != this.parsedFormatInfo) return this.parsedFormatInfo;
		var r = this.bitMatrix.Dimension;
		e = 0;
		for (var i = r - 8, t = r - 1; t >= i; t--) e = this.copyBit(t, 8, e);
		for (var n = r - 7; r > n; n++) e = this.copyBit(8, n, e);
		if (this.parsedFormatInfo = FormatInformation.decodeFormatInformation(e), null != this.parsedFormatInfo) return this.parsedFormatInfo;
		throw "Error readFormatInformation"
	}, this.readVersion = function() {
		if (null != this.parsedVersion) return this.parsedVersion;
		var e = this.bitMatrix.Dimension,
			t = e - 17 >> 2;
		if (6 >= t) return Version.getVersionForNumber(t);
		for (var n = 0, r = e - 11, i = 5; i >= 0; i--)
			for (var o = e - 9; o >= r; o--) n = this.copyBit(o, i, n);
		if (this.parsedVersion = Version.decodeVersionInformation(n), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
		n = 0;
		for (var o = 5; o >= 0; o--)
			for (var i = e - 9; i >= r; i--) n = this.copyBit(o, i, n);
		if (this.parsedVersion = Version.decodeVersionInformation(n), null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e) return this.parsedVersion;
		throw "Error readVersion"
	}, this.readCodewords = function() {
		var e = this.readFormatInformation(),
			t = this.readVersion(),
			n = DataMask.forReference(e.DataMask),
			r = this.bitMatrix.Dimension;
		n.unmaskBitMatrix(this.bitMatrix, r);
		for (var i = t.buildFunctionPattern(), o = !0, a = new Array(t.TotalCodewords), s = 0, c = 0, u = 0, l = r - 1; l > 0; l -= 2) {
			6 == l && l--;
			for (var f = 0; r > f; f++)
				for (var h = o ? r - 1 - f : f, d = 0; 2 > d; d++) i.get_Renamed(l - d, h) || (u++, c <<= 1, this.bitMatrix.get_Renamed(l - d, h) && (c |= 1), 8 == u && (a[s++] = c, u = 0, c = 0));
			o ^= !0
		}
		if (s != t.TotalCodewords) throw "Error readCodewords";
		return a
	}
}

function DataMask000() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		return 0 == (e + t & 1)
	}
}

function DataMask001() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e) {
		return 0 == (1 & e)
	}
}

function DataMask010() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		return t % 3 == 0
	}
}

function DataMask011() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		return (e + t) % 3 == 0
	}
}

function DataMask100() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		return 0 == (URShift(e, 1) + t / 3 & 1)
	}
}

function DataMask101() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		var n = e * t;
		return (1 & n) + n % 3 == 0
	}
}

function DataMask110() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		var n = e * t;
		return 0 == ((1 & n) + n % 3 & 1)
	}
}

function DataMask111() {
	this.unmaskBitMatrix = function(e, t) {
		for (var n = 0; t > n; n++)
			for (var r = 0; t > r; r++) this.isMasked(n, r) && e.flip(r, n)
	}, this.isMasked = function(e, t) {
		return 0 == ((e + t & 1) + e * t % 3 & 1)
	}
}

function ReedSolomonDecoder(e) {
	this.field = e, this.decode = function(e, t) {
		for (var n = new GF256Poly(this.field, e), r = new Array(t), i = 0; i < r.length; i++) r[i] = 0;
		for (var o = !1, a = !0, i = 0; t > i; i++) {
			var s = n.evaluateAt(this.field.exp(o ? i + 1 : i));
			r[r.length - 1 - i] = s, 0 != s && (a = !1)
		}
		if (!a)
			for (var c = new GF256Poly(this.field, r), u = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), c, t), l = u[0], f = u[1], h = this.findErrorLocations(l), d = this.findErrorMagnitudes(f, h, o), i = 0; i < h.length; i++) {
				var p = e.length - 1 - this.field.log(h[i]);
				if (0 > p) throw "ReedSolomonException Bad error location";
				e[p] = GF256.addOrSubtract(e[p], d[i])
			}
	}, this.runEuclideanAlgorithm = function(e, t, n) {
		if (e.Degree < t.Degree) {
			var r = e;
			e = t, t = r
		}
		for (var i = e, o = t, a = this.field.One, s = this.field.Zero, c = this.field.Zero, u = this.field.One; o.Degree >= Math.floor(n / 2);) {
			var l = i,
				f = a,
				h = c;
			if (i = o, a = s, c = u, i.Zero) throw "r_{i-1} was zero";
			o = l;
			for (var d = this.field.Zero, p = i.getCoefficient(i.Degree), g = this.field.inverse(p); o.Degree >= i.Degree && !o.Zero;) {
				var A = o.Degree - i.Degree,
					w = this.field.multiply(o.getCoefficient(o.Degree), g);
				d = d.addOrSubtract(this.field.buildMonomial(A, w)), o = o.addOrSubtract(i.multiplyByMonomial(A, w))
			}
			s = d.multiply1(a).addOrSubtract(f), u = d.multiply1(c).addOrSubtract(h)
		}
		var v = u.getCoefficient(0);
		if (0 == v) throw "ReedSolomonException sigmaTilde(0) was zero";
		var m = this.field.inverse(v),
			C = u.multiply2(m),
			y = o.multiply2(m);
		return new Array(C, y)
	}, this.findErrorLocations = function(e) {
		var t = e.Degree;
		if (1 == t) return new Array(e.getCoefficient(1));
		for (var n = new Array(t), r = 0, i = 1; 256 > i && t > r; i++) 0 == e.evaluateAt(i) && (n[r] = this.field.inverse(i), r++);
		if (r != t) throw "Error locator degree does not match number of roots";
		return n
	}, this.findErrorMagnitudes = function(e, t, n) {
		for (var r = t.length, i = new Array(r), o = 0; r > o; o++) {
			for (var a = this.field.inverse(t[o]), s = 1, c = 0; r > c; c++) o != c && (s = this.field.multiply(s, GF256.addOrSubtract(1, this.field.multiply(t[c], a))));
			i[o] = this.field.multiply(e.evaluateAt(a), this.field.inverse(s)), n && (i[o] = this.field.multiply(i[o], a))
		}
		return i
	}
}

function GF256Poly(e, t) {
	if (null == t || 0 == t.length) throw "System.ArgumentException";
	this.field = e;
	var n = t.length;
	if (n > 1 && 0 == t[0]) {
		for (var r = 1; n > r && 0 == t[r];) r++;
		if (r == n) this.coefficients = e.Zero.coefficients;
		else {
			this.coefficients = new Array(n - r);
			for (var i = 0; i < this.coefficients.length; i++) this.coefficients[i] = 0;
			for (var o = 0; o < this.coefficients.length; o++) this.coefficients[o] = t[r + o]
		}
	} else this.coefficients = t;
	this.__defineGetter__("Zero", function() {
		return 0 == this.coefficients[0]
	}), this.__defineGetter__("Degree", function() {
		return this.coefficients.length - 1
	}), this.__defineGetter__("Coefficients", function() {
		return this.coefficients
	}), this.getCoefficient = function(e) {
		return this.coefficients[this.coefficients.length - 1 - e]
	}, this.evaluateAt = function(e) {
		if (0 == e) return this.getCoefficient(0);
		var t = this.coefficients.length;
		if (1 == e) {
			for (var n = 0, r = 0; t > r; r++) n = GF256.addOrSubtract(n, this.coefficients[r]);
			return n
		}
		for (var i = this.coefficients[0], r = 1; t > r; r++) i = GF256.addOrSubtract(this.field.multiply(e, i), this.coefficients[r]);
		return i
	}, this.addOrSubtract = function(t) {
		if (this.field != t.field) throw "GF256Polys do not have same GF256 field";
		if (this.Zero) return t;
		if (t.Zero) return this;
		var n = this.coefficients,
			r = t.coefficients;
		if (n.length > r.length) {
			var i = n;
			n = r, r = i
		}
		for (var o = new Array(r.length), a = r.length - n.length, s = 0; a > s; s++) o[s] = r[s];
		for (var c = a; c < r.length; c++) o[c] = GF256.addOrSubtract(n[c - a], r[c]);
		return new GF256Poly(e, o)
	}, this.multiply1 = function(e) {
		if (this.field != e.field) throw "GF256Polys do not have same GF256 field";
		if (this.Zero || e.Zero) return this.field.Zero;
		for (var t = this.coefficients, n = t.length, r = e.coefficients, i = r.length, o = new Array(n + i - 1), a = 0; n > a; a++)
			for (var s = t[a], c = 0; i > c; c++) o[a + c] = GF256.addOrSubtract(o[a + c], this.field.multiply(s, r[c]));
		return new GF256Poly(this.field, o)
	}, this.multiply2 = function(e) {
		if (0 == e) return this.field.Zero;
		if (1 == e) return this;
		for (var t = this.coefficients.length, n = new Array(t), r = 0; t > r; r++) n[r] = this.field.multiply(this.coefficients[r], e);
		return new GF256Poly(this.field, n)
	}, this.multiplyByMonomial = function(e, t) {
		if (0 > e) throw "System.ArgumentException";
		if (0 == t) return this.field.Zero;
		for (var n = this.coefficients.length, r = new Array(n + e), i = 0; i < r.length; i++) r[i] = 0;
		for (var i = 0; n > i; i++) r[i] = this.field.multiply(this.coefficients[i], t);
		return new GF256Poly(this.field, r)
	}, this.divide = function(e) {
		if (this.field != e.field) throw "GF256Polys do not have same GF256 field";
		if (e.Zero) throw "Divide by 0";
		for (var t = this.field.Zero, n = this, r = e.getCoefficient(e.Degree), i = this.field.inverse(r); n.Degree >= e.Degree && !n.Zero;) {
			var o = n.Degree - e.Degree,
				a = this.field.multiply(n.getCoefficient(n.Degree), i),
				s = e.multiplyByMonomial(o, a),
				c = this.field.buildMonomial(o, a);
			t = t.addOrSubtract(c), n = n.addOrSubtract(s)
		}
		return new Array(t, n)
	}
}

function GF256(e) {
	this.expTable = new Array(256), this.logTable = new Array(256);
	for (var t = 1, n = 0; 256 > n; n++) this.expTable[n] = t, t <<= 1, t >= 256 && (t ^= e);
	for (var n = 0; 255 > n; n++) this.logTable[this.expTable[n]] = n;
	var r = new Array(1);
	r[0] = 0, this.zero = new GF256Poly(this, new Array(r));
	var i = new Array(1);
	i[0] = 1, this.one = new GF256Poly(this, new Array(i)), this.__defineGetter__("Zero", function() {
		return this.zero
	}), this.__defineGetter__("One", function() {
		return this.one
	}), this.buildMonomial = function(e, t) {
		if (0 > e) throw "System.ArgumentException";
		if (0 == t) return zero;
		for (var n = new Array(e + 1), r = 0; r < n.length; r++) n[r] = 0;
		return n[0] = t, new GF256Poly(this, n)
	}, this.exp = function(e) {
		return this.expTable[e]
	}, this.log = function(e) {
		if (0 == e) throw "System.ArgumentException";
		return this.logTable[e]
	}, this.inverse = function(e) {
		if (0 == e) throw "System.ArithmeticException";
		return this.expTable[255 - this.logTable[e]]
	}, this.multiply = function(e, t) {
		return 0 == e || 0 == t ? 0 : 1 == e ? t : 1 == t ? e : this.expTable[(this.logTable[e] + this.logTable[t]) % 255]
	}
}

function URShift(e, t) {
	return e >= 0 ? e >> t : (e >> t) + (2 << ~t)
}

function FinderPattern(e, t, n) {
	this.x = e, this.y = t, this.count = 1, this.estimatedModuleSize = n, this.__defineGetter__("EstimatedModuleSize", function() {
		return this.estimatedModuleSize
	}), this.__defineGetter__("Count", function() {
		return this.count
	}), this.__defineGetter__("X", function() {
		return this.x
	}), this.__defineGetter__("Y", function() {
		return this.y
	}), this.incrementCount = function() {
		this.count++
	}, this.aboutEquals = function(e, t, n) {
		if (Math.abs(t - this.y) <= e && Math.abs(n - this.x) <= e) {
			var r = Math.abs(e - this.estimatedModuleSize);
			return 1 >= r || r / this.estimatedModuleSize <= 1
		}
		return !1
	}
}

function FinderPatternInfo(e) {
	this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2], this.__defineGetter__("BottomLeft", function() {
		return this.bottomLeft
	}), this.__defineGetter__("TopLeft", function() {
		return this.topLeft
	}), this.__defineGetter__("TopRight", function() {
		return this.topRight
	})
}

function FinderPatternFinder() {
	this.image = null, this.possibleCenters = [], this.hasSkipped = !1, this.crossCheckStateCount = new Array(0, 0, 0, 0, 0), this.resultPointCallback = null, this.__defineGetter__("CrossCheckStateCount", function() {
		return this.crossCheckStateCount[0] = 0, this.crossCheckStateCount[1] = 0, this.crossCheckStateCount[2] = 0, this.crossCheckStateCount[3] = 0, this.crossCheckStateCount[4] = 0, this.crossCheckStateCount
	}), this.foundPatternCross = function(e) {
		for (var t = 0, n = 0; 5 > n; n++) {
			var r = e[n];
			if (0 == r) return !1;
			t += r
		}
		if (7 > t) return !1;
		var i = Math.floor((t << INTEGER_MATH_SHIFT) / 7),
			o = Math.floor(i / 2);
		return Math.abs(i - (e[0] << INTEGER_MATH_SHIFT)) < o && Math.abs(i - (e[1] << INTEGER_MATH_SHIFT)) < o && Math.abs(3 * i - (e[2] << INTEGER_MATH_SHIFT)) < 3 * o && Math.abs(i - (e[3] << INTEGER_MATH_SHIFT)) < o && Math.abs(i - (e[4] << INTEGER_MATH_SHIFT)) < o
	}, this.centerFromEnd = function(e, t) {
		return t - e[4] - e[3] - e[2] / 2
	}, this.crossCheckVertical = function(e, t, n, r) {
		for (var i = this.image, o = qrcode.height, a = this.CrossCheckStateCount, s = e; s >= 0 && i[t + s * qrcode.width];) a[2]++, s--;
		if (0 > s) return 0 / 0;
		for (; s >= 0 && !i[t + s * qrcode.width] && a[1] <= n;) a[1]++, s--;
		if (0 > s || a[1] > n) return 0 / 0;
		for (; s >= 0 && i[t + s * qrcode.width] && a[0] <= n;) a[0]++, s--;
		if (a[0] > n) return 0 / 0;
		for (s = e + 1; o > s && i[t + s * qrcode.width];) a[2]++, s++;
		if (s == o) return 0 / 0;
		for (; o > s && !i[t + s * qrcode.width] && a[3] < n;) a[3]++, s++;
		if (s == o || a[3] >= n) return 0 / 0;
		for (; o > s && i[t + s * qrcode.width] && a[4] < n;) a[4]++, s++;
		if (a[4] >= n) return 0 / 0;
		var c = a[0] + a[1] + a[2] + a[3] + a[4];
		return 5 * Math.abs(c - r) >= 2 * r ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
	}, this.crossCheckHorizontal = function(e, t, n, r) {
		for (var i = this.image, o = qrcode.width, a = this.CrossCheckStateCount, s = e; s >= 0 && i[s + t * qrcode.width];) a[2]++, s--;
		if (0 > s) return 0 / 0;
		for (; s >= 0 && !i[s + t * qrcode.width] && a[1] <= n;) a[1]++, s--;
		if (0 > s || a[1] > n) return 0 / 0;
		for (; s >= 0 && i[s + t * qrcode.width] && a[0] <= n;) a[0]++, s--;
		if (a[0] > n) return 0 / 0;
		for (s = e + 1; o > s && i[s + t * qrcode.width];) a[2]++, s++;
		if (s == o) return 0 / 0;
		for (; o > s && !i[s + t * qrcode.width] && a[3] < n;) a[3]++, s++;
		if (s == o || a[3] >= n) return 0 / 0;
		for (; o > s && i[s + t * qrcode.width] && a[4] < n;) a[4]++, s++;
		if (a[4] >= n) return 0 / 0;
		var c = a[0] + a[1] + a[2] + a[3] + a[4];
		return 5 * Math.abs(c - r) >= r ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
	}, this.handlePossibleCenter = function(e, t, n) {
		var r = e[0] + e[1] + e[2] + e[3] + e[4],
			i = this.centerFromEnd(e, n),
			o = this.crossCheckVertical(t, Math.floor(i), e[2], r);
		if (!isNaN(o) && (i = this.crossCheckHorizontal(Math.floor(i), Math.floor(o), e[2], r), !isNaN(i))) {
			for (var a = r / 7, s = !1, c = this.possibleCenters.length, u = 0; c > u; u++) {
				var l = this.possibleCenters[u];
				if (l.aboutEquals(a, o, i)) {
					l.incrementCount(), s = !0;
					break
				}
			}
			if (!s) {
				var f = new FinderPattern(i, o, a);
				this.possibleCenters.push(f), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(f)
			}
			return !0
		}
		return !1
	}, this.selectBestPatterns = function() {
		var e = this.possibleCenters.length;
		if (3 > e) throw "Couldn't find enough finder patterns";
		if (e > 3) {
			for (var t = 0, n = 0, r = 0; e > r; r++) {
				var i = this.possibleCenters[r].EstimatedModuleSize;
				t += i, n += i * i
			}
			var o = t / e;
			this.possibleCenters.sort(function(e, t) {
				var n = Math.abs(t.EstimatedModuleSize - o),
					r = Math.abs(e.EstimatedModuleSize - o);
				return r > n ? -1 : n == r ? 0 : 1
			});
			for (var a = Math.sqrt(n / e - o * o), s = Math.max(.2 * o, a), r = 0; r < this.possibleCenters.length && this.possibleCenters.length > 3; r++) {
				var c = this.possibleCenters[r];
				Math.abs(c.EstimatedModuleSize - o) > s && (this.possibleCenters.splice(r, 1), r--)
			}
		}
		return this.possibleCenters.length > 3 && this.possibleCenters.sort(function(e, t) {
			return e.count > t.count ? -1 : e.count < t.count ? 1 : 0
		}), new Array(this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2])
	}, this.findRowSkip = function() {
		var e = this.possibleCenters.length;
		if (1 >= e) return 0;
		for (var t = null, n = 0; e > n; n++) {
			var r = this.possibleCenters[n];
			if (r.Count >= CENTER_QUORUM) {
				if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.X - r.X) - Math.abs(t.Y - r.Y)) / 2);
				t = r
			}
		}
		return 0
	}, this.haveMultiplyConfirmedCenters = function() {
		for (var e = 0, t = 0, n = this.possibleCenters.length, r = 0; n > r; r++) {
			var i = this.possibleCenters[r];
			i.Count >= CENTER_QUORUM && (e++, t += i.EstimatedModuleSize)
		}
		if (3 > e) return !1;
		for (var o = t / n, a = 0, r = 0; n > r; r++) i = this.possibleCenters[r], a += Math.abs(i.EstimatedModuleSize - o);
		return .05 * t >= a
	}, this.findFinderPattern = function(e) {
		var t = !1;
		this.image = e;
		var n = qrcode.height,
			r = qrcode.width,
			i = Math.floor(3 * n / (4 * MAX_MODULES));
		(MIN_SKIP > i || t) && (i = MIN_SKIP);
		for (var o = !1, a = new Array(5), s = i - 1; n > s && !o; s += i) {
			a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0;
			for (var c = 0, u = 0; r > u; u++)
				if (e[u + s * qrcode.width]) 1 == (1 & c) && c++, a[c]++;
				else if (0 == (1 & c))
				if (4 == c)
					if (this.foundPatternCross(a)) {
						var l = this.handlePossibleCenter(a, s, u);
						if (l)
							if (i = 2, this.hasSkipped) o = this.haveMultiplyConfirmedCenters();
							else {
								var f = this.findRowSkip();
								f > a[2] && (s += f - a[2] - i, u = r - 1)
							}
						else {
							do u++; while (r > u && !e[u + s * qrcode.width]);
							u--
						}
						c = 0, a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0
					} else a[0] = a[2], a[1] = a[3], a[2] = a[4], a[3] = 1, a[4] = 0, c = 3;
			else a[++c]++;
			else a[c]++;
			if (this.foundPatternCross(a)) {
				var l = this.handlePossibleCenter(a, s, r);
				l && (i = a[0], this.hasSkipped && (o = haveMultiplyConfirmedCenters()))
			}
		}
		var h = this.selectBestPatterns();
		return qrcode.orderBestPatterns(h), new FinderPatternInfo(h)
	}
}

function AlignmentPattern(e, t, n) {
	this.x = e, this.y = t, this.count = 1, this.estimatedModuleSize = n, this.__defineGetter__("EstimatedModuleSize", function() {
		return this.estimatedModuleSize
	}), this.__defineGetter__("Count", function() {
		return this.count
	}), this.__defineGetter__("X", function() {
		return Math.floor(this.x)
	}), this.__defineGetter__("Y", function() {
		return Math.floor(this.y)
	}), this.incrementCount = function() {
		this.count++
	}, this.aboutEquals = function(e, t, n) {
		if (Math.abs(t - this.y) <= e && Math.abs(n - this.x) <= e) {
			var r = Math.abs(e - this.estimatedModuleSize);
			return 1 >= r || r / this.estimatedModuleSize <= 1
		}
		return !1
	}
}

function AlignmentPatternFinder(e, t, n, r, i, o, a) {
	this.image = e, this.possibleCenters = new Array, this.startX = t, this.startY = n, this.width = r, this.height = i, this.moduleSize = o, this.crossCheckStateCount = new Array(0, 0, 0), this.resultPointCallback = a, this.centerFromEnd = function(e, t) {
		return t - e[2] - e[1] / 2
	}, this.foundPatternCross = function(e) {
		for (var t = this.moduleSize, n = t / 2, r = 0; 3 > r; r++)
			if (Math.abs(t - e[r]) >= n) return !1;
		return !0
	}, this.crossCheckVertical = function(e, t, n, r) {
		var i = this.image,
			o = qrcode.height,
			a = this.crossCheckStateCount;
		a[0] = 0, a[1] = 0, a[2] = 0;
		for (var s = e; s >= 0 && i[t + s * qrcode.width] && a[1] <= n;) a[1]++, s--;
		if (0 > s || a[1] > n) return 0 / 0;
		for (; s >= 0 && !i[t + s * qrcode.width] && a[0] <= n;) a[0]++, s--;
		if (a[0] > n) return 0 / 0;
		for (s = e + 1; o > s && i[t + s * qrcode.width] && a[1] <= n;) a[1]++, s++;
		if (s == o || a[1] > n) return 0 / 0;
		for (; o > s && !i[t + s * qrcode.width] && a[2] <= n;) a[2]++, s++;
		if (a[2] > n) return 0 / 0;
		var c = a[0] + a[1] + a[2];
		return 5 * Math.abs(c - r) >= 2 * r ? 0 / 0 : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : 0 / 0
	}, this.handlePossibleCenter = function(e, t, n) {
		var r = e[0] + e[1] + e[2],
			i = this.centerFromEnd(e, n),
			o = this.crossCheckVertical(t, Math.floor(i), 2 * e[1], r);
		if (!isNaN(o)) {
			for (var a = (e[0] + e[1] + e[2]) / 3, s = this.possibleCenters.length, c = 0; s > c; c++) {
				var u = this.possibleCenters[c];
				if (u.aboutEquals(a, o, i)) return new AlignmentPattern(i, o, a)
			}
			var l = new AlignmentPattern(i, o, a);
			this.possibleCenters.push(l), null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(l)
		}
		return null
	}, this.find = function() {
		for (var t = this.startX, i = this.height, o = t + r, a = n + (i >> 1), s = new Array(0, 0, 0), c = 0; i > c; c++) {
			var u = a + (0 == (1 & c) ? c + 1 >> 1 : -(c + 1 >> 1));
			s[0] = 0, s[1] = 0, s[2] = 0;
			for (var l = t; o > l && !e[l + qrcode.width * u];) l++;
			for (var f = 0; o > l;) {
				if (e[l + u * qrcode.width])
					if (1 == f) s[f]++;
					else if (2 == f) {
					if (this.foundPatternCross(s)) {
						var h = this.handlePossibleCenter(s, u, l);
						if (null != h) return h
					}
					s[0] = s[2], s[1] = 1, s[2] = 0, f = 1
				} else s[++f]++;
				else 1 == f && f++, s[f]++;
				l++
			}
			if (this.foundPatternCross(s)) {
				var h = this.handlePossibleCenter(s, u, o);
				if (null != h) return h
			}
		}
		if (0 != this.possibleCenters.length) return this.possibleCenters[0];
		throw "Couldn't find enough alignment patterns"
	}
}

function QRCodeDataBlockReader(e, t, n) {
	this.blockPointer = 0, this.bitPointer = 7, this.dataLength = 0, this.blocks = e, this.numErrorCorrectionCode = n, 9 >= t ? this.dataLengthMode = 0 : t >= 10 && 26 >= t ? this.dataLengthMode = 1 : t >= 27 && 40 >= t && (this.dataLengthMode = 2), this.getNextBits = function(e) {
		var t = 0;
		if (e < this.bitPointer + 1) {
			for (var n = 0, r = 0; e > r; r++) n += 1 << r;
			return n <<= this.bitPointer - e + 1, t = (this.blocks[this.blockPointer] & n) >> this.bitPointer - e + 1, this.bitPointer -= e, t
		}
		if (e < this.bitPointer + 1 + 8) {
			for (var i = 0, r = 0; r < this.bitPointer + 1; r++) i += 1 << r;
			return t = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1), this.blockPointer++, t += this.blocks[this.blockPointer] >> 8 - (e - (this.bitPointer + 1)), this.bitPointer = this.bitPointer - e % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), t
		}
		if (e < this.bitPointer + 1 + 16) {
			for (var i = 0, o = 0, r = 0; r < this.bitPointer + 1; r++) i += 1 << r;
			var a = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1);
			this.blockPointer++;
			var s = this.blocks[this.blockPointer] << e - (this.bitPointer + 1 + 8);
			this.blockPointer++;
			for (var r = 0; r < e - (this.bitPointer + 1 + 8); r++) o += 1 << r;
			o <<= 8 - (e - (this.bitPointer + 1 + 8));
			var c = (this.blocks[this.blockPointer] & o) >> 8 - (e - (this.bitPointer + 1 + 8));
			return t = a + s + c, this.bitPointer = this.bitPointer - (e - 8) % 8, this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer), t
		}
		return 0
	}, this.NextMode = function() {
		return this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2 ? 0 : this.getNextBits(4)
	}, this.getDataLength = function(e) {
		for (var t = 0;;) {
			if (e >> t == 1) break;
			t++
		}
		return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][t])
	}, this.getRomanAndFigureString = function(e) {
		var t = e,
			n = 0,
			r = "",
			i = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
		do
			if (t > 1) {
				n = this.getNextBits(11);
				var o = Math.floor(n / 45),
					a = n % 45;
				r += i[o], r += i[a], t -= 2
			} else 1 == t && (n = this.getNextBits(6), r += i[n], t -= 1); while (t > 0);
		return r
	}, this.getFigureString = function(e) {
		var t = e,
			n = 0,
			r = "";
		do t >= 3 ? (n = this.getNextBits(10), 100 > n && (r += "0"), 10 > n && (r += "0"), t -= 3) : 2 == t ? (n = this.getNextBits(7), 10 > n && (r += "0"), t -= 2) : 1 == t && (n = this.getNextBits(4), t -= 1), r += n; while (t > 0);
		return r
	}, this.get8bitByteArray = function(e) {
		var t = e,
			n = 0,
			r = new Array;
		do n = this.getNextBits(8), r.push(n), t--; while (t > 0);
		return r
	}, this.getKanjiString = function(e) {
		var t = e,
			n = 0,
			r = "";
		do {
			n = getNextBits(13);
			var i = n % 192,
				o = n / 192,
				a = (o << 8) + i,
				s = 0;
			s = 40956 >= a + 33088 ? a + 33088 : a + 49472, r += String.fromCharCode(s), t--
		} while (t > 0);
		return r
	}, this.__defineGetter__("DataByte", function() {
		for (var e = new Array, t = 1, n = 2, r = 3, i = 4, o = 8;;) {
			var a = this.NextMode();
			if (0 == a) {
				if (e.length > 0) break;
				throw "Empty data block"
			}
			if (a == r && (this.getNextBits(4), this.getNextBits(4), this.getNextBits(8), a = this.getNextBits(4)), a != t && a != n && a != i && a != o) throw "Invalid mode: " + a + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
			if (dataLength = this.getDataLength(a), 1 > dataLength) throw "Invalid data length: " + dataLength;
			switch (a) {
				case t:
					for (var s = this.getFigureString(dataLength), c = new Array(s.length), u = 0; u < s.length; u++) c[u] = s.charCodeAt(u);
					e.push(c);
					break;
				case n:
					for (var s = this.getRomanAndFigureString(dataLength), c = new Array(s.length), u = 0; u < s.length; u++) c[u] = s.charCodeAt(u);
					e.push(c);
					break;
				case i:
					var l = this.get8bitByteArray(dataLength);
					e.push(l);
					break;
				case o:
					var s = this.getKanjiString(dataLength);
					e.push(s)
			}
		}
		return e
	})
}! function(e, t) {
	function n(e) {
		var t = e.length,
			n = ot.type(e);
		return ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function r(e) {
		var t = pt[e] = {};
		return ot.each(e.match(st) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function i() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = ot.expando + Math.random()
	}

	function o(e, n, r) {
		var i;
		if (r === t && 1 === e.nodeType)
			if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : wt.test(r) ? JSON.parse(r) : r
				} catch (o) {}
				gt.set(e, n, r)
			} else r = t;
		return r
	}

	function a() {
		return !0
	}

	function s() {
		return !1
	}

	function c() {
		try {
			return G.activeElement
		} catch (e) {}
	}

	function u(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function l(e, t, n) {
		if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return ot.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (_t.test(t)) return ot.filter(t, e, n);
			t = ot.filter(t, e)
		}
		return ot.grep(e, function(e) {
			return tt.call(t, e) >= 0 !== n
		})
	}

	function f(e, t) {
		return ot.nodeName(e, "table") && ot.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function h(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function d(e) {
		var t = Ot.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function p(e, t) {
		for (var n = e.length, r = 0; n > r; r++) At.set(e[r], "globalEval", !t || At.get(t[r], "globalEval"))
	}

	function g(e, t) {
		var n, r, i, o, a, s, c, u;
		if (1 === t.nodeType) {
			if (At.hasData(e) && (o = At.access(e), a = At.set(t, o), u = o.events)) {
				delete a.handle, a.events = {};
				for (i in u)
					for (n = 0, r = u[i].length; r > n; n++) ot.event.add(t, i, u[i][n])
			}
			gt.hasData(e) && (s = gt.access(e), c = ot.extend({}, s), gt.set(t, c))
		}
	}

	function A(e, n) {
		var r = e.getElementsByTagName ? e.getElementsByTagName(n || "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
		return n === t || n && ot.nodeName(e, n) ? ot.merge([e], r) : r
	}

	function w(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && Lt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}

	function v(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Jt.length; i--;)
			if (t = Jt[i] + n, t in e) return t;
		return r
	}

	function m(e, t) {
		return e = t || e, "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
	}

	function C(t) {
		return e.getComputedStyle(t, null)
	}

	function y(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = At.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && m(r) && (o[a] = At.access(r, "olddisplay", k(r.nodeName)))) : o[a] || (i = m(r), (n && "none" !== n || !i) && At.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function E(e, t, n) {
		var r = Wt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function B(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= ot.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= ot.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += ot.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += ot.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function b(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = C(e),
			a = ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Ht(e, t, o), (0 > i || null == i) && (i = e.style[t]), Xt.test(i)) return i;
			r = a && (ot.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + B(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function k(e) {
		var t = G,
			n = Yt[e];
		return n || (n = x(e, t), "none" !== n && n || (Vt = (Vt || ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Vt[0].contentWindow || Vt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = x(e, t), Vt.detach()), Yt[e] = n), n
	}

	function x(e, t) {
		var n = ot(t.createElement(e)).appendTo(t.body),
			r = ot.css(n[0], "display");
		return n.remove(), r
	}

	function T(e, t, n, r) {
		var i;
		if (ot.isArray(t)) ot.each(t, function(t, i) {
			n || tn.test(e) ? r(e, i) : T(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== ot.type(t)) r(e, t);
		else
			for (i in t) T(e + "[" + i + "]", t[i], n, r)
	}

	function _(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(st) || [];
			if (ot.isFunction(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function D(e, n, r, i) {
		function o(c) {
			var u;
			return a[c] = !0, ot.each(e[c] || [], function(e, c) {
				var l = c(n, r, i);
				return "string" != typeof l || s || a[l] ? s ? !(u = l) : t : (n.dataTypes.unshift(l), o(l), !1)
			}), u
		}
		var a = {},
			s = e === mn;
		return o(n.dataTypes[0]) || !a["*"] && o("*")
	}

	function F(e, n) {
		var r, i, o = ot.ajaxSettings.flatOptions || {};
		for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
		return i && ot.extend(!0, e, i), e
	}

	function M(e, n, r) {
		for (var i, o, a, s, c = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
		if (i)
			for (o in c)
				if (c[o] && c[o].test(i)) {
					u.unshift(o);
					break
				}
		if (u[0] in r) a = u[0];
		else {
			for (o in r) {
				if (!u[0] || e.converters[o + " " + u[0]]) {
					a = o;
					break
				}
				s || (s = o)
			}
			a = a || s
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function N(e, t, n, r) {
		var i, o, a, s, c, u = {},
			l = e.dataTypes.slice();
		if (l[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (o = l.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
				if ("*" === o) o = c;
				else if ("*" !== c && c !== o) {
			if (a = u[c + " " + o] || u["* " + o], !a)
				for (i in u)
					if (s = i.split(" "), s[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], l.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + c + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function S() {
		return setTimeout(function() {
			_n = t
		}), _n = ot.now()
	}

	function q(e, t, n) {
		for (var r, i = (qn[t] || []).concat(qn["*"]), o = 0, a = i.length; a > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function P(e, t, n) {
		var r, i, o = 0,
			a = Sn.length,
			s = ot.Deferred().always(function() {
				delete c.elem
			}),
			c = function() {
				if (i) return !1;
				for (var t = _n || S(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, c = u.tweens.length; c > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && c ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: ot.extend({}, t),
				opts: ot.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: _n || S(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = ot.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			l = u.props;
		for (L(l, u.opts.specialEasing); a > o; o++)
			if (r = Sn[o].call(u, e, l, u.opts)) return r;
		return ot.map(l, q, u), ot.isFunction(u.opts.start) && u.opts.start.call(e, u), ot.fx.timer(ot.extend(c, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function L(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ot.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function I(e, n, r) {
		var i, o, a, s, c, u, l = this,
			f = {},
			h = e.style,
			d = e.nodeType && m(e),
			p = At.get(e, "fxshow");
		r.queue || (c = ot._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() {
			c.unqueued || u()
		}), c.unqueued++, l.always(function() {
			l.always(function() {
				c.unqueued--, ot.queue(e, "fx").length || c.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in n || "width" in n) && (r.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ot.css(e, "display") && "none" === ot.css(e, "float") && (h.display = "inline-block")), r.overflow && (h.overflow = "hidden", l.always(function() {
			h.overflow = r.overflow[0], h.overflowX = r.overflow[1], h.overflowY = r.overflow[2]
		}));
		for (i in n)
			if (o = n[i], Fn.exec(o)) {
				if (delete n[i], a = a || "toggle" === o, o === (d ? "hide" : "show")) {
					if ("show" !== o || !p || p[i] === t) continue;
					d = !0
				}
				f[i] = p && p[i] || ot.style(e, i)
			}
		if (!ot.isEmptyObject(f)) {
			p ? "hidden" in p && (d = p.hidden) : p = At.access(e, "fxshow", {}), a && (p.hidden = !d), d ? ot(e).show() : l.done(function() {
				ot(e).hide()
			}), l.done(function() {
				var t;
				At.remove(e, "fxshow");
				for (t in f) ot.style(e, t, f[t])
			});
			for (i in f) s = q(d ? p[i] : 0, i, l), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function R(e, t, n, r, i) {
		return new R.prototype.init(e, t, n, r, i)
	}

	function O(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function $(e) {
		return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var j, H, V = typeof t,
		z = e.location,
		G = e.document,
		W = G.documentElement,
		X = e.jQuery,
		U = e.$,
		Y = {},
		Q = [],
		K = "2.0.2",
		Z = Q.concat,
		J = Q.push,
		et = Q.slice,
		tt = Q.indexOf,
		nt = Y.toString,
		rt = Y.hasOwnProperty,
		it = K.trim,
		ot = function(e, t) {
			return new ot.fn.init(e, t, j)
		},
		at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		st = /\S+/g,
		ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		lt = /^-ms-/,
		ft = /-([\da-z])/gi,
		ht = function(e, t) {
			return t.toUpperCase()
		},
		dt = function() {
			G.removeEventListener("DOMContentLoaded", dt, !1), e.removeEventListener("load", dt, !1), ot.ready()
		};
	ot.fn = ot.prototype = {
			jquery: K,
			constructor: ot,
			init: function(e, n, r) {
				var i, o;
				if (!e) return this;
				if ("string" == typeof e) {
					if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ct.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
					if (i[1]) {
						if (n = n instanceof ot ? n[0] : n, ot.merge(this, ot.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ut.test(i[1]) && ot.isPlainObject(n))
							for (i in n) ot.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
						return this
					}
					return o = G.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
			},
			selector: "",
			length: 0,
			toArray: function() {
				return et.call(this)
			},
			get: function(e) {
				return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
			},
			pushStack: function(e) {
				var t = ot.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return ot.each(this, e, t)
			},
			ready: function(e) {
				return ot.ready.promise().done(e), this
			},
			slice: function() {
				return this.pushStack(et.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			map: function(e) {
				return this.pushStack(ot.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: J,
			sort: [].sort,
			splice: [].splice
		}, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend = function() {
			var e, n, r, i, o, a, s = arguments[0] || {},
				c = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, c = 2), "object" == typeof s || ot.isFunction(s) || (s = {}), u === c && (s = this, --c); u > c; c++)
				if (null != (e = arguments[c]))
					for (n in e) r = s[n], i = e[n], s !== i && (l && i && (ot.isPlainObject(i) || (o = ot.isArray(i))) ? (o ? (o = !1, a = r && ot.isArray(r) ? r : []) : a = r && ot.isPlainObject(r) ? r : {}, s[n] = ot.extend(l, a, i)) : i !== t && (s[n] = i));
			return s
		}, ot.extend({
			expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
			noConflict: function(t) {
				return e.$ === ot && (e.$ = U), t && e.jQuery === ot && (e.jQuery = X), ot
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? ot.readyWait++ : ot.ready(!0)
			},
			ready: function(e) {
				(e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (H.resolveWith(G, [ot]), ot.fn.trigger && ot(G).trigger("ready").off("ready")))
			},
			isFunction: function(e) {
				return "function" === ot.type(e)
			},
			isArray: Array.isArray,
			isWindow: function(e) {
				return null != e && e === e.window
			},
			isNumeric: function(e) {
				return !isNaN(parseFloat(e)) && isFinite(e)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[nt.call(e)] || "object" : typeof e
			},
			isPlainObject: function(e) {
				if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return !1;
				try {
					if (e.constructor && !rt.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (t) {
					return !1
				}
				return !0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			error: function(e) {
				throw Error(e)
			},
			parseHTML: function(e, t, n) {
				if (!e || "string" != typeof e) return null;
				"boolean" == typeof t && (n = t, t = !1), t = t || G;
				var r = ut.exec(e),
					i = !n && [];
				return r ? [t.createElement(r[1])] : (r = ot.buildFragment([e], t, i), i && ot(i).remove(), ot.merge([], r.childNodes))
			},
			parseJSON: JSON.parse,
			parseXML: function(e) {
				var n, r;
				if (!e || "string" != typeof e) return null;
				try {
					r = new DOMParser, n = r.parseFromString(e, "text/xml")
				} catch (i) {
					n = t
				}
				return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
			},
			noop: function() {},
			globalEval: function(e) {
				var t, n = eval;
				e = ot.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function(e) {
				return e.replace(lt, "ms-").replace(ft, ht)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e);
				if (r) {
					if (s)
						for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
					else
						for (o in e)
							if (i = t.apply(e[o], r), i === !1) break
				} else if (s)
					for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
				else
					for (o in e)
						if (i = t.call(e[o], o, e[o]), i === !1) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : it.call(e)
			},
			makeArray: function(e, t) {
				var r = t || [];
				return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : tt.call(t, e, n)
			},
			merge: function(e, n) {
				var r = n.length,
					i = e.length,
					o = 0;
				if ("number" == typeof r)
					for (; r > o; o++) e[i++] = n[o];
				else
					for (; n[o] !== t;) e[i++] = n[o++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				var r, i = [],
					o = 0,
					a = e.length;
				for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
				return i
			},
			map: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e),
					c = [];
				if (s)
					for (; a > o; o++) i = t(e[o], o, r), null != i && (c[c.length] = i);
				else
					for (o in e) i = t(e[o], o, r), null != i && (c[c.length] = i);
				return Z.apply([], c)
			},
			guid: 1,
			proxy: function(e, n) {
				var r, i, o;
				return "string" == typeof n && (r = e[n], n = e, e = r), ot.isFunction(e) ? (i = et.call(arguments, 2), o = function() {
					return e.apply(n || this, i.concat(et.call(arguments)))
				}, o.guid = e.guid = e.guid || ot.guid++, o) : t
			},
			access: function(e, n, r, i, o, a, s) {
				var c = 0,
					u = e.length,
					l = null == r;
				if ("object" === ot.type(r)) {
					o = !0;
					for (c in r) ot.access(e, n, c, r[c], !0, a, s)
				} else if (i !== t && (o = !0, ot.isFunction(i) || (s = !0), l && (s ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
						return l.call(ot(e), n)
					})), n))
					for (; u > c; c++) n(e[c], r, s ? i : i.call(e[c], c, n(e[c], r)));
				return o ? e : l ? n.call(e) : u ? n(e[0], r) : a
			},
			now: Date.now,
			swap: function(e, t, n, r) {
				var i, o, a = {};
				for (o in t) a[o] = e.style[o], e.style[o] = t[o];
				i = n.apply(e, r || []);
				for (o in t) e.style[o] = a[o];
				return i
			}
		}), ot.ready.promise = function(t) {
			return H || (H = ot.Deferred(), "complete" === G.readyState ? setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", dt, !1))), H.promise(t)
		}, ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			Y["[object " + t + "]"] = t.toLowerCase()
		}), j = ot(G),
		function(e, t) {
			function n(e, t, n, r) {
				var i, o, a, s, c, u, l, f, h, d;
				if ((t ? t.ownerDocument || t : z) !== L && P(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (s = t.nodeType) && 9 !== s) return [];
				if (R && !r) {
					if (i = Bt.exec(e))
						if (a = i[1]) {
							if (9 === s) {
								if (o = t.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return it.apply(n, t.getElementsByTagName(e)), n;
							if ((a = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return it.apply(n, t.getElementsByClassName(a)), n
						}
					if (T.qsa && (!O || !O.test(e))) {
						if (f = l = V, h = t, d = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (u = g(e), (l = t.getAttribute("id")) ? f = l.replace(xt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = u.length; c--;) u[c] = f + A(u[c]);
							h = wt.test(e) && t.parentNode || t, d = u.join(",")
						}
						if (d) try {
							return it.apply(n, h.querySelectorAll(d)), n
						} catch (p) {} finally {
							l || t.removeAttribute("id")
						}
					}
				}
				return b(e.replace(pt, "$1"), t, n, r)
			}

			function r(e) {
				return Et.test(e + "")
			}

			function i() {
				function e(n, r) {
					return t.push(n += " ") > D.cacheLength && delete e[t.shift()], e[n] = r
				}
				var t = [];
				return e
			}

			function o(e) {
				return e[V] = !0, e
			}

			function a(e) {
				var t = L.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function s(e, t, n) {
				e = e.split("|");
				for (var r, i = e.length, o = n ? null : t; i--;)(r = D.attrHandle[e[i]]) && r !== t || (D.attrHandle[e[i]] = o)
			}

			function c(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
			}

			function u(e, t) {
				return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}

			function l(e) {
				return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
			}

			function f(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function h(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function d(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function p(e) {
				return o(function(t) {
					return t = +t, o(function(n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function g(e, t) {
				var r, i, o, a, s, c, u, l = U[e + " "];
				if (l) return t ? 0 : l.slice(0);
				for (s = e, c = [], u = D.preFilter; s;) {
					(!r || (i = gt.exec(s))) && (i && (s = s.slice(i[0].length) || s), c.push(o = [])), r = !1, (i = At.exec(s)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(pt, " ")
					}), s = s.slice(r.length));
					for (a in D.filter) !(i = yt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
						value: r,
						type: a,
						matches: i
					}), s = s.slice(r.length));
					if (!r) break
				}
				return t ? s.length : s ? n.error(e) : U(e, c).slice(0)
			}

			function A(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}

			function w(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					o = W++;
				return t.first ? function(t, n, o) {
					for (; t = t[r];)
						if (1 === t.nodeType || i) return e(t, n, o)
				} : function(t, n, a) {
					var s, c, u, l = G + " " + o;
					if (a) {
						for (; t = t[r];)
							if ((1 === t.nodeType || i) && e(t, n, a)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || i)
								if (u = t[V] || (t[V] = {}), (c = u[r]) && c[0] === l) {
									if ((s = c[1]) === !0 || s === _) return s === !0
								} else if (c = u[r] = [l], c[1] = e(t, n, a) || _, c[1] === !0) return !0
				}
			}

			function v(e) {
				return e.length > 1 ? function(t, n, r) {
					for (var i = e.length; i--;)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function m(e, t, n, r, i) {
				for (var o, a = [], s = 0, c = e.length, u = null != t; c > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}

			function C(e, t, n, r, i, a) {
				return r && !r[V] && (r = C(r)), i && !i[V] && (i = C(i, a)), o(function(o, a, s, c) {
					var u, l, f, h = [],
						d = [],
						p = a.length,
						g = o || B(t || "*", s.nodeType ? [s] : s, []),
						A = !e || !o && t ? g : m(g, h, e, s, c),
						w = n ? i || (o ? e : p || r) ? [] : a : A;
					if (n && n(A, w, s, c), r)
						for (u = m(w, d), r(u, [], s, c), l = u.length; l--;)(f = u[l]) && (w[d[l]] = !(A[d[l]] = f));
					if (o) {
						if (i || e) {
							if (i) {
								for (u = [], l = w.length; l--;)(f = w[l]) && u.push(A[l] = f);
								i(null, w = [], u, c)
							}
							for (l = w.length; l--;)(f = w[l]) && (u = i ? st.call(o, f) : h[l]) > -1 && (o[u] = !(a[u] = f))
						}
					} else w = m(w === a ? w.splice(p, w.length) : w), i ? i(null, a, w, c) : it.apply(a, w)
				})
			}

			function y(e) {
				for (var t, n, r, i = e.length, o = D.relative[e[0].type], a = o || D.relative[" "], s = o ? 1 : 0, c = w(function(e) {
						return e === t
					}, a, !0), u = w(function(e) {
						return st.call(t, e) > -1
					}, a, !0), l = [function(e, n, r) {
						return !o && (r || n !== S) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r))
					}]; i > s; s++)
					if (n = D.relative[e[s].type]) l = [w(v(l), n)];
					else {
						if (n = D.filter[e[s].type].apply(null, e[s].matches), n[V]) {
							for (r = ++s; i > r && !D.relative[e[r].type]; r++);
							return C(s > 1 && v(l), s > 1 && A(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(pt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && A(e))
						}
						l.push(n)
					}
				return v(l)
			}

			function E(e, t) {
				var r = 0,
					i = t.length > 0,
					a = e.length > 0,
					s = function(o, s, c, u, l) {
						var f, h, d, p = [],
							g = 0,
							A = "0",
							w = o && [],
							v = null != l,
							C = S,
							y = o || a && D.find.TAG("*", l && s.parentNode || s),
							E = G += null == C ? 1 : Math.random() || .1;
						for (v && (S = s !== L && s, _ = r); null != (f = y[A]); A++) {
							if (a && f) {
								for (h = 0; d = e[h++];)
									if (d(f, s, c)) {
										u.push(f);
										break
									}
								v && (G = E, _ = ++r)
							}
							i && ((f = !d && f) && g--, o && w.push(f))
						}
						if (g += A, i && A !== g) {
							for (h = 0; d = t[h++];) d(w, p, s, c);
							if (o) {
								if (g > 0)
									for (; A--;) w[A] || p[A] || (p[A] = nt.call(u));
								p = m(p)
							}
							it.apply(u, p), v && !o && p.length > 0 && g + t.length > 1 && n.uniqueSort(u)
						}
						return v && (G = E, S = C), w
					};
				return i ? o(s) : s
			}

			function B(e, t, r) {
				for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
				return r
			}

			function b(e, t, n, r) {
				var i, o, a, s, c, u = g(e);
				if (!r && 1 === u.length) {
					if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && R && D.relative[o[1].type]) {
						if (t = (D.find.ID(a.matches[0].replace(Tt, _t), t) || [])[0], !t) return n;
						e = e.slice(o.shift().value.length)
					}
					for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !D.relative[s = a.type]);)
						if ((c = D.find[s]) && (r = c(a.matches[0].replace(Tt, _t), wt.test(o[0].type) && t.parentNode || t))) {
							if (o.splice(i, 1), e = r.length && A(o), !e) return it.apply(n, r), n;
							break
						}
				}
				return N(e, u)(r, t, !R, n, wt.test(e)), n
			}

			function k() {}
			var x, T, _, D, F, M, N, S, q, P, L, I, R, O, $, j, H, V = "sizzle" + -new Date,
				z = e.document,
				G = 0,
				W = 0,
				X = i(),
				U = i(),
				Y = i(),
				Q = !1,
				K = function() {
					return 0
				},
				Z = typeof t,
				J = 1 << 31,
				et = {}.hasOwnProperty,
				tt = [],
				nt = tt.pop,
				rt = tt.push,
				it = tt.push,
				at = tt.slice,
				st = tt.indexOf || function(e) {
					for (var t = 0, n = this.length; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				ct = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ut = "[\\x20\\t\\r\\n\\f]",
				lt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ft = lt.replace("w", "w#"),
				ht = "\\[" + ut + "*(" + lt + ")" + ut + "*(?:([*^$|!~]?=)" + ut + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ft + ")|)|)" + ut + "*\\]",
				dt = ":(" + lt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ht.replace(3, 8) + ")*)|.*)\\)|)",
				pt = RegExp("^" + ut + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ut + "+$", "g"),
				gt = RegExp("^" + ut + "*," + ut + "*"),
				At = RegExp("^" + ut + "*([>+~]|" + ut + ")" + ut + "*"),
				wt = RegExp(ut + "*[+~]"),
				vt = RegExp("=" + ut + "*([^\\]'\"]*)" + ut + "*\\]", "g"),
				mt = RegExp(dt),
				Ct = RegExp("^" + ft + "$"),
				yt = {
					ID: RegExp("^#(" + lt + ")"),
					CLASS: RegExp("^\\.(" + lt + ")"),
					TAG: RegExp("^(" + lt.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + ht),
					PSEUDO: RegExp("^" + dt),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ut + "*(even|odd|(([+-]|)(\\d*)n|)" + ut + "*(?:([+-]|)" + ut + "*(\\d+)|))" + ut + "*\\)|)", "i"),
					bool: RegExp("^(?:" + ct + ")$", "i"),
					needsContext: RegExp("^" + ut + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ut + "*((?:-\\d)?\\d*)" + ut + "*\\)|)(?=[^-]|$)", "i")
				},
				Et = /^[^{]+\{\s*\[native \w/,
				Bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				bt = /^(?:input|select|textarea|button)$/i,
				kt = /^h\d$/i,
				xt = /'|\\/g,
				Tt = RegExp("\\\\([\\da-f]{1,6}" + ut + "?|(" + ut + ")|.)", "ig"),
				_t = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				it.apply(tt = at.call(z.childNodes), z.childNodes), tt[z.childNodes.length].nodeType
			} catch (Dt) {
				it = {
					apply: tt.length ? function(e, t) {
						rt.apply(e, at.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			M = n.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, T = n.support = {}, P = n.setDocument = function(e) {
				var n = e ? e.ownerDocument || e : z,
					i = n.parentWindow;
				return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, I = n.documentElement, R = !M(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
					P()
				}), T.attributes = a(function(e) {
					return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), s(ct, c, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
				}), T.input = a(function(e) {
					return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}), s("value", l, T.attributes && T.input), T.getElementsByTagName = a(function(e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), T.getElementsByClassName = a(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), T.getById = a(function(e) {
					return I.appendChild(e).id = V, !n.getElementsByName || !n.getElementsByName(V).length
				}), T.getById ? (D.find.ID = function(e, t) {
					if (typeof t.getElementById !== Z && R) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, D.filter.ID = function(e) {
					var t = e.replace(Tt, _t);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete D.find.ID, D.filter.ID = function(e) {
					var t = e.replace(Tt, _t);
					return function(e) {
						var n = typeof e.getAttributeNode !== Z && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), D.find.TAG = T.getElementsByTagName ? function(e, n) {
					return typeof n.getElementsByTagName !== Z ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, D.find.CLASS = T.getElementsByClassName && function(e, n) {
					return typeof n.getElementsByClassName !== Z && R ? n.getElementsByClassName(e) : t
				}, $ = [], O = [], (T.qsa = r(n.querySelectorAll)) && (a(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + ut + "*(?:value|" + ct + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
				}), a(function(e) {
					var t = n.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + ut + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
				})), (T.matchesSelector = r(j = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function(e) {
					T.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), $.push("!=", dt)
				}), O = O.length && RegExp(O.join("|")), $ = $.length && RegExp($.join("|")), H = r(I.contains) || I.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, T.sortDetached = a(function(e) {
					return 1 & e.compareDocumentPosition(n.createElement("div"))
				}), K = I.compareDocumentPosition ? function(e, t) {
					if (e === t) return Q = !0, 0;
					var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return r ? 1 & r || !T.sortDetached && t.compareDocumentPosition(e) === r ? e === n || H(z, e) ? -1 : t === n || H(z, t) ? 1 : q ? st.call(q, e) - st.call(q, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						c = [t];
					if (e === t) return Q = !0, 0;
					if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : q ? st.call(q, e) - st.call(q, t) : 0;
					if (o === a) return f(e, t);
					for (r = e; r = r.parentNode;) s.unshift(r);
					for (r = t; r = r.parentNode;) c.unshift(r);
					for (; s[i] === c[i];) i++;
					return i ? f(s[i], c[i]) : s[i] === z ? -1 : c[i] === z ? 1 : 0
				}, n) : L
			}, n.matches = function(e, t) {
				return n(e, null, null, t)
			}, n.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== L && P(e), t = t.replace(vt, "='$1']"), !(!T.matchesSelector || !R || $ && $.test(t) || O && O.test(t))) try {
					var r = j.call(e, t);
					if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return n(t, L, null, [e]).length > 0
			}, n.contains = function(e, t) {
				return (e.ownerDocument || e) !== L && P(e), H(e, t)
			}, n.attr = function(e, n) {
				(e.ownerDocument || e) !== L && P(e);
				var r = D.attrHandle[n.toLowerCase()],
					i = r && et.call(D.attrHandle, n.toLowerCase()) ? r(e, n, !R) : t;
				return i === t ? T.attributes || !R ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
			}, n.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, n.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (Q = !T.detectDuplicates, q = !T.sortStable && e.slice(0), e.sort(K), Q) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return e
			}, F = n.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += F(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += F(t);
				return n
			}, D = n.selectors = {
				cacheLength: 50,
				createPseudo: o,
				match: yt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(Tt, _t), e[3] = (e[4] || e[5] || "").replace(Tt, _t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, r = !e[5] && e[2];
						return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && mt.test(r) && (n = g(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(Tt, _t).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = X[e + " "];
						return t || (t = RegExp("(^|" + ut + ")" + e + "(" + ut + "|$)")) && X(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Z && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, r) {
						return function(i) {
							var o = n.attr(i, e);
							return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, c) {
							var u, l, f, h, d, p, g = o !== a ? "nextSibling" : "previousSibling",
								A = t.parentNode,
								w = s && t.nodeName.toLowerCase(),
								v = !c && !s;
							if (A) {
								if (o) {
									for (; g;) {
										for (f = t; f = f[g];)
											if (s ? f.nodeName.toLowerCase() === w : 1 === f.nodeType) return !1;
										p = g = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if (p = [a ? A.firstChild : A.lastChild], a && v) {
									for (l = A[V] || (A[V] = {}), u = l[e] || [], d = u[0] === G && u[1], h = u[0] === G && u[2], f = d && A.childNodes[d]; f = ++d && f && f[g] || (h = d = 0) || p.pop();)
										if (1 === f.nodeType && ++h && f === t) {
											l[e] = [G, d, h];
											break
										}
								} else if (v && (u = (t[V] || (t[V] = {}))[e]) && u[0] === G) h = u[1];
								else
									for (;
										(f = ++d && f && f[g] || (h = d = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== w : 1 !== f.nodeType) || !++h || (v && ((f[V] || (f[V] = {}))[e] = [G, h]), f !== t)););
								return h -= i, h === r || 0 === h % r && h / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var r, i = D.pseudos[e] || D.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
						return i[V] ? i(t) : i.length > 1 ? (r = [e, e, "", t], D.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
							for (var r, o = i(e, t), a = o.length; a--;) r = st.call(e, o[a]), e[r] = !(n[r] = o[a])
						}) : function(e) {
							return i(e, 0, r)
						}) : i
					}
				},
				pseudos: {
					not: o(function(e) {
						var t = [],
							n = [],
							r = N(e.replace(pt, "$1"));
						return r[V] ? o(function(e, t, n, i) {
							for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: o(function(e) {
						return function(t) {
							return n(e, t).length > 0
						}
					}),
					contains: o(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || F(t)).indexOf(e) > -1
						}
					}),
					lang: o(function(e) {
						return Ct.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Tt, _t).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === I
					},
					focus: function(e) {
						return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !D.pseudos.empty(e)
					},
					header: function(e) {
						return kt.test(e.nodeName)
					},
					input: function(e) {
						return bt.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: p(function() {
						return [0]
					}),
					last: p(function(e, t) {
						return [t - 1]
					}),
					eq: p(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: p(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: p(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: p(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: p(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
						return e
					})
				}
			};
			for (x in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) D.pseudos[x] = h(x);
			for (x in {
					submit: !0,
					reset: !0
				}) D.pseudos[x] = d(x);
			N = n.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = Y[e + " "];
				if (!o) {
					for (t || (t = g(e)), n = t.length; n--;) o = y(t[n]), o[V] ? r.push(o) : i.push(o);
					o = Y(e, E(i, r))
				}
				return o
			}, D.pseudos.nth = D.pseudos.eq, k.prototype = D.filters = D.pseudos, D.setFilters = new k, T.sortStable = V.split("").sort(K).join("") === V, P(), [0, 0].sort(K), T.detectDuplicates = Q, ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = n.uniqueSort, ot.text = n.getText, ot.isXMLDoc = n.isXML, ot.contains = n.contains
		}(e);
	var pt = {};
	ot.Callbacks = function(e) {
		e = "string" == typeof e ? pt[e] || r(e) : ot.extend({}, e);
		var n, i, o, a, s, c, u = [],
			l = !e.once && [],
			f = function(t) {
				for (n = e.memory && t, i = !0, c = a || 0, a = 0, s = u.length, o = !0; u && s > c; c++)
					if (u[c].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				o = !1, u && (l ? l.length && f(l.shift()) : n ? u = [] : h.disable())
			},
			h = {
				add: function() {
					if (u) {
						var t = u.length;
						! function r(t) {
							ot.each(t, function(t, n) {
								var i = ot.type(n);
								"function" === i ? e.unique && h.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
							})
						}(arguments), o ? s = u.length : n && (a = t, f(n))
					}
					return this
				},
				remove: function() {
					return u && ot.each(arguments, function(e, t) {
						for (var n;
							(n = ot.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, c >= n && c--)
					}), this
				},
				has: function(e) {
					return e ? ot.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], s = 0, this
				},
				disable: function() {
					return u = l = n = t, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = t, n || h.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (o ? l.push(t) : f(t)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}, ot.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ot.Callbacks("once memory"), "resolved"],
					["reject", "fail", ot.Callbacks("once memory"), "rejected"],
					["notify", "progress", ot.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ot.Deferred(function(n) {
							ot.each(t, function(t, o) {
								var a = o[0],
									s = ot.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && ot.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ot.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, ot.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = et.call(arguments),
				a = o.length,
				s = 1 !== a || e && ot.isFunction(e.promise) ? a : 0,
				c = 1 === s ? e : ot.Deferred(),
				u = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? et.call(arguments) : i, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
					}
				};
			if (a > 1)
				for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(c.reject).progress(u(i, n, t)) : --s;
			return s || c.resolveWith(r, o), c.promise()
		}
	}), ot.support = function(t) {
		var n = G.createElement("input"),
			r = G.createDocumentFragment(),
			i = G.createElement("div"),
			o = G.createElement("select"),
			a = o.appendChild(G.createElement("option"));
		return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled, n = G.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, ot(function() {
			var n, r, o = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				a = G.getElementsByTagName("body")[0];
			a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", ot.swap(a, null != a.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === i.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
				width: "4px"
			}).width, r = i.appendChild(G.createElement("div")), r.style.cssText = i.style.cssText = o, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
		}), t) : t
	}({});
	var gt, At, wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		vt = /([A-Z])/g;
	i.uid = 1, i.accepts = function(e) {
		return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
	}, i.prototype = {
		key: function(e) {
			if (!i.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = i.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, ot.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (ot.isEmptyObject(o)) ot.extend(this.cache[i], t);
			else
				for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, n) {
			var r = this.cache[this.key(e)];
			return n === t ? r : r[n]
		},
		access: function(e, n, r) {
			return n === t || n && "string" == typeof n && r === t ? this.get(e, n) : (this.set(e, n, r), r !== t ? r : n)
		},
		remove: function(e, n) {
			var r, i, o, a = this.key(e),
				s = this.cache[a];
			if (n === t) this.cache[a] = {};
			else {
				ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) : (o = ot.camelCase(n), n in s ? i = [n, o] : (i = o, i = i in s ? [i] : i.match(st) || [])), r = i.length;
				for (; r--;) delete s[i[r]]
			}
		},
		hasData: function(e) {
			return !ot.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	}, gt = new i, At = new i, ot.extend({
		acceptData: i.accepts,
		hasData: function(e) {
			return gt.hasData(e) || At.hasData(e)
		},
		data: function(e, t, n) {
			return gt.access(e, t, n)
		},
		removeData: function(e, t) {
			gt.remove(e, t)
		},
		_data: function(e, t, n) {
			return At.access(e, t, n)
		},
		_removeData: function(e, t) {
			At.remove(e, t)
		}
	}), ot.fn.extend({
		data: function(e, n) {
			var r, i, a = this[0],
				s = 0,
				c = null;
			if (e === t) {
				if (this.length && (c = gt.get(a), 1 === a.nodeType && !At.get(a, "hasDataAttrs"))) {
					for (r = a.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), o(a, i, c[i]));
					At.set(a, "hasDataAttrs", !0)
				}
				return c
			}
			return "object" == typeof e ? this.each(function() {
				gt.set(this, e)
			}) : ot.access(this, function(n) {
				var r, i = ot.camelCase(e);
				if (a && n === t) {
					if (r = gt.get(a, e), r !== t) return r;
					if (r = gt.get(a, i), r !== t) return r;
					if (r = o(a, i, t), r !== t) return r
				} else this.each(function() {
					var r = gt.get(this, i);
					gt.set(this, i, n), -1 !== e.indexOf("-") && r !== t && gt.set(this, e, n)
				})
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				gt.remove(this, e)
			})
		}
	}), ot.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = At.get(e, n), r && (!i || ot.isArray(r) ? i = At.access(e, n, ot.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ot.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = ot._queueHooks(e, t),
				a = function() {
					ot.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return At.get(e, n) || At.access(e, n, {
				empty: ot.Callbacks("once memory").add(function() {
					At.remove(e, [t + "queue", n])
				})
			})
		}
	}), ot.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ot.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = ot.queue(this, e, n);
				ot._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ot.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ot.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = ot.Deferred(),
				a = this,
				s = this.length,
				c = function() {
					--i || o.resolveWith(a, [a])
				};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = At.get(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(c));
			return c(), o.promise(n)
		}
	});
	var mt, Ct, yt = /[\t\r\n\f]/g,
		Et = /\r/g,
		Bt = /^(?:input|select|textarea|button)$/i;
	ot.fn.extend({
		attr: function(e, t) {
			return ot.access(this, ot.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ot.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ot.access(this, ot.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[ot.propFix[e] || e]
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				c = "string" == typeof e && e;
			if (ot.isFunction(e)) return this.each(function(t) {
				ot(this).addClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(st) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(yt, " ") : " ")) {
						for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = ot.trim(r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				c = 0 === arguments.length || "string" == typeof e && e;
			if (ot.isFunction(e)) return this.each(function(t) {
				ot(this).removeClass(e.call(this, t, this.className))
			});
			if (c)
				for (t = (e || "").match(st) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(yt, " ") : "")) {
						for (o = 0; i = t[o++];)
							for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						n.className = e ? ot.trim(r) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "boolean" == typeof t;
			return this.each(ot.isFunction(e) ? function(n) {
				ot(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var i, o = 0, a = ot(this), s = t, c = e.match(st) || []; i = c[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
				else(n === V || "boolean" === n) && (this.className && At.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : At.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(yt, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0];
			return arguments.length ? (i = ot.isFunction(e), this.each(function(r) {
				var o;
				1 === this.nodeType && (o = i ? e.call(this, r, ot(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(e) {
					return null == e ? "" : e + ""
				})), n = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (n = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(Et, "") : null == r ? "" : r)) : void 0
		}
	}), ot.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, c = 0 > i ? s : o ? i : 0; s > c; c++)
						if (n = r[c], !(!n.selected && c !== i || (ot.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
							if (t = ot(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = ot.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ot.inArray(ot(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var i, o, a = e.nodeType;
			return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === V ? ot.prop(e, n, r) : (1 === a && ot.isXMLDoc(e) || (n = n.toLowerCase(), i = ot.attrHooks[n] || (ot.expr.match.bool.test(n) ? Ct : mt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ot.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ot.removeAttr(e, n), t)) : void 0
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(st);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ot.support.radioValue && "radio" === t && ot.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ot.isXMLDoc(e), a && (n = ot.propFix[n] || n, o = ot.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || Bt.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Ct = {
		set: function(e, t, n) {
			return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = ot.expr.attrHandle[n] || ot.find.attr;
		ot.expr.attrHandle[n] = function(e, n, i) {
			var o = ot.expr.attrHandle[n],
				a = i ? t : (ot.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return ot.expr.attrHandle[n] = o, a
		}
	}), ot.support.optSelected || (ot.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ot.propFix[this.toLowerCase()] = this
	}), ot.each(["radio", "checkbox"], function() {
		ot.valHooks[this] = {
			set: function(e, n) {
				return ot.isArray(n) ? e.checked = ot.inArray(ot(e).val(), n) >= 0 : t
			}
		}, ot.support.checkOn || (ot.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var bt = /^key/,
		kt = /^(?:mouse|contextmenu)|click/,
		xt = /^(?:focusinfocus|focusoutblur)$/,
		Tt = /^([^.]*)(?:\.(.+)|)$/;
	ot.event = {
		global: {},
		add: function(e, n, r, i, o) {
			var a, s, c, u, l, f, h, d, p, g, A, w = At.get(e);
			if (w) {
				for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = ot.guid++), (u = w.events) || (u = w.events = {}), (s = w.handle) || (s = w.handle = function(e) {
						return typeof ot === V || e && ot.event.triggered === e.type ? t : ot.event.dispatch.apply(s.elem, arguments)
					}, s.elem = e), n = (n || "").match(st) || [""], l = n.length; l--;) c = Tt.exec(n[l]) || [], p = A = c[1], g = (c[2] || "").split(".").sort(), p && (h = ot.event.special[p] || {}, p = (o ? h.delegateType : h.bindType) || p, h = ot.event.special[p] || {}, f = ot.extend({
					type: p,
					origType: A,
					data: i,
					handler: r,
					guid: r.guid,
					selector: o,
					needsContext: o && ot.expr.match.needsContext.test(o),
					namespace: g.join(".")
				}, a), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, h.setup && h.setup.call(e, i, g, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)), h.add && (h.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ot.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, c, u, l, f, h, d, p, g, A = At.hasData(e) && At.get(e);
			if (A && (c = A.events)) {
				for (t = (t || "").match(st) || [""], u = t.length; u--;)
					if (s = Tt.exec(t[u]) || [], d = g = s[1], p = (s[2] || "").split(".").sort(), d) {
						for (f = ot.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, h = c[d] || [], s = s[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) l = h[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount--, f.remove && f.remove.call(e, l));
						a && !h.length && (f.teardown && f.teardown.call(e, p, A.handle) !== !1 || ot.removeEvent(e, d, A.handle), delete c[d])
					} else
						for (d in c) ot.event.remove(e, d + t[u], n, r, !0);
				ot.isEmptyObject(c) && (delete A.handle, At.remove(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var a, s, c, u, l, f, h, d = [i || G],
				p = rt.call(n, "type") ? n.type : n,
				g = rt.call(n, "namespace") ? n.namespace.split(".") : [];
			if (s = c = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (g = p.split("."), p = g.shift(), g.sort()), l = 0 > p.indexOf(":") && "on" + p, n = n[ot.expando] ? n : new ot.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ot.makeArray(r, [n]), h = ot.event.special[p] || {}, o || !h.trigger || h.trigger.apply(i, r) !== !1)) {
				if (!o && !h.noBubble && !ot.isWindow(i)) {
					for (u = h.delegateType || p, xt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
					c === (i.ownerDocument || G) && d.push(c.defaultView || c.parentWindow || e)
				}
				for (a = 0;
					(s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? u : h.bindType || p, f = (At.get(s, "events") || {})[n.type] && At.get(s, "handle"), f && f.apply(s, r), f = l && s[l], f && ot.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
				return n.type = p, o || n.isDefaultPrevented() || h._default && h._default.apply(d.pop(), r) !== !1 || !ot.acceptData(i) || l && ot.isFunction(i[p]) && !ot.isWindow(i) && (c = i[l], c && (i[l] = null), ot.event.triggered = p, i[p](), ot.event.triggered = t, c && (i[l] = c)), n.result
			}
		},
		dispatch: function(e) {
			e = ot.event.fix(e);
			var n, r, i, o, a, s = [],
				c = et.call(arguments),
				u = (At.get(this, "events") || {})[e.type] || [],
				l = ot.event.special[e.type] || {};
			if (c[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (s = ot.event.handlers.call(this, e, u), n = 0;
					(o = s[n++]) && !e.isPropagationStopped();)
					for (e.currentTarget = o.elem, r = 0;
						(a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((ot.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, c), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				c = n.delegateCount,
				u = e.target;
			if (c && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== e.type) {
						for (i = [], r = 0; c > r; r++) a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? ot(o, this).index(u) >= 0 : ot.find(o, this, null, [u]).length), i[o] && i.push(a);
						i.length && s.push({
							elem: u,
							handlers: i
						})
					}
			return n.length > c && s.push({
				elem: this,
				handlers: n.slice(c)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, a = n.button;
				return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[ot.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = kt.test(i) ? this.mouseHooks : bt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== c() && this.focus ? (this.focus(), !1) : t
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === c() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : t
				},
				_default: function(e) {
					return ot.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = ot.extend(new ot.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ot.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, ot.Event = function(e, n) {
		return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? a : s) : this.type = e, n && ot.extend(this, n), this.timeStamp = e && e.timeStamp || ot.now(), this[ot.expando] = !0, t) : new ot.Event(e, n)
	}, ot.Event.prototype = {
		isDefaultPrevented: s,
		isPropagationStopped: s,
		isImmediatePropagationStopped: s,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = a, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = a, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = a, this.stopPropagation()
		}
	}, ot.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		ot.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), ot.support.focusinBubbles || ot.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				ot.event.simulate(t, e.target, ot.event.fix(e), !0)
			};
		ot.event.special[t] = {
			setup: function() {
				0 === n++ && G.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && G.removeEventListener(e, r, !0)
			}
		}
	}), ot.fn.extend({
		on: function(e, n, r, i, o) {
			var a, c;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (c in e) this.on(c, n, r, e[c], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = s;
			else if (!i) return this;
			return 1 === o && (a = i, i = function(e) {
				return ot().off(e), a.apply(this, arguments)
			}, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
				ot.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ot(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = s), this.each(function() {
				ot.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ot.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? ot.event.trigger(e, n, r, !0) : t
		}
	});
	var _t = /^.[^:#\[\.,]*$/,
		Dt = /^(?:parents|prev(?:Until|All))/,
		Ft = ot.expr.match.needsContext,
		Mt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ot.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
				for (t = 0; i > t; t++)
					if (ot.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) ot.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t = ot(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++)
					if (ot.contains(this, t[e])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(l(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(l(this, e || [], !1))
		},
		is: function(e) {
			return !!l(this, "string" == typeof e && Ft.test(e) ? ot(e) : e || [], !1).length
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = Ft.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? ot.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? tt.call(ot(e), this[0]) : tt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ot(e, t) : ot.makeArray(e && e.nodeType ? [e] : e),
				r = ot.merge(this.get(), n);
			return this.pushStack(ot.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ot.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ot.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ot.dir(e, "parentNode", n)
		},
		next: function(e) {
			return u(e, "nextSibling")
		},
		prev: function(e) {
			return u(e, "previousSibling")
		},
		nextAll: function(e) {
			return ot.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ot.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ot.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ot.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ot.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ot.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || ot.merge([], e.childNodes)
		}
	}, function(e, t) {
		ot.fn[e] = function(n, r) {
			var i = ot.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ot.filter(r, i)), this.length > 1 && (Mt[e] || ot.unique(i), Dt.test(e) && i.reverse()), this.pushStack(i)
		}
	}), ot.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			for (var i = [], o = r !== t;
				(e = e[n]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (o && ot(e).is(r)) break;
					i.push(e)
				}
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		St = /<([\w:]+)/,
		qt = /<|&#?\w+;/,
		Pt = /<(?:script|style|link)/i,
		Lt = /^(?:checkbox|radio)$/i,
		It = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Rt = /^$|\/(?:java|ecma)script/i,
		Ot = /^true\/(.*)/,
		$t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		jt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td, ot.fn.extend({
		text: function(e) {
			return ot.access(this, function(e) {
				return e === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = f(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = f(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? ot.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ot.cleanData(A(n)), n.parentNode && (t && ot.contains(n.ownerDocument, n) && p(A(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(A(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return ot.clone(this, e, t)
			})
		},
		html: function(e) {
			return ot.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t && 1 === n.nodeType) return n.innerHTML;
				if ("string" == typeof e && !Pt.test(e) && !jt[(St.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Nt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ot.cleanData(A(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = ot.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), ot(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = Z.apply([], e);
			var r, i, o, a, s, c, u = 0,
				l = this.length,
				f = this,
				p = l - 1,
				g = e[0],
				w = ot.isFunction(g);
			if (w || !(1 >= l || "string" != typeof g || ot.support.checkClone) && It.test(g)) return this.each(function(r) {
				var i = f.eq(r);
				w && (e[0] = g.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (l && (r = ot.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
				for (o = ot.map(A(r, "script"), h), a = o.length; l > u; u++) s = r, u !== p && (s = ot.clone(s, !0, !0), a && ot.merge(o, A(s, "script"))), t.call(this[u], s, u);
				if (a)
					for (c = o[o.length - 1].ownerDocument, ot.map(o, d), u = 0; a > u; u++) s = o[u], Rt.test(s.type || "") && !At.access(s, "globalEval") && ot.contains(c, s) && (s.src ? ot._evalUrl(s.src) : ot.globalEval(s.textContent.replace($t, "")))
			}
			return this
		}
	}), ot.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ot.fn[e] = function(e) {
			for (var n, r = [], i = ot(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), ot(i[a])[t](n), J.apply(r, n.get());
			return this.pushStack(r)
		}
	}), ot.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				c = ot.contains(e.ownerDocument, e);
			if (!(ot.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e)))
				for (a = A(s), o = A(e), r = 0, i = o.length; i > r; r++) w(o[r], a[r]);
			if (t)
				if (n)
					for (o = o || A(e), a = a || A(s), r = 0, i = o.length; i > r; r++) g(o[r], a[r]);
				else g(e, s);
			return a = A(s, "script"), a.length > 0 && p(a, !c && A(e, "script")), s
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, c, u, l = 0, f = e.length, h = t.createDocumentFragment(), d = []; f > l; l++)
				if (i = e[l], i || 0 === i)
					if ("object" === ot.type(i)) ot.merge(d, i.nodeType ? [i] : i);
					else if (qt.test(i)) {
				for (o = o || h.appendChild(t.createElement("div")), a = (St.exec(i) || ["", ""])[1].toLowerCase(), s = jt[a] || jt._default, o.innerHTML = s[1] + i.replace(Nt, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.firstChild;
				ot.merge(d, o.childNodes), o = h.firstChild, o.textContent = ""
			} else d.push(t.createTextNode(i));
			for (h.textContent = "", l = 0; i = d[l++];)
				if ((!r || -1 === ot.inArray(i, r)) && (c = ot.contains(i.ownerDocument, i), o = A(h.appendChild(i), "script"), c && p(o), n))
					for (u = 0; i = o[u++];) Rt.test(i.type || "") && n.push(i);
			return h
		},
		cleanData: function(e) {
			for (var n, r, o, a, s, c, u = ot.event.special, l = 0;
				(r = e[l]) !== t; l++) {
				if (i.accepts(r) && (s = r[At.expando], s && (n = At.cache[s]))) {
					if (o = Object.keys(n.events || {}), o.length)
						for (c = 0;
							(a = o[c]) !== t; c++) u[a] ? ot.event.remove(r, a) : ot.removeEvent(r, a, n.handle);
					At.cache[s] && delete At.cache[s]
				}
				delete gt.cache[r[gt.expando]]
			}
		},
		_evalUrl: function(e) {
			return ot.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), ot.fn.extend({
		wrapAll: function(e) {
			var t;
			return ot.isFunction(e) ? this.each(function(t) {
				ot(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return this.each(ot.isFunction(e) ? function(t) {
				ot(this).wrapInner(e.call(this, t))
			} : function() {
				var t = ot(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ot.isFunction(e);
			return this.each(function(n) {
				ot(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Ht, Vt, zt = /^(none|table(?!-c[ea]).+)/,
		Gt = /^margin/,
		Wt = RegExp("^(" + at + ")(.*)$", "i"),
		Xt = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
		Ut = RegExp("^([+-])=(" + at + ")", "i"),
		Yt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		Jt = ["Webkit", "O", "Moz", "ms"];
	ot.fn.extend({
		css: function(e, n) {
			return ot.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (ot.isArray(n)) {
					for (i = C(e), o = n.length; o > s; s++) a[n[s]] = ot.css(e, n[s], !1, i);
					return a
				}
				return r !== t ? ot.style(e, n, r) : ot.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return y(this, !0)
		},
		hide: function() {
			return y(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : m(this)) ? ot(this).show(): ot(this).hide()
			})
		}
	}), ot.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Ht(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, c = ot.camelCase(n),
					u = e.style;
				return n = ot.cssProps[c] || (ot.cssProps[c] = v(u, c)), s = ot.cssHooks[n] || ot.cssHooks[c], r === t ? s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n] : (a = typeof r, "string" === a && (o = Ut.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ot.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || ot.cssNumber[c] || (r += "px"), ot.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t || (u[n] = r)), t)
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, c = ot.camelCase(n);
			return n = ot.cssProps[c] || (ot.cssProps[c] = v(e.style, c)), s = ot.cssHooks[n] || ot.cssHooks[c], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = Ht(e, n, i)), "normal" === o && n in Kt && (o = Kt[n]), "" === r || r ? (a = parseFloat(o), r === !0 || ot.isNumeric(a) ? a || 0 : o) : o
		}
	}), Ht = function(e, n, r) {
		var i, o, a, s = r || C(e),
			c = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== c || ot.contains(e.ownerDocument, e) || (c = ot.style(e, n)), Xt.test(c) && Gt.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = c, c = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), c
	}, ot.each(["height", "width"], function(e, n) {
		ot.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && zt.test(ot.css(e, "display")) ? ot.swap(e, Qt, function() {
					return b(e, n, i)
				}) : b(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && C(e);
				return E(e, t, r ? B(e, n, r, ot.support.boxSizing && "border-box" === ot.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ot(function() {
		ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? ot.swap(e, {
					display: "inline-block"
				}, Ht, [e, "marginRight"]) : t
			}
		}), !ot.support.pixelPosition && ot.fn.position && ot.each(["top", "left"], function(e, n) {
			ot.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Ht(e, n), Xt.test(r) ? ot(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), ot.expr && ot.expr.filters && (ot.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight
	}, ot.expr.filters.visible = function(e) {
		return !ot.expr.filters.hidden(e)
	}), ot.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ot.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Gt.test(e) || (ot.cssHooks[e + t].set = E)
	});
	var en = /%20/g,
		tn = /\[\]$/,
		nn = /\r?\n/g,
		rn = /^(?:submit|button|image|reset|file)$/i,
		on = /^(?:input|select|textarea|keygen)/i;
	ot.fn.extend({
		serialize: function() {
			return ot.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ot.prop(this, "elements");
				return e ? ot.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ot(this).is(":disabled") && on.test(this.nodeName) && !rn.test(e) && (this.checked || !Lt.test(e))
			}).map(function(e, t) {
				var n = ot(this).val();
				return null == n ? null : ot.isArray(n) ? ot.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(nn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(nn, "\r\n")
				}
			}).get()
		}
	}), ot.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (r in e) T(r, e[r], n, o);
		return i.join("&").replace(en, "+")
	}, ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ot.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), ot.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var an, sn, cn = ot.now(),
		un = /\?/,
		ln = /#.*$/,
		fn = /([?&])_=[^&]*/,
		hn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		pn = /^(?:GET|HEAD)$/,
		gn = /^\/\//,
		An = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		wn = ot.fn.load,
		vn = {},
		mn = {},
		Cn = "*/".concat("*");
	try {
		sn = z.href
	} catch (yn) {
		sn = G.createElement("a"), sn.href = "", sn = sn.href
	}
	an = An.exec(sn.toLowerCase()) || [], ot.fn.load = function(e, n, r) {
		if ("string" != typeof e && wn) return wn.apply(this, arguments);
		var i, o, a, s = this,
			c = e.indexOf(" ");
		return c >= 0 && (i = e.slice(c), e = e.slice(0, c)), ot.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && ot.ajax({
			url: e,
			type: o,
			dataType: "html",
			data: n
		}).done(function(e) {
			a = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, a || [e.responseText, t, e])
		}), this
	}, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ot.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ot.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: sn,
			type: "GET",
			isLocal: dn.test(an[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Cn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ot.parseJSON,
				"text xml": ot.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? F(F(e, ot.ajaxSettings), t) : F(ot.ajaxSettings, e)
		},
		ajaxPrefilter: _(vn),
		ajaxTransport: _(mn),
		ajax: function(e, n) {
			function r(e, n, r, s) {
				var u, f, v, m, y, B = n;
				2 !== C && (C = 2, c && clearTimeout(c), i = t, a = s || "", E.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, r && (m = M(h, E, r)), m = N(h, m, E, u), u ? (h.ifModified && (y = E.getResponseHeader("Last-Modified"), y && (ot.lastModified[o] = y), y = E.getResponseHeader("etag"), y && (ot.etag[o] = y)), 204 === e || "HEAD" === h.type ? B = "nocontent" : 304 === e ? B = "notmodified" : (B = m.state, f = m.data, v = m.error, u = !v)) : (v = B, (e || !B) && (B = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (n || B) + "", u ? g.resolveWith(d, [f, B, E]) : g.rejectWith(d, [E, B, v]), E.statusCode(w), w = t, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? f : v]), A.fireWith(d, [E, B]), l && (p.trigger("ajaxComplete", [E, h]), --ot.active || ot.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t), n = n || {};
			var i, o, a, s, c, u, l, f, h = ot.ajaxSetup({}, n),
				d = h.context || h,
				p = h.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
				g = ot.Deferred(),
				A = ot.Callbacks("once memory"),
				w = h.statusCode || {},
				v = {},
				m = {},
				C = 0,
				y = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === C) {
							if (!s)
								for (s = {}; t = hn.exec(a);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === C ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return C || (e = m[n] = m[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return C || (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > C)
								for (t in e) w[t] = [w[t], e[t]];
							else E.always(e[E.status]);
						return this
					},
					abort: function(e) {
						var t = e || y;
						return i && i.abort(t), r(0, t), this
					}
				};
			if (g.promise(E).complete = A.add, E.success = E.done, E.error = E.fail, h.url = ((e || h.url || sn) + "").replace(ln, "").replace(gn, an[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ot.trim(h.dataType || "*").toLowerCase().match(st) || [""], null == h.crossDomain && (u = An.exec(h.url.toLowerCase()), h.crossDomain = !(!u || u[1] === an[1] && u[2] === an[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ot.param(h.data, h.traditional)), D(vn, h, n, E), 2 === C) return E;
			l = h.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !pn.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (un.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = fn.test(o) ? o.replace(fn, "$1_=" + cn++) : o + (un.test(o) ? "&" : "?") + "_=" + cn++)), h.ifModified && (ot.lastModified[o] && E.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && E.setRequestHeader("If-None-Match", ot.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : h.accepts["*"]);
			for (f in h.headers) E.setRequestHeader(f, h.headers[f]);
			if (h.beforeSend && (h.beforeSend.call(d, E, h) === !1 || 2 === C)) return E.abort();
			y = "abort";
			for (f in {
					success: 1,
					error: 1,
					complete: 1
				}) E[f](h[f]);
			if (i = D(mn, h, n, E)) {
				E.readyState = 1, l && p.trigger("ajaxSend", [E, h]), h.async && h.timeout > 0 && (c = setTimeout(function() {
					E.abort("timeout")
				}, h.timeout));
				try {
					C = 1, i.send(v, r)
				} catch (B) {
					if (!(2 > C)) throw B;
					r(-1, B)
				}
			} else r(-1, "No Transport");
			return E
		},
		getJSON: function(e, t, n) {
			return ot.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return ot.get(e, t, n, "script")
		}
	}), ot.each(["get", "post"], function(e, n) {
		ot[n] = function(e, r, i, o) {
			return ot.isFunction(r) && (o = o || i, i = r, r = t), ot.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), ot.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ot.globalEval(e), e
			}
		}
	}), ot.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), ot.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = ot("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), G.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var En = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	ot.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = En.pop() || ot.expando + "_" + cn++;
			return this[e] = !0, e
		}
	}), ot.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, c = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return c || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, c ? n[c] = n[c].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (un.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || ot.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, En.push(o)), s && ot.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	}), ot.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var bn = ot.ajaxSettings.xhr(),
		kn = {
			0: 200,
			1223: 204
		},
		xn = 0,
		Tn = {};
	e.ActiveXObject && ot(e).on("unload", function() {
		for (var e in Tn) Tn[e]();
		Tn = t
	}), ot.support.cors = !!bn && "withCredentials" in bn, ot.support.ajax = bn = !!bn, ot.ajaxTransport(function(e) {
		var n;
		return ot.support.cors || bn && !e.crossDomain ? {
			send: function(r, i) {
				var o, a, s = e.xhr();
				if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (o in e.xhrFields) s[o] = e.xhrFields[o];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for (o in r) s.setRequestHeader(o, r[o]);
				n = function(e) {
					return function() {
						n && (delete Tn[a], n = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? i(s.status || 404, s.statusText) : i(kn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
							text: s.responseText
						} : t, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), s.onerror = n("error"), n = Tn[a = xn++] = n("abort"), s.send(e.hasContent && e.data || null)
			},
			abort: function() {
				n && n()
			}
		} : t
	});
	var _n, Dn, Fn = /^(?:toggle|show|hide)$/,
		Mn = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
		Nn = /queueHooks$/,
		Sn = [I],
		qn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Mn.exec(t),
					o = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
					a = (ot.cssNumber[e] || "px" !== o && +r) && Mn.exec(ot.css(n.elem, e)),
					s = 1,
					c = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, ot.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --c)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	ot.Animation = ot.extend(P, {
		tweener: function(e, t) {
			ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], qn[n] = qn[n] || [], qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Sn.unshift(e) : Sn.push(e)
		}
	}), ot.Tween = R, R.prototype = {
		constructor: R,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ot.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = R.propHooks[this.prop];
			return e && e.get ? e.get(this) : R.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = R.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
		}
	}, R.prototype.init.prototype = R.prototype, R.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ot.cssProps[e.prop]] || ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ot.each(["toggle", "show", "hide"], function(e, t) {
		var n = ot.fn[t];
		ot.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
		}
	}), ot.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(m).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = ot.isEmptyObject(e),
				o = ot.speed(t, n, r),
				a = function() {
					var t = P(this, ot.extend({}, e), o);
					(i || At.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = ot.timers,
					a = At.get(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && Nn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && ot.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = At.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = ot.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), ot.each({
		slideDown: O("show"),
		slideUp: O("hide"),
		slideToggle: O("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		ot.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), ot.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ot.extend({}, e) : {
			complete: n || !n && t || ot.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ot.isFunction(t) && t
		};
		return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			ot.isFunction(r.old) && r.old.call(this), r.queue && ot.dequeue(this, r.queue)
		}, r
	}, ot.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ot.timers = [], ot.fx = R.prototype.init, ot.fx.tick = function() {
		var e, n = ot.timers,
			r = 0;
		for (_n = ot.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || ot.fx.stop(), _n = t
	}, ot.fx.timer = function(e) {
		e() && ot.timers.push(e) && ot.fx.start()
	}, ot.fx.interval = 13, ot.fx.start = function() {
		Dn || (Dn = setInterval(ot.fx.tick, ot.fx.interval))
	}, ot.fx.stop = function() {
		clearInterval(Dn), Dn = null
	}, ot.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated = function(e) {
		return ot.grep(ot.timers, function(t) {
			return e === t.elem
		}).length
	}), ot.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			ot.offset.setOffset(this, e, t)
		});
		var n, r, i = this[0],
			o = {
				top: 0,
				left: 0
			},
			a = i && i.ownerDocument;
		return a ? (n = a.documentElement, ot.contains(n, i) ? (typeof i.getBoundingClientRect !== V && (o = i.getBoundingClientRect()), r = $(a), {
			top: o.top + r.pageYOffset - n.clientTop,
			left: o.left + r.pageXOffset - n.clientLeft
		}) : o) : void 0
	}, ot.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, c, u, l = ot.css(e, "position"),
				f = ot(e),
				h = {};
			"static" === l && (e.style.position = "relative"), s = f.offset(), o = ot.css(e, "top"), c = ot.css(e, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(c) || 0), ot.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + i), "using" in t ? t.using.call(e, h) : f.css(h)
		}
	}, ot.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (r = e.offset()), r.top += ot.css(e[0], "borderTopWidth", !0), r.left += ot.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - ot.css(n, "marginTop", !0),
					left: t.left - r.left - ot.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || W; e && !ot.nodeName(e, "html") && "static" === ot.css(e, "position");) e = e.offsetParent;
				return e || W
			})
		}
	}), ot.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(n, r) {
		var i = "pageYOffset" === r;
		ot.fn[n] = function(o) {
			return ot.access(this, function(n, o, a) {
				var s = $(n);
				return a === t ? s ? s[r] : n[o] : (s ? s.scrollTo(i ? e.pageXOffset : a, i ? a : e.pageYOffset) : n[o] = a, t)
			}, n, o, arguments.length, null)
		}
	}), ot.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		ot.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			ot.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return ot.access(this, function(n, r, i) {
					var o;
					return ot.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ot.css(n, r, s) : ot.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), ot.fn.size = function() {
		return this.length
	}, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ot : "function" == typeof define && define.amd && define("jquery", [], function() {
		return ot
	}), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = ot)
}(window);
var qrencode = function() {
	function e(t, n) {
		if ("undefined" == typeof t.length) throw new Error(t.length + "/" + n);
		var r = function() {
				for (var e = 0; e < t.length && 0 == t[e];) e += 1;
				for (var r = new Array(t.length - e + n), i = 0; i < t.length - e; i += 1) r[i] = t[i + e];
				return r
			}(),
			i = {};
		return i.get = function(e) {
			return r[e]
		}, i.getLength = function() {
			return r.length
		}, i.multiply = function(t) {
			for (var n = new Array(i.getLength() + t.getLength() - 1), r = 0; r < i.getLength(); r += 1)
				for (var o = 0; o < t.getLength(); o += 1) n[r + o] ^= a.gexp(a.glog(i.get(r)) + a.glog(t.get(o)));
			return e(n, 0)
		}, i.mod = function(t) {
			if (i.getLength() - t.getLength() < 0) return i;
			for (var n = a.glog(i.get(0)) - a.glog(t.get(0)), r = new Array(i.getLength()), o = 0; o < i.getLength(); o += 1) r[o] = i.get(o);
			for (var o = 0; o < t.getLength(); o += 1) r[o] ^= a.gexp(a.glog(t.get(o)) + n);
			return e(r, 0).mod(t)
		}, i
	}
	var t = function(t, n, i, a, l) {
		var f = 236,
			h = 17,
			d = t,
			g = r[n],
			A = null,
			w = 0,
			v = null,
			m = new Array,
			C = {},
			y = function(e, t) {
				w = 4 * d + 17, A = function(e) {
					for (var t = new Array(e), n = 0; e > n; n += 1) {
						t[n] = new Array(e);
						for (var r = 0; e > r; r += 1) t[n][r] = null
					}
					return t
				}(w), E(0, 0), E(w - 7, 0), E(0, w - 7), k(), b(), T(e, t), d >= 7 && x(e), null == v && (v = F(d, g, m, i, a, l)), _(v, t)
			},
			E = function(e, t) {
				for (var n = -1; 7 >= n; n += 1)
					if (!(-1 >= e + n || e + n >= w))
						for (var r = -1; 7 >= r; r += 1) - 1 >= t + r || t + r >= w || (A[e + n][t + r] = n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? !0 : !1)
			},
			B = function() {
				for (var e = 0, t = 0, n = 0; 8 > n; n += 1) {
					y(!0, n);
					var r = o.getLostPoint(C);
					(0 == n || e > r) && (e = r, t = n)
				}
				return t
			},
			b = function() {
				for (var e = 8; w - 8 > e; e += 1) null == A[e][6] && (A[e][6] = e % 2 == 0);
				for (var t = 8; w - 8 > t; t += 1) null == A[6][t] && (A[6][t] = t % 2 == 0)
			},
			k = function() {
				for (var e = o.getPatternPosition(d), t = 0; t < e.length; t += 1)
					for (var n = 0; n < e.length; n += 1) {
						var r = e[t],
							i = e[n];
						if (null == A[r][i])
							for (var a = -2; 2 >= a; a += 1)
								for (var s = -2; 2 >= s; s += 1) A[r + a][i + s] = -2 == a || 2 == a || -2 == s || 2 == s || 0 == a && 0 == s ? !0 : !1
					}
			},
			x = function(e) {
				for (var t = o.getBCHTypeNumber(d), n = 0; 18 > n; n += 1) {
					var r = !e && 1 == (t >> n & 1);
					A[Math.floor(n / 3)][n % 3 + w - 8 - 3] = r
				}
				for (var n = 0; 18 > n; n += 1) {
					var r = !e && 1 == (t >> n & 1);
					A[n % 3 + w - 8 - 3][Math.floor(n / 3)] = r
				}
			},
			T = function(e, t) {
				for (var n = g << 3 | t, r = o.getBCHTypeInfo(n), i = 0; 15 > i; i += 1) {
					var a = !e && 1 == (r >> i & 1);
					6 > i ? A[i][8] = a : 8 > i ? A[i + 1][8] = a : A[w - 15 + i][8] = a
				}
				for (var i = 0; 15 > i; i += 1) {
					var a = !e && 1 == (r >> i & 1);
					8 > i ? A[8][w - i - 1] = a : 9 > i ? A[8][15 - i - 1 + 1] = a : A[8][15 - i - 1] = a
				}
				A[w - 8][8] = !e
			},
			_ = function(e, t) {
				for (var n = -1, r = w - 1, i = 7, a = 0, s = o.getMaskFunction(t), c = w - 1; c > 0; c -= 2)
					for (6 == c && (c -= 1);;) {
						for (var u = 0; 2 > u; u += 1)
							if (null == A[r][c - u]) {
								var l = !1;
								a < e.length && (l = 1 == (e[a] >>> i & 1));
								var f = s(r, c - u);
								f && (l = !l), A[r][c - u] = l, i -= 1, -1 == i && (a += 1, i = 7)
							}
						if (r += n, 0 > r || r >= w) {
							r -= n, n = -n;
							break
						}
					}
			},
			D = function(t, n) {
				for (var r = 0, i = 0, a = 0, s = new Array(n.length), c = new Array(n.length), u = 0; u < n.length; u += 1) {
					var l = n[u].dataCount,
						f = n[u].totalCount - l;
					i = Math.max(i, l), a = Math.max(a, f), s[u] = new Array(l);
					for (var h = 0; h < s[u].length; h += 1) s[u][h] = 255 & t.getBuffer()[h + r];
					r += l;
					var d = o.getErrorCorrectPolynomial(f),
						p = e(s[u], d.getLength() - 1),
						g = p.mod(d);
					c[u] = new Array(d.getLength() - 1);
					for (var h = 0; h < c[u].length; h += 1) {
						var A = h + g.getLength() - c[u].length;
						c[u][h] = A >= 0 ? g.get(A) : 0
					}
				}
				for (var w = 0, h = 0; h < n.length; h += 1) w += n[h].totalCount;
				for (var v = new Array(w), m = 0, h = 0; i > h; h += 1)
					for (var u = 0; u < n.length; u += 1) h < s[u].length && (v[m] = s[u][h], m += 1);
				for (var h = 0; a > h; h += 1)
					for (var u = 0; u < n.length; u += 1) h < c[u].length && (v[m] = c[u][h], m += 1);
				return v
			},
			F = function(e, t, n, r, i, a) {
				var u = s.getRSBlocks(e, t),
					l = c();
				i > 0 && (l.put(3, 4), l.put(r, 4), l.put(i, 4), l.put(a, 8));
				for (var d = 0; d < n.length; d += 1) {
					var p = n[d];
					l.put(p.getMode(), 4), l.put(p.getLength(), o.getLengthInBits(p.getMode(), e)), p.write(l)
				}
				for (var g = 0, d = 0; d < u.length; d += 1) g += u[d].dataCount;
				if (l.getLengthInBits() > 8 * g) throw new Error("code length overflow. (" + l.getLengthInBits() + ">" + 8 * g + ")");
				for (l.getLengthInBits() + 4 <= 8 * g && l.put(0, 4); l.getLengthInBits() % 8 != 0;) l.putBit(!1);
				for (;;) {
					if (l.getLengthInBits() >= 8 * g) break;
					if (l.put(f, 8), l.getLengthInBits() >= 8 * g) break;
					l.put(h, 8)
				}
				return D(l, u)
			};
		return C.addData = function(e) {
			var t = u(e);
			m.push(t), v = null
		}, C.isDark = function(e, t) {
			if (0 > e || e >= w || 0 > t || t >= w) throw new Error(e + "," + t);
			return A[e][t]
		}, C.getModuleCount = function() {
			return w
		}, C.make = function() {
			y(!1, B())
		}, C.createTableTag = function(e, t) {
			e = e || 2, t = "undefined" == typeof t ? 4 * e : t;
			var n = "";
			n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + t + "px;", n += '">', n += "<tbody>";
			for (var r = 0; r < C.getModuleCount(); r += 1) {
				n += "<tr>";
				for (var i = 0; i < C.getModuleCount(); i += 1) n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + e + "px;", n += " height: " + e + "px;", n += " background-color: ", n += C.isDark(r, i) ? "#000000" : "#ffffff", n += ";", n += '"/>';
				n += "</tr>"
			}
			return n += "</tbody>", n += "</table>"
		}, C.createImgTag = function(e, t) {
			e = e || 2, t = "undefined" == typeof t ? 4 * e : t;
			var n = C.getModuleCount() * e + 2 * t,
				r = t,
				i = n - t;
			return p(n, n, function(t, n) {
				if (t >= r && i > t && n >= r && i > n) {
					var o = Math.floor((t - r) / e),
						a = Math.floor((n - r) / e);
					return C.isDark(a, o) ? 0 : 1
				}
				return 1
			})
		}, C
	};
	t.stringToBytes = function(e) {
		for (var t = new Array, n = 0; n < e.length; n += 1) {
			var r = e.charCodeAt(n);
			t.push(255 & r)
		}
		return t
	}, t.createStringToBytes = function(e, t) {
		var n = function() {
				for (var n = h(e), r = function() {
						var e = n.read();
						if (-1 == e) throw new Error;
						return e
					}, i = 0, o = {};;) {
					var a = n.read();
					if (-1 == a) break;
					var s = r(),
						c = r(),
						u = r(),
						l = String.fromCharCode(a << 8 | s),
						f = c << 8 | u;
					o[l] = f, i += 1
				}
				if (i != t) throw new Error(i + " != " + t);
				return o
			}(),
			r = "?".charCodeAt(0);
		return function(e) {
			for (var t = new Array, i = 0; i < e.length; i += 1) {
				var o = e.charCodeAt(i);
				if (128 > o) t.push(o);
				else {
					var a = n[e.charAt(i)];
					"number" == typeof a ? (255 & a) == a ? t.push(a) : (t.push(a >>> 8), t.push(255 & a)) : t.push(r)
				}
			}
			return t
		}
	};
	var n = {
			MODE_NUMBER: 1,
			MODE_ALPHA_NUM: 2,
			MODE_8BIT_BYTE: 4,
			MODE_KANJI: 8
		},
		r = {
			L: 1,
			M: 0,
			Q: 3,
			H: 2
		},
		i = {
			PATTERN000: 0,
			PATTERN001: 1,
			PATTERN010: 2,
			PATTERN011: 3,
			PATTERN100: 4,
			PATTERN101: 5,
			PATTERN110: 6,
			PATTERN111: 7
		},
		o = function() {
			var t = [
					[],
					[6, 18],
					[6, 22],
					[6, 26],
					[6, 30],
					[6, 34],
					[6, 22, 38],
					[6, 24, 42],
					[6, 26, 46],
					[6, 28, 50],
					[6, 30, 54],
					[6, 32, 58],
					[6, 34, 62],
					[6, 26, 46, 66],
					[6, 26, 48, 70],
					[6, 26, 50, 74],
					[6, 30, 54, 78],
					[6, 30, 56, 82],
					[6, 30, 58, 86],
					[6, 34, 62, 90],
					[6, 28, 50, 72, 94],
					[6, 26, 50, 74, 98],
					[6, 30, 54, 78, 102],
					[6, 28, 54, 80, 106],
					[6, 32, 58, 84, 110],
					[6, 30, 58, 86, 114],
					[6, 34, 62, 90, 118],
					[6, 26, 50, 74, 98, 122],
					[6, 30, 54, 78, 102, 126],
					[6, 26, 52, 78, 104, 130],
					[6, 30, 56, 82, 108, 134],
					[6, 34, 60, 86, 112, 138],
					[6, 30, 58, 86, 114, 142],
					[6, 34, 62, 90, 118, 146],
					[6, 30, 54, 78, 102, 126, 150],
					[6, 24, 50, 76, 102, 128, 154],
					[6, 28, 54, 80, 106, 132, 158],
					[6, 32, 58, 84, 110, 136, 162],
					[6, 26, 54, 82, 110, 138, 166],
					[6, 30, 58, 86, 114, 142, 170]
				],
				r = 1335,
				o = 7973,
				s = 21522,
				c = {},
				u = function(e) {
					for (var t = 0; 0 != e;) t += 1, e >>>= 1;
					return t
				};
			return c.getBCHTypeInfo = function(e) {
				for (var t = e << 10; u(t) - u(r) >= 0;) t ^= r << u(t) - u(r);
				return (e << 10 | t) ^ s
			}, c.getBCHTypeNumber = function(e) {
				for (var t = e << 12; u(t) - u(o) >= 0;) t ^= o << u(t) - u(o);
				return e << 12 | t
			}, c.getPatternPosition = function(e) {
				return t[e - 1]
			}, c.getMaskFunction = function(e) {
				switch (e) {
					case i.PATTERN000:
						return function(e, t) {
							return (e + t) % 2 == 0
						};
					case i.PATTERN001:
						return function(e) {
							return e % 2 == 0
						};
					case i.PATTERN010:
						return function(e, t) {
							return t % 3 == 0
						};
					case i.PATTERN011:
						return function(e, t) {
							return (e + t) % 3 == 0
						};
					case i.PATTERN100:
						return function(e, t) {
							return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
						};
					case i.PATTERN101:
						return function(e, t) {
							return e * t % 2 + e * t % 3 == 0
						};
					case i.PATTERN110:
						return function(e, t) {
							return (e * t % 2 + e * t % 3) % 2 == 0
						};
					case i.PATTERN111:
						return function(e, t) {
							return (e * t % 3 + (e + t) % 2) % 2 == 0
						};
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}, c.getErrorCorrectPolynomial = function(t) {
				for (var n = e([1], 0), r = 0; t > r; r += 1) n = n.multiply(e([1, a.gexp(r)], 0));
				return n
			}, c.getLengthInBits = function(e, t) {
				if (t >= 1 && 10 > t) switch (e) {
					case n.MODE_NUMBER:
						return 10;
					case n.MODE_ALPHA_NUM:
						return 9;
					case n.MODE_8BIT_BYTE:
						return 8;
					case n.MODE_KANJI:
						return 8;
					default:
						throw new Error("mode:" + e)
				} else if (27 > t) switch (e) {
					case n.MODE_NUMBER:
						return 12;
					case n.MODE_ALPHA_NUM:
						return 11;
					case n.MODE_8BIT_BYTE:
						return 16;
					case n.MODE_KANJI:
						return 10;
					default:
						throw new Error("mode:" + e)
				} else {
					if (!(41 > t)) throw new Error("type:" + t);
					switch (e) {
						case n.MODE_NUMBER:
							return 14;
						case n.MODE_ALPHA_NUM:
							return 13;
						case n.MODE_8BIT_BYTE:
							return 16;
						case n.MODE_KANJI:
							return 12;
						default:
							throw new Error("mode:" + e)
					}
				}
			}, c.getLostPoint = function(e) {
				for (var t = e.getModuleCount(), n = 0, r = 0; t > r; r += 1)
					for (var i = 0; t > i; i += 1) {
						for (var o = 0, a = e.isDark(r, i), s = -1; 1 >= s; s += 1)
							if (!(0 > r + s || r + s >= t))
								for (var c = -1; 1 >= c; c += 1) 0 > i + c || i + c >= t || (0 != s || 0 != c) && a == e.isDark(r + s, i + c) && (o += 1);
						o > 5 && (n += 3 + o - 5)
					}
				for (var r = 0; t - 1 > r; r += 1)
					for (var i = 0; t - 1 > i; i += 1) {
						var u = 0;
						e.isDark(r, i) && (u += 1), e.isDark(r + 1, i) && (u += 1), e.isDark(r, i + 1) && (u += 1), e.isDark(r + 1, i + 1) && (u += 1), (0 == u || 4 == u) && (n += 3)
					}
				for (var r = 0; t > r; r += 1)
					for (var i = 0; t - 6 > i; i += 1) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
				for (var i = 0; t > i; i += 1)
					for (var r = 0; t - 6 > r; r += 1) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
				for (var l = 0, i = 0; t > i; i += 1)
					for (var r = 0; t > r; r += 1) e.isDark(r, i) && (l += 1);
				var f = Math.abs(100 * l / t / t - 50) / 5;
				return n += 10 * f
			}, c
		}(),
		a = function() {
			for (var e = new Array(256), t = new Array(256), n = 0; 8 > n; n += 1) e[n] = 1 << n;
			for (var n = 8; 256 > n; n += 1) e[n] = e[n - 4] ^ e[n - 5] ^ e[n - 6] ^ e[n - 8];
			for (var n = 0; 255 > n; n += 1) t[e[n]] = n;
			var r = {};
			return r.glog = function(e) {
				if (1 > e) throw new Error("glog(" + e + ")");
				return t[e]
			}, r.gexp = function(t) {
				for (; 0 > t;) t += 255;
				for (; t >= 256;) t -= 255;
				return e[t]
			}, r
		}(),
		s = function() {
			var e = [
					[1, 26, 19],
					[1, 26, 16],
					[1, 26, 13],
					[1, 26, 9],
					[1, 44, 34],
					[1, 44, 28],
					[1, 44, 22],
					[1, 44, 16],
					[1, 70, 55],
					[1, 70, 44],
					[2, 35, 17],
					[2, 35, 13],
					[1, 100, 80],
					[2, 50, 32],
					[2, 50, 24],
					[4, 25, 9],
					[1, 134, 108],
					[2, 67, 43],
					[2, 33, 15, 2, 34, 16],
					[2, 33, 11, 2, 34, 12],
					[2, 86, 68],
					[4, 43, 27],
					[4, 43, 19],
					[4, 43, 15],
					[2, 98, 78],
					[4, 49, 31],
					[2, 32, 14, 4, 33, 15],
					[4, 39, 13, 1, 40, 14],
					[2, 121, 97],
					[2, 60, 38, 2, 61, 39],
					[4, 40, 18, 2, 41, 19],
					[4, 40, 14, 2, 41, 15],
					[2, 146, 116],
					[3, 58, 36, 2, 59, 37],
					[4, 36, 16, 4, 37, 17],
					[4, 36, 12, 4, 37, 13],
					[2, 86, 68, 2, 87, 69],
					[4, 69, 43, 1, 70, 44],
					[6, 43, 19, 2, 44, 20],
					[6, 43, 15, 2, 44, 16],
					[4, 101, 81],
					[1, 80, 50, 4, 81, 51],
					[4, 50, 22, 4, 51, 23],
					[3, 36, 12, 8, 37, 13],
					[2, 116, 92, 2, 117, 93],
					[6, 58, 36, 2, 59, 37],
					[4, 46, 20, 6, 47, 21],
					[7, 42, 14, 4, 43, 15],
					[4, 133, 107],
					[8, 59, 37, 1, 60, 38],
					[8, 44, 20, 4, 45, 21],
					[12, 33, 11, 4, 34, 12],
					[3, 145, 115, 1, 146, 116],
					[4, 64, 40, 5, 65, 41],
					[11, 36, 16, 5, 37, 17],
					[11, 36, 12, 5, 37, 13],
					[5, 109, 87, 1, 110, 88],
					[5, 65, 41, 5, 66, 42],
					[5, 54, 24, 7, 55, 25],
					[11, 36, 12],
					[5, 122, 98, 1, 123, 99],
					[7, 73, 45, 3, 74, 46],
					[15, 43, 19, 2, 44, 20],
					[3, 45, 15, 13, 46, 16],
					[1, 135, 107, 5, 136, 108],
					[10, 74, 46, 1, 75, 47],
					[1, 50, 22, 15, 51, 23],
					[2, 42, 14, 17, 43, 15],
					[5, 150, 120, 1, 151, 121],
					[9, 69, 43, 4, 70, 44],
					[17, 50, 22, 1, 51, 23],
					[2, 42, 14, 19, 43, 15],
					[3, 141, 113, 4, 142, 114],
					[3, 70, 44, 11, 71, 45],
					[17, 47, 21, 4, 48, 22],
					[9, 39, 13, 16, 40, 14],
					[3, 135, 107, 5, 136, 108],
					[3, 67, 41, 13, 68, 42],
					[15, 54, 24, 5, 55, 25],
					[15, 43, 15, 10, 44, 16],
					[4, 144, 116, 4, 145, 117],
					[17, 68, 42],
					[17, 50, 22, 6, 51, 23],
					[19, 46, 16, 6, 47, 17],
					[2, 139, 111, 7, 140, 112],
					[17, 74, 46],
					[7, 54, 24, 16, 55, 25],
					[34, 37, 13],
					[4, 151, 121, 5, 152, 122],
					[4, 75, 47, 14, 76, 48],
					[11, 54, 24, 14, 55, 25],
					[16, 45, 15, 14, 46, 16],
					[6, 147, 117, 4, 148, 118],
					[6, 73, 45, 14, 74, 46],
					[11, 54, 24, 16, 55, 25],
					[30, 46, 16, 2, 47, 17],
					[8, 132, 106, 4, 133, 107],
					[8, 75, 47, 13, 76, 48],
					[7, 54, 24, 22, 55, 25],
					[22, 45, 15, 13, 46, 16],
					[10, 142, 114, 2, 143, 115],
					[19, 74, 46, 4, 75, 47],
					[28, 50, 22, 6, 51, 23],
					[33, 46, 16, 4, 47, 17],
					[8, 152, 122, 4, 153, 123],
					[22, 73, 45, 3, 74, 46],
					[8, 53, 23, 26, 54, 24],
					[12, 45, 15, 28, 46, 16],
					[3, 147, 117, 10, 148, 118],
					[3, 73, 45, 23, 74, 46],
					[4, 54, 24, 31, 55, 25],
					[11, 45, 15, 31, 46, 16],
					[7, 146, 116, 7, 147, 117],
					[21, 73, 45, 7, 74, 46],
					[1, 53, 23, 37, 54, 24],
					[19, 45, 15, 26, 46, 16],
					[5, 145, 115, 10, 146, 116],
					[19, 75, 47, 10, 76, 48],
					[15, 54, 24, 25, 55, 25],
					[23, 45, 15, 25, 46, 16],
					[13, 145, 115, 3, 146, 116],
					[2, 74, 46, 29, 75, 47],
					[42, 54, 24, 1, 55, 25],
					[23, 45, 15, 28, 46, 16],
					[17, 145, 115],
					[10, 74, 46, 23, 75, 47],
					[10, 54, 24, 35, 55, 25],
					[19, 45, 15, 35, 46, 16],
					[17, 145, 115, 1, 146, 116],
					[14, 74, 46, 21, 75, 47],
					[29, 54, 24, 19, 55, 25],
					[11, 45, 15, 46, 46, 16],
					[13, 145, 115, 6, 146, 116],
					[14, 74, 46, 23, 75, 47],
					[44, 54, 24, 7, 55, 25],
					[59, 46, 16, 1, 47, 17],
					[12, 151, 121, 7, 152, 122],
					[12, 75, 47, 26, 76, 48],
					[39, 54, 24, 14, 55, 25],
					[22, 45, 15, 41, 46, 16],
					[6, 151, 121, 14, 152, 122],
					[6, 75, 47, 34, 76, 48],
					[46, 54, 24, 10, 55, 25],
					[2, 45, 15, 64, 46, 16],
					[17, 152, 122, 4, 153, 123],
					[29, 74, 46, 14, 75, 47],
					[49, 54, 24, 10, 55, 25],
					[24, 45, 15, 46, 46, 16],
					[4, 152, 122, 18, 153, 123],
					[13, 74, 46, 32, 75, 47],
					[48, 54, 24, 14, 55, 25],
					[42, 45, 15, 32, 46, 16],
					[20, 147, 117, 4, 148, 118],
					[40, 75, 47, 7, 76, 48],
					[43, 54, 24, 22, 55, 25],
					[10, 45, 15, 67, 46, 16],
					[19, 148, 118, 6, 149, 119],
					[18, 75, 47, 31, 76, 48],
					[34, 54, 24, 34, 55, 25],
					[20, 45, 15, 61, 46, 16]
				],
				t = function(e, t) {
					var n = {};
					return n.totalCount = e, n.dataCount = t, n
				},
				n = {},
				i = function(t, n) {
					switch (n) {
						case r.L:
							return e[4 * (t - 1) + 0];
						case r.M:
							return e[4 * (t - 1) + 1];
						case r.Q:
							return e[4 * (t - 1) + 2];
						case r.H:
							return e[4 * (t - 1) + 3];
						default:
							return void 0
					}
				};
			return n.getRSBlocks = function(e, n) {
				var r = i(e, n);
				if ("undefined" == typeof r) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + n);
				for (var o = r.length / 3, a = new Array, s = 0; o > s; s += 1)
					for (var c = r[3 * s + 0], u = r[3 * s + 1], l = r[3 * s + 2], f = 0; c > f; f += 1) a.push(t(u, l));
				return a
			}, n
		}(),
		c = function() {
			var e = new Array,
				t = 0,
				n = {};
			return n.getBuffer = function() {
				return e
			}, n.get = function(t) {
				var n = Math.floor(t / 8);
				return 1 == (e[n] >>> 7 - t % 8 & 1)
			}, n.put = function(e, t) {
				for (var r = 0; t > r; r += 1) n.putBit(1 == (e >>> t - r - 1 & 1))
			}, n.getLengthInBits = function() {
				return t
			}, n.putBit = function(n) {
				var r = Math.floor(t / 8);
				e.length <= r && e.push(0), n && (e[r] |= 128 >>> t % 8), t += 1
			}, n
		},
		u = function(e) {
			var r = n.MODE_8BIT_BYTE,
				i = t.stringToBytes(e),
				o = {};
			return o.getMode = function() {
				return r
			}, o.getLength = function() {
				return i.length
			}, o.write = function(e) {
				for (var t = 0; t < i.length; t += 1) e.put(i[t], 8)
			}, o
		},
		l = function() {
			var e = new Array,
				t = {};
			return t.writeByte = function(t) {
				e.push(255 & t)
			}, t.writeShort = function(e) {
				t.writeByte(e), t.writeByte(e >>> 8)
			}, t.writeBytes = function(e, n, r) {
				n = n || 0, r = r || e.length;
				for (var i = 0; r > i; i += 1) t.writeByte(e[i + n])
			}, t.writeString = function(e) {
				for (var n = 0; n < e.length; n += 1) t.writeByte(e.charCodeAt(n))
			}, t.toByteArray = function() {
				return e
			}, t.toString = function() {
				var t = "";
				t += "[";
				for (var n = 0; n < e.length; n += 1) n > 0 && (t += ","), t += e[n];
				return t += "]"
			}, t
		},
		f = function() {
			var e = 0,
				t = 0,
				n = 0,
				r = "",
				i = {},
				o = function(e) {
					r += String.fromCharCode(a(63 & e))
				},
				a = function(e) {
					if (0 > e);
					else {
						if (26 > e) return 65 + e;
						if (52 > e) return 97 + (e - 26);
						if (62 > e) return 48 + (e - 52);
						if (62 == e) return 43;
						if (63 == e) return 47
					}
					throw new Error("n:" + e)
				};
			return i.writeByte = function(r) {
				for (e = e << 8 | 255 & r, t += 8, n += 1; t >= 6;) o(e >>> t - 6), t -= 6
			}, i.flush = function() {
				if (t > 0 && (o(e << 6 - t), e = 0, t = 0), n % 3 != 0)
					for (var i = 3 - n % 3, a = 0; i > a; a += 1) r += "="
			}, i.toString = function() {
				return r
			}, i
		},
		h = function(e) {
			var t = e,
				n = 0,
				r = 0,
				i = 0,
				o = {};
			o.read = function() {
				for (; 8 > i;) {
					if (n >= t.length) {
						if (0 == i) return -1;
						throw new Error("unexpected end of file./" + i)
					}
					var e = t.charAt(n);
					if (n += 1, "=" == e) return i = 0, -1;
					e.match(/^\s$/) || (r = r << 6 | a(e.charCodeAt(0)), i += 6)
				}
				var o = r >>> i - 8 & 255;
				return i -= 8, o
			};
			var a = function(e) {
				if (e >= 65 && 90 >= e) return e - 65;
				if (e >= 97 && 122 >= e) return e - 97 + 26;
				if (e >= 48 && 57 >= e) return e - 48 + 52;
				if (43 == e) return 62;
				if (47 == e) return 63;
				throw new Error("c:" + e)
			};
			return o
		},
		d = function(e, t) {
			var n = e,
				r = t,
				i = new Array(e * t),
				o = {};
			o.setPixel = function(e, t, r) {
				i[t * n + e] = r
			}, o.write = function(e) {
				e.writeString("GIF87a"), e.writeShort(n), e.writeShort(r), e.writeByte(128), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(255), e.writeByte(255), e.writeByte(255), e.writeString(","), e.writeShort(0), e.writeShort(0), e.writeShort(n), e.writeShort(r), e.writeByte(0);
				var t = 2,
					i = s(t);
				e.writeByte(t);
				for (var o = 0; i.length - o > 255;) e.writeByte(255), e.writeBytes(i, o, 255), o += 255;
				e.writeByte(i.length - o), e.writeBytes(i, o, i.length - o), e.writeByte(0), e.writeString(";")
			};
			var a = function(e) {
					var t = e,
						n = 0,
						r = 0,
						i = {};
					return i.write = function(e, i) {
						if (e >>> i != 0) throw new Error("length over");
						for (; n + i >= 8;) t.writeByte(255 & (e << n | r)), i -= 8 - n, e >>>= 8 - n, r = 0, n = 0;
						r = e << n | r, n += i
					}, i.flush = function() {
						n > 0 && t.writeByte(r)
					}, i
				},
				s = function(e) {
					for (var t = 1 << e, n = (1 << e) + 1, r = e + 1, o = c(), s = 0; t > s; s += 1) o.add(String.fromCharCode(s));
					o.add(String.fromCharCode(t)), o.add(String.fromCharCode(n));
					var u = l(),
						f = a(u);
					f.write(t, r);
					var h = 0,
						d = String.fromCharCode(i[h]);
					for (h += 1; h < i.length;) {
						var p = String.fromCharCode(i[h]);
						h += 1, o.contains(d + p) ? d += p : (f.write(o.indexOf(d), r), o.size() < 4095 && (o.size() == 1 << r && (r += 1), o.add(d + p)), d = p)
					}
					return f.write(o.indexOf(d), r), f.write(n, r), f.flush(), u.toByteArray()
				},
				c = function() {
					var e = {},
						t = 0,
						n = {};
					return n.add = function(r) {
						if (n.contains(r)) throw new Error("dup key:" + r);
						e[r] = t, t += 1
					}, n.size = function() {
						return t
					}, n.indexOf = function(t) {
						return e[t]
					}, n.contains = function(t) {
						return "undefined" != typeof e[t]
					}, n
				};
			return o
		},
		p = function(e, t, n, r) {
			for (var i = d(e, t), o = 0; t > o; o += 1)
				for (var a = 0; e > a; a += 1) i.setPixel(a, o, n(a, o));
			var s = l();
			i.write(s);
			for (var c = f(), u = s.toByteArray(), h = 0; h < u.length; h += 1) c.writeByte(u[h]);
			c.flush();
			var p = "";
			return p += "<img", p += ' src="', p += "data:image/gif;base64,", p += c, p += '"', p += ' width="', p += e, p += '"', p += ' height="', p += t, p += '"', r && (p += ' alt="', p += r, p += '"'), p += "/>"
		};
	return t
}();
! function(e) {
	"use strict";
	var t = function() {
			var e = document.createElement("canvas");
			return !(!e.getContext || !e.getContext("2d"))
		}(),
		n = function(e, t, n, r, i, o) {
			var a = qrencode(e, t, r, i, o);
			return a.addData(n), a.make(), a
		},
		r = function(e, t, r, i) {
			for (var o = 2; 40 >= o; o += 1) try {
				return n(o, "L", e, t, r, i)
			} catch (a) {}
			return null
		},
		i = function(t, n) {
			var i = n.text,
				o = n.left,
				a = n.top,
				s = n.width,
				c = n.height,
				u = n.color,
				l = n.bgColor,
				f = r(i, n.multipart_num, n.multipart_total, n.multipart_parity),
				h = e(t),
				d = h[0].getContext("2d");
			if (l && (d.fillStyle = l, d.fillRect(o, a, s, c)), f) {
				var p, g, A = f.getModuleCount(),
					w = s / A,
					v = c / A;
				for (d.beginPath(), p = 0; A > p; p += 1)
					for (g = 0; A > g; g += 1) f.isDark(p, g) && d.rect(o + g * w, a + p * v, w, v);
				d.fillStyle = u, d.fill()
			}
			return h
		},
		o = function(t) {
			var n = e("<canvas/>").attr("width", t.width).attr("height", t.height).css("margin-bottom", "40px");
			return i(n, t)
		},
		a = function(t) {
			var n = t.text,
				i = t.width,
				o = t.height,
				a = t.color,
				s = t.bgColor,
				c = Math.floor,
				u = r(n),
				l = e("<div/>").css({
					position: "relative",
					left: 0,
					top: 0,
					padding: 0,
					margin: 0,
					width: i,
					height: o
				});
			if (s && l.css("background-color", s), u) {
				var f, h, d = u.getModuleCount(),
					p = c(i / d),
					g = c(o / d),
					A = c(.5 * (i - p * d)),
					w = c(.5 * (o - g * d));
				for (f = 0; d > f; f += 1)
					for (h = 0; d > h; h += 1) u.isDark(f, h) && e("<div/>").css({
						left: A + h * p,
						top: w + f * g
					}).appendTo(l);
				l.children().css({
					position: "absolute",
					padding: 0,
					margin: 0,
					width: p,
					height: g,
					"background-color": a
				})
			}
			return l
		},
		s = function(n) {
			var r = e.extend({}, c, n);
			return t && "canvas" === r.render ? o(r) : a(r)
		},
		c = {
			render: "canvas",
			left: 0,
			top: 0,
			width: 256,
			height: 256,
			color: "#000",
			bgColor: null,
			text: "no text"
		};
	e.fn.qrcode = function(t) {
		return this.each(function() {
			"canvas" === this.nodeName.toLowerCase() ? i(this, t) : e(this).append(s(t))
		})
	}
}(jQuery);
var saveAs = saveAs || navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator) || function(e) {
	var t = e.document,
		n = function() {
			return e.URL || e.webkitURL || e
		},
		r = e.URL || e.webkitURL || e,
		i = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		o = "download" in i,
		a = function(n) {
			var r = t.createEvent("MouseEvents");
			r.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(r)
		},
		s = e.webkitRequestFileSystem,
		c = e.requestFileSystem || s || e.mozRequestFileSystem,
		u = function(t) {
			(e.setImmediate || e.setTimeout)(function() {
				throw t
			}, 0)
		},
		l = "application/octet-stream",
		f = 0,
		h = [],
		d = function() {
			for (var e = h.length; e--;) {
				var t = h[e];
				"string" == typeof t ? r.revokeObjectURL(t) : t.remove()
			}
			h.length = 0
		},
		p = function(e, t, n) {
			t = [].concat(t);
			for (var r = t.length; r--;) {
				var i = e["on" + t[r]];
				if ("function" == typeof i) try {
					i.call(e, n || e)
				} catch (o) {
					u(o)
				}
			}
		},
		g = function(t, r) {
			var u, d, g, A = this,
				w = t.type,
				v = !1,
				m = function() {
					var e = n().createObjectURL(t);
					return h.push(e), e
				},
				C = function() {
					p(A, "writestart progress write writeend".split(" "))
				},
				y = function() {
					(v || !u) && (u = m(t)), d && (d.location.href = u), A.readyState = A.DONE, C()
				},
				E = function(e) {
					return function() {
						return A.readyState !== A.DONE ? e.apply(this, arguments) : void 0
					}
				},
				B = {
					create: !0,
					exclusive: !1
				};
			return A.readyState = A.INIT, r || (r = "download"), o ? (u = m(t), i.href = u, i.download = r, a(i), A.readyState = A.DONE, void C()) : (e.chrome && w && w !== l && (g = t.slice || t.webkitSlice, t = g.call(t, 0, t.size, l), v = !0), s && "download" !== r && (r += ".download"), d = w === l || s ? e : e.open(), c ? (f += t.size, void c(e.TEMPORARY, f, E(function(e) {
				e.root.getDirectory("saved", B, E(function(e) {
					var n = function() {
						e.getFile(r, B, E(function(e) {
							e.createWriter(E(function(n) {
								n.onwriteend = function(t) {
									d.location.href = e.toURL(), h.push(e), A.readyState = A.DONE, p(A, "writeend", t)
								}, n.onerror = function() {
									var e = n.error;
									e.code !== e.ABORT_ERR && y()
								}, "writestart progress write abort".split(" ").forEach(function(e) {
									n["on" + e] = A["on" + e]
								}), n.write(t), A.abort = function() {
									n.abort(), A.readyState = A.DONE
								}, A.readyState = A.WRITING
							}), y)
						}), y)
					};
					e.getFile(r, {
						create: !1
					}, E(function(e) {
						e.remove(), n()
					}), E(function(e) {
						e.code === e.NOT_FOUND_ERR ? n() : y()
					}))
				}), y)
			}), y)) : void y())
		},
		A = g.prototype,
		w = function(e, t) {
			return new g(e, t)
		};
	return A.abort = function() {
		var e = this;
		e.readyState = e.DONE, p(e, "abort")
	}, A.readyState = A.INIT = 0, A.WRITING = 1, A.DONE = 2, A.error = A.onwritestart = A.onprogress = A.onwrite = A.onabort = A.onerror = A.onwriteend = null, e.addEventListener("unload", d, !1), w
}(self);
GridSampler = {}, GridSampler.checkAndNudgePoints = function(e, t) {
	for (var n = qrcode.width, r = qrcode.height, i = !0, o = 0; o < t.length && i; o += 2) {
		var a = Math.floor(t[o]),
			s = Math.floor(t[o + 1]);
		if (-1 > a || a > n || -1 > s || s > r) throw "Error.checkAndNudgePoints ";
		i = !1, -1 == a ? (t[o] = 0, i = !0) : a == n && (t[o] = n - 1, i = !0), -1 == s ? (t[o + 1] = 0, i = !0) : s == r && (t[o + 1] = r - 1, i = !0)
	}
	i = !0;
	for (var o = t.length - 2; o >= 0 && i; o -= 2) {
		var a = Math.floor(t[o]),
			s = Math.floor(t[o + 1]);
		if (-1 > a || a > n || -1 > s || s > r) throw "Error.checkAndNudgePoints ";
		i = !1, -1 == a ? (t[o] = 0, i = !0) : a == n && (t[o] = n - 1, i = !0), -1 == s ? (t[o + 1] = 0, i = !0) : s == r && (t[o + 1] = r - 1, i = !0)
	}
}, GridSampler.sampleGrid3 = function(e, t, n) {
	for (var r = new BitMatrix(t), i = new Array(t << 1), o = 0; t > o; o++) {
		for (var a = i.length, s = o + .5, c = 0; a > c; c += 2) i[c] = (c >> 1) + .5, i[c + 1] = s;
		n.transformPoints1(i), GridSampler.checkAndNudgePoints(e, i);
		try {
			for (var c = 0; a > c; c += 2) {
				var u = 4 * Math.floor(i[c]) + Math.floor(i[c + 1]) * qrcode.width * 4,
					l = e[Math.floor(i[c]) + qrcode.width * Math.floor(i[c + 1])];
				qrcode.imagedata.data[u] = l ? 255 : 0, qrcode.imagedata.data[u + 1] = l ? 255 : 0, qrcode.imagedata.data[u + 2] = 0, qrcode.imagedata.data[u + 3] = 255, l && r.set_Renamed(c >> 1, o)
			}
		} catch (f) {
			throw "Error.checkAndNudgePoints"
		}
	}
	return r
}, GridSampler.sampleGridx = function(e, t, n, r, i, o, a, s, c, u, l, f, h, d, p, g, A, w) {
	var v = PerspectiveTransform.quadrilateralToQuadrilateral(n, r, i, o, a, s, c, u, l, f, h, d, p, g, A, w);
	return GridSampler.sampleGrid3(e, t, v)
}, Version.VERSION_DECODE_INFO = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017), Version.VERSIONS = buildVersions(), Version.getVersionForNumber = function(e) {
	if (1 > e || e > 40) throw "ArgumentException";
	return Version.VERSIONS[e - 1]
}, Version.getProvisionalVersionForDimension = function(e) {
	if (e % 4 != 1) throw "Error getProvisionalVersionForDimension";
	try {
		return Version.getVersionForNumber(e - 17 >> 2)
	} catch (t) {
		throw "Error getVersionForNumber"
	}
}, Version.decodeVersionInformation = function(e) {
	for (var t = 4294967295, n = 0, r = 0; r < Version.VERSION_DECODE_INFO.length; r++) {
		var i = Version.VERSION_DECODE_INFO[r];
		if (i == e) return this.getVersionForNumber(r + 7);
		var o = FormatInformation.numBitsDiffering(e, i);
		t > o && (n = r + 7, t = o)
	}
	return 3 >= t ? this.getVersionForNumber(n) : null
}, PerspectiveTransform.quadrilateralToQuadrilateral = function(e, t, n, r, i, o, a, s, c, u, l, f, h, d, p, g) {
	var A = this.quadrilateralToSquare(e, t, n, r, i, o, a, s),
		w = this.squareToQuadrilateral(c, u, l, f, h, d, p, g);
	return w.times(A)
}, PerspectiveTransform.squareToQuadrilateral = function(e, t, n, r, i, o, a, s) {
	return dy2 = s - o, dy3 = t - r + o - s, 0 == dy2 && 0 == dy3 ? new PerspectiveTransform(n - e, i - n, e, r - t, o - r, t, 0, 0, 1) : (dx1 = n - i, dx2 = a - i, dx3 = e - n + i - a, dy1 = r - o, denominator = dx1 * dy2 - dx2 * dy1, a13 = (dx3 * dy2 - dx2 * dy3) / denominator, a23 = (dx1 * dy3 - dx3 * dy1) / denominator, new PerspectiveTransform(n - e + a13 * n, a - e + a23 * a, e, r - t + a13 * r, s - t + a23 * s, t, a13, a23, 1))
}, PerspectiveTransform.quadrilateralToSquare = function(e, t, n, r, i, o, a, s) {
	return this.squareToQuadrilateral(e, t, n, r, i, o, a, s).buildAdjoint()
};
var FORMAT_INFO_MASK_QR = 21522,
	FORMAT_INFO_DECODE_LOOKUP = new Array(new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31)),
	BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = function(e, t) {
	return e ^= t, BITS_SET_IN_HALF_BYTE[15 & e] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 4)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 8)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 12)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 16)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 20)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 24)] + BITS_SET_IN_HALF_BYTE[15 & URShift(e, 28)]
}, FormatInformation.decodeFormatInformation = function(e) {
	var t = FormatInformation.doDecodeFormatInformation(e);
	return null != t ? t : FormatInformation.doDecodeFormatInformation(e ^ FORMAT_INFO_MASK_QR)
}, FormatInformation.doDecodeFormatInformation = function(e) {
	for (var t = 4294967295, n = 0, r = 0; r < FORMAT_INFO_DECODE_LOOKUP.length; r++) {
		var i = FORMAT_INFO_DECODE_LOOKUP[r],
			o = i[0];
		if (o == e) return new FormatInformation(i[1]);
		var a = this.numBitsDiffering(e, o);
		t > a && (n = i[1], t = a)
	}
	return 3 >= t ? new FormatInformation(n) : null
}, ErrorCorrectionLevel.forBits = function(e) {
	if (0 > e || e >= FOR_BITS.length) throw "ArgumentException";
	return FOR_BITS[e]
};
var L = new ErrorCorrectionLevel(0, 1, "L"),
	M = new ErrorCorrectionLevel(1, 0, "M"),
	Q = new ErrorCorrectionLevel(2, 3, "Q"),
	H = new ErrorCorrectionLevel(3, 2, "H"),
	FOR_BITS = new Array(M, L, H, Q);
DataBlock.getDataBlocks = function(e, t, n) {
	if (e.length != t.TotalCodewords) throw "ArgumentException";
	for (var r = t.getECBlocksForLevel(n), i = 0, o = r.getECBlocks(), a = 0; a < o.length; a++) i += o[a].Count;
	for (var s = new Array(i), c = 0, u = 0; u < o.length; u++)
		for (var l = o[u], a = 0; a < l.Count; a++) {
			var f = l.DataCodewords,
				h = r.ECCodewordsPerBlock + f;
			s[c++] = new DataBlock(f, new Array(h))
		}
	for (var d = s[0].codewords.length, p = s.length - 1; p >= 0;) {
		var g = s[p].codewords.length;
		if (g == d) break;
		p--
	}
	p++;
	for (var A = d - r.ECCodewordsPerBlock, w = 0, a = 0; A > a; a++)
		for (var u = 0; c > u; u++) s[u].codewords[a] = e[w++];
	for (var u = p; c > u; u++) s[u].codewords[A] = e[w++];
	for (var v = s[0].codewords.length, a = A; v > a; a++)
		for (var u = 0; c > u; u++) {
			var m = p > u ? a : a + 1;
			s[u].codewords[m] = e[w++]
		}
	return s
}, DataMask = {}, DataMask.forReference = function(e) {
	if (0 > e || e > 7) throw "System.ArgumentException";
	return DataMask.DATA_MASKS[e]
}, DataMask.DATA_MASKS = new Array(new DataMask000, new DataMask001, new DataMask010, new DataMask011, new DataMask100, new DataMask101, new DataMask110, new DataMask111), GF256.QR_CODE_FIELD = new GF256(285), GF256.DATA_MATRIX_FIELD = new GF256(301), GF256.addOrSubtract = function(e, t) {
	return e ^ t
}, Decoder = {}, Decoder.rsDecoder = new ReedSolomonDecoder(GF256.QR_CODE_FIELD), Decoder.correctErrors = function(e, t) {
	for (var n = e.length, r = new Array(n), i = 0; n > i; i++) r[i] = 255 & e[i];
	var o = e.length - t;
	try {
		Decoder.rsDecoder.decode(r, o)
	} catch (a) {
		throw a
	}
	for (var i = 0; t > i; i++) e[i] = r[i]
}, Decoder.decode = function(e) {
	for (var t = new BitMatrixParser(e), n = t.readVersion(), r = t.readFormatInformation().ErrorCorrectionLevel, i = t.readCodewords(), o = DataBlock.getDataBlocks(i, n, r), a = 0, s = 0; s < o.length; s++) a += o[s].NumDataCodewords;
	for (var c = new Array(a), u = 0, l = 0; l < o.length; l++) {
		var f = o[l],
			h = f.Codewords,
			d = f.NumDataCodewords;
		Decoder.correctErrors(h, d);
		for (var s = 0; d > s; s++) c[u++] = h[s]
	}
	var p = new QRCodeDataBlockReader(c, n.VersionNumber, r.Bits);
	return p
}, qrcode = {}, qrcode.imagedata = null, qrcode.width = 0, qrcode.height = 0, qrcode.qrCodeSymbol = null, qrcode.debug = !1, qrcode.maxImgSize = 1048576, qrcode.sizeOfDataLengthInfo = [
	[10, 9, 8, 8],
	[12, 11, 16, 10],
	[14, 13, 16, 12]
], qrcode.callback = null, qrcode.decode = function(e) {
	if (0 == arguments.length) {
		var t = document.getElementById("qr-canvas"),
			n = t.getContext("2d");
		return qrcode.width = t.width, qrcode.height = t.height, qrcode.imagedata = n.getImageData(0, 0, qrcode.width, qrcode.height), qrcode.result = qrcode.process(n), null != qrcode.callback && qrcode.callback(qrcode.result), qrcode.result
	}
	var r = new Image;
	r.onload = function() {
		var e = document.createElement("canvas"),
			t = e.getContext("2d"),
			n = r.height,
			i = r.width;
		if (r.width * r.height > qrcode.maxImgSize) {
			var o = r.width / r.height;
			n = Math.sqrt(qrcode.maxImgSize / o), i = o * n
		}
		e.width = i, e.height = n, t.drawImage(r, 0, 0, e.width, e.height), qrcode.width = e.width, qrcode.height = e.height;
		try {
			qrcode.imagedata = t.getImageData(0, 0, e.width, e.height)
		} catch (a) {
			return qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!", void(null != qrcode.callback && qrcode.callback(qrcode.result))
		}
		try {
			qrcode.result = qrcode.process(t)
		} catch (a) {
			console.log(a), qrcode.result = "error decoding QR Code"
		}
		null != qrcode.callback && qrcode.callback(qrcode.result)
	}, r.src = e
}, qrcode.isUrl = function(e) {
	var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return t.test(e)
}, qrcode.decode_url = function(e) {
	var t = "";
	try {
		t = escape(e)
	} catch (n) {
		console.log(n), t = e
	}
	var r = "";
	try {
		r = decodeURIComponent(t)
	} catch (n) {
		console.log(n), r = t
	}
	return r
}, qrcode.decode_utf8 = function(e) {
	return qrcode.isUrl(e) ? qrcode.decode_url(e) : e
}, qrcode.process = function(e) {
	var t = (new Date).getTime(),
		n = qrcode.grayScaleToBitmap(qrcode.grayscale());
	if (qrcode.debug) {
		for (var r = 0; r < qrcode.height; r++)
			for (var i = 0; i < qrcode.width; i++) {
				var o = 4 * i + r * qrcode.width * 4;
				qrcode.imagedata.data[o] = n[i + r * qrcode.width] ? 0 : 0, qrcode.imagedata.data[o + 1] = n[i + r * qrcode.width] ? 0 : 0, qrcode.imagedata.data[o + 2] = n[i + r * qrcode.width] ? 255 : 0
			}
		e.putImageData(qrcode.imagedata, 0, 0)
	}
	var a = new Detector(n),
		s = a.detect();
	qrcode.debug && e.putImageData(qrcode.imagedata, 0, 0);
	for (var c = Decoder.decode(s.bits), u = c.DataByte, l = "", f = 0; f < u.length; f++)
		for (var h = 0; h < u[f].length; h++) l += String.fromCharCode(u[f][h]);
	var d = (new Date).getTime(),
		p = d - t;
	return console.log(p), qrcode.decode_utf8(l)
}, qrcode.getPixel = function(e, t) {
	if (qrcode.width < e) throw "point error";
	if (qrcode.height < t) throw "point error";
	return point = 4 * e + t * qrcode.width * 4, p = (33 * qrcode.imagedata.data[point] + 34 * qrcode.imagedata.data[point + 1] + 33 * qrcode.imagedata.data[point + 2]) / 100
}, qrcode.binarize = function(e) {
	for (var t = new Array(qrcode.width * qrcode.height), n = 0; n < qrcode.height; n++)
		for (var r = 0; r < qrcode.width; r++) {
			var i = qrcode.getPixel(r, n);
			t[r + n * qrcode.width] = e >= i ? !0 : !1
		}
	return t
}, qrcode.getMiddleBrightnessPerArea = function(e) {
	for (var t = 4, n = Math.floor(qrcode.width / t), r = Math.floor(qrcode.height / t), i = new Array(t), o = 0; t > o; o++) {
		i[o] = new Array(t);
		for (var a = 0; t > a; a++) i[o][a] = new Array(0, 0)
	}
	for (var s = 0; t > s; s++)
		for (var c = 0; t > c; c++) {
			i[c][s][0] = 255;
			for (var u = 0; r > u; u++)
				for (var l = 0; n > l; l++) {
					var f = e[n * c + l + (r * s + u) * qrcode.width];
					f < i[c][s][0] && (i[c][s][0] = f), f > i[c][s][1] && (i[c][s][1] = f)
				}
		}
	for (var h = new Array(t), d = 0; t > d; d++) h[d] = new Array(t);
	for (var s = 0; t > s; s++)
		for (var c = 0; t > c; c++) h[c][s] = Math.floor((i[c][s][0] + i[c][s][1]) / 2);
	return h
}, qrcode.grayScaleToBitmap = function(e) {
	for (var t = qrcode.getMiddleBrightnessPerArea(e), n = t.length, r = Math.floor(qrcode.width / n), i = Math.floor(qrcode.height / n), o = new Array(qrcode.height * qrcode.width), a = 0; n > a; a++)
		for (var s = 0; n > s; s++)
			for (var c = 0; i > c; c++)
				for (var u = 0; r > u; u++) o[r * s + u + (i * a + c) * qrcode.width] = e[r * s + u + (i * a + c) * qrcode.width] < t[s][a] ? !0 : !1;
	return o
}, qrcode.grayscale = function() {
	for (var e = new Array(qrcode.width * qrcode.height), t = 0; t < qrcode.height; t++)
		for (var n = 0; n < qrcode.width; n++) {
			var r = qrcode.getPixel(n, t);
			e[n + t * qrcode.width] = r
		}
	return e
};
var MIN_SKIP = 3,
	MAX_MODULES = 57,
	INTEGER_MATH_SHIFT = 8,
	CENTER_QUORUM = 2;
qrcode.orderBestPatterns = function(e) {
	function t(e, t) {
		return xDiff = e.X - t.X, yDiff = e.Y - t.Y, Math.sqrt(xDiff * xDiff + yDiff * yDiff)
	}

	function n(e, t, n) {
		var r = t.x,
			i = t.y;
		return (n.x - r) * (e.y - i) - (n.y - i) * (e.x - r)
	}
	var r, i, o, a = t(e[0], e[1]),
		s = t(e[1], e[2]),
		c = t(e[0], e[2]);
	if (s >= a && s >= c ? (i = e[0], r = e[1], o = e[2]) : c >= s && c >= a ? (i = e[1], r = e[0], o = e[2]) : (i = e[2], r = e[0], o = e[1]), n(r, i, o) < 0) {
		var u = r;
		r = o, o = u
	}
	e[0] = r, e[1] = i, e[2] = o
};
var ACNL = function() {
	function e(e, t) {
		D = D.substr(0, e) + String.fromCharCode(t) + D.substr(e + 1)
	}

	function t(e, t) {
		for (var n = "", r = e; e + t > r; r += 2) {
			var i = (D.charCodeAt(r + 1) << 8) + D.charCodeAt(r);
			if (0 == i) return n;
			n += String.fromCharCode(i)
		}
		return n
	}

	function n(t, n, r) {
		for (var i = 0; n > i; i++) i >= r.length ? (e(t + 2 * i, 0), e(t + 2 * i + 1, 0)) : (e(t + 2 * i, 255 & r.charCodeAt(i)), e(t + 2 * i + 1, r.charCodeAt(i) >> 8 & 255))
	}

	function r() {
		F = D.substr(42, 44)
	}

	function i() {
		return null === F ? void alert("Please copy creator data before attempting to paste.") : void(D = D.substr(0, 42) + F + D.substr(86))
	}

	function o() {
		return ((D.charCodeAt(42) << 8) + D.charCodeAt(43)).toString(16)
	}

	function a() {
		return ((D.charCodeAt(64) << 8) + D.charCodeAt(65)).toString(16)
	}

	function s() {
		return ((D.charCodeAt(86) << 8) + D.charCodeAt(87)).toString(16)
	}

	function c(t) {
		var n = parseInt(t, 16);
		e(42, n >> 8 & 255), e(43, 255 & n)
	}

	function u(t) {
		var n = parseInt(t, 16);
		e(64, n >> 8 & 255), e(65, 255 & n)
	}

	function l(t) {
		var n = parseInt(t, 16);
		e(86, n >> 8 & 255), e(87, 255 & n)
	}

	function f() {
		return t(0, 40)
	}

	function h() {
		return t(44, 20)
	}

	function d() {
		return t(66, 20)
	}

	function p(e) {
		n(0, 20, e)
	}

	function g(e) {
		n(44, 10, e)
	}

	function A(e) {
		n(66, 10, e)
	}

	function w() {
		return 2160 == D.length ? 64 : 32
	}

	function v(e) {
		return Math.floor($(e).width() < $(e).height() ? $(e).width() / w() : $(e).height() / w())
	}

	function m() {
		try {
			for (var e = new ArrayBuffer(D.length), n = new Uint8Array(e), r = 0; r < D.length; r++) n[r] = D.charCodeAt(r);
			var i = new Blob([n], {
				type: "application/octet-stream"
			});
			saveAs(i, t(0, 42) + ".acnl")
		} catch (o) {
			alert("Failed to save file. Try using a different browser. :-(")
		}
	}

	function C(e) {
		e.html(""), 64 == w() ? (e.qrcode({
			correctLevel: 0,
			text: D.substr(0, 540),
			render: "canvas",
			width: 512,
			height: 512,
			multipart_num: 0,
			multipart_total: 3,
			multipart_parity: 119
		}), e.qrcode({
			correctLevel: 0,
			text: D.substr(540, 540),
			render: "canvas",
			width: 512,
			height: 512,
			multipart_num: 1,
			multipart_total: 3,
			multipart_parity: 119
		}), e.qrcode({
			correctLevel: 0,
			text: D.substr(1080, 540),
			render: "canvas",
			width: 512,
			height: 512,
			multipart_num: 2,
			multipart_total: 3,
			multipart_parity: 119
		}), e.qrcode({
			correctLevel: 0,
			text: D.substr(1620, 540),
			render: "canvas",
			width: 512,
			height: 512,
			multipart_num: 3,
			multipart_total: 3,
			multipart_parity: 119
		})) : e.qrcode({
			correctLevel: 0,
			text: D,
			render: "canvas",
			width: 512,
			height: 512
		})
	}

	function y(e, t, n, r) {
		var i = t % 32,
			o = Math.floor(t / 32);
		B(e, i, o, n, r)
	}

	function E(e) {
		var t = v(e),
			n = e.getContext("2d"); - 1 == $.inArray(n, M) && M.push(n);
		for (var r = 108, i = r; i < D.length; i++) dpoint = D.charCodeAt(i), y(n, 2 * (i - r), 15 & dpoint, t), y(n, 2 * (i - r) + 1, dpoint >> 4 & 15, t)
	}

	function B(e, t, n, r, i) {
		n > 63 && (n -= 64, t += 32);
		try {
			e.fillStyle = _(r), e.fillRect(t * i, n * i, i, i), i > 5 && (e.fillStyle = "#AAAAAA", e.fillRect(t * i + i - 1, n * i, 1, i), e.fillRect(t * i, n * i + i - 1, i, 1))
		} catch (o) {}
	}

	function b(t, n, r) {
		if (0 > t || 0 > n || 0 > r || r > 15 || t > 63 || n > 63 || isNaN(t) || isNaN(n)) return !1;
		if (2160 != D.length && (t > 31 || n > 31)) return !1;
		var i = 108 + Math.floor(t / 2) + 16 * n,
			o = 255 & D.charCodeAt(i),
			a = o;
		if (o = t % 2 == 1 ? (15 & o) + (r << 4) : (240 & o) + r, o != a) {
			e(i, o);
			for (var s in M) B(M[s], t, n, r, v(M[s].canvas))
		}
	}

	function k(e) {
		switch (e) {
			case 0:
				return "#FFEFFF";
			case 1:
				return "#FF9AAD";
			case 2:
				return "#EF559C";
			case 3:
				return "#FF65AD";
			case 4:
				return "#FF0063";
			case 5:
				return "#BD4573";
			case 6:
				return "#CE0052";
			case 7:
				return "#9C0031";
			case 8:
				return "#522031";
			case 16:
				return "#FFBACE";
			case 17:
				return "#FF7573";
			case 18:
				return "#DE3010";
			case 19:
				return "#FF5542";
			case 20:
				return "#FF0000";
			case 21:
				return "#CE6563";
			case 22:
				return "#BD4542";
			case 23:
				return "#BD0000";
			case 24:
				return "#8C2021";
			case 32:
				return "#DECFBD";
			case 33:
				return "#FFCF63";
			case 34:
				return "#DE6521";
			case 35:
				return "#FFAA21";
			case 36:
				return "#FF6500";
			case 37:
				return "#BD8A52";
			case 38:
				return "#DE4500";
			case 39:
				return "#BD4500";
			case 40:
				return "#633010";
			case 48:
				return "#FFEFDE";
			case 49:
				return "#FFDFCE";
			case 50:
				return "#FFCFAD";
			case 51:
				return "#FFBA8C";
			case 52:
				return "#FFAA8C";
			case 53:
				return "#DE8A63";
			case 54:
				return "#BD6542";
			case 55:
				return "#9C5531";
			case 56:
				return "#8C4521";
			case 64:
				return "#FFCFFF";
			case 65:
				return "#EF8AFF";
			case 66:
				return "#CE65DE";
			case 67:
				return "#BD8ACE";
			case 68:
				return "#CE00FF";
			case 69:
				return "#9C659C";
			case 70:
				return "#8C00AD";
			case 71:
				return "#520073";
			case 72:
				return "#310042";
			case 80:
				return "#FFBAFF";
			case 81:
				return "#FF9AFF";
			case 82:
				return "#DE20BD";
			case 83:
				return "#FF55EF";
			case 84:
				return "#FF00CE";
			case 85:
				return "#8C5573";
			case 86:
				return "#BD009C";
			case 87:
				return "#8C0063";
			case 88:
				return "#520042";
			case 96:
				return "#DEBA9C";
			case 97:
				return "#CEAA73";
			case 98:
				return "#734531";
			case 99:
				return "#AD7542";
			case 100:
				return "#9C3000";
			case 101:
				return "#733021";
			case 102:
				return "#522000";
			case 103:
				return "#311000";
			case 104:
				return "#211000";
			case 112:
				return "#FFFFCE";
			case 113:
				return "#FFFF73";
			case 114:
				return "#DEDF21";
			case 115:
				return "#FFFF00";
			case 116:
				return "#FFDF00";
			case 117:
				return "#CEAA00";
			case 118:
				return "#9C9A00";
			case 119:
				return "#8C7500";
			case 120:
				return "#525500";
			case 128:
				return "#DEBAFF";
			case 129:
				return "#BD9AEF";
			case 130:
				return "#6330CE";
			case 131:
				return "#9C55FF";
			case 132:
				return "#6300FF";
			case 133:
				return "#52458C";
			case 134:
				return "#42009C";
			case 135:
				return "#210063";
			case 136:
				return "#211031";
			case 144:
				return "#BDBAFF";
			case 145:
				return "#8C9AFF";
			case 146:
				return "#3130AD";
			case 147:
				return "#3155EF";
			case 148:
				return "#0000FF";
			case 149:
				return "#31308C";
			case 150:
				return "#0000AD";
			case 151:
				return "#101063";
			case 152:
				return "#000021";
			case 160:
				return "#9CEFBD";
			case 161:
				return "#63CF73";
			case 162:
				return "#216510";
			case 163:
				return "#42AA31";
			case 164:
				return "#008A31";
			case 165:
				return "#527552";
			case 166:
				return "#215500";
			case 167:
				return "#103021";
			case 168:
				return "#002010";
			case 176:
				return "#DEFFBD";
			case 177:
				return "#CEFF8C";
			case 178:
				return "#8CAA52";
			case 179:
				return "#ADDF8C";
			case 180:
				return "#8CFF00";
			case 181:
				return "#ADBA9C";
			case 182:
				return "#63BA00";
			case 183:
				return "#529A00";
			case 184:
				return "#316500";
			case 192:
				return "#BDDFFF";
			case 193:
				return "#73CFFF";
			case 194:
				return "#31559C";
			case 195:
				return "#639AFF";
			case 196:
				return "#1075FF";
			case 197:
				return "#4275AD";
			case 198:
				return "#214573";
			case 199:
				return "#002073";
			case 200:
				return "#001042";
			case 208:
				return "#ADFFFF";
			case 209:
				return "#52FFFF";
			case 210:
				return "#008ABD";
			case 211:
				return "#52BACE";
			case 212:
				return "#00CFFF";
			case 213:
				return "#429AAD";
			case 214:
				return "#00658C";
			case 215:
				return "#004552";
			case 216:
				return "#002031";
			case 224:
				return "#CEFFEF";
			case 225:
				return "#ADEFDE";
			case 226:
				return "#31CFAD";
			case 227:
				return "#52EFBD";
			case 228:
				return "#00FFCE";
			case 229:
				return "#73AAAD";
			case 230:
				return "#00AA9C";
			case 231:
				return "#008A73";
			case 232:
				return "#004531";
			case 240:
				return "#ADFFAD";
			case 241:
				return "#73FF73";
			case 242:
				return "#63DF42";
			case 243:
				return "#00FF00";
			case 244:
				return "#21DF21";
			case 245:
				return "#52BA52";
			case 246:
				return "#00BA00";
			case 247:
				return "#008A00";
			case 248:
				return "#214521";
			case 15:
				return "#FFFFFF";
			case 31:
				return "#ECECEC";
			case 47:
				return "#DADADA";
			case 63:
				return "#C8C8C8";
			case 79:
				return "#B6B6B6";
			case 95:
				return "#A3A3A3";
			case 111:
				return "#919191";
			case 127:
				return "#7F7F7F";
			case 143:
				return "#6D6D6D";
			case 159:
				return "#5B5B5B";
			case 175:
				return "#484848";
			case 191:
				return "#363636";
			case 207:
				return "#242424";
			case 223:
				return "#121212";
			case 239:
				return "#000000";
			default:
				return ""
		}
	}

	function x(t, n) {
		e(88 + t, n);
		var r = 108;
		for (var i in M)
			for (var o = v(M[i].canvas), a = r; a < D.length; a++) dpoint = D.charCodeAt(a), col = 15 & dpoint, col == t && (j = 2 * (a - r), B(M[i], j % 32, Math.floor(j / 32), t, o)), col = dpoint >> 4 & 15, col == t && (j = 2 * (a - r) + 1, B(M[i], j % 32, Math.floor(j / 32), t, o))
	}

	function T(e) {
		return D.charCodeAt(88 + e)
	}

	function _(e) {
		return k(T(e))
	}
	var D, F = null,
		M = [];
	return {
		download: m,
		load: function(e) {
			D = e
		},
		draw: E,
		qr: C,
		getColor: _,
		getTitle: f,
		getCreator: h,
		getTown: d,
		getCreatorID: o,
		getTownID: a,
		getUnknownID: s,
		setColor: b,
		setTitle: p,
		setCreator: g,
		setTown: A,
		setCreatorID: c,
		setTownID: u,
		setUnknownID: l,
		getPal: k,
		setIndex: x,
		getIndex: T,
		copyCreator: r,
		pasteCreator: i,
		getWidth: w
	}
}();
$(function() {
	function e() {
		l && clearTimeout(l), l = setTimeout(function() {
			ACNL.qr($("#qr"))
		}, 3e3)
	}

	function t() {
		l && clearTimeout(l), l = !1
	}

	function n(t) {
		ACNL.load(t);
		for (var n = 0; 15 > n; n++) $("#col" + n).css("background-color", ACNL.getColor(n));
		f = 0, $(".col_pal").attr("class", "col_pal").each(function() {
			$(this).data("color") == ACNL.getIndex(f) && $(this).attr("class", "col_pal picked")
		}), $("#icon_title").val(ACNL.getTitle()), $("#icon_creator").val(ACNL.getCreator()), $("#icon_creator_id").val(ACNL.getCreatorID()), $("#icon_town").val(ACNL.getTown()), $("#icon_town_id").val(ACNL.getTownID()), ACNL.draw($("#acnl_icon")[0]), ACNL.draw($("#acnl_icon_zoom")[0]), ACNL.draw($("#acnl_icon_zoomier")[0]), e()
	}

	function r(e) {
		for (var t = $("<div>").attr("class", "col_pal_block"), n = 0; 9 > n; n++) t.append($("<div>").attr("class", "col_pal").css("background-color", ACNL.getPal(e + n)).data("color", e + n));
		return t
	}

	function i(e) {
		if (e[0].type.match("image.*")) {
			var t = new FileReader;
			t.onload = function(e) {
				qrcode.callback = function(e) {
					return e.length < 540 ? void alert("Sorry, I can't recognize this as a valid pattern. :-(") : 620 == e.length ? void n(e) : 540 == e.length ? (g += e, 540 == g.length ? void alert("Please input the second code next.") : 1080 == g.length ? void alert("Please input the third code next.") : 1620 == g.length ? void alert("Please input the last code next.") : 2160 == g.length ? (n(g), void(g = "")) : (g = "", void alert("Something, somewhere, went terribly wrong. Please start over. :-("))) : (alert("Whoah! That code doesn't look right, but I think I can fix it, attempting fix..."), 10 == e[104] ? void n(e) : (g += e.substr(0, 540), 540 == g.length ? void alert("Please input the second code next.") : 1080 == g.length ? void alert("Please input the third code next.") : 1620 == g.length ? void alert("Please input the last code next.") : 2160 == g.length ? (n(g), void(g = "")) : (g = "", void alert("Something, somewhere, went terribly wrong. Please start over. :-("))))
				}, qrcode.decode(e.target.result)
			}, t.readAsDataURL(e[0])
		} else {
			var t = new FileReader;
			t.onload = function(e) {
				n(e.target.result)
			}, t.readAsBinaryString(e[0])
		}
	}

	function o(e) {
		function t(e, t, r) {
			for (var i = 120, o = 0, a = 0; 256 > a; a++) {
				var s = ACNL.getPal(a);
				if (!(s.length < 7)) {
					var c = parseInt(s.substr(1, 2), 16),
						u = parseInt(s.substr(3, 2), 16),
						l = parseInt(s.substr(5, 2), 16),
						f = Math.abs(c - e) + Math.abs(u - t) + Math.abs(l - r);
					i > f && (i = f, o = a)
				}
			}
			n[o].c++
		}
		for (var n = [], r = 0; 256 > r; r++) n.push({
			n: r,
			c: 0
		});
		for (var r = 0; 4096 > r; r += 4) t(e.data[r], e.data[r + 1], e.data[r + 2]);
		for (n.sort(function(e, t) {
				return e.c > t.c ? -1 : e.c < t.c ? 1 : 0
			}); n.length > 15;) n.pop();
		for (var r = 0; 15 > r; r++) ACNL.setIndex(r, n[r].n)
	}

	function a(e) {
		function t(e, t, n) {
			for (var r = 765, i = 0, o = 0; 15 > o; o++) {
				var a = ACNL.getPal(ACNL.getIndex(o));
				if (!(a.length < 7)) {
					var s = parseInt(a.substr(1, 2), 16),
						c = parseInt(a.substr(3, 2), 16),
						u = parseInt(a.substr(5, 2), 16),
						l = Math.abs(s - e) + Math.abs(c - t) + Math.abs(u - n);
					r > l && (r = l, i = o)
				}
			}
			return i
		}
		for (var n = 0; 4096 > n; n += 4) {
			var r = Math.floor(n / 4) % 32,
				i = Math.floor(Math.floor(n / 4) / 32);
			ACNL.setColor(r, i, t(e.data[n], e.data[n + 1], e.data[n + 2]))
		}
		for (var n = 0; 15 > n; n++) $("#col" + n).css("background-color", ACNL.getColor(n));
		f = 0, $(".col_pal").attr("class", "col_pal").each(function() {
			$(this).data("color") == ACNL.getIndex(f) && $(this).attr("class", "col_pal picked")
		})
	}

	function s(e) {
		function t(e, t, i, o) {
			for (var a = {}, s = 120, c = 0, u = 0; 256 > u; u++) {
				var l = ACNL.getPal(u);
				if (!(l.length < 7)) {
					var f = parseInt(l.substr(1, 2), 16),
						h = parseInt(l.substr(3, 2), 16),
						d = parseInt(l.substr(5, 2), 16),
						p = Math.abs(f - t) + Math.abs(h - i) + Math.abs(d - o);
					s > p && (s = p, c = u), 120 > p && (a[u.toString()] = p)
				}
			}
			n[c].c++, r[e] = a
		}
		for (var n = [], r = [], i = 0; 256 > i; i++) n.push({
			n: i,
			c: 0
		});
		for (var i = 0; 4096 > i; i += 4) t(i / 4, e.data[i], e.data[i + 1], e.data[i + 2]);
		for (n.sort(function(e, t) {
				return e.c > t.c ? -1 : e.c < t.c ? 1 : 0
			}); n.length > 40;) n.pop();
		var o = [],
			a = 2097152;
		alert("Optimizing happens after you click ok - please stand by as this might take a while.");
		for (var s = 0; 4e3 > s && n.length > 16; s++) {
			for (var c = []; c.length < 15 && c.length < n.length;) {
				var u = n[Math.floor(Math.random() * n.length)].n; - 1 == $.inArray(u, c) && c.push(u)
			}
			var l = 0;
			for (var f in r) {
				var h = 750;
				for (var d in r[f]) - 1 != $.inArray(parseInt(d), c) && r[f][d] < h && (h = r[f][d]);
				if (l += h, l >= a) break
			}
			a > l && (a = l, o = c)
		}
		for (var i = 0; 15 > i && i < o.length; i++) ACNL.setIndex(i, o[i])
	}

	function c() {
		for (var e = 0; 15 > e; e++) ACNL.setIndex(e, 16 * e + 15)
	}

	function u() {
		for (var e = 0; 9 > e; e++) ACNL.setIndex(e, 48 + e);
		for (var e = 9; 15 > e; e++) ACNL.setIndex(e, 96 + e - 6)
	}
	var l = !1,
		f = 0;
	$("#icon_title").keyup(function() {
		$(this).val().length > 20 && $(this).val($(this).val().substr(0, 20)), ACNL.setTitle($(this).val()), e()
	}), $("#icon_creator").keyup(function() {
		$(this).val().length > 10 && $(this).val($(this).val().substr(0, 10)), ACNL.setCreator($(this).val()), e()
	}), $("#icon_town").keyup(function() {
		$(this).val().length > 10 && $(this).val($(this).val().substr(0, 10)), ACNL.setTown($(this).val()), e()
	}), $("#icon_creator_id").keyup(function() {
		ACNL.setCreatorID($(this).val()), e()
	}), $("#icon_town_id").keyup(function() {
		ACNL.setTownID($(this).val()), e()
	}), $("#unknown_id").keyup(function() {
		ACNL.setUnknownID($(this).val()), e()
	}), $("#acnl_gen").click(function() {
		ACNL.download()
	});
	var h = !1;
	$("#acnl_icon, #acnl_icon_zoom, #acnl_icon_zoomier").click(function(t) {
		var n = 0,
			r = 0;
		void 0 == t.offsetX ? (n = t.pageX - $(t.target).offset().left, r = t.pageY - $(t.target).offset().top) : (n = t.offsetX, r = t.offsetY);
		var i = Math.floor(n / ($(this).width() / ACNL.getWidth())),
			o = Math.floor(r / ($(this).height() / ACNL.getWidth()));
		ACNL.setColor(i, o, f), e()
	}).mousemove(function(e) {
		if (h && 1 == e.which) {
			t();
			var n = 0,
				r = 0;
			void 0 == e.offsetX ? (n = e.pageX - $(e.target).offset().left, r = e.pageY - $(e.target).offset().top) : (n = e.offsetX, r = e.offsetY);
			var i = Math.floor(n / ($(this).width() / ACNL.getWidth())),
				o = Math.floor(r / ($(this).height() / ACNL.getWidth()));
			ACNL.setColor(i, o, f)
		}
	}).mouseup(function() {
		h = !1, e()
	}).mousedown(function() {
		h = !0
	});
	for (var d = 0; 15 > d; d++) $("#col" + d).data("col", d).click(function() {
		$(".col_block").attr("class", "col_block"), $(this).attr("class", "col_block picked"), f = $(this).data("col"), $(".col_pal").attr("class", "col_pal").each(function() {
			$(this).data("color") == ACNL.getIndex(f) && $(this).attr("class", "col_pal picked")
		})
	});
	$(".question").click(function() {
		$(this).children(".ans").toggle()
	}), $(".ans").hide();
	for (var d = 0; 255 > d; d += 16) $("#color_pal").append(r(d));
	for (var p = $("<div>").attr("class", "col_pal_row"), d = 0; 15 > d; d++) p.append($("<div>").attr("class", "col_pal").css("background-color", ACNL.getPal((d << 4) + 15)).data("color", (d << 4) + 15));
	$("#color_pal").append(p), $(".col_pal").click(function() {
		$(".col_pal").attr("class", "col_pal"), $(this).attr("class", "col_pal picked");
		var t = $(this).data("color");
		ACNL.setIndex(f, t), $("#col" + f).css("background-color", ACNL.getColor(f)), e()
	}), n(window.atob("RQBtAHAAdAB5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVAG4AawBuAG8AdwBuAAAAAAAAAAAAVQBuAGsAbgBvAHcAbgAAAAAAAABeCw8fLz9PX29/j5+vv8/f73YKCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=")), $("#creator_copy").click(function() {
		ACNL.copyCreator(), $("#creator_copy").val("Creator copied!"), setTimeout(function() {
			$("#creator_copy").val("Copy creator")
		}, 1e3), $("#creator_paste").val("Paste creator (" + ACNL.getCreator() + " / " + ACNL.getTown() + ")")
	}), $("#creator_paste").click(function() {
		ACNL.pasteCreator(), $("#icon_creator").val(ACNL.getCreator()), $("#icon_creator_id").val(ACNL.getCreatorID()), $("#icon_town").val(ACNL.getTown()), $("#icon_town_id").val(ACNL.getTownID()), e()
	});
	var g = "";
	$("#files").change(function(e) {
		i(e.target.files), $("#files").val("")
	}), $("#img_files").change(function(t) {
		if (t.target.files[0].type.match("image.*")) {
			var n = new FileReader;
			n.onload = function(t) {
				var n = new Image;
				n.onload = function() {
					var t = document.createElement("canvas");
					t.width = 32, t.height = 32;
					var r = t.getContext("2d");
					r.drawImage(n, 0, 0, 32, 32);
					var i = r.getImageData(0, 0, 32, 32);
					switch ($("#conv_meth").val()) {
						case "top":
							o(i);
							break;
						case "lowest":
							s(i);
							break;
						case "grey":
							c(i);
							break;
						case "sepia":
							u(i)
					}
					a(i), e()
				}, n.src = t.target.result
			}, n.readAsDataURL(t.target.files[0])
		}
		$("#img_files").val("")
	}), $("#zoomin").click(function() {
		var e = 64 * Math.floor($("#acnl_icon_zoomier")[0].width / 64);
		$("#acnl_icon_zoomier")[0].width = e + 64, $("#acnl_icon_zoomier")[0].height = e + 64, ACNL.draw($("#acnl_icon_zoomier")[0])
	}), $("#zoomout").click(function() {
		var e = 64 * Math.floor($("#acnl_icon_zoomier")[0].width / 64);
		256 > e && (e = 256), $("#acnl_icon_zoomier")[0].width = e - 64, $("#acnl_icon_zoomier")[0].height = e - 64, ACNL.draw($("#acnl_icon_zoomier")[0])
	})
});