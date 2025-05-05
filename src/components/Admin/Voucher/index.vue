<template>
    <div class="row">
        <div class="col-lg-3">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-body">
                    <h5 class="card-title">Thêm Voucher</h5>
                    <hr />
                    <label class="mt-2">Mã Voucher</label>
                    <input v-model="create_voucher.ma_code" class="form-control" type="text" />
                    <label class="mt-2">Thời gian bắt đầu</label>
                    <input v-model="create_voucher.thoi_gian_bat_dau" class="form-control" type="date" />
                    <label class="mt-2">Thời gian kết thúc</label>
                    <input v-model="create_voucher.thoi_gian_ket_thuc" class="form-control" type="date" />
                    <label class="mt-2">Loại giảm</label>
                    <select v-model="create_voucher.loai_giam" class="form-select" aria-label="Default select example">
                        <option selected>Chọn loại giảm</option>
                        <option value="1">Giảm giá</option>
                        <option value="0">Giảm tiền</option>
                    </select>
                    <label class="mt-2">Số giảm giá</label>
                    <input v-model="create_voucher.so_giam_gia" class="form-control" type="text" />
                    <label class="mt-2">Số tiền tối đa</label>
                    <input v-model="create_voucher.so_tien_toi_da" class="form-control" type="text" />
                    <label class="mt-2">Số vé tối thiểu</label>
                    <input v-model="create_voucher.ve_toi_thieu" class="form-control" type="text" />
                    <label class="mt-2">Tình trạng</label>
                    <select v-model="create_voucher.tinh_trang" class="form-select" aria-label="Default select example">
                        <option selected>Chọn tình trạng</option>
                        <option value="1">Hiển thị</option>
                        <option value="0">Tạm tắt</option>
                    </select>
                    <div class="mt-3 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" @click="themVoucher">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-body">
                    <h5 class="card-title">Danh Sách Voucher</h5>
                    <hr />
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="text-center align-middle">
                                <tr class="bg-primary text-light">
                                    <th class="align-middle text-center">#</th>
                                    <th class="align-middle text-center text-nowrap">
                                        Mã Voucher
                                    </th>
                                    <th class="align-middle text-center">Thời gian bắt đầu</th>
                                    <th class="align-middle text-center">Thời gian kết thúc</th>
                                    <th class="align-middle text-center">Loại giảm</th>
                                    <th class="align-middle text-center">Số giảm giá</th>
                                    <th class="align-middle text-center">Số tiền tối đa</th>
                                    <th class="align-middle text-center">Số vé tối thiểu</th>
                                    <th class="align-middle text-center">Tình trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in list_voucher" :key="index">
                                    <td class="align-middle text-center">{{ index + 1 }}</td>
                                    <td class="align-middle text-center">{{ item.ma_code }}</td>
                                    <td class="align-middle text-center">{{ convertDate(item.thoi_gian_bat_dau) }}</td>
                                    <td class="align-middle text-center">{{ convertDate(item.thoi_gian_ket_thuc) }}</td>
                                    <td :class="item.loai_giam == 1 ? 'text-success' : 'text-danger'">{{ item.loai_giam
                                        == 1 ? 'Giảm giá'
                                        : 'Giảm tiền' }}</td>
                                    <td class="text-center align-middle">{{ item.so_giam_gia }}</td>
                                    <td class="text-center align-middle">{{ item.so_tien_toi_da }}</td>
                                    <td class="text-center align-middle">{{ item.ve_toi_thieu }}</td>
                                    <td v-on:click="doiTrangThaiVoucher(item)" class="text-center align-middle">
                                        <button v-if="item.tinh_trang == 1" type="button"
                                            class="btn btn-success btn-sm">
                                            Hiển thị
                                        </button>
                                        <button v-else type="button" class="btn btn-warning btn-sm">
                                            Tạm tắt
                                        </button>
                                    </td>
                                    <td class="text-nowrap align-middle text-center">
                                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#capNhatModal"
                                            v-on:click="Object.assign(edit_voucher, item)">
                                            Cập Nhật
                                        </button>
                                        <button type="button" class="ms-2 btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal" v-on:click="Object.assign(del_voucher, item)">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal cap nhat -->
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="mt-2">Mã Voucher</label>
                    <input v-model="edit_voucher.ma_code" class="form-control" type="text" />
                    <label class="mt-2">Thời gian bắt đầu</label>
                    <input v-model="edit_voucher.thoi_gian_bat_dau" class="form-control" type="date" />
                    <label class="mt-2">Thời gian kết thúc</label>
                    <input v-model="edit_voucher.thoi_gian_ket_thuc" class="form-control" type="date" />
                    <label class="mt-2">Loại giảm</label>
                    <select v-model="edit_voucher.loai_giam" class="form-select" aria-label="Default select example">
                        <option selected>Chọn loại giảm</option>
                        <option value="1">Giảm giá</option>
                        <option value="0">Giảm tiền</option>
                    </select>
                    <label class="mt-2">Số giảm giá</label>
                    <input v-model="edit_voucher.so_giam_gia" class="form-control" type="text" />
                    <label class="mt-2">Số tiền tối đa</label>
                    <input v-model="edit_voucher.so_tien_toi_da" class="form-control" type="text" />
                    <label class="mt-2">Số vé tối thiểu</label>
                    <input v-model="edit_voucher.ve_toi_thieu" class="form-control" type="text" />
                    <label class="mt-2">Tình trạng</label>
                    <select v-model="edit_voucher.tinh_trang" class="form-select" aria-label="Default select example">
                        <option selected>Chọn tình trạng</option>
                        <option value="1">Hiển thị</option>
                        <option value="0">Tạm tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="capNhatVoucher()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                        nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xóa -->
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <h6>
                            Bạn có chắc chắn muốn xóa voucher
                            <b class="text-center text-danger"> {{ del_voucher.ma_code }} </b>
                            này không?
                        </h6>
                        <i class="fa-solid fa-circle-xmark me-2"></i><b>Điều này sẽ không thể hoàn tác !!.</b>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaVoucher()" type="button" class="btn btn-danger"
                        data-bs-dismiss="modal">Xóa</button>
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
            list_voucher: [],
            create_voucher: {
                ma_code: '',
                thoi_gian_bat_dau: '',
                thoi_gian_ket_thuc: '',
                loai_giam: '',
                so_giam_gia: '',
                so_tien_toi_da: '',
                ve_toi_thieu: '',
                tinh_trang: 1
            },
            edit_voucher: {},
            del_voucher: {}
        }
    },
    mounted() {
        this.getVoucher();
    },
    methods: {
        getVoucher() {
            axios.get('http://localhost:8000/api/admin/voucher/get-data')
                .then((res) => {
                    this.list_voucher = res.data.data;
                });
        },
        themVoucher() {
            axios.post('http://localhost:8000/api/admin/voucher/add-data', this.create_voucher)
                .then((res) => {
                    if (res.data.status) {
                        alert('Thêm voucher thành công');
                        this.create_voucher = {
                            ma_code: '',
                            thoi_gian_bat_dau: '',
                            thoi_gian_ket_thuc: '',
                            loai_giam: '',
                            so_giam_gia: '',
                            so_tien_toi_da: '',
                            ve_toi_thieu: '',
                            tinh_trang: 1
                        };
                        this.getVoucher();
                    } else {
                        alert('Thêm voucher thất bại');
                    }
                });
        },
        convertDate(date) {
            return new Date(date).toLocaleDateString('vi-VN');
        },
        capNhatVoucher() {
            axios.post('http://localhost:8000/api/admin/voucher/update', this.edit_voucher)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getVoucher();
                    } else {
                        alert('Cập nhật voucher thất bại');
                    }
                });
        },
        xoaVoucher() {
            axios.post('http://localhost:8000/api/admin/voucher/delete', this.del_voucher)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getVoucher();
                    } else {
                        alert('Xóa voucher thất bại');
                    }
                });
        },
        doiTrangThaiVoucher(item) {
            axios.post('http://localhost:8000/api/admin/voucher/change-status', item)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getVoucher();
                    } else {
                        alert('Cập nhật trạng thái voucher thất bại');
                    }
                });
        }


    }
} 
</script>
<style></style>