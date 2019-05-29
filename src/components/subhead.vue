<template>
    <div class='row'>
        <div class='column page-wrapper-main-column'>
          <div class="row">
            <div class="column"><img src="assets/logo.png" width="320" height="auto"/></div>
            <div class="column mx-3 security">
              <ul>
                <li class="v-align mb-2">
                  <img class="mr-3" src="assets/header-points.png" width="25" height="25">
                  <span>Earn loyalty points &#38; redeem discounts</span>
                </li>
                <li class="v-align mb-2">
                  <img class="mr-3" src="assets/header-transactions.png" /> 
                  <span>Secure Transactions</span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class="row">
            <div class="column search pl-5 py-3 m-100">
              
              <input class="ml-4" type="text" placeholder="What are you looking for?">
              <button type="submit" name="header_search_submit" class="button-reset color-inherit db absolute center-v d-block right-3">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-fw">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path>
                </svg>
                </button>
            </div>
            <div class="column m-100">
              <router-link to="/" class="enquiry-btn v-align my-4 py-2 border-1 border-radius-100 text-center">
                <img class="ml-1 mr-2" src="assets/question_icon.png"/>
                <span>Got a Question?</span>
              </router-link>
            </div>
          </div>
        </div>
        </div>
</template>
