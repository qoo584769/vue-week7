<template>
  <div class="container m-auto position-relative">
    <table class="table">
      <thead>
        <th>分類</th>
        <th>產品名稱</th>
        <th>原價</th>
        <th>售價</th>
        <th>是否啟用</th>
        <th>編輯</th>
        <th>刪除</th>
      </thead>
      <tbody>
        <template v-for="item in AdminProductList.data" :key="item.id">
          <tr class="">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td>{{item.origin_price}}</td>
            <td>{{item.price}}</td>
            <td>{{item.is_enabled?'已啟用':'未啟用'}}</td>
            <td><button type="button" class="btn btn-primary"
                @click.prevent="ModalOpen(false,item)">編輯</button>
            </td>
            <td><button type="button" class="btn btn-danger"
                @click.prevent="AdminDelProduct(item.id)">刪除</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click.prevent="ModalOpen(true)">
    建立商品
  </button>

  <!-- Modal -->
  <div class="modal-bg modal-close" ref="ModalDOM">
    <div class="container mt-5 m-auto bg-white">
      <div class="p-4">
        <div class="d-flex">
          <h5 class="flex-grow-1" id="exampleModalLabel">商品建立 / 編輯</h5>
          <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"
            @click.prevent="ModalClose"></button>
        </div>
        <div class="">
          <label for="title" class="form-label">商品名稱</label>
          <input type="text" id="title" class="form-control" placeholder="請輸入商品名稱"
            v-model="TempProduct.data.title">

          <label for="category" class="form-label">商品種類</label>
          <input type="text" id="category" class="form-control" placeholder="請輸入商品種類"
            v-model="TempProduct.data.category">

          <label for="origin_price" class="form-label">打折前價格</label>
          <input type="number" id="origin_price" class="form-control" placeholder="請輸入原價"
            v-model.number="TempProduct.data.origin_price">

          <label for="price" class="form-label">打折後價格</label>
          <input type="number" id="price" class="form-control" placeholder="請輸入售價"
            v-model.number="TempProduct.data.price">

          <label for="unit" class="form-label">單位</label>
          <input type="text" id="unit" class="form-control" placeholder="請輸入商品單位"
            v-model="TempProduct.data.unit">

          <label for="description" class="form-label">商品簡介</label>
          <input type="text" id="description" class="form-control" placeholder="請輸入商品簡介"
            v-model="TempProduct.data.description">

          <label for="content" class="form-label">商品細節</label>
          <input type="text" id="content" class="form-control" placeholder="請輸入商品詳細資訊"
            v-model="TempProduct.data.content">

          <label for="is_enabled" class="form-label">是否啟用</label>
          <input type="text" id="is_enabled" class="form-control" placeholder="是否啟用"
            v-model="TempProduct.data.is_enabled">

        </div>
        <div class="">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            @click.prevent="ModalClose">取消</button>
          <button type="button" class="btn btn-primary" @click.prevent="BtnSubmit">確定</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 無法解決new Modal(DOM元素)問題 -->
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal"
    data-bs-target="#exampleModal" @click.prevent="modal(true)">
    建立商品
  </button> -->
  <!-- Modal -->
  <!-- <div class="modal fade" id="exampleModal" ref="ModalDOM" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="title" class="form-label">商品名稱</label>
            <input type="text" id="title" class="form-control" placeholder="請輸入商品名稱" v-model="TempProduct.data.title">

            <label for="category" class="form-label">商品種類</label>
            <input type="text" id="category" class="form-control" placeholder="請輸入商品種類" v-model="TempProduct.data.category">

            <label for="origin_price" class="form-label">打折前價格</label>
            <input type="number" id="origin_price" class="form-control" placeholder="請輸入原價" v-model.number="TempProduct.data.origin_price">

            <label for="price" class="form-label">打折後價格</label>
            <input type="number" id="price" class="form-control" placeholder="請輸入售價" v-model.number="TempProduct.data.price">

            <label for="unit" class="form-label">單位</label>
            <input type="text" id="unit" class="form-control" placeholder="請輸入商品單位" v-model="TempProduct.data.unit">

            <label for="description" class="form-label">商品簡介</label>
            <input type="text" id="description" class="form-control" placeholder="請輸入商品簡介" v-model="TempProduct.data.description">

            <label for="content" class="form-label">商品細節</label>
            <input type="text" id="content" class="form-control" placeholder="請輸入商品詳細資訊" v-model="TempProduct.data.content">

            <label for="is_enabled" class="form-label">是否啟用</label>
            <input type="text" id="is_enabled" class="form-control" placeholder="是否啟用" v-model="TempProduct.data.is_enabled">

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click.prevent="AdminCreateProduct">確定</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from 'axios';
import {
  reactive,
  ref,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';
// import Modal from 'bootstrap/js/dist/modal';

export default {

  setup() {
    // 抓取modal的DOM元素
    const ModalDOM = ref(null);
    // 判斷要新增還是編輯
    const IsNew = ref(false);
    // 存取後台商品列表的變數
    const AdminProductList = reactive({
      data: [],
    });
      // 存取後台商品列表頁碼的變數
    const AdminPagination = reactive({
      data: {},
    });
      // modal的資料暫存
    const TempProduct = reactive({
      data: {},
    });

    // modal開
    const ModalOpen = (isnew, item) => {
      if (isnew) {
        IsNew.value = isnew;
        TempProduct.data = {};
      } else {
        IsNew.value = isnew;
        TempProduct.data = item;
      }
      ModalDOM.value.classList.add('modal-show');
    };
    // modal關
    const ModalClose = () => {
      ModalDOM.value.classList.remove('modal-show');
    };
    // 取得後台商品列表的API
    const AdminGetProductList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/admin/products?page=${page}`).then((
        res,
      ) => {
        if (res.data.success) {
          AdminProductList.data = res.data.products;
          AdminPagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // 建立商品的API
    const AdminCreateProduct = () => {
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/admin/product`, TempProduct).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetProductList();
          ModalClose();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // 更新商品的API
    const AdminUpdateProduct = () => {
      axios.put(`${process.env.VUE_APP_ALL_APIPATH}/admin/product/${TempProduct.data.id}`,
        TempProduct).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetProductList();
          ModalClose();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // 刪除商品的API
    const AdminDelProduct = (id) => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/admin/product/${id}`).then((
        res,
      ) => {
        if (res.data.success) {
          alert(res.data.message);
          AdminGetProductList();
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // modal的確定按鈕
    const BtnSubmit = () => {
      if (IsNew.value) {
        AdminCreateProduct();
      } else {
        AdminUpdateProduct();
      }
    };
    onMounted(() => {
      AdminGetProductList();
    });

    return {
      AdminDelProduct,
      AdminProductList,
      AdminPagination,
      BtnSubmit,

      TempProduct,
      ModalDOM,

      ModalOpen,
      ModalClose,
    };
  },

};

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  .modal-bg {
    background: rgba(0, 0, 0, 0.8);
  }

  .modal-close {
    display: none;
  }

  .modal-show {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
