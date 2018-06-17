const connection = require('../config.js');
const { graphql, buildSchema } = require('graphql');

const { usersSchema, usersQuery } = require('../schemas/users')(buildSchema);
const { userDetailsSchema, userDetailsQuery } = require('../schemas/userDetails')(buildSchema);
const { productSchema, productQuery } = require('../schemas/product')(buildSchema);
const { productCategorySchema, productCategoryQuery } = require('../schemas/productCategory')(buildSchema);


module.exports = {
    allCat: (req, res) => {
        connection.query('SELECT * FROM product_category_name', async (err, rows) => {
            if (!err) {
                console.log(rows)
                const response = await graphql(productCategorySchema, productCategoryQuery, {productCategory: rows});
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(
                    {
                        'result' : 'success',
                        'data': response.data
                    })
                );
            } else {
                res.status(400).send(err);
            }
        });
    },

    // addProduct: (req, res, next) => {
    //     let response;
    //     const id_u = req.body.id_u;
    //     const id_pc = req.boddy.id_pc;
    //     const name = req.body.name;
    //     const price = req.body.price;
    //     const description = req.body.description;

    //     if (
    //         typeof id_u !== 'undefined'
    //         && typeof id_pc !== 'undefined'
    //         && typeof name !== 'undefined'
    //         && typeof price !== 'undefined'
    //         && typeof description !== 'undefined'
    //     ) {
    //         connection.query('INSERT INTO product (id_pc, id_u, name, price, description)  VALUES (?, ?, ?, ?, ?)',
    //             [id_pc, id_u, name, price, description],
    //             async (err, result) => {
    //                 handleSuccessOrErrorMessage(err, result, res);
    //             });

    //     } else {
    //         response = {
    //             'result' : 'error',
    //             'msg' : 'Please fill required details'
    //         };
    //         res.setHeader('Content-Type', 'application/json');
    //         res.status(200).send(JSON.stringify(response));
    //     }
    // },
    
    // register // najpierw userDetails potem user
    // addUser: (req, res, next) => {
    //     let response;
    //     const name = req.body.name;
    //     const surname = req.body.surname;
    //     const address = req.body.address;
    //     const phone = req.body.phone;
    //     const email = req.body.email;
    //     const login = req.body.login;
    //     const password = req.body.password;
    //     var detail_id;
    //     if (
    //         typeof name !== 'undefined'
    //         && typeof surname !== 'undefined'
    //         && typeof address !== 'undefined'
    //         && typeof phone !== 'undefined'
    //         && typeof email !== 'undefined'
    //         && typeof login !== 'undefined'
    //         && typeof password !== 'undefined'
    //     ) {
    //         connection.query('INSERT INTO user_details (name, surname, address, phone, email)  VALUES (?, ?, ?, ?, ?)',
    //             [name,surname,address,phone,email],
    //             async (err, result) => {
    //                 detail_id = await result.insertId;
    //                 connection.query('INSERT INTO user (username,password,id_ud) VALUES (?,?,?)',
    //                 [login,password,detail_id],
    //                 async (err, result) => {
    //                     handleSuccessOrErrorMessage(err, result, res);
    //                 });
    //             });

    //     } else {
    //         response = {
    //             'result' : 'error',
    //             'msg' : 'Please fill required details'
    //         };
    //         res.setHeader('Content-Type', 'application/json');
    //         res.status(200).send(JSON.stringify(response));
    //     }
    // },


    // buyProduct   //p_id u_id
    // buyProduct: (req, res, next) => {
    //     let response;
    //     const p_id = req.body.p_id;
    //     const u_id = req.body.u_id;
    //     if (
    //         typeof p_id !== 'undefined'
    //         && typeof u_id !== 'undefined'
    //     ) {
    //         connection.query('INSERT INTO `order` (p_id,u_id,date) VALUES (?,?,now())', 
    //         [p_id,u_id],
    //         async (err, result) => {
    //             handleSuccessOrErrorMessage(err, result, res);
    //         });            

    //     } else {
    //         response = {
    //             'result' : 'error',
    //             'msg' : 'Please fill required details'
    //         };
    //         res.setHeader('Content-Type', 'application/json');
    //         res.status(200).send(JSON.stringify(response));
    //     }
    // },
    

    // editMyInfo    //update user inner join user_details on id_ud = udid set name = ?,surname = ?,adress = ?, phone = ?,email = ? where uid = ?'
    // editMyInfo: (req, res) => {
    //     let response;
    //     const id = req.body.id;
    //     const name = req.body.name;
    //     const surname = req.body.surname;
    //     const adress = req.body.adress;
    //     const phone = req.body.phone;
    //     const email = req.body.email;
    //     if (
    //         typeof id !== 'undefined' &&
    //         typeof name !== 'undefined' &&
    //         typeof surname !== 'undefined' &&
    //         typeof adress !== 'undefined' &&
    //         typeof phone !== 'undefined' &&
    //         typeof email !== 'undefined'

    //     ) {
    //         connection.query('update user inner join user_details on id_ud = udid set name = ?,surname = ?,adress = ?, phone = ?,email = ? where uid = ?',
    //             [name,surname,address,phone,email,id],
    //             async (err, result) => {
    //                 // console.log('edit')
    //                 handleSuccessOrErrorMessage(err, result, res);
    //             });
    //     } else {
    //         response = {'result' : name, 'msg' : 'Please fill required information'};
    //         res.setHeader('Content-Type', 'application/json');
    //         res.send(200, JSON.stringify(response));
    //     }
    // }, 
    // myInfo SELECT * from user inner join user_details on id_ud = udid where uid = ?;
    myInfo: (req, res) => {
        connection.query('SELECT * from user inner join user_details on id_ud = udid where uid = ?', [req.params.id], async (err, rows) => {
            const response = await graphql(userDetailsSchema, userDetailsQuery, {userDetails: rows});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': response.data
                })
            );
        })
    },

    // deleteUser   update user set isDelete = 1 where uid = ?'
    // deleteUser: (req, res) => {
    //     connection.query('update user set isDelete = 1 where uid = ?',
    //         [req.params.id],
    //         async (err, result) => {
    //             // console.log('edit')
    //             handleSuccessOrErrorMessage(err, result, res);
    //         });
    // },
    // deleteProduct   update product set isDelete = 1 where pid = ?'
    // deleteProduct: (req, res) => {
    //     connection.query('update product set isDelete = 1 where pid = ?',
    //         [req.params.id],
    //         async (err, result) => {
    //             // console.log('edit')
    //             handleSuccessOrErrorMessage(err, result, res);
    //         });
    // },
    
    // allProducts SELECT * from product where isBought = 0 and isDeleted = 0 //wszystki produkty
    allProducts: (req, res) => {
        connection.query('SELECT * from product where isBought = 0 and isDeleted = 0', async (err, rows) => {
            if(!err){
                // console.log(rows);
                const response = await graphql(productSchema, productQuery, {product: rows});
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(
                    {
                        'result' : 'success',
                        'data': response.data
                    })
                );
            }
        })
    },

    // procuctBoughtID SELECT * from order inner join product on id_p = pid where id_u = ?   //koszyk
    productBoughtId: (req, res) => {
        connection.query('SELECT * from `order` inner join product on id_p = pid where `order`.id_u = ?', [req.params.id], async (err, rows) => {
            const response = await graphql(productSchema, productQuery, {product: rows});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': response.data
                })
            );
        })
    },

    // productCat SELECT * from product where id_pc = ? and isBought = 0 and isDeleted = 0  //produkty po kat
    productCat: (req, res) => {
        connection.query('SELECT * from product where id_pc = ?', [req.params.id], async (err, rows) => {
            console.log(rows)
            const response = await graphql(productSchema, productQuery, {product: rows});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': response.data
                })
            );
        })
    },

    // productId SELECT * from product where id_u = ? //produkty user o takim id
    productId: (req, res) => {
        connection.query('SELECT * from product where id_u = ?', [req.params.id], async (err, rows) => {
            const response = await graphql(productSchema, productQuery, {product: rows});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': response.data
                })
            );
        })
    },

    //LogIn SELECT * from user inner join user_details on id_ud = udid where username = ? and password = ? and isDelete = 0
    // login: (req, res, next) => {
    //     let response;
    //     const log = req.body.log;
    //     const password = req.body.password;
    //     if (
    //         typeof log !== 'undefined'
    //         && typeof password !== 'undefined'
    //     ) {
    //         connection.query('SELECT * from user inner join user_details on id_ud = udid where username = ? and password = ? and isDelete = 0', 
    //         [log,password], async (err, rows) => {
    //             const response = await graphql(usersSchema, usersQuery, {users: rows});
    //             res.setHeader('Content-Type', 'application/json');
    //             res.status(200).send(JSON.stringify(
    //                 {
    //                     'result' : 'success',
    //                     'data': response.data
    //                 })
    //             );
    //         })            
    //     } else {
    //         response = {
    //             'result' : 'error',
    //             'msg' : 'Please fill required details'
    //         };
    //         res.setHeader('Content-Type', 'application/json');
    //         res.status(200).send(JSON.stringify(response));
    //     }
    // },

    isLogin: (req, res) => {
        connection.query('SELECT * from user where username = ?', [req.params.log], async (err, rows) => {
            const response = await graphql(usersSchema, usersQuery, {users: rows});
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(
                {
                    'result' : 'success',
                    'data': response.data
                })
            );
        })
    }
};

function handleSuccessOrErrorMessage(err, result, res) {
    if (!err){
        let response;
        if (result.affectedRows != 0) {
            response = {'result' : 'success'};
        } else {
            response = {'msg' : 'No Result Found'};
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(err);
    }
}
