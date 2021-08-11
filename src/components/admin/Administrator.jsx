import {blogCreate,blogEdit,blogList} from './blog'
import {commentCreate,commentEdit,commentList} from './comment'
import {faqCreate,faqEdit,faqList} from './faq'
import {shippingCreate,shippingEdit,shippingList} from './shipping'
import {storeInfoCreate,storeInfoEdit,storeInfoList} from './storeInfo'
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { userList, userCreate, userEdit } from './user';
import {productList, productCreate, productEdit} from './product'
import restProvider from 'ra-data-simple-rest'

  const dataProvider=restProvider(`${process.env.REACT_APP_URL}`);

const Administrator = () => (

    <Admin dataProvider={dataProvider}>
      <Resource name="user" list={userList} edit={userEdit} create={userCreate}/>
      <Resource name="product" list={productList} edit={productEdit} create={productCreate}/>
      <Resource name="blog" list={blogList} edit={blogEdit} create={blogCreate}/>
      <Resource name="comment" list={commentList} edit={commentEdit} create={commentCreate}/>
      <Resource name="faq" list={faqList} edit={faqEdit} create={faqCreate}/>
    </Admin>
    
);

export default Administrator;