module.exports = function (chai, app, data) {
    return describe("Post requests", () => {
        it("should add product to database and return status code 200", (done) => {
            let productToPost = {
                type: ["Одежда"],
                currency: "бел.руб",
                description: "Шорты женские Smmash – лучший вариант для стильных девушек, подойдут для занятий фитнесом, кросс-фитом и просто для занятий в зале.",
                firm: "Smash",
                image: "http://bigsport.by/userfiles/shop/large_shop/21206_shorty-smmash-zhenskie-23021.jpeg",
                price: 123,
                title: "Шорты Smash (Женские) 23021"
            };
            chai
                .request(app)
                .post("/product")
                .send(productToPost)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("_id");
                    productToPost = {
                        _id: res.body._id,
                        ...productToPost
                    };
                    res.body.should.to.deep.equal(productToPost);
                    data.data = res.body;
                    done();
                });
        });
    });
}