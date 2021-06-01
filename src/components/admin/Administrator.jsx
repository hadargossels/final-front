import { UserList, userCreate,userEdit } from './users';
import {productList, productCreate,productEdit} from './product'
import {blogCreate,blogEdit,blogList} from './blog'
import {commentCreate,commentEdit,commentList} from './comment'
import {faqCreate,faqEdit,faqList} from './faq'
import {shippingCreate,shippingEdit,shippingList} from './shipping'
import {storeInfoCreate,storeInfoEdit,storeInfoList} from './storeInfo'
import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { Login, Layout } from "../../react-admin-demo-js/layout";
import  authProvider  from "../../react-admin-demo-js/authProvider";
import { Dashboard } from "../../react-admin-demo-js/dashboard";

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: `Bearer breakTheKeyboard`
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider('http://localhost:5000',httpClient);


const Administrator = () => (

    <Admin dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    >
      
           <Resource name="user" list={UserList} edit={userEdit} create={userCreate}/>
           <Resource name="product" list={productList} edit={productEdit} create={productCreate}/>
           <Resource name="blog" list={blogList} edit={blogEdit} create={blogCreate}/>
           <Resource name="comment" list={commentList} edit={commentEdit} create={commentCreate}/>
           <Resource name="faq" list={faqList} edit={faqEdit} create={faqCreate}/>
           <Resource name="shipping" list={shippingList} edit={shippingEdit} create={shippingCreate}/>
           <Resource name="storeInfo" list={storeInfoList} edit={storeInfoEdit} create={storeInfoCreate}/>
           <Resource name="dashboard"/>  
    </Admin>
    
);


export default Administrator;