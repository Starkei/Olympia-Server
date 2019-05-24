module.exports = function (chai, app, data) {
    return describe("Delete requests", () => {
        it("should delete from database by id and return status code 200", (done) => {
            chai
                .request(app)
                .delete(`/product/${data._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
}