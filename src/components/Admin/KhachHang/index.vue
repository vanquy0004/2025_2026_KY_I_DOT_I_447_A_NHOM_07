<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH KHÁCH HÀNG</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm khách hàng
                    </button>
                </div>
                <div class="row mb-2 mt-2">
                    <div class="col-lg-12">
                        <div class="position-relative search-bar-box input-group" style="width: 100%;">
                            <input type="text" class="form-control search-control" placeholder="Tìm Kiếm?">
                            <span class="position-absolute top-50 search-show translate-middle-y"><i
                                    class='bx bx-search'></i></span>
                            <span class="position-absolute top-50 search-close translate-middle-y"><i
                                    class='bx bx-x'></i></span>
                            <button class="btn btn-primary">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th class="text-center">#</th>
                                <th class="text-center">Họ Và Tên</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Số Điện Thoại</th>
                                <th class="text-center">Ngày Sinh</th>
                                <th class="text-center">Kich Hoạt</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in list_khach_hang" :key="index">
                                <tr class="text-nowrap">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ item.ho_va_ten }}</td>
                                    <td class="align-middle">{{ item.email }}</td>
                                    <td class="align-middle text-center">{{ item.so_dien_thoai }}</td>
                                    <td class="align-middle text-center">{{ item.ngay_sinh }}</td>
                                    <td class="align-middle text-center">

                                        <button v-if="item.is_active == 1" class="btn btn-info w-100"
                                            style="color: white;">
                                            Đã Kích Hoạt
                                        </button>
                                        <button v-else class="btn btn-warning w-100" style="color: white;">
                                            Chưa Kích Hoạt
                                        </button>
                                    </td>
                                    <td class="align-middle text-center">

                                        <button v-if="item.is_block == 1" class="btn btn-danger w-100"
                                            style="color: white;">
                                            Đã Khóa
                                        </button>
                                        <button v-else class="btn btn-success w-100" style="color: white;">
                                            Chưa Khóa
                                        </button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-success me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Khách Hàng Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Họ Và Tên</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Mật Khẩu</label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Xác Nhận Mật Khẩu</label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Số Điện Thoại</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Sinh</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Địa Chỉ</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">CCCD</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Ngày Sinh</label>
                            <input type="date" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="themNhanVien()">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Thông Tin Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Họ Và Tên</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Mật Khẩu</label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Xác Nhận Mật Khẩu</label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Số Điện Thoại</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Sinh</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Địa Chỉ</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">CCCD</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Ngày Sinh</label>
                            <input type="date" class="form-control" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa khách hàng
                        <strong>Nguyễn Văn A</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaNhanVien()">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_khach_hang: [],
            create_khach_hang: {
                ho_va_ten: '',
                email: '',
                so_dien_thoai: '',
                password: '',
                ngay_sinh: '',
            },
            edit_khach_hang: {
                ho_va_ten: '',
                email: '',
                so_dien_thoai: '',
                password: '',
                ngay_sinh: '',
            },
            del_khach_hang: {},
        };
    },
    mounted() {
        this.layDataKhachHang();
    },
    methods: {
        layDataKhachHang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang/get-data')
                .then(response => {
                    this.list_khach_hang = response.data.data;
                })
        },
    },
};
</script>

<style></style>
