const products = [];

 const getAdminController=(req, res, next)=>{
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  const postAdminController=(req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  };
  module.exports.getAdminController=getAdminController;
  module.exports.postAdminController=postAdminController;