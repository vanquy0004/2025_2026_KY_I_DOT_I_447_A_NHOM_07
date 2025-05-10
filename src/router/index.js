import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/Test/index.vue')
    },
    {
      path: '/admin',
      component: () => import('../components/Admin/Dashboard/index.vue')
    },
    {
      path: '/admin/the-loai-phim',
      component: () => import('../components/Admin/TheLoaiPhim/index.vue')
    },
    {
      path: '/admin/phong-chieu',
      component: () => import('../components/Admin/PhongChieu/index.vue')
    },
    {
      path: '/admin/dich-vu',
      component: () => import('../components/Admin/DichVu/index.vue')
    },
    {
      path: '/admin/voucher',
      component: () => import('../components/Admin/Voucher/index.vue')
    },
    {
      path: '/admin/nhan-vien',
      component: () => import('../components/Admin/NhanVien/index.vue')
    },
    {
      path: '/admin/phan-quyen',
      component: () => import('../components/Admin/PhanQuyen/index.vue')
    },
    {
      path: '/admin/khach-hang',
      component: () => import('../components/Admin/KhachHang/index.vue')
    },
    {
      path: '/admin/phim',
      component: () => import('../components/Admin/Phim/index.vue')
    },
    {
      path: '/admin/ve',
      component: () => import('../components/Admin/Ve/index.vue')
    },
    {
      path: '/admin/suat-chieu',
      component: () => import('../components/Admin/SuatChieu/index.vue')
    },
    {
      path: '/admin/ghe',
      component: () => import('../components/Admin/Ghe/index.vue')
    },
    {
      path: '/admin/tin-tuc',
      component: () => import('../components/Admin/TinTuc/index.vue')
    },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router