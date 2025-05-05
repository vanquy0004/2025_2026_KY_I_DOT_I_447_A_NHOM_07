<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-body">
                    <h5 class="card-title">Thêm Thể Loại Phim</h5>
                    <hr>
                    <label class="mb-1">Tên thể loại</label>
                    <input v-model="create_the_loai_phim.ten_the_loai" type="text" class="form-control"
                        placeholder="Nhập tên thể loại">
                    <label class="mt-2 mb-1">Slug thể loại</label>
                    <input v-model="create_the_loai_phim.slug_the_loai" type="text" class="form-control"
                        placeholder="Nhập slug thể loại">
                    <label class="mt-2 mb-1">Tình trạng</label>
                    <select v-model="create_the_loai_phim.tinh_trang" class="form-select"
                        aria-label="Default select example">
                        <option selected>Chọn tình trạng</option>
                        <option value="1">Hiển thị</option>
                        <option value="0">Tạm tắt</option>
                    </select>

                    <div class="mt-3 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" @click="themTheLoaiPhim">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-body">
                    <h5 class="card-title">Danh Sách Thể Loại Phim</h5>
                    <hr>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="text-center align-middle">
                                <tr class="bg-primary text-light">
                                    <th class="align-middle text-center">#</th>
                                    <th class="align-middle text-center text-nowrap">Tên thể loại</th>
                                    <th class="align-middle text-center">Slug thể loại</th>
                                    <th class="align-middle text-center">Tình trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in list_the_loai_phim" :key="index">
                                    <td class="align-middle text-center ">{{ index + 1 }}</td>
                                    <td class="align-middle ">{{ item.ten_the_loai }}</td>
                                    <td class="align-middle ">{{ item.slug_the_loai }}</td>
                                    <td @click="doiTrangThai(item)" class="text-center align-middle">
                                        <button v-if="item.tinh_trang == 1" class="btn btn-success" type="button">
                                            <i class="fa-solid fa-square-check"></i>
                                            Hiển thị
                                        </button>
                                        <button v-else class="btn btn-warning" type="button">
                                            <i class="fa-solid fa-square-xmark"></i>
                                            Tạm Tắt
                                        </button>
                                    </td>
                                    <td class="text-nowrap align-middle text-center">
                                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#capNhatModal"
                                            v-on:click="Object.assign(edit_the_loai_phim, item)">Cập Nhật</button>
                                        <button type="button" class="ms-2 btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#xoaModal"
                                            v-on:click="Object.assign(del_the_loai_phim, item)">Xóa</button>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal cập nhật-->
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật thể loại</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="mb-1">Tên thể loại</label>
                    <input v-model="edit_the_loai_phim.ten_the_loai" type="text" class="form-control"
                        placeholder="Nhập tên thể loại">
                    <label class="mt-2 mb-1">Slug thể loại</label>
                    <input v-model="edit_the_loai_phim.slug_the_loai" type="text" class="form-control"
                        placeholder="Nhập slug thể loại">
                    <label class="mt-2 mb-1">Tình trạng</label>
                    <select v-model="edit_the_loai_phim.tinh_trang" class="form-select"
                        aria-label="Default select example">
                        <option selected>Chọn tình trạng</option>
                        <option value="1">Hiển thị</option>
                        <option value="0">Tạm tắt</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="capNhatTheLoai()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
                        nhật</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xóa-->
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa thể loại</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <h6>
                            Bạn có chắc chắn muốn xóa thể loại
                            <b class="text-center text-danger"> {{ del_the_loai_phim.ten_the_loai }}</b> này không?
                        </h6>
                        <i class="fa-solid fa-circle-xmark me-2"></i><b>
                            Điều này sẽ không thể hoàn tác !!.</b>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button @click="xoaTheLoai()" type="button" class="btn btn-danger"
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
            list_the_loai_phim: [],
            create_the_loai_phim: {
                ten_the_loai: '',
                slug_the_loai: '',
                tinh_trang: 1
            },
            edit_the_loai_phim: {},
            del_the_loai_phim: {},
        }
    },
    mounted() {
        this.getTheLoaiPhim();
    },
    methods: {
        getTheLoaiPhim() {
            axios.get('http://localhost:8000/api/admin/the-loai-phim/get-data')
                .then((res) => {
                    this.list_the_loai_phim = res.data.data;
                });
        },
        themTheLoaiPhim() {
            axios.post('http://localhost:8000/api/admin/the-loai-phim/add-data', this.create_the_loai_phim)
                .then((res) => {
                    if (res.data.status) {
                        alert('Thêm thể loại phim thành công');
                        this.create_the_loai_phim = {
                            ten_the_loai: '',
                            slug_the_loai: '',
                            tinh_trang: 1
                        },
                            this.getTheLoaiPhim();
                    } else {
                        alert('Thêm thể loại phim thất bại');
                    }
                });
        },
        capNhatTheLoai() {
            axios.post('http://localhost:8000/api/admin/the-loai-phim/update', this.edit_the_loai_phim)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getTheLoaiPhim();
                    } else {
                        alert('Cập nhật thể loại phim thất bại');
                    }
                });
        },
        xoaTheLoai() {
            axios.post('http://localhost:8000/api/admin/the-loai-phim/delete', this.del_the_loai_phim)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getTheLoaiPhim();
                    } else {
                        alert('Xóa thể loại phim thất bại');
                    }
                });
        },
        doiTrangThai(item) {
            axios.post('http://localhost:8000/api/admin/the-loai-phim/change-status', item)
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        this.getTheLoaiPhim();
                    } else {
                        alert('Cập nhật trạng thái thể loại phim thất bại');
                    }
                });
        }

    }
} 
</script>
<style></style>