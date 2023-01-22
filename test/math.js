import { expect } from 'chai';

import { vec2, vec3, vec4, mat2, mat3, mat4 } from '../dist/math.js';

describe('Math', function () {
  describe('vec2', function () {
    it('can be constructed', function () {
      const v = new vec2(2, 3);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
    });

    it('makes the zero vector', function () {
      const v = vec2.zero();
      expect(v.x).to.equal(0);
      expect(v.y).to.equal(0);
    });

    it('can be constructed from vec3', function () {
      const v = vec2.fromVec3(new vec3(2, 3, 4));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
    });

    it('can be constructed from vec4', function () {
      const v = vec2.fromVec4(new vec4(2, 3, 4, 5));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
    });

    it('can be compared with an identical vector', function () {
      const v = new vec2(2, 3);
      const u = new vec2(2, 3);
      expect(v.equals(u)).to.be.true;
    });

    it('can be compared with a different vector', function () {
      const v = new vec3(2, 3);
      const u = new vec3(4, 5);
      expect(v.equals(u)).to.be.false;
    });

    it('can be assigned', function () {
      const v = new vec2(2, 3);
      v.assign(new vec2(4, 5));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(5);
    });

    it('can be assigned from vec3', function () {
      const v = new vec2(2, 3);
      v.assign(new vec3(4, 5, 6));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(5);
    });

    it('can be assigned from vec4', function () {
      const v = new vec2(2, 3);
      v.assign(new vec4(4, 5, 6, 7));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(5);
    });

    it('can be cloned', function () {
      const v = new vec2(2, 3);
      const u = v.clone();
      u.x = 4;
      u.y = 5;
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
    });

    it('can be converted to vec3', function () {
      const v = new vec2(2, 3);
      const u = v.toVec3(4);
      v.x = 5;
      v.y = 6;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
      expect(u.z).to.equal(4);
    });

    it('defaults Z to 0 when unspecified upon conversion to vec3', function () {
      const v = new vec2(2, 3);
      const u = v.toVec3();
      expect(u.z).to.equal(0);
    });

    it('can be converted to vec4', function () {
      const v = new vec2(2, 3);
      const u = v.toVec4(4, 5);
      v.x = 6;
      v.y = 7;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
      expect(u.z).to.equal(4);
      expect(u.w).to.equal(5);
    });

    it('defaults Z and W when unspecified upon conversion to vec4', function () {
      const v = new vec2(2, 3);
      const u = v.toVec4();
      expect(u.z).to.equal(0);
      expect(u.w).to.equal(1);
    });

    it('can be converted to a homogeneous vec3', function () {
      const v = new vec2(2, 3);
      const u = v.toHomogeneous();
      v.x = 4;
      v.y = 5;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
      expect(u.z).to.equal(1);
    });

    it('negates in place', function () {
      const v = new vec2(2, 3);
      v.neg_();
      expect(v.x).to.equal(-2);
      expect(v.y).to.equal(-3);
    });

    it('negates', function () {
      const v = new vec2(2, 3);
      const u = v.neg();
      v.x = 4;
      v.y = 5;
      expect(u.x).to.equal(-2);
      expect(u.y).to.equal(-3);
    });

    it('can be added in place', function () {
      const v = new vec2(2, 3);
      const u = new vec2(4, 5);
      v.add_(u);
      expect(v.x).to.equal(6);
      expect(v.y).to.equal(8);
      expect(u.x).to.equal(4);
      expect(u.y).to.equal(5);
    });

    it('can be added', function () {
      const v = new vec2(2, 3);
      const u = new vec2(4, 5);
      const w = v.add(u);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.equal(4);
      expect(u.y).to.equal(5);
      expect(w.x).to.equal(6);
      expect(w.y).to.equal(8);
    });

    it('can be subtracted in place', function () {
      const v = new vec2(2, 3);
      const u = new vec2(4, 5);
      v.sub_(u);
      expect(v.x).to.equal(-2);
      expect(v.y).to.equal(-2);
      expect(u.x).to.equal(4);
      expect(u.y).to.equal(5);
    });

    it('can be subtracted', function () {
      const v = new vec2(2, 3);
      const u = new vec2(4, 5);
      const w = v.sub(u);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.equal(4);
      expect(u.y).to.equal(5);
      expect(w.x).to.equal(-2);
      expect(w.y).to.equal(-2);
    });

    it('can be multiplied by scalar in place', function () {
      const v = new vec2(2, 3);
      v.mul_(4);
      expect(v.x).to.equal(8);
      expect(v.y).to.equal(12);
    });

    it('can be multiplied by scalar', function () {
      const v = new vec2(2, 3);
      const u = v.mul(4);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.equal(8);
      expect(u.y).to.equal(12);
    });

    it('can be divided by scalar in place', function () {
      const v = new vec2(4, 6);
      v.div_(2);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
    });

    it('can be divided by scalar', function () {
      const v = new vec2(4, 6);
      const u = v.div(2);
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(6);
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
    });

    it('has dot product', function () {
      const v = new vec2(2, 3);
      const u = new vec2(4, 5);
      expect(v.dot(u)).to.equal(23);
    });

    it('has modulus (aka length)', function () {
      const v = new vec2(3, 4);
      expect(v.modulus()).to.equal(5);
      expect(v.length()).to.equal(5);
      expect(v.squareLength()).to.equal(25);
    });

    it('can be normalized in place', function () {
      const v = new vec2(2, 3);
      v.normalize_();
      expect(v.x).to.be.approximately(0.5547, 0.0001);
      expect(v.y).to.be.approximately(0.83205, 0.0001);
    });

    it('can be normalized', function () {
      const v = new vec2(2, 3);
      const u = v.normalize();
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.be.approximately(0.5547, 0.0001);
      expect(u.y).to.be.approximately(0.83205, 0.0001);
    });

    it('measures angle in upper-right quadrant', function () {
      const v = new vec2(1, Math.sqrt(3));
      const u = new vec2(Math.sqrt(3), 1);
      expect(v.angle(new vec2(2, 0))).to.be.approximately(Math.PI / 3, 0.0001);
      expect(v.angle(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in upper-left quadrant', function () {
      const v = new vec2(-Math.sqrt(3), 1);
      const u = new vec2(-1, Math.sqrt(3));
      expect(v.angle(new vec2(2, 0))).to.be.approximately((Math.PI * 5) / 6, 0.0001);
      expect(v.angle(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in lower-right quadrant', function () {
      const v = new vec2(1, -Math.sqrt(3));
      const u = new vec2(Math.sqrt(3), -1);
      expect(v.angle(new vec2(2, 0))).to.be.approximately(Math.PI / 3, 0.0001);
      expect(v.angle(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in lower-left quadrant', function () {
      const v = new vec2(-Math.sqrt(3), -1);
      const u = new vec2(-1, -Math.sqrt(3));
      expect(v.angle(new vec2(2, 0))).to.be.approximately((Math.PI * 5) / 6, 0.0001);
      expect(v.angle(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in upper-right quadrant against normal', function () {
      const v = new vec2(0.5, Math.sqrt(3 / 4));
      const u = new vec2(Math.sqrt(3 / 4), 0.5);
      expect(v.anglen(new vec2(1, 0))).to.be.approximately(Math.PI / 3, 0.0001);
      expect(v.anglen(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in upper-left quadrant against normal', function () {
      const v = new vec2(-Math.sqrt(3 / 4), 0.5);
      const u = new vec2(-0.5, Math.sqrt(3 / 4));
      expect(v.anglen(new vec2(1, 0))).to.be.approximately((Math.PI * 5) / 6, 0.0001);
      expect(v.anglen(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in lower-right quadrant against normal', function () {
      const v = new vec2(0.5, -Math.sqrt(3 / 4));
      const u = new vec2(Math.sqrt(3 / 4), -0.5);
      expect(v.anglen(new vec2(1, 0))).to.be.approximately(Math.PI / 3, 0.0001);
      expect(v.anglen(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('measures angle in lower-left quadrant against normal', function () {
      const v = new vec2(-Math.sqrt(3 / 4), -0.5);
      const u = new vec2(-0.5, -Math.sqrt(3 / 4));
      expect(v.anglen(new vec2(1, 0))).to.be.approximately((Math.PI * 5) / 6, 0.0001);
      expect(v.anglen(u)).to.be.approximately(Math.PI / 6, 0.0001);
    });

    it('translates in place', function () {
      const v = new vec2(2, 3);
      v.translate_(4, 5);
      expect(v.x).to.equal(6);
      expect(v.y).to.equal(8);
    });

    it('translates', function () {
      const v = new vec2(2, 3);
      const u = v.translate(4, 5);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.equal(6);
      expect(u.y).to.equal(8);
    });

    it('translates by another vector in place', function () {
      const v = new vec2(2, 3);
      v.translatev_(new vec2(4, 5));
      expect(v.x).to.equal(6);
      expect(v.y).to.equal(8);
    });

    it('translates by another vector', function () {
      const v = new vec2(2, 3);
      const u = v.translatev(new vec2(4, 5));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(u.x).to.equal(6);
      expect(u.y).to.equal(8);
    });

    it('rotates in place', function () {
      const v = new vec2(4, 5);
      v.rotate_(Math.PI / 2, 2, 3);
      expect(v.x).to.equal(0);
      expect(v.y).to.equal(5);
    });

    it('rotates', function () {
      const v = new vec2(4, 5);
      const u = v.rotate(Math.PI / 2, 2, 3);
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(5);
      expect(u.x).to.equal(0);
      expect(u.y).to.equal(5);
    });

    it('rotates around another vector in place', function () {
      const v = new vec2(4, 5);
      v.rotatec_(Math.PI / 2, new vec2(2, 3));
      expect(v.x).to.equal(0);
      expect(v.y).to.equal(5);
    });

    it('rotates around another vector', function () {
      const v = new vec2(4, 5);
      const u = v.rotatec(Math.PI / 2, new vec2(2, 3));
      expect(v.x).to.equal(4);
      expect(v.y).to.equal(5);
      expect(u.x).to.equal(0);
      expect(u.y).to.equal(5);
    });

    it('scales in place', function () {
      const v = new vec2(6, 7);
      v.scale_(2, 3, 4, 5);
      expect(v.x).to.equal(8);
      expect(v.y).to.equal(11);
    });

    it('scales', function () {
      const v = new vec2(6, 7);
      const u = v.scale(2, 3, 4, 5);
      expect(v.x).to.equal(6);
      expect(v.y).to.equal(7);
      expect(u.x).to.equal(8);
      expect(u.y).to.equal(11);
    });

    it('scales around another vector in place', function () {
      const v = new vec2(6, 7);
      v.scalec_(2, 3, new vec2(4, 5));
      expect(v.x).to.equal(8);
      expect(v.y).to.equal(11);
    });

    it('scales around another vector', function () {
      const v = new vec2(6, 7);
      const u = v.scalec(2, 3, new vec2(4, 5));
      expect(v.x).to.equal(6);
      expect(v.y).to.equal(7);
      expect(u.x).to.equal(8);
      expect(u.y).to.equal(11);
    });
  });

  describe('vec3', function () {
    it('can be constructed', function () {
      const v = new vec3(2, 3, 4);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
    });

    it('makes the zero vector', function () {
      const v = vec3.zero();
      expect(v.x).to.equal(0);
      expect(v.y).to.equal(0);
      expect(v.z).to.equal(0);
    });

    it('can be constructed from vec2', function () {
      const v = vec3.fromVec2(new vec2(2, 3), 4);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
    });

    it('can be constructed from vec4', function () {
      const v = vec3.fromVec4(new vec4(2, 3, 4, 5));
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
    });

    it('can be compared with an identical vector', function () {
      const v = new vec3(2, 3, 4);
      const u = new vec3(2, 3, 4);
      expect(v.equals(u)).to.be.true;
    });

    it('can be compared with a different vector', function () {
      const v = new vec3(2, 3, 4);
      const u = new vec3(5, 6, 7);
      expect(v.equals(u)).to.be.false;
    });

    it('can be assigned from vec2', function () {
      const v = new vec3(2, 3, 4);
      v.assignVec2(new vec2(5, 6));
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(6);
      expect(v.z).to.equal(4);
    });

    it('can be assigned', function () {
      const v = new vec3(2, 3, 4);
      v.assign(new vec3(5, 6, 7));
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(6);
      expect(v.z).to.equal(7);
    });

    it('can be assigned from vec4', function () {
      const v = new vec3(2, 3, 4);
      v.assignVec4(new vec4(5, 6, 7, 8));
      expect(v.x).to.equal(5);
      expect(v.y).to.equal(6);
      expect(v.z).to.equal(7);
    });

    it('can be cloned', function () {
      const v = new vec3(2, 3, 4);
      const u = v.clone();
      u.x = 5;
      u.y = 6;
      u.z = 7;
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
    });

    it('can be converted to vec2', function () {
      const v = new vec3(2, 3, 4);
      const u = v.toVec2();
      u.x = 5;
      u.y = 6;
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
    });

    it('can be converted to vec4', function () {
      const v = new vec3(2, 3, 4);
      const u = v.toVec4(5);
      v.x = 6;
      v.y = 7;
      v.z = 8;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
      expect(u.z).to.equal(4);
      expect(u.w).to.equal(5);
    });

    it('has the xy projection', function () {
      const v = new vec3(2, 3, 4);
      const u = v.xy;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
    });

    it('has the xz projection', function () {
      const v = new vec3(2, 3, 4);
      const u = v.xz;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(4);
    });

    it('has the yz projection', function () {
      const v = new vec3(2, 3, 4);
      const u = v.yz;
      expect(u.x).to.equal(3);
      expect(u.y).to.equal(4);
    });

    it('can be converted to a homogeneous vec4', function () {
      const v = new vec3(2, 3, 4);
      const u = v.toHomogeneous();
      v.x = 5;
      v.y = 6;
      v.z = 7;
      expect(u.x).to.equal(2);
      expect(u.y).to.equal(3);
      expect(u.z).to.equal(4);
      expect(u.w).to.equal(1);
    });

    it('can be converted to a standard vec2', function () {
      const v = new vec3(6, 4, 2);
      const u = v.toStandard();
      v.x = 9;
      v.y = 8;
      v.z = 7;
      expect(u.x).to.equal(3);
      expect(u.y).to.equal(2);
    });

    // TODO
  });

  describe('vec4', function () {
    it('can be constructed', function () {
      const v = new vec4(2, 3, 4, 5);
      expect(v.x).to.equal(2);
      expect(v.y).to.equal(3);
      expect(v.z).to.equal(4);
      expect(v.w).to.equal(5);
    });

    // TODO
  });

  describe('mat2', function () {
    it('can be compared with an identical one', function () {
      const m1 = new mat2(2, 3, 4, 5);
      const m2 = new mat2(2, 3, 4, 5);
      expect(m1.equals(m2)).to.be.true;
    });

    it('can be compared with a different one', function () {
      const m1 = new mat2(2, 3, 4, 5);
      const m2 = new mat2(6, 7, 8, 9);
      expect(m1.equals(m2)).to.be.false;
    });

    it('makes the identity matrix', function () {
      expect(mat2.identity().equals(new mat2(1, 0, 0, 1))).to.be.true;
    });

    // TODO

    it('has a determinant', function () {
      const m = new mat2(2, 3, 4, 5);
      expect(m.determinant()).to.be.approximately(-2, 0.0001);
    });

    it('can be inverted in place', function () {
      const m1 = new mat2(2, 3, 4, 5);
      const m2 = m1.clone().invert_();
      const m3 = m1.mul(m2);
      expect(m3.m00).to.be.approximately(1, 0.0001);
      expect(m3.m01).to.be.approximately(0, 0.0001);
      expect(m3.m10).to.be.approximately(0, 0.0001);
      expect(m3.m11).to.be.approximately(1, 0.0001);
    });

    it('can be inverted', function () {
      const m1 = new mat2(2, 3, 4, 5);
      const m2 = m1.mul(m1.invert());
      expect(m2.m00).to.be.approximately(1, 0.0001);
      expect(m2.m01).to.be.approximately(0, 0.0001);
      expect(m2.m10).to.be.approximately(0, 0.0001);
      expect(m2.m11).to.be.approximately(1, 0.0001);
    });
  });

  describe('mat3', function () {
    it('can be compared with an identical one', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 10);
      const m2 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 10);
      expect(m1.equals(m2)).to.be.true;
    });

    it('can be compared with a different one', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 10);
      const m2 = new mat3(10, 9, 8, 7, 6, 5, 4, 3, 2);
      expect(m1.equals(m2)).to.be.false;
    });

    it('makes the identity matrix', function () {
      const m = mat3.identity();
      expect(m.equals(new mat3(1, 0, 0, 0, 1, 0, 0, 0, 1))).to.be.true;
    });

    it('makes a translation matrix', function () {
      const m = mat3.translation(2, 3);
      expect(m.equals(new mat3(1, 0, 2, 0, 1, 3, 0, 0, 1))).to.be.true;
    });

    it('makes a scaling matrix', function () {
      const m = mat3.scaling(2, 3, 4);
      expect(m.equals(new mat3(2, 0, 0, 0, 3, 0, 0, 0, 4))).to.be.true;
    });

    it('can be assigned to', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 10);
      const m2 = new mat3(11, 12, 13, 14, 15, 16, 17, 18, 19);
      m1.assign(m2);
      expect(m1.equals(m2)).to.be.true;
    });

    it('can be cloned', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 10);
      const m2 = m1.clone();
      expect(m1).to.not.equal(m2);
      expect(m1.equals(m2)).to.be.true;
    });

    it('has a determinant', function () {
      const m = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 11);
      expect(m.determinant()).to.be.approximately(-3, 0.0001);
    });

    it('can be inverted in place', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 12);
      const m2 = m1.clone().invert_();
      const m3 = m1.mul(m2);
      expect(m3.m00).to.be.approximately(1, 0.0001);
      expect(m3.m01).to.be.approximately(0, 0.0001);
      expect(m3.m02).to.be.approximately(0, 0.0001);
      expect(m3.m10).to.be.approximately(0, 0.0001);
      expect(m3.m11).to.be.approximately(1, 0.0001);
      expect(m3.m12).to.be.approximately(0, 0.0001);
      expect(m3.m20).to.be.approximately(0, 0.0001);
      expect(m3.m21).to.be.approximately(0, 0.0001);
      expect(m3.m22).to.be.approximately(1, 0.0001);
    });

    it('can be inverted', function () {
      const m1 = new mat3(2, 3, 4, 5, 6, 7, 8, 9, 12);
      const m2 = m1.mul(m1.invert());
      expect(m2.m00).to.be.approximately(1, 0.0001);
      expect(m2.m01).to.be.approximately(0, 0.0001);
      expect(m2.m02).to.be.approximately(0, 0.0001);
      expect(m2.m10).to.be.approximately(0, 0.0001);
      expect(m2.m11).to.be.approximately(1, 0.0001);
      expect(m2.m12).to.be.approximately(0, 0.0001);
      expect(m2.m20).to.be.approximately(0, 0.0001);
      expect(m2.m21).to.be.approximately(0, 0.0001);
      expect(m2.m22).to.be.approximately(1, 0.0001);
    });
  });

  describe('mat4', function () {
    it('can be compared with an identical one', function () {
      const m1 = new mat4(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
      const m2 = new mat4(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
      expect(m1.equals(m2)).to.be.true;
    });

    it('can be compared with a different one', function () {
      const m1 = new mat4(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
      const m2 = new mat4(13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2);
      expect(m1.equals(m2)).to.be.false;
    });

    it('makes the identity matrix', function () {
      const m1 = mat3.identity();
      const m2 = new mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      expect(m1.equals(m2)).to.be.true;
    });
  });

  // TODO
});
