<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2">DANH SÁCH TIN TỨC</h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm tin tức
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search....">
                        <button class="btn btn-success input-group-text" style="width: 120px;">Tìm kiếm</button>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="bg-primary text-light text-nowrap">
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tiêu Đề</th>
                                    <th class="text-center">Nội Dung</th>
                                    <th class="text-center">Hình Ảnh</th>
                                    <th class="text-center">Tin Nổi Bật</th>
                                    <th class="text-center">Trạng Thái</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in list_tin_tuc" :key="index">
                                    <tr class="">
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-wrap">{{ item.tieu_de }}</td>
                                        <td class="align-middle text-center" style="width: 100px;">
                                            <i class="fa-solid fa-circle-info fa-2x" data-bs-toggle="modal"
                                                data-bs-target="#chiTietModal"
                                                v-on:click="Object.assign(chi_tiet_tin_tuc, item)"></i>
                                        </td>
                                        <td class="align-middle text-center text-nowrap" style="width: 250px;">
                                            <img :src="item.hinh_anh" alt="Hình Ảnh" class="img-fluid rounded"
                                                style="height: 100px; object-fit: cover; width: 100%;">
                                        </td>
                                        <td class="align-middle text-center text-nowrap" style="width: 100px;">
                                            <i v-if="item.is_noi_bat == 1"
                                                class="fa-solid fa-fire fa-2x text-danger"></i>
                                            <i v-else class="fa-solid fa-file fa-2x text-secondary"></i>
                                        </td>
                                        <td @click="doiTrangThai(item)" class="align-middle text-center text-nowrap" style="width: 140px;">
                                            <button v-if="item.tinh_trang == 1" class="btn btn-success w-100"
                                                style="color: white;">
                                                Hiển Thị
                                            </button>
                                            <button v-else class="btn btn-warning w-100" style="color: white;">
                                                Tạm Tắt
                                            </button>
                                        </td>
                                        <td class="align-middle text-center text-nowrap" style="width: 150px;">
                                            <button class="btn btn-info text-light me-2" data-bs-toggle="modal"
                                                data-bs-target="#updateModal"
                                                v-on:click="Object.assign(edit_tin_tuc, item)">
                                                Cập nhật
                                            </button>
                                            <button class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"
                                                v-on:click="Object.assign(del_tin_tuc, item)">
                                                Xóa Bỏ
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
    </div>

    <!-- Modal Thêm Mới -->

    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Tin Tức Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tiêu Đề</label>
                        <input v-model="create_tin_tuc.tieu_de" type="text" class="form-control mt-1" />
                    </div>
                    <div class="mb-2">
                        <label>Nội Dung</label>
                        <textarea v-model="create_tin_tuc.noi_dung" class="form-control mt-1" rows="3"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input v-model="create_tin_tuc.hinh_anh" type="text" class="form-control mt-1" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="mb-2">
                                <label>Tin Nổi Bật</label>
                                <select class="form-select mt-1" v-model="create_tin_tuc.is_noi_bat">
                                    <option value="0">Không</option>
                                    <option value="1">Có</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="mb-2">
                                <label>Trạng Thái</label>
                                <select class="form-select mt-1" v-model="create_tin_tuc.tinh_trang">
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="themTinTuc()">
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
                    <h5 class="modal-title">Cập Nhật Thông Tin Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tiêu Đề</label>
                        <input v-model="edit_tin_tuc.tieu_de" type="text" class="form-control mt-1" />
                    </div>
                    <div class="mb-2">
                        <label>Nội Dung</label>
                        <textarea v-model="edit_tin_tuc.noi_dung" class="form-control mt-1" rows="3"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input v-model="edit_tin_tuc.hinh_anh" type="text" class="form-control mt-1" />
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="mb-2">
                                <label>Tin Nổi Bật</label>
                                <select class="form-select mt-1" v-model="edit_tin_tuc.is_noi_bat">
                                    <option value="0">Không</option>
                                    <option value="1">Có</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="mb-2">
                                <label>Trạng Thái</label>
                                <select class="form-select mt-1" v-model="edit_tin_tuc.tinh_trang">
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" v-on:click="capNhatTinTuc()">
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
                    <h5 class="modal-title">Xóa Tin Tức</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-warning alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">Bạn có chắc chắn muốn xóa tin
                                    <b> {{ del_tin_tuc.tieu_de }} </b>
                                    này không?
                                </h6>
                                <div class="text-dark"><b>Lưu ý: </b>Điều này không thể hoàn tác khi nhấn xác nhận</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Hủy Bỏ
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaTinTuc()">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal chi tiết -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chi Tiết Nội Dung Tin</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 text-center mb-3">
                            <img :src="chi_tiet_tin_tuc.hinh_anh" alt="Hình Ảnh" class="img-fluid rounded"
                                style="max-height: 300px;">
                        </div>
                        <div class="col-lg-11 mx-auto">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="text-warning ">
                                        <i v-if="chi_tiet_tin_tuc.is_noi_bat == 1"
                                            class="fa-solid fa-fire text-danger"></i>
                                        <i v-else class="fa-solid fa-file text-secondary"></i>
                                        {{ chi_tiet_tin_tuc.tieu_de }}
                                    </h4>
                                    <p class="mb-0">
                                        <i class="fa-solid fa-calendar-days ms-1 me-2"></i>
                                        {{ extractDateTime(chi_tiet_tin_tuc.created_at).day }} -
                                        {{ extractDateTime(chi_tiet_tin_tuc.created_at).time }}
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="">
                                        Nội Dung
                                    </h4>
                                    <p class="mb-0">
                                        {{ chi_tiet_tin_tuc.noi_dung }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
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
            list_tin_tuc: [],
            create_tin_tuc: {
                tieu_de: '',
                hinh_anh: '',
                noi_dung: '',
                is_noi_bat: 0,
                tinh_trang: 1,
            },
            edit_tin_tuc: {},
            del_tin_tuc: {},
            chi_tiet_tin_tuc: {},
        }
    },
    mounted() {
        this.getListTinTuc();
    },
    methods: {
        extractDateTime(isoString) {
            const date = new Date(isoString);
            const time = date.toLocaleTimeString('vi-VN', { hour12: false });
            const day = date.toLocaleDateString('vi-VN');
            return { time, day };
        },
        getListTinTuc() {
            axios.get('http://127.0.0.1:8000/api/admin/tin-tuc/get-data')
                .then((res) => {
                    this.list_tin_tuc = res.data.data;
                })
        },
        themTinTuc() {
            axios.post('http://127.0.0.1:8000/api/admin/tin-tuc/add-data', this.create_tin_tuc)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.create_tin_tuc = {
                            tieu_de: '',
                            hinh_anh: '',
                            noi_dung: '',
                            is_noi_bat: 0,
                            tinh_trang: 1,
                        }
                        this.getListTinTuc();
                    } else {
                        alert('Thêm tin thất bại');
                    }
                });
        },
        capNhatTinTuc() {
            axios.post('http://127.0.0.1:8000/api/admin/tin-tuc/update', this.edit_tin_tuc)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getListTinTuc();
                    } else {
                        alert('Cập nhật tin thất bại');
                    }
                });
        },
        xoaTinTuc() {
            axios.post('http://127.0.0.1:8000/api/admin/tin-tuc/delete', this.del_tin_tuc)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getListTinTuc();
                    } else {
                        alert('Xóa tin thất bại');
                    }
                });
        },
        doiTrangThai(value) {
            axios.post('http://127.0.0.1:8000/api/admin/tin-tuc/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getListTinTuc();
                    } else {
                        alert('Thay đổi trạng thái thất bại');
                    }
                });
        }
    },
}
</script>
<style></style>