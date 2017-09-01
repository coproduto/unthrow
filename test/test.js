const expect = require('chai').expect;
const unthrow = require('../index');

describe('Unthrow', () => {
    it('should return a Result', (done) => {
	const promise = new Promise(resolve => resolve(1));
	unthrow(promise).then(result => {
	    expect('status' in result).to.be.true;
	    done();
	});
    });

    it('should return a Ok Result on success', (done) => {
	const promise = new Promise(resolve => resolve(2));
	unthrow(promise).then(result => {
	    expect(result.status).to.equal('Ok');
	    done();
	});
    });

    it('should return promise value on success', (done) => {
	const promise = new Promise(resolve => resolve(3));
	unthrow(promise).then(result => {
	    expect(result.value).to.equal(3);
	    done();
	});
    });

    it('should not return error on success', (done) => {
	const promise = new Promise(resolve => resolve(4));
	unthrow(promise).then(result => {
	    expect(result.error).to.be.undefined;
	    done();
	});
    });

    it('should return an Error result on failure', (done) => {
	const promise = new Promise(() => { throw new Error() });
	unthrow(promise).then(result => {
	    expect(result.status).to.equal('Error');
	    done();
	});
    });

    it('should return an error on failure', (done) => {
	const err = new Error();
	const promise = new Promise(() => { throw err });
	unthrow(promise).then(result => {
	    expect(result.error).to.deep.equal(err);
	    done();
	});
    });

    it('should not return a value on failure', (done) => {
	const promise = new Promise(() => { throw new Error() });
	unthrow(promise).then(result => {
	    expect(result.value).to.be.undefined;
	    done();
	});
    });
});
